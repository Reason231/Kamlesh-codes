import { ReactElement } from "react"

// Here it receives the values from the index.tsx(landing page)
interface Head1Props {
    value?: string | ReactElement  
    className?: string | null | undefined
    children?: any
}

// Here it receives the values from interface Head!Props
export const Heading1=({value,className,children}:Head1Props)=>{
        return (
            <>
            <h1 className={`${className}`}>
            {/* {value} {children}            => we can add both vlaues and children */}
            {value ? value : children}
            </h1>
            </>
        )
}


interface Head2Props{
    value?:string | ReactElement
    className?:string | null | undefined
    children?:any
}
export const Heading2=({value,className,children}:Head2Props)=>{
    return(
        <>
            <h2 className={`${className}`}>
                {value}
            </h2>
        </>
    )
}