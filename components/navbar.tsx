"use client";

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

import SearchInput from "./search/searchInput";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, DiscordIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-6 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <div className="flex flex-row gap-1 text-xl">
              <p>✈️</p>
              <p>🛋️</p>
            </div>

            <p className="font-bold text-inherit text-3xl">LoungeVault</p>
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
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>

          <ThemeSwitch />

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/profile"
            />
          </SignedIn>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput />

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
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
