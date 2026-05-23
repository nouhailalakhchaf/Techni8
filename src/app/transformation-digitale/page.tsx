import type { Metadata } from "next";
import TransformationPage from "./TransformationPage";

export const metadata: Metadata = {
  title: "Transformation Digitale",
  description: "Accompagnement strategique et operationnel de la transformation numerique des grandes organisations et institutions.",
};

export default function Page() {
  return <TransformationPage />;
}
