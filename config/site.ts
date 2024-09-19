export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LoungeCenter",
  description: "Find what lounges you have access to, quick.",
  navItems: [
    {
      label: "Lounges",
      href: "/lounges"
    },
    {
      label: "Airports",
      href: "/airports"
    },
    {
      label: "Blog",
      href: "/blog"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "GO PRO",
      href: "/go-pro",
      bold: true,
      bounce: true,
      hideIfPro: true,
      color: "secondary" as
        | "success"
        | "secondary"
        | "foreground"
        | "primary"
        | "warning"
        | "danger"
        | undefined
    }
  ],
  navMenuItems: [
    {
      label: "Lounges",
      href: "/lounges"
    },
    {
      label: "Airports",
      href: "/airports"
    },
    {
      label: "Blog",
      href: "/blog"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "GO PRO",
      href: "/go-pro",
      bold: true,
      bounce: true,
      hideIfPro: true,
      color: "secondary" as
        | "success"
        | "secondary"
        | "foreground"
        | "primary"
        | "warning"
        | "danger"
        | undefined
    }
  ],
  links: {
    twitter: "https://twitter.com/getnextui",
    discord: "https://discord.gg/9b6yyZKmH4"
  }
};
