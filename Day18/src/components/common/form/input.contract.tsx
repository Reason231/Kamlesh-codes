
export enum INPUT_TYPE{
    TEXT="text",
    NUMBER="number",
    EMAIL="email",
    PASSWORD="password",
    ADDRESS="address",
    ROLE = "ROLE"
}

export interface ITextInputComponent{
    type:INPUT_TYPE,     // here the type value can be any like it can be text, number , email or pw
    name:string,
    defaultValue?:string,
    control:any,
    msg?:string | undefined | null
}
