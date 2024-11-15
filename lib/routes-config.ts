// for page navigation & to sort on leftbar
export const ROUTES = [

  {
    title: "XUSD EcoStable System",
    href: "XUSDStart",
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
      { title: "Bootstrapping", href: "/Bootstrapping" },


    ],
  },
  {


    title: "X Vaults",
    href: "XVaultsSystem",
    items: [
      { title: "Vault", href: "/Vault" },
      
    ],
  },
  {


    title: "Dynamic Vibratile Credit",
    href: "DynamicVibeOverview",
    items: [
      { title: "Overview", href: "/DynamicVibeOverview" },
      { title: "Vibes", href: "/Vibes" },
      { title: "Vibe Classes", href: "/Classes" },
      // { title: "Manual", href: "/Manual" },
      // { title: "Vibescore Evaluation", href: "/VibescoreEvaluation" },
      // { title: "Dev Resources", href: "/VibeDev" },
    ],
  },
  {
    title: "XUSD VibePass",
    href: "VibePass",
    items: [
      { title: "Overview", href: "/VibePassOverview" },

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
    href: "PraetorshipDev",
    items: [
      { title: "Praetorship", href: "/PraetorshipDev" },


    ],
  },
  {
    title: "XUSD Security Audits",
    href: "XUSDSecurityAudits",
    items: [
      { title: "Security Audits", href: "/XUSDSecurityAudits" },
      { title: "XUSD Minting Protocol", href: "/XUSDMintingProtocol" },


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
