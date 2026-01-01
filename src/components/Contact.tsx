"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ContactFormState } from "@/types";
import { sendContactEmail } from "@/app/actions/contact";

export const Contact = () => {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const budgetOptions = [
    { value: "", label: t("budgetPlaceholder") },
    { value: "under5k", label: t("budgetOption1") },
    { value: "5k-15k", label: t("budgetOption2") },
    { value: "15k-50k", label: t("budgetOption3") },
    { value: "50k+", label: t("budgetOption4") },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || t("errorMessage"));
    }
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 text-center">
          {t("successTitle")}
        </h2>
        <p className="text-zinc-400 max-w-md text-center mb-8">
          {t("successMessage")}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-indigo-400 border-b border-indigo-400 pb-1 hover:text-white hover:border-white transition-colors"
        >
          {t("submit")}
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
      <div className="mb-16">
        <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-4 block">
          {t("label")}
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
          {t("title")}{" "}
          <span className="italic text-zinc-500">{t("titleHighlight")}</span>
        </h2>
        <p className="text-zinc-400 text-lg font-light">
          {t("subtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              {t("nameLabel")}
            </label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800"
              placeholder={t("namePlaceholder")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              {t("emailLabel")}
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800"
              placeholder={t("emailPlaceholder")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              {t("companyLabel")}
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800"
              placeholder={t("companyPlaceholder")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              {t("budgetLabel")}
            </label>
            <div className="relative">
              <select
                required
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
              >
                {budgetOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-zinc-900 text-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
            {t("messageLabel")}
          </label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800 resize-none"
            placeholder={t("messagePlaceholder")}
          />
        </div>

        <div className="pt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-zinc-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </button>
          {error && (
            <p className="mt-4 text-red-400 text-sm">{error}</p>
          )}
        </div>
      </form>
    </div>
  );
};
