import React from 'react'
import { useAppSelector } from '../../store/hooks';
import format from 'date-fns/format';

const BikeDetail = () => {
  const { detail: bike, errorDetail } = useAppSelector((state) => state.bikes);

  if (!bike) {
    return <div>Loading...</div>
  }

  if (errorDetail) {
    return <div>An error was ocurred.</div>
  }

  return (
    <div className="w-full p-4 pt-0">
      <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gray-200 lg:h-96 md:h-64 sm:h-72 xs:h-72 h-72 flex flex-col justify-center items-center">
          {bike.large_img ?
            <img
              className=" w-full h-full object-cover object-center mb-4"
              src={bike.large_img}
              alt={bike.title ?? 'Bike'}
            />
            :
            <span className="text-gray-400 text-sm">No Image</span>
          }
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-semibold title-font mb-4 whitespace-nowrap ">
            {bike.title}
          </h2>
          <p className=" text-gray-400 font-light text-md mb-4 ">
            {bike.description}
          </p>

          <div className="border-t border-gray-200">
            <div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-2 border-b">
                <p className="text-gray-600">Repor Date</p>
                <p>{bike.registration_created_at ? format(new Date(bike.registration_created_at * 1000), 'MMM dd yyyy'): '--'}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-2 border-b">
                <p className="text-gray-600">Stolen Date</p>
                <p>{bike.date_stolen ? format(new Date(bike.date_stolen * 1000), 'MMM dd yyyy'): '--'}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-2 border-b">
                <p className="text-gray-600">Stolen Location</p>
                <p>{bike.stolen_location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeDetail
