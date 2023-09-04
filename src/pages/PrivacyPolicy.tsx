import { memo } from "react";

import TitleListItem, { TitleListItemProps } from "../components/TitleListItem";
import Section from "../components/Section";
import Spacer from "../components/Spacer";

const termsOfUse: TitleListItemProps[] = [
   {
      title: "Policy & Law Enforcement",
      list: [
         "Our company is committed to protecting the privacy of our users. We will only collect and use personal information that is necessary for the operation of Wagie, and we will take all the necessary steps to ensure that this information is kept confidential and secure.",
         "We may disclose user information to law enforcement or other government authorities if we believe in good faith that such disclosure is necessary to comply with a legal obligation, protect our rights or property, or to prevent illegal activity or harm to others.",
         "We may use cookies or similar technologies to collect information about user behavior on our website or in Wagie. Users can choose to disable cookies in their web browser if they do not wish to have this information collected.",
         "Wagie may include links to third-party websites or services. These websites or services are not under our control, and we are not responsible for the privacy practices or content of these websites or services. Users should review the privacy policies of these websites or services before using them.",
      ],
   },
];

function PrivacyPolicy() {
   return (
      <>
         <Section>
            <h1 className="mainText nUnder">
               WagieBot <span className="tcPrimary">Privacy Policy</span>
            </h1>
            <p className="normalText">Last updated: 26 May, 2023</p>
            <Spacer height={40} />

            <p className="mainText">
               By using Wagie, you agree to the following Privacy Policy:
            </p>

            <div className="counterHolder">{termsOfUse.map(TitleListItem)}</div>
         </Section>
      </>
   );
}

export default memo(PrivacyPolicy);
