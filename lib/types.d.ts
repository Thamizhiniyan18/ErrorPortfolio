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

type WriteupsRepositoryFileTree = {
  tree: [
    {
      path: string;
    }
  ];
};

type WriteupMetaData = {
  Platform?: string;
  Difficulty?: string;
  Status?: string;
  Type?: string;
  Title?: string;
  Category?: string;
  tags?: string[];
  CreatedOn?: string;
};

type MarkdownFileURL = { name: string; url: string };
