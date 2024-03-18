import React,{useState} from "react";
import usePost from "../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser, RegisterUser } from "../Slices/UserSlice";

function SignIn() {

  const [userData, setuserData] = useState({});
  const nav=useNavigate();
  const dispatch=useDispatch();

  const HandleOnchange=(e)=>{
    setuserData({...userData,[e.target.name]:e.target.value})
  }


  const HandleSubmit=async(e)=>{
    e.preventDefault()
    console.log(userData);
    const response=await usePost("/api/login",userData);
    if(response.status === 200)
    {
      alert("LoggedIn successfully");
      dispatch(LoginUser());
      nav("/");
    }
    else{
      alert("error")
    }
  }


  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl  w-1/3 lg:py-16">
          <div className="bg-gray-50  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-8">
              Login Here
            </h1>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  for="email"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="useremail"
                  onChange={HandleOnchange}
                  className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  for="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={HandleOnchange}
                  
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                onClick={HandleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
