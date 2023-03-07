import type { AppProps } from "next/app";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexClient = new ConvexReactClient("https://my-url.convex.cloud");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConvexProvider client={convexClient}>
      <Component {...pageProps} />
    </ConvexProvider>
  );
}
