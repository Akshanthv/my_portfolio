import { TenantProvider } from "./components/TenantProvider";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Marquee from "./components/Marquee";
import Approach from "./sections/Approach";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    /* Work / Stack / Contact stay server components — they're passed through
       as children rather than imported inside the client provider. */
    <TenantProvider>
      <Hero />
      <Work />
      <Marquee />
      <Approach />
      <Stack />
      <Contact />
    </TenantProvider>
  );
}
