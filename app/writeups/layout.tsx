export default async function WriteupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full flex justify-center">{children}</section>;
}
