import { generateWord } from "@myapp/utils";
import { query } from "./_generated/server";

export default query((): string => {
  return generateWord();
});
