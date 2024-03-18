import React from "react";
import Newcomp from "./Newcomp";
import { useDispatch, useSelector } from "react-redux";
import car1 from "../assets/bg-1.jpg";
import car2 from "../assets/bg-2.jpg";
import car3 from "../assets/bg-3.jpg";
import { SelecteCity } from "../Slices/Carslice";
import { Link } from "react-router-dom";

function Carsview() {
  const cardata = useSelector((state) => state.car.CarData);
  const dispatch=useDispatch();

  const selectedText=useSelector((state=>state.car.SelectedCity));

  const selectedCar = useSelector((state) => state.car.SelectedCar);
  console.log(cardata);


  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h1 className="md:mb-20 text-3xl font-extrabold text-gray-900 dark:text-white text-left md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {selectedCar}
            </span>{" "}
          </h1>

          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-0">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <div className="flex justify-between">
                  <h5 className="mb-8 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Car OverView
                  </h5>

                  <div className="flex gap-8">
                    <form className="max-w-sm mx-auto">
                      <select
                        id="countries"
                        onChange={(e)=>dispatch(SelecteCity(e.target.value))}
                        value={selectedText}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="ALL">ALL</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Chennai">Chennai</option>
                      </select>
                    </form>

                    <form className="max-w-sm mx-auto">
                      <select
                        id="countries"
                        
                      
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                      </select>
                    </form>
                  </div>
                </div>
               
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cardata.length > 0 &&
                    cardata.map((ele, idx) => {
                      return (
                        <div key={idx} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                            <img
                              className="p-8 rounded-t-lg"
                              src={car1}
                              alt="product image"
                            />
                          </a>
                          <div className="px-5 pb-5">
                            <a href="#">
                              <h5 className="text-xl text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                                {ele.registration_year}, {ele.CarName}
                              </h5>
                              <h3 className="text-24 text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                                {ele.km_driven} km . {ele.fuel_type} .{" "}
                                {ele.transmission}
                              </h3>
                            </a>

                            <div className="flex mt-5 items-center justify-between">
                              <span className="text-xl font-bold text-gray-900 dark:text-white">
                                {ele.CarPrice}
                              </span>
                              <Link
                                to={`/car/${ele.id}`}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Carsview;
