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
                    <div className="hero h-96" style={{ backgroundImage: `url("1.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-slate-200 mb-5 text-5xl font-bold">Robin's Law Desk</h1>
                                <p className="font-mono text-slate-200 mb-5">Our goal is to provide high-quality legal services that help our clients to achieve their goals and resolve their legal issues.</p>

                            </div>
                        </div>
                    </div>

                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">Hello there</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="stats bg-primary text-primary-content">

                        <div className="stat">
                            <div className="stat-title">Account balance</div>
                            <div className="stat-value">$89,400</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm btn-success">Add funds</button>
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Current balance</div>
                            <div className="stat-value">$89,400</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm">Withdrawal</button>
                                <button className="btn btn-sm">deposit</button>
                            </div>
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