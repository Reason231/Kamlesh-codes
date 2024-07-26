import { HomePageBanner } from "../../components/banner/banner.components";
import "./index.css";
import { SingleProductComponent } from "../../components/product/single-product.component";
import { HomePageTitle } from "../../components/common/title/home-title.component";
import { CardWithImage } from "../../components/common/card/single-card.component";



const LandingPage = () => {
  return (
    <>

    {/* Home Page Banner */}
      <HomePageBanner />


      {/* Categoires cards */}
    <HomePageTitle title="Categories" url="/categories" />

      <div className="flex flex-col flex-wrap sm:flex sm:flex-row sm:flex-wrap md:flex md:flex-row md:flex-wrap mx-15 py-5 gap-2 mt-5">
    
      {[...Array(4)].map((_, i: number) => (
          <CardWithImage key={i} title="Gaming Monitor" image="https://static-01.daraz.com.np/p/b5dc82d8f3665e69e2332477a8bc8878.jpg_300x0q75.webp"
          url="category/gaming-monitors"
           />
        ))}      
      </div>



      {/* Products cards */}
      
      <HomePageTitle title="Just For You" url="/products" />
    
      <div className="flex flex-col flex-wrap sm:flex sm:flex-row md:flex-wrap md:flex md:flex-rwo mx-15 py-5 gap-2 mt-5">
        {[...Array(25)].map((_, i: number) => (
          <SingleProductComponent key={i} />
        ))}
      </div>


      {/* Footer  */}
    </>
  );
};

export default LandingPage;
