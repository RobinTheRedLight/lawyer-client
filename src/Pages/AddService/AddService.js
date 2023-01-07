import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const AddService = () => {
    const allService = useLoaderData();

    const handleAddService = (sdata) => {
        const { _id, price, picture, name, description } = sdata;
        console.log(_id, price, picture, name, description);

        const addService = {
            service: _id,
            serviceName: name,
            price: price,
            image: picture,
            customer: name,
            description: description
        }
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully')
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div className='p-2 grid grid-cols-3 gap-4'>
            {
                allService.map(data =>
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
                                        <Link>
                                            <button onClick={() => handleAddService(data)} className="btn btn-primary">Add Service</button>
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

export default AddService;