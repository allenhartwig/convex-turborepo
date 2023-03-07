import { ConvexProvider, ConvexReactClient } from "convex/react";
import Home from "./Home";

const convexClient = new ConvexReactClient("https://my-url.convex.cloud", {
  unsavedChangesWarning: false,
});

export default function App() {
  return (
    <ConvexProvider client={convexClient}>
      <Home />
    </ConvexProvider>
  );
}
