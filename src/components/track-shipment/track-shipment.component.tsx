import { t } from "i18next";
import { useEffect, useState } from "react";
import i18n from "../../i18n";
import "./track-shipment.style.css"
import { CiSearch } from "react-icons/ci";
import type { ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const TrackShipmentComponent = () => {
    const navigate = useNavigate();
    
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const toggleSearchOpen= () => {
        setSearchOpen(!isSearchOpen);
    }
    const toggleSearch = () => {
        navigate(`/shipment/${searchTerm}`);
    }
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
    <div className="flex flex-col">
        {isSearchOpen ? (
            <div onClick={toggleSearchOpen}  className="border border-solid items-center justify-center flex flex-row gap-2 w-full h-[75px] md:h-[90px] top-[10px] md:top-[20px] p-5 rounded-lg border-b-0 rounded-bl-none rounded-br-none">
                <p className={isMobile ? 'navbar-button-text-mobile-search' : 'navbar-button-text-search'}>
                   {t('navbar.trackShipment')}
                </p>
                {i18n.language === "ar" ? (<FaAngleLeft size={24} color="#E30613"/>) : (<FaAngleRight size={24} color="#E30613"/>)}
            </div>   
        ) : (
            <p onClick={toggleSearchOpen} className={isMobile ? 'navbar-button-text-mobile' : 'navbar-button-text'}>
                {t('navbar.trackShipment')}
            </p>
        )}
        {isSearchOpen && <div className="track-shipment-container flex flex-col p-5 md:p-10 border border-s rounded-lg w-[50%] md:w-[20%] h-[150px] md:h-[200px] top-[80px] md:top-[100px] gap-5 border-t-0 justify-center">
            <p className='card-title'>{t('trackShipment.title')}</p>
            <div className="w-full flex flex-row">
                <input
                    className={`w-[80%] bg-transparent focus:outline-none h-10 md:h-[60px] p-2 py-2.5 border border-solid ${i18n.language === "ar" ? "rounded-tr-lg rounded-br-lg": "rounded-tl-lg rounded-bl-lg"}`}
                    defaultValue={searchTerm}
                    onChange={handleSearch}
                    placeholder={t('trackShipment.placeholder')}
                    type="text"
                />
                <div onClick={toggleSearch} className={`search-icon-container w-[20%] h-10 md:h-[60px] flex items-center justify-center ${i18n.language === "ar" ? "rounded-tl-lg rounded-bl-lg": "rounded-tr-lg rounded-br-lg"}`}>
                    <CiSearch color="white" size={35}/>
                </div>
            </div>
        </div>}
    </div>

  );
};

export default TrackShipmentComponent;