import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { AddCarData, AddImage } from "../Slices/Carslice";
import { useNavigate } from "react-router-dom";

function NewCaradd() {


  const [NewCardata, setNewCardata] = useState({});
  const [CarImage, setCarImage] = useState(null);
  const [idx, setidx] = useState(10);
  const nav=useNavigate();
  const dispatch=useDispatch();

  const handleOnchange=(e)=>{
    e.preventDefault();
    setNewCardata({...NewCardata,[e.target.name]:e.target.value})
  }


  const handleOnsubmit=(e)=>{
    e.preventDefault();
    setidx(idx+1);
    let alldata={...NewCardata,id:idx};
   
    dispatch(AddCarData(alldata))
    nav("/");

  }


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 className="text-gray-900 text-left dark:text-white text-3xl md:text-5xl font-extrabold mb-8">
            Register Here
          </h1>
          <hr className="my-6 border-blue-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <h2 className="text-4xl text-left font-bold dark:text-white md:mb-8">
            Personal Details
          </h2>

          <form className=" w-full ">
            <div className="grid md:grid-cols-3 gap-8 ">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="name"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleOnchange}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Contact No
                </label>
                <input
                  type="text"
                  id="password"
                  name="contactno"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </form>

          <h2 className="text-4xl text-left font-bold dark:text-white md:mb-8">
            Car Details
          </h2>

          <form className=" w-full ">
            <div className="grid md:grid-cols-3 gap-8 ">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                CarName
                </label>
                <input
                  type="text"
                  id="email"
                  name="CarName"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                CarModel
                </label>
                <input
                  type="text"
                  id="email"
                  name="CarModel"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                Registration Year
                </label>
                <input
                  type="number"
                  id="email"
                  name="registration_year"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Fuel Type
                </label>
                <select
                  id="countries"
                  name="fuel_type"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultChecked>Choose a country</option>
               
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Km driven
                </label>
                <input
                  type="number"
                  id="password"
                  name="km_driven"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                transmission
                </label>
                <select
                  id="countries"
                  name="transmission"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a transmission</option>
            
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                Emission Standard
                </label>
                <select
                  id="countries"
                  name="emission_standard"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a transmission</option>
            
                  <option value="BS4">BS4</option>
                  <option value="BS5">Bs5</option>
                  <option value="BS6">Bs6</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  No. of Owner
                </label>
                <input
                  type="text"
                  id="password"
                  name="num_owners"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  RTO
                </label>
                <input
                  type="text"
                  id="password"
                  name="rto"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Car Location
                </label>
                <input
                  type="text"
                  name="car_location"
                  onChange={handleOnchange}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="password"
                  name="CarPrice"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block h-10 align-middle text-center w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  onChange={(e)=>setCarImage(e.target.files[0])}
                  type="file"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={handleOnsubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewCaradd;
