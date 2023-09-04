import { memo } from "react";

import Banner from "./Banner";
import Button from "./Button";

type SectionProps = {
   title?: string;
   body?: string;
   image?: string;
   onClickLearnMore?: () => void;
   onOpenNewPage?: string;
   id?: string;
};

function Card({ title, body, image, onClickLearnMore, onOpenNewPage, id }: SectionProps) {
   return (
      <Banner>
         <h1 className="mainText weUnder">{title}</h1>
         <p className="normalText nUnder" style={{ maxWidth: 400 }}>
            {body}
         </p>
         {image && (
            <div className="cardImage" id={id}>
               <div className="cardImageDecoration"></div>
               <img src={image} alt="" />
            </div>
         )}
         <Button
            text="Learn more"
            onClick={onClickLearnMore}
            openNewPage={onOpenNewPage}
            rightArrow
            alignRight
         />
      </Banner>
   );
}

export default memo(Card);
