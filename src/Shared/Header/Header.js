import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const notify = () => toast.error('Log in First', { duration: 1000 });
    const alertUser = () => {
        alert("Log in first!");
    }

    return (
        <div>
            <div className="navbar bg-base-100 border-2 border-white rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <div>
                                <Link className='pt-3' to='/services'>Services</Link>
                                <div className='pt-1'>
                                    <Link>
                                        {user?.photoURL ?
                                            <img className='h-8 rounded-full' src={user?.photoURL} alt="" />
                                            :
                                            <>
                                                <h1 onClick={alertUser} className='text-xl'><FaUser></FaUser></h1>
                                                <Toaster />
                                            </>

                                        }
                                    </Link>
                                </div>
                                <div>
                                    {
                                        user?.uid ?
                                            <>
                                                <Link onClick={handleLogOut} className=' pt-3 block'>Logout</Link>
                                                <Link className='pt-3' to='/review'>My reviews</Link>
                                                <Link className='pt-3' to='/addservice'>Add service</Link>

                                            </>
                                            :
                                            <>
                                                <Link className=' pt-3 block' to='/login'>Login</Link>
                                                <Link className=' pt-3 block' to='/register'>Register</Link>
                                            </>
                                    }


                                </div>

                            </div>
                            <Link className='pt-3' to='/Blog'>Blog</Link>
                        </ul>
                    </div>
                    <Link className=' font-mono text-white btn btn-ghost normal-case sm:text-2xl' to='/'>Robin's Law Desk</Link>
                    <div className="w-10">
                        <img src="logo.png" />
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white">

                        <Link className=' text-xl pt-1 px-3' to='/Blog'>Blog</Link>
                        <Link className=' text-xl pt-1 px-3' to='/services'>Services</Link>
                        <div className='pt-1'>
                            <Link>
                                {user?.photoURL ?
                                    <img title={user.displayName} className='h-8 rounded-full' src={user?.photoURL} alt="" />
                                    :
                                    <>
                                        <h1 onClick={notify} className='text-xl pt-1 px-3'><FaUser></FaUser></h1>
                                        <Toaster />
                                    </>
                                }
                            </Link>
                        </div>
                        <div className='pt-1'>
                            {
                                user?.uid ?
                                    <>
                                        <Link onClick={handleLogOut} className=' text-xl pt-1 px-3'>Logout</Link>
                                        <Link className=' text-xl pt-1 px-3' to='/review'>My reviews</Link>
                                        <Link className=' text-xl pt-1 px-3' to='/addservice'>Add service</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='text-xl pt-1 px-3' to='/login'>Login</Link>
                                        <Link className='text-xl pt-1 px-3' to='/register'>Register</Link>
                                    </>
                            }
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </div >
    );
};

export default Header;
