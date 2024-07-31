import { useState } from "react";
import { IFileInputComponent, INPUT_TYPE, ISelectProps, ITextInputComponent } from "./input.contract";
import { useController, Controller } from "react-hook-form";
import { FaPaperPlane, FaUndo } from "react-icons/fa";
import Select from 'react-select';

export const TextInputComponent = ({
  type = INPUT_TYPE.TEXT,
  defaultValue = "",
  name,
  control,
  msg,
}: ITextInputComponent) => {
  const { field } = useController({
    name: name,
    control: control,
    defaultValue: defaultValue,
    rules: {
      required: true,
    },
  });

  return (
    <>
      <input
        type={type}
        id={name}
        {...field}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
      <span className="text-sm italic text-red-600">{msg}</span>
    </>
  );
};

export const RoleSelector = ({
  control,
  name,
  defaultValue,
  msg,
}: ITextInputComponent) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <select
            id={name}
            onChange={onChange}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          >
            <option value="customer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        )}
      />

      <span className="text-sm italic text-red-600">{msg}</span>
    </>
  );
};

export const SelectComponent = ({
  options,
  name,
  control,
  msg,
  defaultValue,
  multiple=false,
}: ISelectProps) => {
  const { field } = useController({
    control: control,
    name: name,
  });

  return (
    <>
      {/* isMulti helps to select multiple options and we have made is false so it means we can't choose multiple options */}
      <Select options={options} {...field} isMulti={multiple} isClearable/>  
      <span className="text-sm italic text-red-600">{msg}</span>
    </>
  );
};

export const StatusSelector = ({
  control,
  name,
  defaultValue,
  msg,
}: ITextInputComponent) => {

  return (
    <>
      <SelectComponent
        options={[
          { label: "Publish", value: "active" },
          { label: "UnPublish", value: "inactive" },
        ]}
        control={control}
        name={name}
        msg={msg}
        defaultValue={defaultValue}
      />
    </>
  );
};

// Imported from the register.page.tsx file
export const SingleImageUpload=({name,setValue,msg}:IFileInputComponent)=>{
  // image preview
  const [thumb,setThumb]=useState()
  return(
    <>
    <input
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    id={name}
    type="file"
    name={name}
    accept="image/*" //We can upload only image cut this code if you weant to upload all files
    onChange={(e: any) => {
      e.preventDefault();
      const name = e.target.name;
      const image = e.target.files[0];
      setValue(name,image)   // 1st => value 2nd=> only image file
      setThumb(image)  // preview image
    }}
  ></input>

    {/* preview image code */}
    <div className='w-`1/4'>
    <img className="w-[7.8vw]" src={thumb && typeof thumb === 'object' ? URL.createObjectURL(thumb) : "https://placehold.co/200x100?text=Preview Image" } alt="Images" />
    </div>
    <span className="text-sm italic text-red-700">{msg as string}</span>
    </>
  )
}

export const SubmitButton=({btnText, loading}:{btnText:string,loading:any})=>{
  return(
    <>
    <button
                type="submit"
                disabled={loading}
                className="mr-3 text-white inline-flex items-center bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <FaPaperPlane className="me-3" />{btnText}
              </button>
    </>
  )
}

export const CancelButton=({btnText, loading=false}:{btnText:string,loading:boolean})=>{
  return(
    <>
    <button
                type="reset"
                disabled={loading}
                className="mx-3 mt-3 text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <FaUndo className="me-3" />{btnText}
              </button>
    </>
  )
}
