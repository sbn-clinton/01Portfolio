"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

import { Home, MessageCircle, User } from "lucide-react";
import { FaServicestack } from "react-icons/fa";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: (
        <FaServicestack className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Contact",
      link: "#contact",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
