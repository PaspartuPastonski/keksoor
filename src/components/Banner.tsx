import { memo } from "react";

type BannerProps = {
   backgroundImage?: string;
   size?: "normal" | "big";
   children?: Children;
};

function Banner({ children, size, backgroundImage }: BannerProps) {
   return (
      <div className={`banner${size ? ` ${size}` : ""}`}>
         {backgroundImage && (
            <img src={backgroundImage} className="bannerImage" alt="Background" />
         )}
         {children}
      </div>
   );
}

export default memo(Banner);
