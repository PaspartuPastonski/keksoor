import { memo, useCallback } from "react";

type SliderProps = {
   min?: number;
   max?: number;
   options?: {
      aboveText?: string;
      bellowText?: string;
   }[];
   defaultValue?: number;
   onChange?: (value: number) => void;
};

function Slider({
   min = 1,
   max = 100,
   options,
   defaultValue = 50,
   onChange,
}: SliderProps) {
   const onChangeInput = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
         onChange?.(parseInt(event.target.value));
      },
      [onChange],
   );

   return (
      <div
         className={`slider${options && options[0].aboveText ? " withAboveText" : ""}${
            options && options[0].bellowText ? " withBellowText" : ""
         }`}
      >
         <div className="sliderDots">
            {options?.map(({ aboveText, bellowText }) => (
               <div key={aboveText}>
                  <p className="aboveText">{aboveText}</p>
                  <p className="bellowText">{bellowText}</p>
               </div>
            ))}
         </div>
         <input
            type="range"
            min={min}
            max={max}
            defaultValue={defaultValue}
            onChange={onChangeInput}
         />
      </div>
   );
}

export default memo(Slider);
