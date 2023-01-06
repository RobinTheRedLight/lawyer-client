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
            <div className="navbar bg-accent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <div>
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
                                                <span>{user?.displayName}</span>
                                                <Link onClick={handleLogOut} className=' pt-3 block'>Logout</Link>
                                            </>
                                            :
                                            <>
                                                <Link className=' pt-3 block' to='/login'>Login</Link>
                                                <Link className=' pt-3 block' to='/register'>Register</Link>
                                            </>
                                    }


                                </div>

                            </div>
                            <Link className='pt-3' to='/courses'>Courses</Link>
                            <Link className='pt-3'>FAQ</Link>
                            <Link className='pt-3' to='/Blog'>Blog</Link>
                        </ul>
                    </div>
                    <Link className=' font-mono text-white btn btn-ghost normal-case sm:text-2xl' to='/'>Learn With Robin</Link>
                    <div className="w-10">
                        <img src="logo.png" />
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white">
                        <div className='flex'>
                            <div className='pt-1'>
                                {
                                    user?.uid ?
                                        <>
                                            <span>Welcome, {user?.displayName}</span>
                                            <Link onClick={handleLogOut} className=' text-xl pt-1 px-3'>Logout</Link>
                                        </>
                                        :
                                        <>
                                            <Link className='text-xl pt-1 px-3' to='/login'>Login</Link>
                                            <Link className='text-xl pt-1 px-3' to='/register'>Register</Link>
                                        </>
                                }


                            </div>
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
                        </div>
                        <Link className=' text-xl pt-1 px-3' to='/courses'>Courses</Link>
                        <Link className=' text-xl pt-1 px-3'>FAQ</Link>
                        <Link className=' text-xl pt-1 px-3' to='/Blog'>Blog</Link>
                    </ul>
                </div>
                <div className="navbar-end">

                    <div>
                        <label className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;
