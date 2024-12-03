import clsx from "clsx";
import { ReactNode } from "react";

type AuthBaseProps = {
  className?: string;
  children: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};
export default function BaseForm({ children, className, onSubmit }: AuthBaseProps) {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
      className={clsx("bg-white p-4 w-[500px] pb-16 shadow-xl shadow-[#a3a3a3]  mx-auto rounded-2xl", className)}
    >
      {children}
    </form>
  );
}
