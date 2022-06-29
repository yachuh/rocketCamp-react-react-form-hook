import React from "react";

const Form = () => {
    return(
        <div>
            <form>
                <label htmlFor="email">Email:
                    <input type={`text`} name={`email`} id={`email`} placeholder={`Enter your email`}/>
                </label>
                <label htmlFor="name">Name:
                    <input type={`text`} name={`name`} id={`name`} placeholder={`Enter your name`}/>
                </label>
                <label htmlFor="pwd">Password:
                    <input type={`password`} name={`pwd`} id={`pwd`} placeholder={`Enter your password`}/>
                </label>
                <label htmlFor="pwd2">Confirm password:
                <input type={`password`} name={`pwd`} id={`pwd2`} placeholder={`Enter your password again`}/>
                </label>
                <input type={`button`} value={`Register Now`}></input>
            </form>
        </div>
    );
}

export default Form;