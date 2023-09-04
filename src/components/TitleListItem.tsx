export type TitleListItemProps = {
   title?: string;
   list?: string[];
};

function TitleListItem({ title, list }: TitleListItemProps) {
   return (
      <div key={title}>
         <h2 className="mainText withCounter">{title}</h2>
         <ul className="normalList taJustify">
            {list?.map((text) => (
               <li key={text}>{text}</li>
            ))}
         </ul>
      </div>
   );
}

export default TitleListItem;
