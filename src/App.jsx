import Children from "./components/Children/children";
import HeroSection from "./components/Hero Section/herosection";
import NewProducts from "./components/New Products/newproducts";

export default function App() {

  return (
    <>
      <HeroSection />
      <NewProducts />
      <Children>
        Hello
      </Children>
    </>
  )
}