import { Carousel } from "flowbite-react"
import { useEffect, useState } from "react"
export const HomePageBanner=()=>{
    
    // state hook maintains the state

    const [bannerData, setBannerData]=useState([])   // it sets the default value when we get the banner from the api
    let [loading , setLoading] = useState(true)    // true lekhyo vane banner dekhaudaina ra Loading... dekhauncha
    // setLoading(false)                            // can't do this cause it will re-render and we will be in the loop


    // // after renders i.e effect hook can be written in mulitple methods
    // useEffect(() =>{
    //     return()=>{
    //         console.log("I am always called whenver any state/props updates/ changes/create and we dont use this")
    //     }
    // })


    const getBanners = async() =>{
        try{
            const response = {data: {result:[] , meta:null, message:""}}
            setBannerData(response.data.result)
            setLoading(false)
        }
        catch(exception){

        }
        finally{

        }
    }
    useEffect(()=>{
            // return() =>{
            //     console.log("I am only called once when component is loaded")
            //     setLoading(false)

            // }

            getBanners()
    },[])

    useEffect(()=>{
            return() =>{
                console.log("I am only called when the loading state is updated")
            }
            },[bannerData,loading])

    return(
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-9">
        {                                         // if loading is true then it will show nothing but upper we have written false so it displays banner
            loading ? <>Loading...</> : <>               
               <Carousel slide={true}>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
            </>
        }

    </div>
        </>
    )
}