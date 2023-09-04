import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   IconDefinition,
   faDiscord,
   faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

type GetOnButtonProps = {
   type: "telegram" | "discord";
   defaultLeftInset?: boolean;
};

const types: Record<
   GetOnButtonProps["type"],
   {
      name: string;
      icon: IconDefinition;
      href?: string;
      target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
   }
> = {
   telegram: {
      name: "Telegram",
      icon: faTelegramPlane,
      href: "https://t.me/wagiebot",
      target: "_blank",
   },
   discord: {
      name: "Discord",
      icon: faDiscord,
      href: "discordComingSoon",
   },
};

function GetOnButton({ type, defaultLeftInset }: GetOnButtonProps) {
   const buttonType = types[type];

   return (
      <div
         className={`getOnButton${defaultLeftInset ? " defaultLeftInset" : ""}`}
         onClick={
            buttonType.href
               ? () => window.open(buttonType.href, buttonType.target ?? "_self")
               : undefined
         }
      >
         <FontAwesomeIcon icon={buttonType.icon} size="6x" />
         <div className="getOnButtonContent">
            <p className="getOnButtonContentTopText">Launch on</p>
            <h2 className="getOnButtonContentBottomText">{buttonType.name}</h2>
         </div>
      </div>
   );
}

export default memo(GetOnButton);
