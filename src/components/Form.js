import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit } = useForm();
    return(
        <div>
            <form 
                className="flex flex-col space-y-2 w-1/3 p-10"
                onSubmit={handleSubmit((data)=> {
                    console.log(data);
            })}>
                <label htmlFor="email">Email:
                    <input 
                        className="mt-1 mb-2 px-2 py-2 border rounded-lg block w-full focus:border-black" 
                        type={`text`} 
                        id={`email`} 
                        name={`email`}
                        placeholder={`Enter your email`}
                        {...register("email")}
                    />
                </label>
                <label htmlFor="name">Name:
                    <input 
                        className="mt-1 mb-2 px-2 py-2 border rounded-lg block w-full focus:border-black" 
                        type={`text`} 
                        name={`name`} 
                        id={`name`} 
                        placeholder={`Enter your name`}
                        {...register("name", {required: true})}
                    />
                </label>
                <label htmlFor="pwd">Password:
                    <input 
                    className="mt-1 mb-2 px-2 py-2 border rounded-lg block w-full focus:border-black" 
                    type={`password`} 
                    name={`pwd`} 
                    id={`pwd`} 
                    placeholder={`Enter your password`}
                    {...register("password", { minLength: 6 })}
                />
                </label>
                {/* <label htmlFor="pwd2">Confirm password:
                <input 
                    className="mt-1 mb-2 px-2 py-2 border rounded-lg block w-full focus:border-black" 
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
        </div>
    );
}