import { WriteupMetaData } from "@/lib/types";
import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  Metadata: WriteupMetaData;
};

const MetadataComponent = ({ Metadata }: Props) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Property
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Title
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {Metadata.Title}
            </td>
          </tr>

          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Platform
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {Metadata.Platform}
            </td>
          </tr>

          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Type
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {Metadata.Type}
            </td>
          </tr>

          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Difficulty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {Metadata.Difficulty}
            </td>
          </tr>

          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Tags
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {Metadata.tags
                ? Metadata.tags?.map((tag) => (
                    <Badge key={tag} className="mx-2">
                      {tag}
                    </Badge>
                  ))
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MetadataComponent;
