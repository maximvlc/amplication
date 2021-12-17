import { JsonValue } from "type-fest";

export type PostUpdateInput = {
  content?: JsonValue;
  title?: string;
};
