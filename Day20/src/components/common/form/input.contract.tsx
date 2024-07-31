
export enum INPUT_TYPE{
    TEXT="text",
    NUMBER="number",
    EMAIL="email",
    PASSWORD="password",
    ADDRESS="address",
    ROLE = "ROLE",
    URL="url"
}

export interface ITextInputComponent{
    type:INPUT_TYPE,     // here the type value can be any like it can be text, number , email or pw
    name:string,
    defaultValue?:string,
    control:any,
    msg?:string | undefined | null
}

export interface SelectOption{
    label:string,
    value:string
}

export interface ISelectProps{
    options:Array<SelectOption>,
    name:string,
    control:any,
    msg?:string | undefined | null,
    defaultValue?:string,
    multiple?:boolean
    
}

export interface IFileInputComponent{
    name:string,
    setValue:any
    msg?:string | undefined | null
}