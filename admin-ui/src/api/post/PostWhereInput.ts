import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  content?: JsonNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
};
