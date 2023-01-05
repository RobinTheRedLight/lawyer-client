import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Home = () => {
    const allServices = useLoaderData();
    return (
        <div className='grid grid-cols-12 gap-4 py-4'>

            <div className='col-span-8 border-2 border-white rounded-lg'>
                <div className='p-2'>
                    <div className='border-2 border-white rounded-lg p-1'>
                        <div className="hero h-96" style={{ backgroundImage: `url("1.jpg")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="text-slate-200 mb-5 text-5xl font-bold">Robin's Law Desk</h1>
                                    <p className="font-mono text-slate-200 mb-5">Our goal is to provide high-quality legal services that help our clients to achieve their goals and resolve their legal issues.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className="p-10 g-base-200 border-2 border-white rounded-lg">
                            <div className="grid grid-cols-3 gap-4 ">
                                <div className='col-span-1 border-r-4 flex items-center'>
                                    <h1 className="text-5xl font-bold">About Us</h1>
                                </div>
                                <p className="text-justify col-span-2 ">As a law firm, we offer a variety of legal services to meet the needs of our clients. Our team of attorneys is dedicated to providing high-quality legal representation and advice to individuals and businesses alike. We specialize in a range of areas, including criminal law, civil litigation, family law, and corporate law, to name a few. Our attorneys have extensive experience and are committed to helping our clients navigate the legal system and achieve their goals. Whether you need representation in court, assistance with legal documents, or simply need advice on a legal matter, we are here to help.</p>
                            </div>
                        </div>
                    </div>

                    <div className="stats stats-vertical lg:stats-horizontal shadow">

                        <div className="stat">
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='col-span-4'>
                <div className='pl-2 pr-2'>
                    <div className='border-2 border-white rounded-lg p-2'>
                        <h2 className='font-mono text-5xl'>Services</h2>
                    </div>
                </div>
                <div className='p-2'>
                    {
                        allServices.slice(0, 3).map(data =>
                            <div className='py-2' key={data._id}>
                                <div className='border-2 border-white rounded-lg'>
                                    <div className="card  bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <PhotoProvider>
                                                <div className="foo">
                                                    <PhotoView src={data.picture}>
                                                        <img src={data.picture} alt="" className="rounded-xl w-40" />
                                                    </PhotoView>
                                                </div>
                                            </PhotoProvider>

                                        </figure>
                                        <div className="card-body items-center text-justify">
                                            <h2 className="font-mono card-title">{data.name}</h2>
                                            <p className='font-serif'>
                                                {
                                                    data.description.length > 100 ? data.description.slice(0, 100) + '...' :
                                                        data.description
                                                }
                                            </p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='py-2'>
                    <button className="w-96 btn btn-primary border-2 border-white rounded-lg">See All</button>
                </div>
            </div>

        </div>
    );
};

export default Home;