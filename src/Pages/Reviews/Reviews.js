import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Reviews = () => {
    const [reviewData, setreviewData] = useState([]);
    const { user, loading } = useContext(AuthContext);

    const url = `http://localhost:5000/review?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setreviewData(data))
    }, [loading])

    if (loading) {
        return <h1 className='text-5xl flex items-center justify-center'>Loading...</h1>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviewData.filter(odr => odr._id !== id);
                        setreviewData(remaining);
                    }
                })
        }
    }

    console.log(reviewData)
    return (
        <div className='p-5'>
            {
                reviewData.length !== 0 ?
                    <div>
                        <h2 className="text-4xl pb-2 font-mono">My reviews</h2>
                        <div className='grid grid-cols-3 gap-4 p-5'>
                            {
                                reviewData.map(data =>
                                    <div key={data._id}>
                                        <div className="card w-96 bg-base-100 shadow-xl border-2 border-white rounded-lg">
                                            <div className="card-body">
                                                <h2 className="card-title justify-center"><span className=''>Service:</span>{data.serviceName}</h2>
                                                <p> <span className=''>Review:</span> {data.message}</p>
                                                <div className="card-actions justify-around">
                                                    <button className="btn btn-primary">Edit</button>
                                                    <button onClick={() => handleDelete(data._id)} className="btn btn-primary">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    :
                    <h1 className='text-5xl flex items-center justify-center'> No Review Found</h1>
            }
        </div>
    );
};

export default Reviews;