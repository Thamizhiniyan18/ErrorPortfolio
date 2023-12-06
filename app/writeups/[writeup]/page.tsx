import {
  getWriteup,
  getWriteupMetadata,
  getWriteupsMetadata,
} from "@/lib/fetchData";
import React, { Suspense } from "react";
import { GrayMatterFile } from "gray-matter";
import { WriteupMetaData } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import MetadataComponent from "@/components/writeup/MetadataComponent";
import { MDXRemote } from "next-mdx-remote/rsc";
import CustomMDX from "@/components/mdx-remote";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  params: { writeup: string };
};

export async function generateStaticParams() {
  const writeupsMetadata: (WriteupMetaData | undefined)[] =
    await getWriteupsMetadata();

  return writeupsMetadata.map((writeup) => ({ writeup: writeup?.Title }));
}

export async function generateMetadata({ params }: Props) {
  const writeupMetadata: WriteupMetaData | undefined = await getWriteupMetadata(
    params.writeup
  );

  const title = writeupMetadata?.Title;
  const description = `${writeupMetadata?.Title} writeup from ${writeupMetadata?.Platform} by Thamizhiniyan C S`;
  const url = `https://thamizhiniyancs.vercel.app/writeups/${title}`;
  const date = writeupMetadata?.CreatedOn;

  return {
    title,
    description,
    metadataBase: new URL("https://thamizhiniyancs.vercel.app/"),
    openGraph: {
      title,
      description,
      url,
      siteName: "Thamizhiniyan C S",
      locale: "en_US",
      type: "article",
      publishedTime: date,
      modifiedTime: date,
      // images: ogImages,
      authors: "Thamizhiniyan C S",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: ogImages,
    },
  };
}

const page = async ({ params }: Props) => {
  const WriteupData: GrayMatterFile<string> | undefined = await getWriteup(
    params.writeup
  );

  const Metadata: WriteupMetaData | undefined = WriteupData && WriteupData.data;

  const Content: string | undefined = WriteupData && WriteupData.content;

  return (
    <div className="w-screen flex">
      <section className="fixed w-[300px] xl:w-[400px] h-[100vh-100px]">
        <ScrollArea>
          <h2 className="w-full text-center p-2 border-none">
            Table of Contents
          </h2>
        </ScrollArea>
      </section>
      <Separator orientation="vertical" className="ml-[300px] xl:ml-[400px]" />
      <section className="w-[calc(100%-300px)] xl:w-[calc(100%-500px)] min-h-[100vh-100px] p-2">
        <Separator orientation="horizontal" />
        {Metadata && <MetadataComponent Metadata={Metadata} />}
        <Separator orientation="horizontal" />
        <Suspense fallback={<h1>Loading ..... !!!!</h1>}>
          {Content && <CustomMDX source={Content} />}
        </Suspense>
      </section>
    </div>
  );
};

export default page;
