import { MetaTag } from "@/lib/types";
import { expect, test } from "vitest";
import { HttpClient } from "../utils/http";
import { IntegrationHarness } from "../utils/integration";

test("retrieve the metatags for a URL", async (ctx) => {
  const h = new IntegrationHarness(ctx);

  const http = new HttpClient({
    baseUrl: h.baseUrl,
  });

  const { status, data: metatags } = await http.get<MetaTag>({
    path: `/metatags`,
    query: {
      url: "https://dub.co",
    },
  });

  expect(status).toEqual(200);
  expect(metatags).toMatchObject({
    title: "Dub.co - Link Management for Modern Marketing Teams",
    description:
      "Dub.co is the open-source link management infrastructure for modern marketing teams to create, share, and track short links.",
    image: "https://assets.dub.co/thumbnail.jpg",
  });
});