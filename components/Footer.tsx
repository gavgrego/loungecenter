"use client";

import { siteConfig } from "@/config/site";
import { revalidatePath } from "next/cache";
import NextLink from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center  bg-secondary-400">
      <div className="container mx-auto max-w-7xl py-10 px-6 flex-grow">
        <div className="flex flex-row gap-4 text-3xl items-center">
          <p>✈️</p>
          <p>🛋️</p>
          <h2 className="font-semibold text-white text-3xl">LoungeCenter</h2>
        </div>
        <div className="flex flex-col gap-4 justify-center light light:text-white md:h-[400px]">
          {siteConfig.navItems.map((item) => (
            <NextLink
              key={item.href}
              className="font-medium hover:opacity-75 transition-opacity"
              color="foreground"
              href={item.href}
              onClick={() => revalidatePath(item.href)}
            >
              {item.label}
            </NextLink>
          ))}
          <NextLink
            className="font-medium hover:opacity-75 transition-opacity"
            color="foreground"
            href={"/contact"}
          >
            Contact
          </NextLink>
          <p className="text-xs max-w-[500px]">
            * We are still growing our dataset! If you see any missing or wrong
            info, please send us the info (with a source to the correction)
            using our contact form. You will be automatically entered to win
            LoungeCenter merch!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
