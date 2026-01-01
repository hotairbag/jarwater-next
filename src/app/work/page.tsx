import { Portfolio } from "@/components/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Jarwater Motion Studio",
  description: "Selected motion design works and portfolio pieces.",
};

export default function WorkPage() {
  return <Portfolio />;
}
