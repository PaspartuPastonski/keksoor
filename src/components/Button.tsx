import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type SectionProps = {
   text?: string;
   onClick?: () => void;
   openNewPage?: string;
   rightArrow?: boolean;
   alignRight?: boolean;
};

function Button({ text, onClick, rightArrow, alignRight, openNewPage }: SectionProps) {
   return (
      <div
         className={`mainButton${alignRight ? " right" : ""}`}
         onClick={openNewPage ? () => window.open(openNewPage, "_black") : onClick}
      >
         <div className="mainButtonContent">
            {text}
            {rightArrow && <FontAwesomeIcon icon={faChevronRight} />}
         </div>
      </div>
   );
}

export default memo(Button);
