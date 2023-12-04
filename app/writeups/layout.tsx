import { getWriteupsMetadata } from "@/lib/fetchData";

export default async function WriteupsLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  await getWriteupsMetadata();

  return <section>{children}</section>;
}
