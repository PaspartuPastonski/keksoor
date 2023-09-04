import { memo, useCallback, useState } from "react";

import { usePageScroll } from "../utils/hooks";

import Logo from "./Logo";

const navigationLinks: {
   text: string;
   href: string;
   target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}[] = [
   {
      text: "Features",
      href: "/#specializedFeatures",
   },
   {
      text: "Stats",
      href: "https://stats.wagiebot.com",
      target: "_blank",
   },
   {
      text: "Changelog",
      href: "https://wagiebot.com/blog/changelog",
   },
   {
      text: "Documentation",
      href: "https://docs.wagiebot.com",
      target: "_blank",
   },
];

const LaunchApp = memo(function LaunchApp() {
   return (
      <div
         className="launchButton"
         onClick={() => window.open("https://t.me/wagiebot", "_blank")}
      >
         Launch App
      </div>
   );
});

function NavigationBar() {
   const [sideMenuOpened, setSideMenuOpened] = useState(false);
   const hasScrolled = usePageScroll();

   const onClickBurgerMenuButton = useCallback(
      () => setSideMenuOpened((oldValue) => !oldValue),
      [],
   );

   return (
      <>
         <div className={`navigationBar${hasScrolled ? " scrolled" : ""}`}>
            <div className="navigationBarContent">
               <Logo onClick={() => setSideMenuOpened(false)} />
               {navigationLinks.map(({ text, href, target }) => (
                  <a href={href} key={text} target={target}>
                     {text}
                  </a>
               ))}
               <LaunchApp />
               <div
                  className={`navigationBarBurgerMenuButton${
                     sideMenuOpened ? " beX" : ""
                  }`}
                  onClick={onClickBurgerMenuButton}
               >
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
         </div>
         <div className="navigationBarUnder"></div>
         <div className={`sideMenu${sideMenuOpened ? " opened" : ""}`}>
            <div className="sideMenuContent">
               {navigationLinks.map(({ text, href }) => (
                  <a href={href} key={text} onClick={onClickBurgerMenuButton}>
                     {text}
                  </a>
               ))}
               <LaunchApp />
            </div>
         </div>
      </>
   );
}

export default memo(NavigationBar);
