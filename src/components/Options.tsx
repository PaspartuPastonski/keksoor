import { memo, useState } from "react";

type OptionsProps = {
   options: {
      text: string;
      value: number;
   }[];
   onChange?: (optionValue: number) => void;
};

function Options({ options, onChange }: OptionsProps) {
   const [selectedIndex, setSelectedIndex] = useState(0);

   return (
      <div className="options">
         {options.map(({ text, value }, index) => (
            <p
               className={`${selectedIndex === index && "selected"}`}
               onClick={() => {
                  setSelectedIndex(index);
                  onChange?.(value);
               }}
               key={text}
            >
               {text}
            </p>
         ))}
      </div>
   );
}

export default memo(Options);
