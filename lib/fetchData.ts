import { Octokit } from "octokit";
import { WriteupsRepository, WriteupsRepositoryData } from "./types";
import { OctokitResponse } from "@octokit/types";
import matter from "gray-matter";

const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });
const owner: string = "Thamizhiniyan18";

export async function getWriteupsMetadata() {
  const writeupsRepository: WriteupsRepository =
    await octokit.rest.repos.getContent({
      owner,
      repo: "Writeups",
      path: "",
    });

  if (!(writeupsRepository.data instanceof Array))
    throw "Counld not fetch list of files from Thamizhiniyan18/Writeups";

  const writeupsMarkdownFilesURLs: string[] = [];

  writeupsRepository.data.filter((folder) => {
    if (
      folder.type === "dir" &&
      !folder.name.startsWith(".") &&
      !folder.name.startsWith("_")
    ) {
      writeupsMarkdownFilesURLs.push(
        `https://raw.githubusercontent.com/${owner}/Writeups/main/${folder.path}/${folder.name}.md`
      );
    }
  });

  const writeupsMarkdownFilesMetaData = [];

  writeupsMarkdownFilesURLs.forEach(async (url) => {
    try {
      const response = await fetch(url);

      if (response.status !== 200) throw "Could not fetch the Markdown file";

      const rawMarkdown = await response.text();

      const data = matter(rawMarkdown);

      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  });

  //   const templates = writeupsRepositoryFolders.map((x) => ({
  //     name: x.name,
  //     path: x.path,
  //     logoUrl: null,
  //     summary:
  //       "This is a meta package of cosmos-sdk-based docker images and configuration meant to make deploying onto Akash easy and standardized across cosmos.",
  //     repoName: "cosmos-omnibus",
  //     repoOwner: "ovrclk",
  //   }));
}
