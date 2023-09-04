import { memo, useCallback, useState } from "react";

type TabsProps = {
   tabs: {
      text: string;
      component: Children;
   }[];
   tabAlignment?: "left" | "right";
   onChangeTab?: (tabIndex: number) => void;
};

function Tabs({ tabs, tabAlignment, onChangeTab }: TabsProps) {
   const [openedTabIndex, setOpenedTabIndex] = useState(0);

   const onClick = useCallback(
      (index: number) => {
         setOpenedTabIndex(index);
         onChangeTab?.(index);
      },
      [onChangeTab],
   );

   return (
      <>
         <div className={`tabsHolder${tabAlignment === "right" ? " aRight" : ""}`}>
            {tabs.map(({ text }, index) => (
               <p
                  className={`${openedTabIndex === index && "active"}`}
                  onClick={() => onClick(index)}
                  key={text}
               >
                  {text}
               </p>
            ))}
         </div>
         <div className="tabsContent">{tabs[openedTabIndex].component}</div>
      </>
   );
}

export default memo(Tabs);
