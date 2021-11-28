import React from 'react';
import Map from './components/Map/Map';

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="grid-flow-col">
        <div className=" m-auto">
          <header className="py-4 px-4 border-b border-gray-300">
            <span className="text-indigo-500 text-3xl font-bold">
              Stolen Bike
            </span>
          </header>

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
                <div className="mb-2 flex flex-col">
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

                <div className="mb-2 flex flex-col">
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
                <div className="mb-2 md:flex-grow">
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

      <div className="grid-flow-col">
        <div className=" sticky top-0 h-screen bg-pink-300">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
