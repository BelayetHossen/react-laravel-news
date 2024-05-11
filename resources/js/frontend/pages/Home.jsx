import { useContext, useState, useEffect } from 'react';
import { SiteContext } from '../../backend/context/ContextProvider';
import RightSideBar2 from '../parcials/RightSideBar2';
import RightSideBar1 from '../parcials/RightSideBar1';
import VideoSection from '../parcials/VideoSection';
import CategorySection from '../parcials/CategorySection';


const Home = () => {
    const { MAIN_URL, loading, setLoading, loggedinAdmin } = useContext(SiteContext);




    return (
        <>
            <div className='container mx-auto'>
                <div className={`rounded border mt-1`}>
                    <div className="relative rounded-md p-2">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 bg-green-600 rounded-l z-10">
                            <span className="relative flex h-5 w-5 me-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-100"></span>
                                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600"></span>
                            </span>
                            <span className="text-gray-100 sm:text-xl font-bold">শিরোনাম</span>
                        </div>
                        <div className="ticker-container">
                            <div className="ticker-wrapper">
                                <div className="ticker-transition">
                                    <div className="ticker-item">আজ ঢাকায় আসছেন আইওএম’র মহাপরিচালক</div>
                                    <div className="ticker-item">সম্পর্কের ৫০ বছর পূর্তি উপলক্ষ্যে ঢাকা সফর করবেন জাতিসংঘের বিভিন্ন সংস্থার প্রধানরা।</div>
                                    <div className="ticker-item">২০২৩ সালের ১ অক্টোবর আইওএম মহাপরিচালকের দায়িত্ব পান অ্যামি পোপ।</div>
                                    <div className="ticker-item">ঢাকা সেনানিবাসে দুই ভবন উদ্বোধন করলেন প্রধানমন্ত্রী</div>
                                    <div className="ticker-item">আজ রবিবার সকালে ঢাকা সেনানিবাসে নতুন নির্মিত ভবনগুলো উদ্বোধন করেন তিনি।</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-2'>
                    <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
                        <img className="w-8/12" src={`${MAIN_URL}/images/dbn1.jpeg`} alt="Logo" loading="lazy" />
                    </a>
                </div>





                {/* Hero section  */}
                <section className='flex flex-col md:flex-row justify-between px-2 my-4 gap-4 md:gap-3'>

                    <div className='w-full md:w-9/12 lg:w-9/12'>
                        <div className='flex flex-col-reverse md:flex-row gap-3 '>
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
                            <div className='w-full md:w-8/12'>
                                <div className='p-1'>
                                    <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                    <h3 className='font-extrabold text-3xl text-red-500 py-1'>মিল্টনের আশ্রমে থাকা ব্যক্তিদের দায়িত্বে শামসুল হক ফাউন্ডেশন</h3>
                                    <p className='text-gray-600 text-lg'>‘চাইল্ড এন্ড ওল্ড এইজ কেয়ার’ আশ্রমের বৃদ্ধ, অনাথ শিশু ও মানসিক ভারসাম্যহীন মানুষদের থাকা, খাওয়া ও চিকিৎসা সেবার দায়িত্ব নিয়েছে আলহাজ শামসুল হক ফাউন্ডেশন নামের একটি প্রতিষ্ঠান।</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-t-2 py-4 my-8">
                            <div className='p-2 shadow hover:shadow-lg'>
                                <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                <h4 className='font-black text-md text-gray-700 py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                            </div>
                            <div className='p-2 shadow hover:shadow-lg'>
                                <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                <h4 className='font-black text-md text-gray-700 py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                            </div>
                            <div className='p-2 shadow hover:shadow-lg'>
                                <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                <h4 className='font-black text-md text-gray-700 py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                            </div>
                            <div className='p-2 shadow hover:shadow-lg'>
                                <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                <h4 className='font-black text-md text-gray-700 py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                            </div>
                            <div className='p-2 shadow hover:shadow-lg'>
                                <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                <h4 className='font-black text-md text-gray-700 py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                            </div>
                            <div className='p-2 shadow hover:shadow-lg'>
                                <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                <h4 className='font-black text-md text-gray-700 py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                            </div>

                        </div>

                    </div>

                    {/* Right side bar */}
                    <RightSideBar1 />
                </section>

                <div className='mb-4'>
                    <a className="my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
                        <img className="w-full" src={`${MAIN_URL}/images/ad-bn-1.gif`} alt="Logo" loading="lazy" />
                    </a>
                </div>

                {/* Video section  */}
                <VideoSection />

                <div className='my-4'>
                    <a className="my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
                        <img className="w-full" src={`${MAIN_URL}/images/ad-bn-2.gif`} alt="Logo" loading="lazy" />
                    </a>
                </div>


                {/* Category section  */}
                <CategorySection />







            </div>


        </>
    );
};

export default Home;


{/* <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
        </div>
    </div>
</div> */}