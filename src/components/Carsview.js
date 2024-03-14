import React from "react";
import Newcomp from "./Newcomp";
import { useDispatch, useSelector } from "react-redux";
import car1 from "../assets/bg-1.jpg";
import car2 from "../assets/bg-2.jpg";
import car3 from "../assets/bg-3.jpg";
import { SelecteCity } from "../Slices/Carslice";

function Carsview() {
  const cardata = useSelector((state) => state.car.CarData);
  const dispatch=useDispatch();
  const selectedText=useSelector((state=>state.SelectedCity))

  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h1 class="md:mb-20 text-3xl font-extrabold text-gray-900 dark:text-white text-left md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Kia Seltos
            </span>{" "}
          </h1>

          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-0">
              <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <div className="flex justify-between">
                  <h5 class="mb-8 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Car OverView
                  </h5>

                  <div className="flex gap-8">
                    <form class="max-w-sm mx-auto">
                      <select
                        id="countries"
                        onChange={(e)=>dispatch(SelecteCity(e.target.value))}
                        value={selectedText}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="ALL">ALL</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Chennai">Chennai</option>
                      </select>
                    </form>

                    <form class="max-w-sm mx-auto">
                      <select
                        id="countries"
                        
                      
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cardata.length > 0 &&
                    cardata.map((ele, idx) => {
                      return (
                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                            <img
                              class="p-8 rounded-t-lg"
                              src={car1}
                              alt="product image"
                            />
                          </a>
                          <div class="px-5 pb-5">
                            <a href="#">
                              <h5 class="text-xl text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                                {ele.registration_year}, {ele.CarName}
                              </h5>
                              <h3 class="text-24 text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                                {ele.km_driven} km . {ele.fuel_type} .{" "}
                                {ele.transmission}
                              </h3>
                            </a>

                            <div class="flex mt-5 items-center justify-between">
                              <span class="text-xl font-bold text-gray-900 dark:text-white">
                                {ele.CarPrice}
                              </span>
                              <a
                                href="#"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Add to cart
                              </a>
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
