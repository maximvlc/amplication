import { JsonValue } from "type-fest";

export type PostCreateInput = {
  content: JsonValue;
  title: string;
};
