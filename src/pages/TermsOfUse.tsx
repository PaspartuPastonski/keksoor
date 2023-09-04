import { memo } from "react";

import TitleListItem, { TitleListItemProps } from "../components/TitleListItem";
import Section from "../components/Section";
import Spacer from "../components/Spacer";

const termsOfUse: TitleListItemProps[] = [
   {
      title: "Use of WagieBot",
      list: [
         "Wagie is intended to provide users with information and educational resources about cryptocurrency trading and sniping features, among other things. We do not provide financial or investment advice, and users should not rely solely on the information provided by the bot when making trading decisions.",
         "Wagie is not affiliated with any particular cryptocurrency exchange or platform. Users should ensure that they trade on the correct DEX / platform before attempting to use Wagie.",
         "Users are responsible for configuring the bot settings to their desired specifications. This includes setting buy and sell parameters, as well as any other settings related to the bot's trading and sniping functionalities.",
         "Users should be aware that cryptocurrency trading involves a high degree of risk, and that past performance is not necessarily indicative of future results. Users should conduct their own research and due diligence before making any trades, and should only invest funds that they can afford to lose.",
         "By using Wagie, users acknowledge that they are solely responsible for any trades executed through the bot, and that they assume all risks associated with those trades. We are not liable for any losses or damages arising from trades executed through the bot.",
      ],
   },
   {
      title: "User Obligations",
      list: [
         "Users must comply with all applicable laws and regulations when using Wagie. This includes any laws related to cryptocurrency trading and investments, as well as any other relevant laws in their jurisdiction.",
         "Users must keep their keys and login credentials secure at all times. This includes taking reasonable precautions to prevent unauthorized access to their account, such as using a strong password and enabling two-factor authentication on Telegram and/or Discord.",
         "Users must not use Wagie for any illegal activities, including but not limited to money laundering, fraud, or other financial crimes. Any such activity will result in the immediate termination of the user's access to the bot, and may also result in legal action being taken against the user.",
         "Users must not attempt to hack or otherwise interfere with the operation of Wagie. This includes attempting to modify or reverse-engineer the bot software, or attempting to gain unauthorized access to the bot's infrastructure.",
         "Users must report any bugs or security vulnerabilities that they discover while using Wagie. Users should not attempt to exploit such vulnerabilities for their own gain, and should report them promptly to our support team.",
         "Users should be aware that Wagie is a tool that is designed to assist with cryptocurrency trading, sniping and other cryptocurrency related activities, but that it is not a substitute for proper research and due diligence. Users should conduct their own research and analysis before making any trades, and should only invest funds that they can afford to lose.",
      ],
   },
   {
      title: "Intellectual property",
      list: [
         "Our company is not responsible for any losses or damages that may result from the use of Wagie. This includes but is not limited to any losses or damages resulting from errors in the bot's software or user interface, or from trading decisions made based on information provided by the bot.",
         "Users assume all risks associated with using Wagie, including the risk of financial loss. Users should conduct their own research and analysis before making any trades, and should only invest funds that they can afford to lose.",
         "Our company does not guarantee the accuracy or completeness of the information provided by Wagie. Users should not rely solely on the information provided by the bot when making trading decisions.",
         "Our company is not responsible for any interruption or disruption to the user's access to the bot that may occur due to technical issues or maintenance. We will make reasonable efforts to minimize such disruptions and to provide advance notice to users whenever possible.",
         "Our company is not responsible for any losses or damages that may result from the user's failure to comply with these terms of service, or from the user's use of the bot in violation of any applicable laws or regulations.",
      ],
   },
   {
      title: "Liability",
      list: [
         "All content and materials related to WagieBot, including but not limited to the bot software, documentation, and user interface, are the exclusive property of our company. This includes any associated intellectual property such as trademarks, copyrights, and patents.",
         "Users may not reproduce, distribute, modify, or create derivative works of Wagie or any associated materials without our prior written consent. This includes reverse-engineering or otherwise attempting to access the source code of the bot.",
         "Users may use Wagie only for its intended purpose, which is to assist with cryptocurrency trading and sniping. Any unauthorized use of the bot, such as using it to scrape data from other websites or platforms, is strictly prohibited.",
         "Our company retains the right to modify or update Wagie at any time, including adding or removing features or functionality. We are not responsible for any interruption or disruption to the user's access to the bot that may occur as a result of such updates.",
         "Users may not use our company's name, trademarks, or logos in any manner without our prior written consent. Any such use without consent may result in legal action being taken against the user.",
      ],
   },
   {
      title: "Termination",
      list: [
         "Our company reserves the right to terminate a user's access to Wagie at any time and for any reason, without prior notice or explanation.",
         "We may terminate a user's access to Wagie if we believe in good faith that the user has violated these terms of service, engaged in illegal or fraudulent activity, or caused harm or disruption to our company or other users.",
         "In the event of termination, the user's access to Wagie will immediately cease.",
         "Users may also choose to terminate their own access to Wagie at any time.",
         "Upon termination, users agree to delete or destroy any copies of Wagie that they may have used on their devices, and to cease all further use of Wagie.",
      ],
   },
];

function TermsOfUse() {
   return (
      <>
         <Section>
            <h1 className="mainText nUnder">
               WagieBot <span className="tcPrimary">Terms of Use</span>
            </h1>
            <p className="normalText">Last updated: 26 May, 2023</p>
            <Spacer height={40} />

            <p className="mainText">
               By using Wagie, you agree to be bound by the following Terms of Service:
            </p>

            <div className="counterHolder">{termsOfUse.map(TitleListItem)}</div>
         </Section>
      </>
   );
}

export default memo(TermsOfUse);
