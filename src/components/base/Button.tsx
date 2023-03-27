import Link from "next/link";
import { FC } from "react";

type ButtonType = {
  children: string;
  classNames:string;
  type?: "button" | "reset" | "submit";
  link?: string;
  variant: "primary" | "secondary";
  full?: boolean
};

export const Button: FC<ButtonType> = ({
  children,
  type = "button",
  classNames,
  variant,
  link,
  full
}) => {
  const classes = `w-${full? "full" : "44"} h-12 text-white bg-${variant} p-2 border-0 outline-0 rounded-md ${classNames}`;
  return (
    <button className={classes} type={type}>
      {link && <Link href={link}>{children}</Link>}
      {!link && <> {children} </>}
    </button>
  );
};
