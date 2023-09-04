declare module "*.svg" {
   const content: string;
   export default content;
}

declare module "*.png" {
   const content: string;
   export default content;
}

declare module "*.jpg" {
   const content: string;
   export default content;
}

type AllTypes = string | boolean | null | undefined | JSX.Element;

type Children = AllTypes | AllTypes[];
