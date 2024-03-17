import React,{useState} from "react";

function NewCaradd() {


  const [NewCardata, setNewCardata] = useState({});

  const handleOnchange=(e)=>{
    e.preventDefault();
    setNewCardata({...NewCardata,[e.target.name]:e.target.value})
  }


  const handleOnsubmit=()=>{
    console.log(NewCaradd)
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
                  name="mobileno"
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
                  Registration Year
                </label>
                <input
                  type="text"
                  id="email"
                  name="Ryear"
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
                  Fuel Type
                </label>
                <select
                  id="countries"
                  name="country"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
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
                  type="text"
                  id="password"
                  name="Kmdriven"
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
                  Fuel Type
                </label>
                <select
                  id="countries"
                  name="typecar"
                  onChange={handleOnchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
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
                  name="Owner"
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
                  name="RTO"
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
                  name="CarLocation"
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
                  name="Price"
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
                  type="file"
                />
              </div>
            </div>

            <button
              type="submit"
              onSubmit={handleOnsubmit}
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
