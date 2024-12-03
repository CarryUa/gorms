import clsx from "clsx";

type TextInputProps = {
  className?: string;
  placeholder?: string;
  type?: string;
  name: string;
};
export default function TextInput({ className, placeholder, name, type = "text" }: TextInputProps) {
  return (
    <input
      className={clsx(
        "w-flull  rounded-md px-1 h-10 transition-all border-slate-400 border-[2px] text-black bg-slate-200 outline-none focus:border-slate-800 focus:border-[2px] focus:transition-all",
        className
      )}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}
