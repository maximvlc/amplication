import { JsonValue } from "type-fest";

export type Post = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  title: string;
  updatedAt: Date;
};
