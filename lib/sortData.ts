import { WriteupMetaData } from "./types";

const customDateSortDescending = (
  a: WriteupMetaData,
  b: WriteupMetaData
): number => {
  const dateA =
    a.CreatedOn && new Date(a.CreatedOn.split("-").reverse().join("-"));
  const dateB =
    b.CreatedOn && new Date(b.CreatedOn.split("-").reverse().join("-"));

  if (dateA && dateB) {
    return dateB.getTime() - dateA.getTime();
  } else return 0;
};

const customDateSortAscending = (
  a: WriteupMetaData,
  b: WriteupMetaData
): number => {
  const dateA =
    a.CreatedOn && new Date(a.CreatedOn.split("-").reverse().join("-"));
  const dateB =
    b.CreatedOn && new Date(b.CreatedOn.split("-").reverse().join("-"));

  if (dateA && dateB) {
    return dateA.getTime() - dateB.getTime();
  } else return 0;
};

export const SortByDate = (value: string, data: WriteupMetaData[]) => {
  if (value === "latest") {
    return data.slice().sort(customDateSortDescending);
  }

  if (value === "oldest") {
    return data.slice().sort(customDateSortAscending);
  }
};

const sortByTitleAscending = (
  a: WriteupMetaData,
  b: WriteupMetaData
): number => {
  if (a.Title && b.Title) {
    return a.Title.localeCompare(b.Title);
  } else return 0;
};

const sortByTitleDescending = (
  a: WriteupMetaData,
  b: WriteupMetaData
): number => {
  if (a.Title && b.Title) {
    return b.Title.localeCompare(a.Title);
  } else return 0;
};

export const SortByAlpha = (value: string, data: WriteupMetaData[]) => {
  if (value === "ascending") {
    return data.slice().sort(sortByTitleAscending);
  }

  if (value === "descending") {
    return data.slice().sort(sortByTitleDescending);
  }
};
