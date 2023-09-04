import { useState, useEffect } from "react";

export function usePageScroll() {
   const [hasScrolled, setHasScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => setHasScrolled(document.scrollingElement?.scrollTop !== 0);

      document.addEventListener("scroll", onScroll, { passive: true });

      return () => {
         document.removeEventListener("scroll", onScroll);
      };
   }, []);

   return hasScrolled;
}

export function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
}
