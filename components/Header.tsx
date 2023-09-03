"use client";

import HomeIcon from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import ContactIcon from "./icons/ContactIcon";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import UserIcon from "./icons/UserIcon";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import PostIcon from "./icons/PostIcon";

function Header() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="w-full bg-primary">
      <div className="w-[1000px] mx-auto">
        <div className="text-white text-[36px] py-[20px]">My Blog</div>

        <div className="flex gap-[20px] py-[10px]">
          <Link
            href="/"
            className="h-[32px] flex justify-center items-center text-white hover:underline cursor-pointer"
          >
            <div className="mr-2 h-4 w-4">
              <HomeIcon />
            </div>
            Home
          </Link>

          <div className="h-[32px] flex justify-center items-center text-white hover:underline cursor-pointer">
            <div className="mr-2 h-4 w-4">
              <AboutIcon />
            </div>
            About
          </div>

          <div className="h-[32px] flex justify-center items-center text-white hover:underline cursor-pointer">
            <div className="mr-2 h-4 w-4">
              <ContactIcon />
            </div>
            Contact
          </div>

          {isLoaded ? (
            <div className="flex-1 flex justify-between">
              <Link
                href="/post"
                className="h-[32px] flex justify-center items-center text-white hover:underline cursor-pointer"
              >
                <div className="mr-2 h-4 w-4">
                  <PostIcon />
                </div>
                Post
              </Link>

              <div>
                {isSignedIn ? (
                  <UserButton afterSignOutUrl="/" />
                ) : (
                  <Link
                    href="/sign-in"
                    className="flex justify-center items-center text-white hover:underline cursor-pointer"
                  >
                    <div className="mr-2 h-4 w-4">
                      <UserIcon />
                    </div>
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
