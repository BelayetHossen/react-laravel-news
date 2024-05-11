import React from 'react';
import ReactPlayer from 'react-player';

const VideoSection = () => {
    return (
        <>
            <section className='bg-[#191818] text-white px-3 pt-3 pb-8 my-2'>
                <div className='flex items-center gap-2 p-2 border-b-4 border-red-600'>
                    <h3 className='font-black text-xl'>ভিডিও</h3>
                    <i className="fa-solid fa-play text-red-600 text-2xl"></i>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-3">

                        <div className='p-3 shadow hover:shadow-lg'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/mgUm-h73dqw?si=C0oWTGNd_M4FrKjx'
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                            <h4 className='font-black text-md py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                        </div>
                        <div className='p-3 shadow hover:shadow-lg'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/sl2M_RVbVm4?si=v5LNNGuZRUSqEJJR'
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                            <h4 className='font-black text-md py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                        </div>
                        <div className='p-3 shadow hover:shadow-lg'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/E_JJUrFD2ls?si=K3X37G1BghR8TybU'
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                            <h4 className='font-black text-md py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                        </div>
                        <div className='p-3 shadow hover:shadow-lg'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/6g1CanZCM4w?si=WhQ_9K9k2lQyaOVU'
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                            <h4 className='font-black text-md py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                        </div>
                        <div className='p-3 shadow hover:shadow-lg'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/mgUm-h73dqw?si=C0oWTGNd_M4FrKjx'
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                            <h4 className='font-black text-md py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                        </div>
                        <div className='p-3 shadow hover:shadow-lg'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/mgUm-h73dqw?si=C0oWTGNd_M4FrKjx'
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                            <h4 className='font-black text-md py-2'>হামাসের রকেট হামলা, ৩ ইসরায়েলি সেনা নিহত</h4>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoSection;