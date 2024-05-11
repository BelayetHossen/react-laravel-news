import { useContext, useState, useEffect } from 'react';
import { SiteContext } from '../../backend/context/ContextProvider';
import BackTop from '../parcials/BackTop';

const Footer = () => {
    const { MAIN_URL, loading, setLoading, loggedinAdmin } = useContext(SiteContext);
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex py-5 mb-10 p-1 border-2'>
                    <div className='w-1/2 border-e'>

                        <div className='w-2/3 mx-auto flex flex-col gap-2 text-md'>
                            <div className=''>
                                <a className="my-1 flex items-center" href="#">
                                    <img className="me-2" src={`${MAIN_URL}/images/default-logo.png`} style={{ height: '40px' }} alt="Logo" loading="lazy" />
                                </a>
                            </div>
                            <p>সম্পাদক : <span className='font-black'>আবুল মোমেন</span></p>
                            <p>উপদেষ্টা সম্পাদক : <span className='font-black'>ড. খোন্দকার শওকত হোসেন</span></p>
                            <p>প্রকাশক : <span className='font-black'>তাপস মজুমদার (প্রয়াত)</span></p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-2/3 mx-auto text-md font-bold flex flex-col items-center'>
                            <p className=''>যোগাযোগ: </p>
                            <p className=''>
                                ১১৮-১২১, তেজগাঁও শিল্প এলাকা ২, ঢাকা-১২০৮
                                ফোন: ৫৫০৩০০০১-৬ ফ্যাক্স: ৫৫০৩০০১১
                                বিজ্ঞাপন: ৮৮৭৮২১৯, ০১৭৬৪১১৯১১৪
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto pt-1 my-2 border-t-2'>
                <div className="flex flex-col-reverse lg:flex-row items-center w-full md:w-7/12 gap-3 lg:gap-10 mx-auto text-sm">
                    <p>© সর্বসত্ব স্বত্বাধিকার সংরক্ষিত ২০২৩</p>
                    <ul className="list-style-none flex flex-row gap-5 font-bold">
                        <li className="hover:text-red-500">
                            <a className="" href="#">গোপনীয়তা নীতি</a>
                        </li>
                        <li className="hover:text-red-500">
                            <a className="" href="#">শর্তাবলি ও নীতিমালা</a>
                        </li>
                        <li className="hover:text-red-500">
                            <a className="" href="#">যোগাযোগ</a>
                        </li>
                        <li className="hover:text-red-500">
                            <a className="" href="#">বিজ্ঞাপন</a>
                        </li>

                    </ul>
                </div>
            </div>
            <BackTop />
        </>
    );
};

export default Footer;