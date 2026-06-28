import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ItemDetailList } from "@/components/ItemDetailList";
import { CtaBand } from "@/components/CtaBand";
import { spaces } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spaces — Flexi Desks, Private Offices & Meeting Rooms in Dubai",
  description:
    "Premium, flexible workspaces in the heart of Dubai — flexi desks, fully-furnished private offices, modern meeting rooms, and virtual offices, all with Ejari for licensing.",
};

export default function SpacesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Spaces"
        title="Flexible spaces, powerful possibilities"
        intro="Whether you need a hot desk, a private office for your team, or just a prestigious address, our workspaces are designed to grow with your business — fully serviced and move-in ready."
      />

      <ItemDetailList items={spaces} />

      <CtaBand />
    </>
  );
}
