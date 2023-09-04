import { memo } from "react";

type SectionProps = {
   type?: "blank" | "normal" | "hero";
   withBackground?: "black";
   widthLimit?: boolean;
   style?: React.HTMLAttributes<HTMLDivElement>["style"];
   children?: Children;
};

function Section({
   type = "normal",
   withBackground,
   widthLimit = true,
   style,
   children,
}: SectionProps) {
   return (
      <div
         className={`section ${type}${withBackground ? ` ${withBackground}` : ""}`}
         style={style}
      >
         {widthLimit ? <div className="sectionContent">{children}</div> : children}
      </div>
   );
}

export default memo(Section);
