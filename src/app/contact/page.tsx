import { Contact } from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jarwater Motion Studio",
  description: "Start a project with Jarwater Motion Studio.",
};

export default function ContactPage() {
  return <Contact />;
}
