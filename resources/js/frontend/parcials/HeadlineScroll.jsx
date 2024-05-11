import React from 'react';

const HeadlineScroll = () => {
    return (
        <>
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
        </>
    );
};

export default HeadlineScroll;