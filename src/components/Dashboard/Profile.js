import React from 'react'
import {useAuthState, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import avatar from '../../images/avatar.png'
import NotFound from '../NotFound/NotFound';

export default function Profile() {


    const [user] = useAuthState(auth);
    console.log(user);
    const [updateProfile, updating, updatEerror] = useUpdateProfile(auth);

    if (updatEerror) {
        return <NotFound />;
      }
    
    if (updating) {
        return <Loading></Loading>;
      }

    const handleProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;

        updateProfile({displayName: name, phoneNumber: phone});
    };


    return (
        <>
            <div className="flex justify-center p-4 lg:p-16  bg-white dark:bg-gray-900">
                <div className='card shadow-lg p-5 md:p-10 dark:shadow-inner dark:shadow-pink-500'>
                    <div>
                        <h1 className="text-2xl font-bold text-black dark:text-current">My Profile</h1>
                        <hr className="mt-3 mb-3"/>
                    </div>

                    <div className="grid lg:grid-cols-3 mt-5 md:grid-cols-2 gap-y-8">
                        <div className="">
                            <img className="w-32 rounded-full ml-10"
                                src={
                                    user?.photoURL ? user.photoURL : avatar
                                }
                                alt=""/>
                            <label for="edit-profile" className="btn btn-accent btn-sm text-white font-semibold px-6 mt-8 ml-8">
                                Edit Profile
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-blue-700 ">Full Name</span>
                            </label>
                            <p className="font-semibold pl-1 mb-2 text-black dark:text-current">
                                {
                                user ?. displayName
                            }</p>

                            <label className="label">
                                <span className="label-text text-blue-700">Email</span>
                            </label>
                            <p className="font-semibold pl-1 mb-2 text-black dark:text-current">
                                {
                                user ?. email
                            }</p>

                            <label className="label">
                                <span className="label-text text-blue-700">Phone Number</span>
                            </label>
                            <p className="font-semibold pl-1 mb-2 text-black dark:text-current">
                                {
                                user ?. phoneNumber ? user.phoneNumber : '01701018652'
                            }</p>

                            <label className="label">
                                <span className="label-text text-blue-700">Last Visit</span>
                            </label>
                            <p className="font-semibold pl-1 mb-2 text-black dark:text-current">
                                {
                                user ?. metadata.lastSignInTime
                            } </p>
                        </div>
                    </div>

                    <div> {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="edit-profile" className="modal-toggle"/>
                        <div className="modal modal-bottom sm:modal-middle ">
                            <div className="modal-box bg-white dark:bg-gray-900 md:p-10">
                                <h3 className="font-bold text-lg text-black dark:text-current">
                                    Edit Profile
                                    <hr/>
                                </h3>
                                <form onSubmit={handleProfile}
                                    className=" overflow-visible mx-auto items-center text-center mt-2">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-blue-700">Name</span>
                                        </label>
                                        <input type="text" name="name"
                                            placeholder={
                                                user ?. displayName
                                            }
                                            className="input input-bordered input-accent w-full "/>

                                        <label className="label">
                                            <span className="label-text text-blue-700">Email
                                                <span className=" text-xs text-zinc-400">(Email Cannot Be Changed)</span>
                                            </span>
                                        </label>
                                        <input name="email" type="email"
                                            value={
                                                user ?. email
                                            }
                                            readOnly
                                            placeholder="Email"
                                            className="input input-bordered input-accent w-full"/>

                                        <label className="label">
                                            <span className="label-text text-blue-700">Phone</span>
                                        </label>
                                        <input name="phone" type="phone"
                                            value={
                                                user ?. phoneNumber
                                            }
                                            placeholder="phone"
                                            className="input input-bordered input-accent w-full "/>
                                    </div>
                                    <div className="modal-action">
                                        <label for="edit-profile" className="btn btn-sm ">
                                            Cancel
                                        </label>
                                        <button className="btn btn-success text-white btn-sm">Update</button>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
