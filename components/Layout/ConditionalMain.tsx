"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface ConditionalMainProps {
  children: React.ReactNode;
}

const ConditionalMain = ({ children }: ConditionalMainProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <main
      className={`min-h-screen overflow-y-auto transition-all duration-300 ${
        isHomePage ? "" : "ml-20 md:ml-64"
      }`}
    >
      {children}
    </main>
  );
};

export default ConditionalMain;
