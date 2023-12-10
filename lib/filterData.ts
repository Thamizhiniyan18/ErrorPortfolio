import { WriteupMetaData } from "./types";

export const filterMetadata = (
  metadata: WriteupMetaData[],
  platform?: string,
  tag?: string
) => {
  const filteredData: WriteupMetaData[] | undefined = metadata.filter(
    (data) => {
      if (platform && tag) {
        return (
          data?.Platform?.toLowerCase() === platform &&
          data?.tags?.includes(tag as string)
        );
      }

      if (platform && !tag) {
        return data?.Platform?.toLowerCase() === platform;
      }

      if (!platform && tag) {
        return data?.tags?.includes(tag as string);
      }
    }
  );

  if (filteredData.length === 0) {
    return undefined;
  } else {
    return filteredData;
  }
};
