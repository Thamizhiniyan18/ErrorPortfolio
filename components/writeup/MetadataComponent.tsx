import { WriteupMetaData } from "@/lib/types";
import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  Metadata: WriteupMetaData;
};

const MetadataComponent = ({ Metadata }: Props) => {
  return (
    <>
      <p className="tracking-widest">TITLE: {Metadata.Title?.toUpperCase()}</p>
      <p className="tracking-widest">
        PLATFORM: {Metadata.Platform?.toUpperCase()}
      </p>
      <p className="tracking-widest">TYPE: {Metadata.Type?.toUpperCase()}</p>
      <p className="tracking-widest">
        DIFFICULTY: {Metadata.Difficulty?.toUpperCase()}
      </p>
      <p className="flex items-center">
        TAGS:{" "}
        {Metadata.tags?.map((tag) => (
          <Badge key={tag} className="mx-2">
            {tag}
          </Badge>
        ))}
      </p>
    </>
  );
};

export default MetadataComponent;
