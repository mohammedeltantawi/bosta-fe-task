import { useEffect, useState } from 'react';
import bostaAr from '../../assets/svg/bosta-ar.svg';
import bostaEn from '../../assets/svg/bosta-en.svg';
import './navbar.style.css'
import { useTranslation } from 'react-i18next';
import TrackShipmentComponent from '../track-shipment/track-shipment.component';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        if (i18n.language === "en"){
            i18n.changeLanguage("ar");
        } else {
            i18n.changeLanguage("en");
        }
        
    };
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

  return (
    <div className='w-full flex flex-col gap-0'>
        <div className="w-full h-[80px] md:h-[100px] flex flex-row justify-between items-center p-5 md:px-[8%] md:py-10 border-b border-solid ">
            <div>
                <img src={i18n.language === "en" ? bostaEn : bostaAr} alt={t('navbar.companyName')} />
            </div>
            {!isMobile &&
                <div className="flex gap-3 flex-row md:gap-40">
                    <p className='navbar-button-text'>
                        {t('navbar.main')}
                    </p>
                    <p className='navbar-button-text'>
                        {t('navbar.prices')}
                    </p>
                    <p className='navbar-button-text'>
                        {t('navbar.call')}
                    </p>
                </div>
            }
            <div className='flex gap-4 items-center justify-center'>
                <TrackShipmentComponent />
                {
                    isMobile ? (
                        <div className='border border-solid  w-10 h-10 rounded-lg flex justify-center items-center'>
                            <GiHamburgerMenu size={24} />
                        </div>
                    ) : (
                        <div className='flex flex-row gap-4 items-center'>
                            <p className="navbar-button-text">{t('navbar.login')}</p>
                            <p className="language-button" onClick={changeLanguage}>{t('languageButton.text')}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  );
};

export default Navbar;