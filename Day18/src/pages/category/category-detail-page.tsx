import { HomePageTitle } from "../../components/common/title/home-title.component";
import { SingleProductComponent } from "../../components/product/single-product.component";
import { CardWithImage } from "../../components/common/card/single-card.component";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const CategoryDetailPage = () => {
  // slug receiving from the url
  const params = useParams();

  // filter receiving from the url
  const [query, setQuery] = useSearchParams();

  const handleFilterClick = (price:string) => {
    setQuery({
      price: price,
    });
  };
1
  useEffect(() => {
    console.log(query.get("price"));
  }, [query]);




  return (
    <>

      <HomePageTitle
        title={`Category Details of ${params.slug}`}
        url={undefined}
      />


      {/* Click this button to get the filter in the url */}
      <button className="mr-3" onClick={(e)=>{
        e.preventDefault()
        handleFilterClick('5000-25000')
      }}>5000-25000</button>

      <button className="mr-3" onClick={(e)=>{
        e.preventDefault()
        handleFilterClick('25000-50000')
      }}>25000-50000</button>

      <div className="flex flex-col flex-wrap sm:flex sm:flex-row sm:flex-wrap md:flex md:flex-row md:flex-wrap mx-15 py-5 gap-2 mt-5">
        {[...Array(4)].map((_, i: number) => (
          <CardWithImage
            key={i}
            title="Gaming Monitor"
            image="https://static-01.daraz.com.np/p/b5dc82d8f3665e69e2332477a8bc8878.jpg_300x0q75.webp"
            url="category/gaming-monitors"
          />
        ))}
      </div>
    </>
  );
};
