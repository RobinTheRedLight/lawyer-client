import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Registration = () => {
    useTitle('Register');
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Log in failed');
                }
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    if (loading) {
        return <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>
            70%
        </div>

    }
    return (

        <div className='text-center p-5'>
            <div className='text-center'>
                <h1 className='p-6 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300'>Please Register!</h1>
            </div>
            <div className='flex justify-center mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="hidden sm:block label-text">Full Name</span>
                        </label>
                        <label className="input-group">
                            <span className='hidden sm:inline-flex'>Full Name</span>
                            <input name="name" type="text" placeholder="Full Name" required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="hidden sm:block label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span className='hidden sm:inline-flex'>Photo URL</span>
                            <input name="photoURL" type="text" placeholder="Phot URL" required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="hidden sm:block label-text">Email Address</span>
                        </label>
                        <label className="input-group">
                            <span className='hidden sm:inline-flex'>Your Email</span>
                            <input name="email" type="email" placeholder="Enter email" required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="hidden sm:block label-text">Password</span>
                        </label>
                        <label className="input-group">
                            <span className='hidden sm:inline-flex'>Password</span>
                            <input name="password" type="password" placeholder="Password" required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                        </label>
                    </div>

                    <div>
                        <p className="text-red-700">{error}</p>
                    </div>
                    <button className=" btn btn-accent mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;