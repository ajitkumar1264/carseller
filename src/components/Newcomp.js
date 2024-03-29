import React from "react";
import { useDispatch } from "react-redux";
import { Order } from "../Slices/UserSlice";

function Newcomp({ car }) {

  const dispatch=useDispatch();

  const HandleOrder=()=>{
   
    dispatch(Order(car));
  }
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-0">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a href="#">
              <h5 className="mb-8 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Contact Details
              </h5>
            </a>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    Contact Name
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.name}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    Email
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.email}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2  text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Contactno
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.contactno}
                  </p>
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-0">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a href="#">
              <h5 className="mb-8 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Car OverView
              </h5>
            </a>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    Registration Year
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.registration_year}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    Fuel Type
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.fuel_type}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2  text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Km driven
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.km_driven}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Transmission
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.transmission}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    No. of Owner
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.num_owners}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    RTO
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.rto}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    Car Location
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.car_location}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    Emission Standard
                  </h5>
                  <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                    {car.emission_standard}
                  </p>
                </a>
              </div>
            </div>
            <button
            type="button"
            onClick={HandleOrder}
            class="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Order
          </button>
          </div>
       
        </div>
      </section>
    </>
  );
}

export default Newcomp;
