import { memo } from "react";

import TitleListItem, { TitleListItemProps } from "../components/TitleListItem";
import Section from "../components/Section";
import Spacer from "../components/Spacer";

const cookiePolicy: TitleListItemProps[] = [
   {
      title: "What are Cookies",
      list: [
         "As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.",
      ],
   },
   {
      title: "What We Collect",
      list: [
         "We only collect your browser dimensions to serve you the website in the correct format.",
      ],
   },
   {
      title: "Third Party Cookies",
      list: [
         "In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.",
         "This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.",
         "For more information on Google Analytics cookies, see the official Google Analytics page.",
      ],
   },
   {
      title: "More Information",
      list: [
         "Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. However if you are still looking for more information then you can contact us via: Email: hi@wagiebot.com",
      ],
   },
];

function CookiePolicy() {
   return (
      <>
         <Section>
            <h1 className="mainText nUnder">
               WagieBot <span className="tcPrimary">Cookie Policy</span>
            </h1>
            <p className="normalText">Last updated: 26 May, 2023</p>
            <Spacer height={40} />

            <p className="mainText">
               By using Wagie, you agree to the following Cookie Policy:
            </p>

            <div className="counterHolder">{cookiePolicy.map(TitleListItem)}</div>
         </Section>
      </>
   );
}

export default memo(CookiePolicy);
