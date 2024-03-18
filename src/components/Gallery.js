import React, { useEffect } from "react";
import logo from "../assets/bg-1.jpg";
import Accordian from "./Accordian";
import Newcomp from "./Newcomp";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurentCarView } from "../Slices/Carslice";

function Gallery() {
  const dispatch = useDispatch();

  const currentCar = useSelector((state) => state.car.UserView);

  console.log(currentCar);

  const { id } = useParams();

  useEffect(() => {
    dispatch(CurentCarView(id));
  }, [id]);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          {currentCar.length > 0 && (
            <h1 className="md:mb-20 text-3xl font-extrabold text-gray-900 dark:text-white text-left md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                {currentCar[0].CarName}
              </span>{" "}
            </h1>
          )}

          <div
            role="status"
            className="space-y-5 animate-pulse md:space-y-0 md:space-x-4 rtl:space-x-reverse md:flex md:items-center"
          >
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-0">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg   p-8 md:p-0">
                  <div className="grid gap-4">
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {currentCar.length >0 && (

              <section className="bg-white dark:bg-gray-900">

              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-0">
                 <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                   <h2 className=" md:w-96 text-gray-900 text-left dark:text-white text-2xl font-extrabold mb-2">
                     {currentCar[0].registration_year} {currentCar[0].CarName} {currentCar[0].CarModel}
                   </h2>
                   <h2 className="text-gray-900 text-left dark:text-white  text-24 font-bold mb-2">
                   {currentCar[0].km_driven}km · {currentCar[0].fuel_type} · {currentCar[0].transmission}
                   </h2>
                   
                   <h2 className="text-gray-900 text-left dark:text-white text-24 font-bold mb-2">
                   {currentCar[0].car_location}
                   </h2>
 
                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                   <div className="md:flex justify-between items-center">
                     <h2 className="text-gray-900 text-left dark:text-white text-24 font-bold mb-2">
                     {currentCar[0].CarPrice}
                     </h2>
 
                     <button
                       type="button"
                       className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                     >
                       <svg
                         className="w-4 h-4 me-2"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor"
                         viewBox="0 0 18 19"
                       >
                         <path
                           fill-rule="evenodd"
                           d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                           clip-rule="evenodd"
                         />
                       </svg>
                       Contact
                     </button>
                   </div>
                 </div>
               </div>
             </section>
            )}
         
           
          </div>
        </div>
      </section>
     {currentCar.length>0 && (
      <Newcomp car={currentCar[0]} />
     )} 
    </>
  );
}

export default Gallery;
