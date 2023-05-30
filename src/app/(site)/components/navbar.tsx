"use client";
import Link from "next/link";

import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import { Input } from "./ui/input";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
  return (
    <main>
      <div className="flex justify-between h-10 items-center text-xl py-12">
        <div>
          <Link href={"/"}>
            {" "}
            <Image src="/Logo.webp" height={100} width={150} alt="logo" />
          </Link>
        </div>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/female">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Female
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/male">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Male
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/kids">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kids
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/products">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className=" hidden md:flex md:gap-x-2 md:items-center">
          <div>
            <Input type="input" placeholder="search" />
          </div>
          <button className="relative p-3 rounded-full bg-slate-200 ">
            <ShoppingCart />
            <span className="absolute top-0 w-5 h-5 bg-red-500 rounded-full text-center text-white text-xs">
              0
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
