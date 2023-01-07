import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Services = () => {
    useTitle('All Services');
    const allServices = useLoaderData();
    return (
            <div className='p-2 grid grid-cols-3 gap-4'>
                {
                    allServices.map(data =>
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
                                        <div className='grid  grid-cols-5 gap-3'>
                                            <h2 className="font-mono card-title col-span-3">{data.name}</h2>
                                            <p className='font-mono col-span-2'>(Fee: {data.price})</p>
                                        </div>
                                        <p className='font-mono'>
                                            {
                                                data.description.length > 100 ? data.description.slice(0, 100) + '...' :
                                                    data.description
                                            }
                                        </p>
                                        <div className="card-actions">
                                            <Link to={`/services/${data._id}`}>
                                                <button className="btn btn-primary">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
    );
};

export default Services;