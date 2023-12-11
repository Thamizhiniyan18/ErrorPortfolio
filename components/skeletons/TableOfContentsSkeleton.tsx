import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const TableOfContentsSkeleton = (props: Props) => {
  const template = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full flex flex-col items-center p-4">
      <h2 className="w-full text-center p-2 border-none">Table of Contents</h2>
      {template.map((item) => (
        <Skeleton
          key={`toc_skeleton_${item}`}
          className="w-full h-6 rounded-md my-2"
        />
      ))}
    </div>
  );
};

export default TableOfContentsSkeleton;
