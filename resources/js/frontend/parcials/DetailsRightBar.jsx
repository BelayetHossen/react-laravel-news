import { useContext, useState, useEffect } from 'react';
import { SiteContext } from '../../backend/context/ContextProvider';
import DistrictSearch from './DistrictSearch';
import { Link } from 'react-router-dom';

const DetailsRightBar = () => {
    const { MAIN_URL, loading, setLoading, handlePopulerClick, nextFourPost, popularFourPosts } = useContext(SiteContext);

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <>
            <div className='flex flex-col gap-2 w-full md:w-3/12 lg:w-3/12'>
                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-4.gif`} alt="Logo" loading="lazy" />
                </div>

                {/* Tab  */}
                <div className="flex flex-col my-3">
                    <div className="flex">
                        <button
                            className={`w-1/2 px-4 py-2 bg-gray-200 ${activeTab === 1 ? 'bg-red-400' : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            সর্বশেষ
                        </button>
                        <button
                            className={`w-1/2 px-4 py-2 bg-gray-200 ${activeTab === 2 ? 'bg-red-400' : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            পাঠকের পছন্দ
                        </button>
                    </div>
                    <div className="border border-gray-300 p-4">

                        {activeTab === 1 &&
                            <div className='flex flex-col gap-2'>
                                {
                                    nextFourPost?.map((item, index) => (
                                        <Link to={`/details/${item.slug}`} key={item.id}>
                                            <div className='flex items-center gap-2 border-b-2 py-3' onClick={() => handlePopulerClick(item.id)}>
                                                <img className="w-1/3" src={`${MAIN_URL}/images/posts/${item.photo}`} alt="Logo" loading="lazy" />
                                                <h4 className='text-sm text-gray-700 hover:text-red-500 py-1'>{item.title}</h4>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        }
                        {activeTab === 2 &&
                            <div className='flex flex-col gap-2'>
                                {
                                    popularFourPosts?.map((item, index) => (
                                        <Link to={`/details/${item.slug}`} key={item.id}>
                                            <div className='flex items-center gap-2 border-b-2 py-3' onClick={() => handlePopulerClick(item.id)}>
                                                <img className="w-1/3" src={`${MAIN_URL}/images/posts/${item.photo}`} alt="Logo" loading="lazy" />
                                                <h4 className='text-sm text-gray-700 hover:text-red-500 py-1'>{item.title}</h4>
                                            </div>
                                        </Link>

                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>

                <DistrictSearch />

                <div className=''>
                    <img className="w-full" src={`${MAIN_URL}/images/ad-5.png`} alt="Logo" loading="lazy" />
                </div>
            </div>
        </>
    );
};

export default DetailsRightBar;