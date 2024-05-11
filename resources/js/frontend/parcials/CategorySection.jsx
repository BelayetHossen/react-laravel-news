import { useContext, useState, useEffect } from 'react';
import RightSideBar2 from './RightSideBar2';
import { SiteContext } from '../../backend/context/ContextProvider';

const CategorySection = () => {
    const { MAIN_URL, loading, setLoading, loggedinAdmin } = useContext(SiteContext);
    return (
        <>
            <section className='my-12'>
                <div className='flex flex-col md:flex-row justify-between px-2 my-4 gap-4 md:gap-3'>
                    <div className='w-full md:w-9/12 lg:w-9/12'>
                        <div className='mb-10'>
                            <div className='px-3'>
                                <div className='flex items-center gap-2 py-1 mb-4 border-b-4 border-red-600'>
                                    <h3 className='font-black text-xl'>জাতীয়</h3>
                                    <i className="fa-solid fa-play text-red-600 text-2xl"></i>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 '>
                                <div className='w-full md:w-8/12'>
                                    <div className='p-1'>
                                        <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h3 className='font-extrabold text-3xl text-red-500 py-1'>মিল্টনের আশ্রমে থাকা ব্যক্তিদের দায়িত্বে শামসুল হক ফাউন্ডেশন</h3>
                                        <p className='text-gray-600 text-lg'>‘চাইল্ড এন্ড ওল্ড এইজ কেয়ার’ আশ্রমের বৃদ্ধ, অনাথ শিশু ও মানসিক ভারসাম্যহীন মানুষদের থাকা, খাওয়া ও চিকিৎসা সেবার দায়িত্ব নিয়েছে আলহাজ শামসুল হক ফাউন্ডেশন নামের একটি প্রতিষ্ঠান।</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 w-full md:w-4/12'>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='mb-10'>
                            <div className='px-3'>
                                <div className='flex items-center gap-2 py-1 mb-4 border-b-4 border-red-600'>
                                    <h3 className='font-black text-xl'>অর্থনীতি</h3>
                                    <i className="fa-solid fa-play text-red-600 text-2xl"></i>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 '>
                                <div className='w-full md:w-8/12'>
                                    <div className='p-1'>
                                        <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h3 className='font-extrabold text-3xl text-red-500 py-1'>মিল্টনের আশ্রমে থাকা ব্যক্তিদের দায়িত্বে শামসুল হক ফাউন্ডেশন</h3>
                                        <p className='text-gray-600 text-lg'>‘চাইল্ড এন্ড ওল্ড এইজ কেয়ার’ আশ্রমের বৃদ্ধ, অনাথ শিশু ও মানসিক ভারসাম্যহীন মানুষদের থাকা, খাওয়া ও চিকিৎসা সেবার দায়িত্ব নিয়েছে আলহাজ শামসুল হক ফাউন্ডেশন নামের একটি প্রতিষ্ঠান।</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 w-full md:w-4/12'>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='mb-10'>
                            <div className='px-3'>
                                <div className='flex items-center gap-2 py-1 mb-4 border-b-4 border-red-600'>
                                    <h3 className='font-black text-xl'>রাজনীতি</h3>
                                    <i className="fa-solid fa-play text-red-600 text-2xl"></i>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 '>
                                <div className='w-full md:w-8/12'>
                                    <div className='p-1'>
                                        <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h3 className='font-extrabold text-3xl text-red-500 py-1'>মিল্টনের আশ্রমে থাকা ব্যক্তিদের দায়িত্বে শামসুল হক ফাউন্ডেশন</h3>
                                        <p className='text-gray-600 text-lg'>‘চাইল্ড এন্ড ওল্ড এইজ কেয়ার’ আশ্রমের বৃদ্ধ, অনাথ শিশু ও মানসিক ভারসাম্যহীন মানুষদের থাকা, খাওয়া ও চিকিৎসা সেবার দায়িত্ব নিয়েছে আলহাজ শামসুল হক ফাউন্ডেশন নামের একটি প্রতিষ্ঠান।</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 w-full md:w-4/12'>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>
                                    <div className='flex items-center gap-2 py-3'>
                                        <img className="w-1/2" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                        <h4 className='font-black text-md text-gray-700 py-1'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Right side bar */}
                    <RightSideBar2 />
                </div>
            </section>
        </>
    );
};

export default CategorySection;