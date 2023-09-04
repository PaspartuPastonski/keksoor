import { memo, useMemo } from "react";

type SectionProps = {
   height?: number;
};

function Spacer({ height = 0 }: SectionProps) {
   const style = useMemo(
      () => ({
         height,
      }),
      [height],
   );

   return <div style={style} />;
}

export default memo(Spacer);
