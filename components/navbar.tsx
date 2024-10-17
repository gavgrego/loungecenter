"use client";

import { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { DiscordIcon } from "@/components/icons";
import Search from "./search/Search";
import { UserCircle } from "@phosphor-icons/react/dist/ssr/UserCircle";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

enum DropdownType {
  DESKTOP = "desktop",
  MOBILE = "mobile",
}

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownType | null>(null);

  const toggleDropdown = (dropdownType: DropdownType) => {
    setOpenDropdown(openDropdown === dropdownType ? null : dropdownType);
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-6 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <div className="flex flex-row gap-1 text-xl">
              <p>✈️</p>
              <p>🛋️</p>
            </div>
            <p className="font-bold text-inherit text-2xl sm:text-3xl">
              LoungeCenter
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-8 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: item.color ? item.color : "foreground" }),
                  `data-[active=true]:text-primary data-[active=true]:font-medium ${
                    item.bold ? "font-bold" : ""
                  } 
                  ${item.bounce ? "animate-bounce" : ""}
                  `
                )}
                color={item.color ? item.color : "foreground"}
                href={item.href}
                onClick={() => revalidatePath(item.href)}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>

          <ThemeSwitch />

          <SignedOut>
            <Dropdown
              isOpen={openDropdown === DropdownType.DESKTOP}
              onClose={() => setOpenDropdown(null)}
            >
              <DropdownTrigger>
                <UserCircle
                  className="text-default-500 cursor-pointer"
                  size={24}
                  onClick={() => toggleDropdown(DropdownType.DESKTOP)}
                />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="signin">
                  <SignInButton>
                    <Link color="secondary" aria-label="Sign In">
                      Sign In
                    </Link>
                  </SignInButton>
                </DropdownItem>
                <DropdownItem key="signup">
                  <Link color="secondary" href="/go-pro">
                    Sign Up
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SignedOut>

          <SignedIn>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/profile"
            />
          </SignedIn>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 gap-2" justify="end">
        <ThemeSwitch />
        <div className="mr-1 h-[24px]">
          <SignedOut>
            <Dropdown
              isOpen={openDropdown === DropdownType.MOBILE}
              onClose={() => setOpenDropdown(null)}
            >
              <DropdownTrigger>
                <UserCircle
                  className="text-default-500 cursor-pointer"
                  size={24}
                  onClick={() => toggleDropdown(DropdownType.MOBILE)}
                />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="signin">
                  <SignInButton>
                    <Link color="secondary" aria-label="Sign In">
                      Sign In
                    </Link>
                  </SignInButton>
                </DropdownItem>
                <DropdownItem key="signup">
                  <Link color="secondary" href="/go-pro">
                    Sign Up
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SignedOut>
          <SignedIn>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/profile"
            />
          </SignedIn>
        </div>

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <Search />

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({ color: item.color ? item.color : "foreground" }),
                  `data-[active=true]:text-primary data-[active=true]:font-medium ${
                    item.bold ? "font-bold" : ""
                  } 
                  ${item.bounce ? "animate-bounce" : ""}
                  `
                )}
                color={item.color ? item.color : "foreground"}
                href={item.href}
                onClick={() => revalidatePath(item.href)}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link
              isExternal
              aria-label="Discord"
              href={siteConfig.links.discord}
            >
              <DiscordIcon className="text-default-500" size={32} />
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
