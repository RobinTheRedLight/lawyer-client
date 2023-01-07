import React, { useRef, useContext, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Service = () => {
    useTitle('Service');
    const [reviewData, setreviewData] = useState([]);
    const componentRef = useRef();
    const singleService = useLoaderData();
    const { user, loading } = useContext(AuthContext);

    const url = `http://localhost:5000/reviews?serviceName=${singleService.name}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setreviewData(data))
    }, [])

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.Name.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: singleService._id,
            serviceName: singleService.name,
            price: singleService.price,
            image: user?.photoURL,
            customer: name,
            email,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }

    if (loading) {
        return <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>
            70%
        </div>

    }

    return (
        <div>
            <div ref={componentRef} className='p-5'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='w-full'><img src={singleService.picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center text-4xl font-mono">{singleService.name}</h2>
                        <p className='font-mono text-xl'>Fee: {singleService.price}</p>
                        <p className='text-justify p-4 font-mono'>{singleService.description}</p>
                    </div>
                </div>
            </div>

            <div className='p-5'>
                <div className='shadow-2xl'>
                    <h1 className='text-4xl font-semibold font-mono pt-5'>Review Section
                    </h1>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='pt-5 pr-3 pb-2 col-span-7'>
                            <h2 className="text-4xl pb-2 font-mono">All reviews</h2>
                            {
                                reviewData.length !== 0 ?
                                    <div className="overflow-x-auto w-full">
                                        <table className="table w-full">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Service</th>
                                                    <th>Details</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reviewData.map(data =>
                                                    <tr key={data._id}>
                                                        <td>
                                                            <div className="flex items-center space-x-3">
                                                                <div className="avatar">
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={data.image} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold">{data.customer}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {data.serviceName}
                                                        </td>
                                                        <th>
                                                            <button className="btn btn-ghost btn-xs">{data.message}</button>
                                                        </th>
                                                    </tr>
                                                )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    :
                                    <h2 className="flex items-center justify-center text-4xl p-2 font-mono">No reviews found</h2>
                            }
                        </div>
                        <div className='pt-5 pr-3 pb-2 col-span-5'>
                            <div className='border-l-4 border-white'>

                                {user?.uid ?
                                    <form onSubmit={handlePlaceOrder}>
                                        <h2 className="text-4xl pb-2 font-mono">Add your review</h2>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-2'>
                                            <input name="Name" type="text" placeholder="Name" className="input input-ghost w-full  input-bordered" />
                                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                        </div>
                                        <div className='p-2'>
                                            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                                        </div>

                                        <input className='btn' type="submit" value="Add review" />
                                    </form>
                                    :
                                    <>
                                        <Link to={'/login'}>
                                            <h1 className='text-sky-400 text-2xl flex items-center justify-center no-underline hover:underline'>Please login to add a review</h1>
                                        </Link>
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;