"use client";
import { useState } from "react";
import BaseInput from "../common/BaseInput";
import BaseForm from "./BaseForm";
type RegisterFormProps = {
  className?: string;
};
export default function RegisterForm({ className }: RegisterFormProps) {
  //   let passwordInputType = "";
  //   const [inputValue, setInputValue] = useState("");
  //   const onShowPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  // event.preventDefault();
  //     setInputValue(event.target.value);
  //     if (inputValue == "on") passwordInputType = "text";
  //     else passwordInputType = "password";
  //     console.log(inputValue);
  //   };
  return (
    <BaseForm className={className}>
      <p className='text-black text-[32px] font-bold'>Register your acount here!</p>

      <div className='flex flex-col gap-4 mt-2'>
        <BaseInput className=' w-full' placeholder='Type your username here:' name='username' />
        <BaseInput className=' w-full' placeholder='Type your email here:' name='email' />
        <div className='flex items-center gap-1'>
          <BaseInput className=' w-full' placeholder='Type your password here:' name='password' type='password' />

          {/* <input className='h-10 w-[5%]' type='checkbox' name='showPassword' value={inputValue} onChange={onShowPassword} /> */}
        </div>
        <button className='w-[80%] bg-green-500 text-black font-semibold mx-auto p-3 rounded-md' type='submit'>
          Submit
        </button>
      </div>
    </BaseForm>
  );
}
