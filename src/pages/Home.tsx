import React, { useEffect, useState } from 'react';
import BikeDetail from '../components/BikeDetail/BikeDetail';
import BikeList from '../components/BikeList/BikeList';
import Button from '../components/Button/Button';
import EmptyData from '../components/EmptyData/EmptyData';
import DateInput from '../components/Form/DateInput/DateInput';
import TextInput from '../components/Form/TextInput/TextInput';
import Spinner from '../components/Loading/Spinner';
import Layout from '../Layout';
import { search, getDetail } from '../store/features/bikes/bikeSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const Home: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const { all, loading, count: countState, page, detail, loadingDetail } = useAppSelector((state) => state.bikes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(search({ query, page }));
  }, []);

  const handleSearch = () => {
    dispatch(search({ query, page: 1 }));
  }

  const handleChangePage = (page: number) => {
    dispatch(search({ query, page }));
  }

  return (
    <Layout>
      <div className="bg-white col-start-1 col-span-12 lg:col-span-6">
        <main className="mt-8 px-4">
          <div className="filter">
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

                <div className="pagination">
                  <a href="#" onClick={() => {
                    if (page > 1) {
                      handleChangePage(page - 1);
                    }
                  }} className={`pagination-item${page === 1 ? '--disabled' : ''}`}>
                    &laquo;
                  </a>
                  <a
                    href="#"
                    onClick={() => {
                      if (countState.stolen > 10) {
                        handleChangePage(page + 1)
                      }
                    }}
                    className={`pagination-item${countState.stolen < 10 ? '--disabled' : ''}`}
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
          {detail ? loadingDetail ? <Spinner /> : <BikeDetail /> : <EmptyData />}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
