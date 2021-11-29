import React, { useEffect, useState } from 'react';
import BikeList from '../components/BikeList/BikeList';
import Button from '../components/Button/Button';
import DateInput from '../components/Form/DateInput/DateInput';
import TextInput from '../components/Form/TextInput/TextInput';
import Spinner from '../components/Loading/Spinner';
import Layout from '../Layout';
import { search} from '../store/features/bikes/bikeSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const Home: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const { all, loading, count: countState } = useAppSelector((state) => state.bikes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(search(query));
  }, []);

  useEffect(() => {
    console.log('bikes', all);
  }, [all]);

  const handleSearch = () => {
    dispatch(search(query));
  }

  return (
    <Layout>
      <div className="bg-white col-start-1 col-span-12 lg:col-span-6">
        <main className="mt-8 px-4">
          <div className="flex flex-col w-full mb-8">
            {/* form input */}
            <TextInput
              label="Search"
              name="search"
              placeholder="Search for nearby stolen bikes"
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="flex flex-col md:flex-row md:space-x-2">
              <DateInput
                label="Start Date"
                name="start_date"
                placeholder="Start Date"
                onChange={(e) => console.log(e)}
              />
              <DateInput
                label="End Date"
                name="end_date"
                placeholder="End Date"
                onChange={(e) => console.log(e)}
              />
              <div className="mb-2 ">
                <Button onClick={handleSearch} title="Search" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <div className="my-2">
                  <p className="text-xl">
                    <span className="font-bold mr-1">{countState.stolen} results</span>
                  </p>
                </div>

                <BikeList bikes={all} />

                <div className="flex flex-row justify-center items-center space-x-1 mt-4 mb-8">
                  <a href="#" className="flex items-center px-4 py-2 text-gray-200">
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
              </>
            )}

          </div>
        </main>
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
    </Layout>
  );
};

export default Home;
