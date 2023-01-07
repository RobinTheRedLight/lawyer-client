import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const LoginPage = () => {
    const [error, setError] = useState('');
    useTitle('Login');
    const { signIn, setLoading, providerLogin, loading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Log in failed');
                }
            })
            .catch(error => setError(error.message))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Log in failed');
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    if (loading) {
        return <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>
            70%
        </div>

    }
    return (
        <div className='p-5'>
            <div className='text-center'>
                <h1 className='p-6 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300'>Please Login !</h1>
            </div>
            <div className='flex justify-center mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input type="email" name="email" placeholder="Enter email" required className="w-full input input-bordered" />
                        </label>
                    </div>

                    <div className="form-control" >
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">
                            <span>Password</span>
                            <input name="password" type="password" placeholder="Enter Password" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='mt-2'>
                        <p>Don't have an account yet? <Link to='/register' className="text-blue-400 underline ">Register</Link></p>
                    </div>
                    <div>
                        <p className="text-red-700">{error}</p>
                    </div>
                    <button className=" btn btn-accent mt-3">Login</button>

                </form>
            </div>
            <p className='text-center text-lg'>or login with</p>
            <div className='flex justify-center pt-5'>
                <div className='px-3'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle /></button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
