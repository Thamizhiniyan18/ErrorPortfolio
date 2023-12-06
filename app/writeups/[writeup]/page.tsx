import { getWriteup } from "@/lib/fetchData";
import React from "react";
import { GrayMatterFile } from "gray-matter";
import { WriteupMetaData } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import MetadataComponent from "@/components/writeup/MetadataComponent";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: { writeup: string };
};

const page = async ({ params }: Props) => {
  const WriteupData: GrayMatterFile<string> | undefined = await getWriteup(
    params.writeup
  );

  const Metadata: WriteupMetaData | undefined = WriteupData && WriteupData.data;

  const Content: string | undefined = WriteupData && WriteupData.content;

  return (
    <div className="w-screen flex">
      <section className="w-[300px] xl:w-[400px] h-[100vh-100px]">
        <h2 className="w-full text-center p-2">Table of Contents</h2>
      </section>
      <Separator orientation="vertical" />
      <section className="w-[calc(100%-300px)] xl:w-[calc(100%-500px)] min-h-[100vh-100px] p-2">
        <Separator orientation="horizontal" />
        {Metadata && <MetadataComponent Metadata={Metadata} />}
        <Separator orientation="horizontal" />
        {Content && <MDXRemote source={Content} />}
      </section>
    </div>
  );
};

export default page;
