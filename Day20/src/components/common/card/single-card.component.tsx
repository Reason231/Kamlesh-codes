import {Card} from "flowbite-react"

export interface CardWihtImageProps{
    image:string,
    title:string,
    url:string
}
export const CardWithImage =({image,title,url}:any)=>{
    return(
        <>
         <Card
          className="max-w-screen"
          imgAlt={title}
          imgSrc={image}
        >
          <a href={url} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
            </a>
          
        </Card>
        </>
    )
}
