import React, { useEffect } from "react";
import car1 from "../assets/bg-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { GetNewCars, Selectedcar, SetIntial } from "../Slices/Carslice";

function Dashboard() {
  const selectedText = useSelector((state) => state.car.SelectedCar);
  const cardata = useSelector((state) => state.car.CarData);
  const NewCars = useSelector((state) => state.car.NewCars);
  const checklogin = useSelector((state) => state.user);
  console.log(checklogin);
  console.log(NewCars);
  const dispatch = useDispatch();
  const nav = useNavigate();

  console.log(cardata);

  const options = cardata.map((x) => x.CarName);

  console.log(options);

  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const HandleSelectCar = (value) => {
    dispatch(Selectedcar(value));
    nav("/view");
  };

  useEffect(() => {
    dispatch(GetNewCars());
  }, []);

  const HandleSell = () => {
    if (checklogin.Islogin) {
      nav("/add");
    } else {
      nav("/register");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl text-left dark:text-white">
            Find your Dream Car
          </h1>
          <p className="mb-6 text-lg font-normal text-left text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Buy car
            </h2>
            <form className="mt-8 space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Enter car Name
                </label>
                <Autocomplete
                  value={value}
                  onChange={(e, newValue) => HandleSelectCar(newValue)}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={options}
                  renderInput={(params) => (
                    <TextField {...params} label="Controllable" />
                  )}
                />
              </div>
            </form>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sell your car
            </h2>

            <button
              type="button"
              onClick={HandleSell}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              sell
            </button>
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h1 className="md:mb-20 text-3xl font-extrabold text-gray-900 dark:text-white text-left md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              ALL cars
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
                    <Link to="/view">
                      {" "}
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        View ALL
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {NewCars.length > 0 &&
                    NewCars.map((ele, idx) => {
                      return (
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                                {ele.km_driven} km . {ele.fuel_type}
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
    </section>
  );
}

export default Dashboard;
