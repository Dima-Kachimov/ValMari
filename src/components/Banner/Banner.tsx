import s from './banner.module.scss'
const Banner = () => {
    return (
        <section className={s.banner}>
            <div className='_container'>
                <div className={s.wrap}>
                    <div className={s.content}>
                        <h3>Бесплатный вебинар</h3>
                        <h1>Профессия косметолог</h1>
                        <p>
                            Приглашаем на бесплатный вебинар для профессиональных косметологов и интересующихся этой
                            профессией
                        </p>
                        <div className={s.buttons}>
                            <button>Зарегистрироваться</button>
                            <button>Узнать подробнее</button>
                        </div>
                    </div>
                    <div className={s.images}>
                    <img src={"./images/banner/decor_banner.webp"} alt="banner" width={681} height={556}/>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;