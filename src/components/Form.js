import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Form() {

    const [ data, setData ] = useState();
    
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState,
        formState:{errors}
    } = useForm({
        defaultValues: {
            email:"",
            name:"",
            pawwsord:""
        }
    });
    
    const name = watch("name");

    const onSubmit = (data) => {setData(JSON.stringify(data))};

    useEffect( ()=> {
        console.log("useEffect", formState.errors)
    },[formState])

    return(
        <div className="my-0 mx-auto w-6/12">
            <h1 className="text-3xl text-blue-500 text-center">Hello {name}!</h1>
            {/* form */}
            <form 
                className="flex flex-col space-y-2 w-full p-10"
                onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email:
                    <input 
                        className="mt-1 px-2 py-2 border rounded-lg block w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600" 
                        type={`text`} 
                        id={`email`} 
                        name={`email`}
                        placeholder={`Enter your email`}
                        {...register("email",{
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}
                    />
                    <p className="mt-1 text-sm text-pink-500">{errors.email?.message}</p>
                </label>
                <label htmlFor="name">Name:
                    <input 
                        className="mt-1 px-2 py-2 border rounded-lg block w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600" 
                        type={`text`} 
                        name={`name`} 
                        id={`name`} 
                        placeholder={`Enter your name`}
                        {...register("name", {required: "Name is required"})}
                    />
                    <p className="mt-1 text-sm text-pink-500">{errors.name?.message}</p>
                </label>
                <label htmlFor="pwd">Password:
                    <input 
                    className="mt-1 px-2 py-2 border rounded-lg block w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600" 
                    type={`password`} 
                    name={`pwd`} 
                    id={`pwd`} 
                    placeholder={`Enter your password`}
                    {...register("password", { 
                        required:"Password is required",
                        minLength: {
                         value: 6,
                         message: "Password must have at least 6 characters"
                        }
                    })}
                />
                <p className="mt-1 text-sm text-pink-500">{errors.password?.message}</p>
                </label>
                {/* <label htmlFor="pwd2">Confirm password:
                <input 
                    className="mt-1 px-2 py-2 border rounded-lg block w-full focus:border-black" 
                    type={`password`} 
                    name={`pwd`} 
                    id={`pwd2`} 
                    placeholder={`Enter your password again`}
                    {...register("password")}
                />
                </label> */}
                <input className="bg-blue-500 text-white rounded-lg px-2 py-2 w-full cursor-pointer hover:bg-blue-700" type={`submit`} value={`Register Now`}></input>
                <a className="text-center" href="../../public/index.html">登入</a>
            </form>
            {/* Change state after submissions */}
            <div>
                <h2>This is what you submit:</h2>
                <p>{data}</p>
            </div>
        </div>
    );
}