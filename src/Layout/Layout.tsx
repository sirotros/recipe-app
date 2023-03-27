import React, { FC } from "react";
import { Header } from "@/components/ui/Header";


type LayoutType = {
  children: React.ReactNode;
};
export const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="container">{children}</div>
    </main>
  );
};
