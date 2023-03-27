import Link from "next/link";
import { FC } from "react";

type TitleProps = {
  children: string | string[];
  link?: string;
  classNames?:string | string[];
};
export const Title: FC<TitleProps> = ({ children, link, classNames }) => {
  const classes = `font-dancing text-4xl ${classNames || ""}`;
  return (
    <>
      {link && (
        <Link className={classes} href={link}>
          {children}
        </Link>
      )}
      {!link && <p className={`${classes} py-2`}>{children}</p>}
    </>
  );
};
