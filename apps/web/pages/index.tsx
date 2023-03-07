import { useQuery } from "@myapp/convex";
import { generateWord } from "@myapp/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const convexWord = useQuery("speak");
  const [clientWord, setClientWord] = useState("");
  useEffect(() => {
    setClientWord(generateWord());
  });
  return (
    <>
      Convex Word: {convexWord || "loading..."}
      <br />
      Client Word: {clientWord || "loading..."}
    </>
  );
}
