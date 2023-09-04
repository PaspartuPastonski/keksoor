import { memo } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import Spacer from "./Spacer";
import { scrollToTop } from "../utils/hooks";

function Footer() {
   return (
      <div className="footer">
         <div className="footerContent">
            <Logo />
            <Spacer height={30} />
            <div className="gridHolder x3">
               <div>
                  <h3 className="mainText">Legal</h3>
                  <Link
                     to="/termsOfUse"
                     className="normalText nUnder"
                     onClick={scrollToTop}
                  >
                     Terms of Use
                  </Link>
                  <Link
                     to="/privacyPolicy"
                     className="normalText nUnder"
                     onClick={scrollToTop}
                  >
                     Privacy Policy
                  </Link>
                  <Link
                     to="/cookiePolicy"
                     className="normalText nUnder"
                     onClick={scrollToTop}
                  >
                     Cookie Policy
                  </Link>
               </div>
               <div>
                  <h3 className="mainText">About</h3>
                  <Link
                     to="https://linktr.ee/wagiebot"
                     className="normalText nUnder"
                     target="_blank"
                  >
                     Link tree
                  </Link>
                  <Link
                     to="https://cryptobots.club"
                     className="normalText nUnder"
                     target="_blank"
                  >
                     CryptoBots
                  </Link>
               </div>
               <div>
                  <h3 className="mainText">Social</h3>
                  <Link
                     to="https://x.com/0xWagieBot"
                     className="normalText nUnder"
                     target="_blank"
                  >
                     Twitter / X
                  </Link>
                  <Link
                     to="https://medium.com/@wagiebot"
                     className="normalText nUnder"
                     target="_blank"
                  >
                     Blog
                  </Link>
                  <Link
                     to="mailto:hi@wagiebot.com"
                     className="normalText nUnder"
                     target="_blank"
                  >
                     Contact us
                  </Link>
               </div>
            </div>
            <div className="line"></div>
            <p className="normalText nUnder footerBottomText">
               Copyright @2023 WagieBot.
            </p>
            <p className="normalText nUnder footerBottomText">
               0xd2c869382c7ac9f87ff73548d029d67c0f9dee31
            </p>
         </div>
      </div>
   );
}

export default memo(Footer);
