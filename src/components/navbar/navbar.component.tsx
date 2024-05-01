import { useEffect, useState } from 'react';
import bostaAr from '../../assets/svg/bosta-ar.svg';
import bostaEn from '../../assets/svg/bosta-en.svg';
import './navbar.style.css'
import { useTranslation } from 'react-i18next';
import TrackShipmentComponent from '../track-shipment/track-shipment.component';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
    const [isSearchOpen, setSearchOpen] = useState<boolean>(false);

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

    const toggleSideBar = () =>{
        if(!sideBarOpen) {
            setSearchOpen(false);
        }
        setSideBarOpen(!sideBarOpen);
    }
  return (
    <div className='w-full flex flex-col gap-0'>
        <div className="w-full h-[80px] md:h-[100px] flex flex-row justify-between items-center p-5 md:px-[8%] md:py-10 border-b border-solid ">
            <div>
                <img src={i18n.language === "en" ? bostaEn : bostaAr} alt={t('navbar.companyName')} />
            </div>
            {!isMobile &&
                <div className="flex gap-3 flex-row md:gap-10">
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
                <TrackShipmentComponent isSearchOpen={isSearchOpen} setSearchOpen={setSearchOpen} setSideBarOpen={setSideBarOpen} />
                {
                    isMobile ? (
                        <div className="flex flex-col items-end">
                            <div onClick={toggleSideBar} className='border border-solid  w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer'>
                                <GiHamburgerMenu size={24} />
                            </div>
                            {!!sideBarOpen && 
                            <div className="track-shipment-container flex flex-col p-5 md:p-10 border border-s rounded-lg w-[40%] top-[80px] gap-5 border-t-0 justify-center">
                                <p className='navbar-button-text'>
                                    {t('navbar.main')}
                                </p>
                                <p className='navbar-button-text'>
                                    {t('navbar.prices')}
                                </p>
                                <p className='navbar-button-text'>
                                    {t('navbar.call')}
                                </p>
                                <p className="navbar-button-text">{t('navbar.login')}</p>
                                <p className="language-button" onClick={changeLanguage}>{t('languageButton.text')}</p>
                            </div>}
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