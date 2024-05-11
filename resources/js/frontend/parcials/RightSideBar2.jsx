import { useContext, useState, useEffect } from 'react';
import DistrictSearch from './DistrictSearch';
import { SiteContext } from '../../backend/context/ContextProvider';

const RightSideBar2 = () => {
    const { MAIN_URL, loading, setLoading, loggedinAdmin } = useContext(SiteContext);
    return (
        <>
            <div className='flex flex-col gap-2 w-full md:w-3/12 lg:w-3/12'>
                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-1.png`} alt="Logo" loading="lazy" />
                </div>
                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-1.gif`} alt="Logo" loading="lazy" />
                </div>
                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-3.gif`} alt="Logo" loading="lazy" />
                </div>




                {/* Search option  */}
                <DistrictSearch />

                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-1.gif`} alt="Logo" loading="lazy" />
                </div>
                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-3.gif`} alt="Logo" loading="lazy" />
                </div>
                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-1.gif`} alt="Logo" loading="lazy" />
                </div>
                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-3.gif`} alt="Logo" loading="lazy" />
                </div>
            </div>
        </>
    );
};

export default RightSideBar2;