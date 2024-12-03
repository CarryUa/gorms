import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return <div className={clsx("w-full px-8 mt-8", className)}>{children}</div>;
}
