import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const TableOfContentsSkeleton = (props: Props) => {
  const template = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full flex flex-col items-center">
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
