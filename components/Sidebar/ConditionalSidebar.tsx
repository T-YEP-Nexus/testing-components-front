"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const ConditionalSidebar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return <Sidebar />;
};

export default ConditionalSidebar;
