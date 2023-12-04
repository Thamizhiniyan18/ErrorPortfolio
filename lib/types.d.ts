import {
  Endpoints,
  GetResponseTypeFromEndpointMethod,
  GetResponseDataTypeFromEndpointMethod,
} from "@octokit/types";
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });

type WriteupsRepository = GetResponseTypeFromEndpointMethod<
  typeof octokit.rest.repos.getContent
>;

type WriteupsRepositoryData = {
  type: "dir";
  size: number;
  name: string;
  path: string;
  content?: string | undefined;
  sha: string;
  url: string;
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
  _links: {};
}[];

type WriteupsRepositoryFileTree = {
  tree: [
    {
      path: string;
    }
  ];
};

type WriteupMetaData = {
  Platform: string | null;
  Difficulty: string | null;
  Status: string | null;
  Type: string | null;
  Title: string | null;
  Category: string | null;
  tags: string | null;
  CreatedOn: string | null;
};
