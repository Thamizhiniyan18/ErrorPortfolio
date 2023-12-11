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
import CustomMDX from "@/components/mdx-remote";
import TableOfContentsSkeleton from "@/components/skeletons/TableOfContentsSkeleton";
import WriteupTableOfContents from "@/components/writeup/WriteupTableOfContents";

export const revalidate = 43200;

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
    <div className="w-full flex justify-center md:justify-start">
      <Suspense fallback={<TableOfContentsSkeleton />}>
        <WriteupTableOfContents Content={Content} />
      </Suspense>

      <Separator
        orientation="vertical"
        className="hidden lg:block lg:ml-[300px] xl:ml-[400px]"
      />

      <section
        id="ScrollToTop"
        className="w-full max-w-full lg:w-[670px] p-0 xl:w-[900px] min-h-[100vh-100px] md:p-4 text-justify lg:max-w-[900px]"
      >
        <Separator orientation="horizontal" />

        {Metadata && <MetadataComponent Metadata={Metadata} />}

        <Separator orientation="horizontal" className="my-4" />

        <Suspense fallback={<h1>Loading ..... !!!!</h1>}>
          <div className="WriteupContent w-full">
            {Content && <CustomMDX source={Content} />}
          </div>
        </Suspense>
      </section>
    </div>
  );
};

export default page;
