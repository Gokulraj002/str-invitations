import { DesignDetail } from "@/components/ui/DesignDetail";
import { designs, getById } from "@/data/designs";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return designs
    .filter((d) => d.category === "invitation-websites" && d.occasion)
    .map((d) => ({ occasion: d.occasion as string, designId: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ designId: string }> }) {
  const { designId } = await params;
  const d = getById(designId);
  if (!d) return {};
  return { title: d.title, description: d.description };
}

export default async function Page({ params }: { params: Promise<{ occasion: string; designId: string }> }) {
  const { designId } = await params;
  const d = getById(designId);
  if (!d) notFound();
  return <DesignDetail designId={designId} />;
}
