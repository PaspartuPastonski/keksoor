import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import logoImage from "../assets/Logo.svg";
import { scrollToTop } from "../utils/hooks";

type LogoProps = {
   onClick?: () => void;
};

function Logo({ onClick }: LogoProps) {
   const navigate = useNavigate();

   const onClickLogo = useCallback(() => {
      navigate("/");
      scrollToTop();
      onClick?.();
   }, [navigate, onClick]);

   return (
      <div className="logo" onClick={onClickLogo}>
         <img src={logoImage} alt="Logo" />
         WagieBot.
      </div>
   );
}

export default memo(Logo);
