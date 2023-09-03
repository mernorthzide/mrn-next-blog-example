import React from "react";
import { Button } from "./ui/button";
import HomeIcon from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
} from "./ui/menubar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import ContactIcon from "./icons/ContactIcon";

function Header() {
  return (
    <div className="w-full bg-primary">
      <div className="w-[1000px] mx-auto">
        <div className="text-white text-[36px] py-[20px]">My Blog</div>

        <div className="flex gap-[10px] py-[10px]">
          <Button variant="secondary">
            <div className="mr-2 h-4 w-4">
              <HomeIcon />
            </div>
            Home
          </Button>
          <Button variant="secondary">
            <div className="mr-2 h-4 w-4">
              <AboutIcon />
            </div>
            About
          </Button>
          <Button variant="secondary">
            <div className="mr-2 h-4 w-4">
              <ContactIcon />
            </div>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
