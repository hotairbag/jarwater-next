"use client";

import { useState } from "react";
import { ContactFormState, BUDGET_RANGES } from "@/types";

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 text-center">
          Message Received.
        </h2>
        <p className="text-zinc-400 max-w-md text-center mb-8">
          Thank you for reaching out to Jarwater. We are reviewing your project
          details and will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-indigo-400 border-b border-indigo-400 pb-1 hover:text-white hover:border-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
          Start a Project
        </h2>
        <p className="text-zinc-400 text-lg font-light">
          Tell us about your vision. We handle projects from concept to final
          render.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800"
              placeholder="name@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800"
              placeholder="Company Name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              Budget (USD)
            </label>
            <div className="relative">
              <select
                required
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
              >
                {BUDGET_RANGES.map((range) => (
                  <option
                    key={range}
                    value={range}
                    className="bg-zinc-900 text-white"
                  >
                    {range}
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
            Project Details
          </label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800 resize-none"
            placeholder="Tell us about the goals, timeline, and vibe..."
          />
        </div>

        <div className="pt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-zinc-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </div>
      </form>
    </div>
  );
};
