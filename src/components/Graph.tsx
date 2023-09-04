import { memo, useMemo } from "react";

export type GraphProps = {
   values: {
      name: string;
      columns: {
         value: number;
         unit?: string;
         unitPosition?: "front" | "back";
      }[];
   }[];
   columnLabels?: string[];
};

const maxHeight = 400;

function Graph({ values, columnLabels }: GraphProps) {
   const maxValue = useMemo(
      () =>
         values.reduce((value, thisValue) => {
            const bigger = thisValue.columns.reduce((value, thisValue) => {
               return value > thisValue.value ? value : thisValue.value;
            }, 0);
            return bigger > value ? bigger : value;
         }, 0) ?? 1,
      [values],
   );

   const scalingFactor = useMemo(() => maxHeight / maxValue, [maxValue]);

   return (
      <div className="graph">
         <div className="graphColumns" style={{ minHeight: maxHeight }}>
            {values?.map(({ columns, name }, index) => {
               return (
                  <div className="graphColumnSet" key={index}>
                     {columns.map(({ value, unit, unitPosition = "back" }, index) => (
                        <div
                           style={{ height: value * scalingFactor }}
                           className="neonEffect"
                           key={index}
                        >
                           <p>
                              {unitPosition === "front" && unit}
                              {value}
                              {unitPosition === "back" && unit}
                           </p>
                        </div>
                     ))}
                     <p className="graphColumnSetName">{name}</p>
                  </div>
               );
            })}
         </div>
         <div className="graphColumnLabels">
            {columnLabels?.map((label) => (
               <p key={label}>{label}</p>
            ))}
         </div>
      </div>
   );
}

export default memo(Graph);
