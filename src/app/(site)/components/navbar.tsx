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
      <div className="sm:flex sm:justify-between h-10 items-center text-xl py-12">
        <div>
          <Link href={"/"}>
            {" "}
            <Image src="/Logo.webp" height={100} width={150} alt="logo" />
          </Link>
        </div>
        <NavigationMenu className="hidden sm:block">
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
        <div className="flex gap-x-2 items-center">
          <div>
            <Input type="input" placeholder="search" />
          </div>
          <div className="p-2 rounded-full bg-slate-200">
            
              <ShoppingCart />
            
          </div>
        </div>
      </div>
    </main>
  );
}
