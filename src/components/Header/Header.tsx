import Phone from "../../_icons/Phone.tsx";
import Instagram from "../../_icons/social/Instagram.tsx";
import Facebook from "../../_icons/social/Facebook.tsx";
import Russia from "../../_icons/language/Russia.tsx";
import ArrowLang from "../../_icons/language/ArrowLang.tsx";

import s from "./header.module.scss";
import LogoDesc from "../../_icons/LogoDesc.tsx";

const itemMenu: {id: number, title: string}[] = [
    {id: 0, title: 'Курсы обучения'},
    {id: 1, title: 'Вебинары'},
    {id: 2, title: 'Видео-уроки'},
    {id: 3, title: 'Блог'},
    {id: 4, title: 'О нас'},
    {id: 5, title: 'Прайс'},
    {id: 6, title: 'Рассписание'},
    {id: 7, title: 'Акции'},
    {id: 8, title: 'Магазин'}
]

const Header = () => {
  return (
    <header>
      <div className={s.header_top}>
        <div className="_container">
          <div className={s.wrap_logo_contact}>
            <div className={s.logo}>
              <img
                  src="../public/images/header/logo.webp"
                  alt="logo"
                  width={62}
                  height={62}
              />
              <div className={s.logo_desc}>
                <LogoDesc/>
              </div>
            </div>
            <div className={s.phone}>
              <Phone/>
              <div className={s.phone_number}>0 (800) 508-622</div>
            </div>
            <div className={s.social}>
              <Instagram/>
              <Facebook/>
            </div>
            <div className={s.language}>
              <Russia/>
              <ArrowLang/>
            </div>
          </div>
        </div>
      </div>
      <div className="_container">
        <nav>
          <ul>
            {itemMenu.map((item) => (<li key={item.id}>{item.title}</li>))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
