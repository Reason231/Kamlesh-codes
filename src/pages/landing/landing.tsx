// Notes
// should be in function based . Not class based
// components name should be in capital
// components should always be returned in small bracket () because it makes the single line

import { Heading1, Heading2 } from "../../components/common/typography/typography.components.tsx";
import { HomePageBanner } from "../../components/banner/banner.components.tsx";
import "./index.css";
import { Homenavbar } from "../../components/common/navbar/navbar.components.tsx";
import { Homesidebar } from "../../components/sidebar/sidebar.components.tsx";
import { Homecategory } from "../../components/category/category.components.tsx";
import { HomeproductCard } from "../../components/common/card/single-card.component.tsx";
import { HomeFooter } from "../../components/common/footer/footer.components.tsx";
const LandingPage = () => {
  
  return (
    <>
    <Homenavbar />
    <HomePageBanner />
    <Homesidebar />
    <Homecategory/>
    <HomeproductCard />
    <HomeFooter />
      
      {/* <Heading1
        className="text-red-600 z-20 hover:animate-bounce"
        value="Heading Value Text"
      >
        Child text
      </Heading1>
      <Heading2 className="text-blue-700" value="Heading 2"></Heading2>

      <p>This is landing page</p>
      <hr></hr>
      <p className="text-1xl font-bold underline text-red-400">Hello world!</p> */}

    </>
  );
};

export default LandingPage;
