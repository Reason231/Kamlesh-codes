import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
export const HomePageBanner = () => {
  // state hook maintains the state

  const [bannerData, setBannerData] = useState([]); // it sets the default value when we get the banner from the api
  let [loading, setLoading] = useState(true); // true lekhyo vane banner dekhaudaina ra Loading... dekhauncha
  // setLoading(false)                            // can't do this cause it will re-render and we will be in the loop

  // // after renders i.e effect hook can be written in mulitple methods
  // useEffect(() =>{
  //     return()=>{
  //         console.log("I am always called whenver any state/props updates/ changes/create and we dont use this")
  //     }
  // })

  const getBanners = async () => {
    try {
      const response = { data: { result: [], meta: null, message: "" } };
      setBannerData(response.data.result);
      setLoading(false);
    } catch (exception) {
    } finally {
    }
  };
  useEffect(() => {
    // return() =>{
    //     console.log("I am only called once when component is loaded")
    //     setLoading(false)

    // }

    getBanners();
  }, []);

  useEffect(() => {
    return () => {
      console.log("I am only called when the loading state is updated");
    };
  }, [bannerData, loading]);

  return (
    <>
      <div className="flex items justify-end w-screen h-[25vw] relative p-4">
        <div className="h-9/12 w-[100vw] midmobile:w-[100vw] midmobile:h-[25vh] midmobile:mt-[-13%] midmobile:z-10 largelaptops:w-[73vw] largelaptops:mr-2 largelaptops:h-[55.7vh] largelaptops:mt-0.5">
          {
            // if loading is true then it will show nothing but upper we have written false so it displays banner
            loading ? (
              <>Loading...</>
            ) : (
              <>
                <Carousel slide={true}>
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/1ec79e4f-75b4-4be4-9b5d-50f0795c6cdc.jpg"
                    alt="..."
                  />
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/502fbdbd-d085-423d-8b5f-187ddfa7c7c6.jpg_1200x1200.jpg"
                    alt="..."
                  />
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/d53b0c3c-6c7a-453e-9ef2-de5cf9aefbc1.jpg"
                    alt="..."
                  />
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/8219dc4b-18ec-481d-a34c-ff76d36ee6f8.jpg"
                    alt="..."
                  />
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/8219dc4b-18ec-481d-a34c-ff76d36ee6f8.jpg"
                    alt="..."
                  />
                </Carousel>
              </>
            )
          }
        </div>
      </div>
    </>
  );
};
