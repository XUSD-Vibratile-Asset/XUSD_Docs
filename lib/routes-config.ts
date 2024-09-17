// for page navigation & to sort on leftbar
export const ROUTES = [

  {
    title: "XUSD EcoStable System",
    href: "XUSD-Start",
    items: [
      { title: "XUSD", href: "/WhatIsXUSD" },
      { title: "QuickStart", href: "/QuickStart" },
      { title: "PulseChain", href: "/PulseChain" },
    ],
  },
  {
    title: "Launch Stages",
    href: "Launch",
    items: [
      { title: "Overview", href: "/LaunchOverview" },
      { title: "Genesis", href: "/Genesis" },
    ],
  },
  {
    title: "Dynamic Vibratile Credit",
    href: "DynamicVibe",
    items: [
      { title: "Overview", href: "/VibeOverview" },
      { title: "Vibes", href: "/Vibes" },
      { title: "Vibe Classes", href: "/Classes" },
      { title: "Manual", href: "/Manual" },   
 
      { title: "Dev Resources", href: "/VibeDev" },
    ],
  },
  {
    title: "XUSD VibePass",
    href: "CreditReport",
    items: [
      { title: "Overview", href: "/Vibe Overview" },

      { title: "Buy", href: "/Obtain" },
      
    ],
  },
  {
    title: "When Over Peg",
    href: "Peg",
    items: [
      { title: "Peg Control", href: "/PegControl" },


      
    ],
  },


  {
    title: "Praetorship",
    href: "Praetorship",
    items: [
      { title: "Praetorship", href: "/Praetorship" },


      
    ],
  },

  {
    title: "Community Contribution",
    href: "Community",
    items: [
      { title: "Community Rewards", href: "/CommunityRewards" },


      
    ],
  },
  // {
  //   title: "Kings",
  //   href: "kings",
  //   items: [
  //     { title: "Are you worthy?", href: "/startking" },
  //     { title: "Seigniorage", href: "/seigniorage" },
      
  //   ],
  // }, 
  {
    title: "Telegram Bots",
    href: "TelegramBots",
    items: [
      { title: "Telegram Notifications", href: "/TelegramBots" },
  
      
    ],
  }, 
  
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
