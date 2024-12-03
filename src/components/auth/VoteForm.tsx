"use client";
import { useState } from "react";
import BaseForm from "./BaseForm";
import BaseInput from "../common/BaseInput";
import { log } from "console";
type FormData = {
  name: string;
  age: number;
  email: string;
  reciveMassages: boolean;
  phoneNumber?: string;
};

export default function VoteForm() {
  let formName = "",
    formEmail = "",
    formAge = 0,
    formReciveMassages: boolean,
    formPhoneNumber: string;

  const [formData, setFormData] = useState<FormData>({ name: "", age: 0, email: "", reciveMassages: false });
  return (
    <BaseForm onSubmit={() => {}}>
      <div className='flex flex-col gap-5'>
        <label className=' text-black font-bold text-2xl' htmlFor='nameInputID'>
          What is your name?
        </label>
        <BaseInput
          type='text'
          placeholder='Set your name pleace'
          name='nameInput'
          id='nameInputID'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            formName = e.target.value;
            console.log(formName);
          }}
        />
      </div>
      <div className='flex flex-col gap-5'>
        <label className=' text-black font-bold text-2xl' htmlFor='ageInputID'>
          How old are you? {formAge}
        </label>
        <BaseInput
          type='number'
          name='ageInput'
          placeholder=''
          id='ageInputID'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            formAge = Number(e.target.value);
            console.log(formAge);
          }}
        />
      </div>
      <button
        onSubmit={(e: React.ChangeEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setFormData({
            name: formName,
            email: formEmail,
            age: formAge,
            reciveMassages: formReciveMassages,
            phoneNumber: formPhoneNumber,
          });
        }}
        type='submit'
      >
        Submit
      </button>
    </BaseForm>
  );
}
