import { Octokit } from "octokit";
import { MarkdownFileURL, WriteupMetaData, WriteupsRepository } from "./types";
import matter, { GrayMatterFile } from "gray-matter";

// https://www.programcreek.com/typescript/?api=@octokit/rest.Octokit
// https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/Devvortex/Devvortex.md

const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });
const owner: string = "Thamizhiniyan18";

export const getWriteupsRepository = async () => {
  try {
    const data: WriteupsRepository = await octokit.rest.repos.getContent({
      owner,
      repo: "Writeups",
      path: "",
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getMarkdownFilesURLs = async () => {
  try {
    const Repository: WriteupsRepository = await getWriteupsRepository();

    if (!(Repository.data instanceof Array))
      throw "Counld not fetch list of files from Thamizhiniyan18/Writeups";

    const data: MarkdownFileURL[] = [];

    Repository.data.filter((folder) => {
      if (
        folder.type === "dir" &&
        !folder.name.startsWith(".") &&
        !folder.name.startsWith("_")
      ) {
        data.push({
          name: folder.name,
          url: `https://raw.githubusercontent.com/${owner}/Writeups/main/${folder.path}/${folder.name}.md`,
        });
      }
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchRawMarkdownFile = async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.status !== 200) throw "Could not fetch the Markdown file";

    const rawMarkdownFile: string = await response.text();

    return rawMarkdownFile;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWriteupsMetadata = async () => {
  try {
    const MarkdownFilesURLs: MarkdownFileURL[] = await getMarkdownFilesURLs();

    const writeupsMetadata: (WriteupMetaData | undefined)[] = await Promise.all(
      MarkdownFilesURLs.map(async (file) => {
        const response = await getWriteupMetadata(file.name);
        return response;
      })
    );

    return writeupsMetadata;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWriteupMetadata = async (name: string) => {
  try {
    const MarkdownFilesURLs: MarkdownFileURL[] = await getMarkdownFilesURLs();

    const writeupURL: MarkdownFileURL | undefined = MarkdownFilesURLs.find(
      (file) => file.name === name
    );

    if (writeupURL) {
      const response = await fetch(writeupURL.url);

      if (response.status !== 200) throw "Could not fetch the Markdown file";

      const rawMarkdown = await response.text();

      const data = matter(rawMarkdown);

      const metadata: WriteupMetaData = data.data;

      if (metadata.Status != "InProgress") return metadata;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWriteup = async (name: string) => {
  try {
    const MarkdownFilesURLs: MarkdownFileURL[] = await getMarkdownFilesURLs();

    const writeupURL: MarkdownFileURL | undefined = MarkdownFilesURLs.find(
      (file) => file.name === name
    );

    if (writeupURL) {
      const response = await fetch(writeupURL.url);

      if (response.status !== 200) throw "Could not fetch the Markdown file";

      const rawMarkdown = await response.text();

      const data: GrayMatterFile<string> = matter(rawMarkdown);

      const metadata: WriteupMetaData = data.data;

      if (metadata.Status != "InProgress") return data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWriteupTags = async () => {
  try {
    const writeupsMetadata: (WriteupMetaData | undefined)[] =
      await getWriteupsMetadata();

    if (writeupsMetadata) {
      const tags: string[] = [];

      writeupsMetadata.forEach((each) => {
        each?.tags?.forEach((tag) => {
          if (!tags.includes(tag)) tags.push(tag);
        });
      });

      return tags;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
