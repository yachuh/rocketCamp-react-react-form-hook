import React from "react";

const Form = () => {
    return(
        <div>
            <form className="flex flex-col space-y-2 w-1/3 p-10">
                <label htmlFor="email">Email:
                    <input className="mt-1 mb-2 px-2 py-2 border rounded-lg block w-full focus:border-black" type={`text`} name={`email`} id={`email`} placeholder={`Enter your email`}/>
                </label>
                <label htmlFor="name">Name:
                    <input className="mt-1 mb-2 px-2 py-2 border rounded-lg block w-full focus:border-black" type={`text`} name={`name`} id={`name`} placeholder={`Enter your name`}/>
                </label>
                <label htmlFor="pwd">Password:
                    <input className="mt-1 mb-2 px-2 py-2 border rounded-lg block w-full focus:border-black" type={`password`} name={`pwd`} id={`pwd`} placeholder={`Enter your password`}/>
                </label>
                <label htmlFor="pwd2">Confirm password:
                <input className="mt-1 mb-2 px-2 py-2 border rounded-lg block w-full focus:border-black" type={`password`} name={`pwd`} id={`pwd2`} placeholder={`Enter your password again`}/>
                </label>
                <input className="bg-blue-500 text-white rounded-lg px-2 py-2 w-full cursor-pointer hover:bg-blue-700" type={`button`} value={`Register Now`}></input>
                <a className="text-center" href="../../public/index.html">登入</a>
            </form>
        </div>
    );
}

export default Form;