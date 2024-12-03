import clsx from "clsx";
import { ReactNode } from "react";

type AuthBaseProps = {
  className?: string;
  children: ReactNode;
};
export default function AuthBaseForm({ children, className }: AuthBaseProps) {
  return <form className={"bg-white p-4 w-[500px] pb-16 shadow-xl shadow-[#a3a3a3]  mx-auto rounded-2xl"}>{children}</form>;
}
