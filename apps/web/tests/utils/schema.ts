import { Link, Project, Tag } from "@prisma/client";
import { expect } from "vitest";

export const expectedLink: Partial<Link> = {
  id: expect.any(String),
  key: expect.any(String),
  archived: false,
  expiresAt: null,
  password: null,
  proxy: false,
  title: null,
  description: null,
  image: null,
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  utm_term: null,
  utm_content: null,
  rewrite: false,
  ios: null,
  android: null,
  geo: null,
  publicStats: false,
  clicks: 0,
  lastClicked: null,
  checkDisabled: false,
  tagId: null,
  comments: null,
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
  expiredUrl: null,
};

export const expectedTag: Partial<Tag> = {
  id: expect.any(String),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
};

export const expectedWorkspace: Partial<Project> = {
  logo: null,
  plan: "free",
  stripeId: null,
  usage: 0,
  usageLimit: 1000,
  linksUsage: 0,
  linksLimit: 25,
  domainsLimit: 3,
  tagsLimit: 5,
  usersLimit: 1,
  aiLimit: 10,
  aiUsage: 0,
  monitoringId: null,
  id: expect.any(String),
  billingCycleStart: expect.any(Number),
  inviteCode: expect.any(String),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
};