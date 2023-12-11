import ScrollToUp from "@/components/ScrollToUp";

export default async function WriteupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="#ScrollToUp"
      className="w-full flex justify-center p-4"
    >
      {children}
      <ScrollToUp />
    </section>
  );
}
