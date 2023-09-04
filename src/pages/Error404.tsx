import { memo } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

function Error404() {
   const navigate = useNavigate();

   return (
      <>
         <div className="flexHolder vertical aCenter" style={{ height: "50vh" }}>
            <div className="pageDecor404"></div>
            <h1 className="error404Title">404</h1>
            <p className="normalText taCenter weUnder">
               You seals lost? <span className="tcPrimary">Why?</span> here is the way
               back
            </p>
            <div className="flexHolder aCenter">
               <Button onClick={() => navigate("/")} text="Back" />
            </div>
         </div>
      </>
   );
}

export default memo(Error404);
