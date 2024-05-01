import Children from "./components/Children/children";
import { Banner, NewProducts, HeroSection } from "./lib/exports";

export default function App() {

  return (
    <>
      <HeroSection />
      <NewProducts />
      <Banner />
      <Children>
        Hello
      </Children>
    </>
  )
}