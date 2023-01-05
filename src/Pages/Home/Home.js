import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Home = () => {
    const allServices = useLoaderData();
    return (
        <div className='grid grid-cols-12 gap-4 py-4'>
            <div className='col-span-8 pl-2'>
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
                <div className='pt-10'>
                    <div className="p-10 g-base-200 border-2 border-white rounded-lg">
                        <div className="grid grid-cols-3 gap-4 ">
                            <div className='col-span-1 border-r-4 flex items-center'>
                                <h1 className="text-5xl font-bold">About Us</h1>
                            </div>
                            <p className="text-justify col-span-2 ">As a law firm, we offer a variety of legal services to meet the needs of our clients. Our team of attorneys is dedicated to providing high-quality legal representation and advice to individuals and businesses alike. We specialize in a range of areas, including criminal law, civil litigation, family law, and corporate law, to name a few. Our attorneys have extensive experience and are committed to helping our clients navigate the legal system and achieve their goals. Whether you need representation in court, assistance with legal documents, or simply need advice on a legal matter, we are here to help.</p>
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <div className='border-2 border-white rounded-lg '>
                        <div className="p-5 stats stats-vertical lg:stats-horizontal shadow w-full">

                            <div className="stat">
                                <div className="stat-title">Clients</div>
                                <div className="stat-value">500+</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Cases</div>
                                <div className="stat-value">1000+</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Solved</div>
                                <div className="stat-value">800+</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <div className='border-2 border-white rounded-lg'>
                        <h1 className='text-5xl font-semibold font-mono pt-5'>Connect with Us
                        </h1>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='pt-10 pr-3 pb-2'>
                                <h1 className='text-4xl font-mono'>Location</h1>
                                <div className='pt-10 text-xl'>
                                    <p>Great Tower Corporate Building,</p>
                                    <p>21 Liberty Rashford,</p>
                                    <p>Suite 240 Techno,</p>
                                    <p>PA, USA 19375</p>
                                </div>
                            </div>
                            <div className='pt-10 pr-3 pb-2'>
                                <div className='border-l-4 border-white'>
                                    <h1 className='text-4xl font-mono'>Follow Us</h1>
                                    <div className="flex flex-col p-3">
                                        <div className='pt-3'>
                                            <Link className='flex justify-evenly btn'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                                <div>
                                                    <h3 className='text-2xl font-mono'>Twitter</h3>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='pt-3'>
                                            <Link className='flex justify-evenly btn'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                                                <div>
                                                    <h3 className='text-2xl font-mono'>YouTube</h3>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='pt-3'>
                                            <Link className='flex justify-evenly btn'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                                                <div>
                                                    <h3 className='text-2xl font-mono'>Facebook</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='col-span-4'>
                <div className='pl-2 pr-2'>
                    <div className='border-2 border-white rounded-lg p-2'>
                        <h2 className='font-mono font-semibold text-5xl'>Services</h2>
                    </div>
                </div>
                <div className='p-2'>
                    {
                        allServices.slice(0, 3).map(data =>
                            <div className='py-2' key={data._id}>
                                <div className='border-2 border-white rounded-lg'>
                                    <div className="card  bg-base-100 shadow-xl">
                                        <figure className="px-2 pt-2">
                                            <PhotoProvider>
                                                <div className="foo">
                                                    <PhotoView src={data.picture}>
                                                        <img src={data.picture} alt="" className="rounded-xl w-40" />
                                                    </PhotoView>
                                                </div>
                                            </PhotoProvider>

                                        </figure>
                                        <div className="card-body items-center text-justify pb-3">
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