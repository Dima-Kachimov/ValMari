import Phone from "../../_icons/Phone.tsx";
import Instagram from "../../_icons/social/Instagram.tsx";
import Facebook from "../../_icons/social/Facebook.tsx";
import Russia from "../../_icons/language/Russia.tsx";
import ArrowLang from "../../_icons/language/ArrowLang.tsx";

import s from "./header.module.scss";
import LogoDesc from "../../_icons/LogoDesc.tsx";

const Header = () => {
  return (
    <header>
      <div className="_container">
        <div className={s.wrap_logo_contact}>
          <div className={s.logo}>
            <img
              src="../public/images/logo.webp"
              alt="logo"
              width={62}
              height={62}
            />
            <div className={s.logo_desc}>
              <LogoDesc />
            </div>
          </div>
          <div className={s.phone}>
            <Phone />
            <div className={s.phone_number}>0 (800) 508-622</div>
          </div>
          <div className={s.social}>
            <Instagram />
            <Facebook />
          </div>
          <div className={s.language}>
            <Russia />
            <ArrowLang />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
