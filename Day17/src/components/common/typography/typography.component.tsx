

import { ReactElement } from "react"

export const Heading1 = ({ children }: any) => {
  return (
    <>
      <h1 className="text-teal-500 text-2xl">{children}</h1>
    </>
  );
};




// Here it receives the values from the index.tsx(landing page)
interface Head2Props {
    value?: string | ReactElement  
    className?: string | null | undefined
    children?: any
}

// Here it receives the values from interface Head!Props
export const Heading2=({value,className,children}:Head2Props)=>{
        return (
            <>
            <h1 className={`${className}`}>
            {/* {value} {children}            => we can add both vlaues and children */}
            {value ? value : children}
            </h1>
            </>
        )
}


interface Head3Props{
    value?:string | ReactElement
    className?:string | null | undefined
    children?:any
}
export const Heading3=({value,className,children}:Head3Props)=>{
    return(
        <>
            <h2 className={`${className}`}>
                {value} {children}
            </h2>
        </>
    )
}