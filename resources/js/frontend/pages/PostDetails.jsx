import { useContext, useState, useEffect } from 'react';
import DetailsRightBar from '../parcials/DetailsRightBar';
import { SiteContext } from '../../backend/context/ContextProvider';
import HeadlineScroll from '../parcials/HeadlineScroll';

const PostDetails = () => {
    const { MAIN_URL, loading, setLoading, loggedinAdmin } = useContext(SiteContext);
    return (
        <>
            <div className='container mx-auto'>
                <HeadlineScroll />


                <section className='flex flex-col md:flex-row justify-between px-2 my-4 gap-4 md:gap-3'>

                    <div className='w-full md:w-9/12 lg:w-9/12'>
                        <div className=''>
                            <h4 className='font-black text-md text-gray-700 my-2 py-1 px-2 shadow w-28 border'>বাংলাদেশ</h4>
                            <div className=''>
                                <h4 className='font-black text-3xl text-gray-700 py-2'>চিকিৎসার জন্য আমানকে বিদেশ যেতে অনুমতি</h4>
                                <div className='flex items-center justify-between'>
                                    <div className=' py-2'>
                                        <h4 className='font-black text-md'>আন্তর্জাতিক ডেস্ক</h4>
                                        <p className='text-sm'>০৮ মে ২০২৪, ০৯:৪৭ এএম</p>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-3'>
                                            <div className="hidden md:block lg:block xl:block flex items-center">
                                                <i className="fa-brands fa-facebook text-2xl text-blue-600 me-2"></i>
                                                <i className="fa-brands fa-instagram text-2xl text-red-600 me-2"></i>
                                                <i className="fa-brands fa-youtube text-2xl text-red-600 me-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="w-full" src={`${MAIN_URL}/images/news-1.webp`} alt="Logo" loading="lazy" />
                                <p className='py-2 font-black'>ছবি: সংগৃহীত</p>
                            </div>
                            <div className='my-4 border-t'>
                                <p className='text-md leading-8 p-1 text-justify'>প্রতিবেদনে বলা হয়, অ্যাস্ট্রাজেনেকার তৈরি কোভিড টিকা 'কোভিশিল্ড' এবং 'ভ্যাক্সজেভরিয়া'র পার্শ্বপ্রতিক্রিয়া নিয়ে বিভিন্ন মহলে বিতর্ক তৈরি হয়েছে । এ কারণে বিশ্বব্যাপী কোভিড টিকা তুলে নিচ্ছে অ্যাস্ট্রাজেনেকা। অর্থাৎ বাজারে আর পাওয়া যাবে না অ্যাস্ট্রাজেনেকার করোনা টিকা। ইতিমধ্যেই 'ভ্যাক্সজেভরিয়া' টিকা তুলে নেওয়ার প্রক্রিয়া শুরু করেছে প্রতিষ্ঠানটি।

                                    এক বিবৃতিতে অ্যাস্ট্রাজেনেকা জানিয়েছে, করোনার ভ্যাকসিন আর তৈরি করা হচ্ছে না। এর সাপ্লাই বা বণ্টনও হচ্ছে না। বাণিজ্যিক কারণেই সংস্থা সমস্ত দেশ থেকে করোনা টিকা প্রত্যাহার করে নেয়ার সিদ্ধান্ত নিয়েছে।

                                    সম্প্রতি ব্রিটিশ আদালতে জমা দেওয়া এক নথিতে অ্যাস্ট্রাজেনেকা বলেছে, তাদের তৈরি করোনার টিকার কারণে টিটিএসের লক্ষণ দেখা যেতে পারে।

                                    আদালতে নথি জমা দেবার পর গত ৩০ এপ্রিল এক বিবৃতিতে অ্যাস্ট্রাজেনেকার মুখপাত্র বলেছেন, ‘যারা প্রিয়জনকে হারিয়েছেন এবং যাদের শারীরিক সমস্যা তৈরি হয়েছে, তাদের জন্য আমাদের সমবেদনা। রোগীদের সুরক্ষা আমাদের কাছে সবচেয়ে বেশি প্রাধান্য পায়। ভ্যাকসিনসহ বিভিন্ন ওষুধ যাতে নিরাপদে সবাই ব্যবহার করতে পারেন, সেটা সুনিশ্চিত করাই আমাদের লক্ষ্য।’

                                    যদিও ভ্যাকসিনে পার্শ্বপ্রতিক্রিয়ার সঙ্গে বাজার থেকে ভ্যাকসিন তুলে নেওয়ার কোনো সম্পর্ক নেই বলেই দাবি করেছে অ্যাস্ট্রাজেনেকা।</p>
                            </div>

                        </div>


                    </div>

                    {/* Right side bar */}
                    <DetailsRightBar />
                </section>

                <section className='border-t-2'>
                    <h4 className='my-2 px-2 font-black text-2xl'>আরও খবর পড়ুন:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2  py-4 my-2">
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
                </section>
            </div>
        </>
    );
};

export default PostDetails;