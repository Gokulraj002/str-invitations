import { site } from "@/data/site";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function designEnquiryMessage(opts: { designId: string; title: string; categoryTitle: string }) {
  return `Hi STR Invitations, I am interested in ${opts.categoryTitle} — "${opts.title}" (Design ID: ${opts.designId}). Please share the details and pricing.`;
}

export function generalEnquiryMessage() {
  return `Hi STR Invitations, I would like to know more about your invitation designs and pricing.`;
}
