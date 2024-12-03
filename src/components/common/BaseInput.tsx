import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

type TextInputProps = {
  className?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function BaseInput({ className, placeholder, name, id, type = "text", onChange }: TextInputProps) {
  return (
    <input
      className={clsx(
        "w-flull  rounded-md px-1 h-10 transition-all border-slate-400 border-[2px] text-black bg-slate-200 outline-none focus:border-slate-800 focus:border-[2px] focus:transition-all",
        className
      )}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      name={name}
      id={id}
    />
  );
}
