import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function DiscordComingSoon() {
   return (
      <>
         <div className="flexHolder vertical aCenter" style={{ height: "50vh" }}>
            <div className="pageDecor404"></div>
            <FontAwesomeIcon icon={faDiscord} className="discordComingSoonIcon" />
            <h1 className="mainTitle taCenter">
               <span className="tcPrimary">Discord</span> Coming Soon
            </h1>
         </div>
      </>
   );
}

export default memo(DiscordComingSoon);
