import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Password() {

    let [Forgot, setForgot] = useState([])
    let go =useNavigate()

    let inputvalue = (e) => {
        setForgot(
            { ...Forgot, [e.target.name]: e.target.value }
        )
    }


    //    allusers ---------------

    let [already, setalready] = useState([])

    useEffect(() => {
        allusers()
    }, [])


    let allusers = () => {
        axios.get("http://localhost:5000/allusers").then((res) => {
            if (res.data.status) {
                setalready(res.data.ourusers)
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    // filteruser ------
    let submitbtn = () => {
        let filtereddata = already.filter(data => data.email == Forgot.email)
        let currentuser = filtereddata[0]

        if (!currentuser) {
            alert("not a user")
        }
        else if (Forgot.password != Forgot.confirmpassword) {
            alert("password not match")
        }
        else {
            axios.post("http://localhost:5000/Forgot", { currentuser, Forgot }).then((res) => {
                if (res.data.status) {
                    alert(res.data.msg)
                    go("/")
                }
                else {
                    alert(res.data.msg)
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }




    return (
        <div>
            <div className='sign'>
                <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 login">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-800">
                            Forgot Your Password
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input onChange={inputvalue}
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        New Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input onChange={inputvalue}
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>


                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input onChange={inputvalue}
                                        id="password"
                                        name="confirmpassword"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button onClick={submitbtn}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Forgot Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Password
