import React from 'react';

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="bg-white col-start-1 col-end-13">
        <header className="py-4 px-4 border-b border-gray-300">
          <span className="text-indigo-500 text-3xl font-bold">
            Stolen Bike
          </span>
        </header>
      </div>
      <div className="bg-white col-start-1 col-span-12 lg:col-span-6">
        <div className=" m-auto">
          <main className="mt-8 px-4">
            {/* Filters */}
            <div className="flex flex-col w-full mb-8">
              {/* form input */}
              <div className="mb-2 flex flex-col">
                <label htmlFor="q" className="hidden">
                  Search
                </label>
                <input
                  type="text"
                  name="q"
                  id="q"
                  placeholder="Search for nearby stolen bikes"
                  className="form-input focus:ring-0 focus:border-indigo-500 focus:border bg-gray-200 placeholder-gray-400 border-gray-300 px-4 py-3 rounded-md"
                />
              </div>

              <div className="flex flex-col md:flex-row md:space-x-2">
                <div className="mb-2 flex flex-col md:flex-grow">
                  <label htmlFor="start_date" className="hidden">
                    Start date
                  </label>
                  <input
                    type="text"
                    name="start_date"
                    placeholder="Start date"
                    id="start_date"
                    className="form-input focus:ring-0 focus:border-indigo placeholder-gray-400 border-gray-300 px-4 py-3 rounded-md"
                  />
                </div>

                <div className="mb-2 flex flex-col md:flex-grow">
                  <label htmlFor="end_date" className="hidden">
                    End date
                  </label>
                  <input
                    type="text"
                    placeholder="End Date"
                    name="end_date"
                    id="end_date"
                    className="form-input focus:ring-0 focus:border-indigo placeholder-gray-400 border-gray-300 px-4 py-3 rounded-md"
                  />
                </div>
                <div className="mb-2 ">
                  <button
                    type="button"
                    className="border-0 w-full bg-indigo-500 hover:bg-indigo-600 focus:ring-2 transition-all text-white px-4 py-3 rounded-md uppercase font-semibold"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col">
              {/* loading */}
              <div className="flex flex-row items-center justify-center space-x-2">
                <span className="text-gray-400">Loading</span>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              {/* resume results */}
              <div className="my-2">
                <p className="text-xl">
                  <span className="font-bold mr-1">4 results</span>
                  <span className="text-gray-400">for &apos;black&apos;</span>
                </p>
              </div>

              {/* results list */}
              <ul className="block mb-8 space-y-4">
                {/* item */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <article
                    key={i}
                    className="p-4 flex flex-row items-center space-x-4 border-gray-200 hover:border-indigo-200 border rounded-lg shadow-md hover:shadow-lg transition-all relative cursor-pointer"
                  >
                    <img
                      src="https://files.bikeindex.org/uploads/Pu/500544/large_bike.jpg"
                      alt="Bike"
                      className="flex-none w-32 h-32 object-cover bg-gray-100"
                    />
                    {/* item info */}
                    <div>
                      <h3 className="text-xl font-bold">
                        El título de la bicicleta
                      </h3>
                      {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius
            repudiandae recusandae deserunt vitae nostrum nulla repellat fuga rerum, cumque
            earum nam explicabo. Est, officiis quaerat illum et sunt animi.
          </p> */}
                      <div className="flex flex-col mb-4 text-sm">
                        <span className="text-gray-400">13 Aug 2021</span>
                        <span className="text-gray-400">
                          Alpine Meadows, Tahoe City, CA - US
                        </span>
                      </div>
                      <div className="flex flex-row space-x-2">
                        <span className="px-2 py-1 text-sm text-indigo-400 bg-indigo-100">
                          Red
                        </span>
                        <span className="px-2 py-1 text-sm text-indigo-400 bg-indigo-100">
                          Black
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </ul>

              <div className="flex flex-row justify-center items-center space-x-1 mt-4 mb-8">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-200"
                >
                  &laquo;
                </a>

                <a
                  href="#"
                  className="px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-indigo-100 hover:text-indigo-500 rounded-md"
                >
                  2
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-indigo-100 hover:text-indigo-500 rounded-md"
                >
                  3
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-indigo-100 hover:text-indigo-500 rounded-md"
                >
                  &raquo;
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="bg-white col-start-7 col-span-6 hidden lg:block">
        <div className=" sticky top-0 h-screen pt-8 pb-4 px-16">
          {/* sin datos */}
          {/* <div className="flex flex-col justify-center items-center h-full">
            <p className="text-gray-300">Without Detail</p>
          </div> */}

          <div className="w-full p-4 pt-0">
            <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <img
                className="lg:h-96 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                src="https://files.bikeindex.org/uploads/Pu/152418/large_11616BE6-D0AC-4466-A48A-218F42D82CC0.jpeg"
                alt="Imagen Size 720x400"
              />
              <div className="p-4">
                <h2 className="text-3xl font-semibold title-font mb-4 whitespace-nowrap ">
                  El título de la bicicleta
                </h2>
                <p className=" text-gray-400 font-light text-md mb-4 ">
                  Nunc purus. Phasellus in felis. Donec semper sapien a libero.
                  Nam dui. Proin leo odio, porttitor id, consequat in, consequat
                  ut, nulla. Sed accumsan felis.
                </p>

                <div className="border-t border-gray-200">
                  <div>
                    <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-2 border-b">
                      <p className="text-gray-600">Repor Date</p>
                      <p>Dec 12 2021</p>
                    </div>
                    <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-2 border-b">
                      <p className="text-gray-600">Stolen Date</p>
                      <p>Dec 12 2021</p>
                    </div>
                    <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-2 border-b">
                      <p className="text-gray-600">Stolen Location</p>
                      <p>Nashville, TN - US</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
