import { Spinner } from "flowbite-react";

const LoadingComponent=({size="md"})=>{
    return(
        <>
            <div className="text-center">
        <Spinner size={size} aria-label="Center-aligned spinner example" />
      </div>
        </>
    )
}

export default LoadingComponent