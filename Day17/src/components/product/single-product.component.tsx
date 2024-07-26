import { Card } from "flowbite-react";
export const SingleProductComponent=()=>{
    return(
        <>
              
        <Card
          className="max-w-screen"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://static-01.daraz.com.np/p/36cfdbf067af059393fd10c8d391319f.png_300x0q75.webp"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Smart Watch
          </h5>
          <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
        </Card>

               </>
    )
}