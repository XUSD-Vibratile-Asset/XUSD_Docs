// for page navigation & to sort on leftbar
export const ROUTES = [

  {
    title: "XUSD EcoStable System",
    href: "XUSD-Start",
    items: [
      { title: "XUSD", href: "/What Is XUSD" },
      { title: "Quick Start", href: "/Quick Start" },
      { title: "PulseChain", href: "/PulseChain" },
    ],
  },
  {
    title: "Launch Stages",
    href: "Launch",
    items: [
      { title: "Overview", href: "/Launch Overview" },
      { title: "Genesis", href: "/Genesis" },
    ],
  },
  {
    title: "Dynamic Vibratile Credit",
    href: "DynamicVibe",
    items: [
      { title: "Overview", href: "/Vibe Overview" },
      { title: "Vibes", href: "/Vibes" },
      { title: "Vibe Classes", href: "/Classes" },
      { title: "Manual", href: "/Manual" },   
 
      { title: "Dev Resources", href: "/Vibe Dev" },
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
      { title: "Peg Control", href: "/Peg Control" },


      
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
      { title: "Community Rewards", href: "/Community Rewards" },


      
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
      { title: "Telegram Notifications", href: "/Telegram Bots" },
  
      
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
