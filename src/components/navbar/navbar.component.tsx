import { useEffect, useState } from 'react';
import bostaAr from '../../assets/svg/bosta-ar.svg';
import bostaEn from '../../assets/svg/bosta-en.svg';
import './navbar.style.css'

const Navbar = () => {
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
    <div className="w-full h-[80px] md:h-[100px] flex flex-row justify-between items-center p-5 md:px-[8%] md:py-10 border-b border-solid border-#4f5665">
        <div>
            <img src={bostaEn} />
        </div>
        {!isMobile &&
            <div className="flex gap-3 flex-row md:gap-40">
                <p className='navbar-button-text'>
                    Main
                </p>
                <p className='navbar-button-text'>
                    Prices
                </p>
                <p className='navbar-button-text'>
                    Call
                </p>
            </div>
        }
        <div className='flex gap-4'>
            <p className={isMobile ? 'navbar-button-text-mobile' : 'navbar-button-text'}>
                Track shipment
            </p>
            {
                isMobile ? (
                    <div className='border border-solid border-#4f5665 w-10 h-10 rounded-lg'>

                    </div>
                ) : (
                    <div className='flex flex-row gap-4'>
                        <p className="navbar-button-text">Login</p>
                        <p className="language-button">AR</p>
                    </div>
                )
            }
        </div>
    </div>
  );
};

export default Navbar;