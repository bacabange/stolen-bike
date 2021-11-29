import React from 'react';
import { Bike } from '../../store/features/bikes/bikeSlice';
import format from 'date-fns/format';

interface Props {
  bike: Bike;
}

const BikeItem: React.FC<Props> = ({ bike }) => {
  return (
    <article
      key={bike.id}
      className="p-4 flex flex-row items-center space-x-4 border-gray-200 hover:border-indigo-200 border rounded-lg shadow-md hover:shadow-lg transition-all relative cursor-pointer"
    >
      <div className="bg-gray-200 w-32 h-32 flex flex-col justify-center items-center">
        {bike.large_img ?
          <img
            src={bike.large_img}
            alt="Bike"
            className="flex-none w-full h-full object-cover bg-gray-100"
          />
          :
          <span className="text-gray-400 text-sm">No Image</span>
        }
      </div>
      <div>
        <h3 className="text-xl font-bold">
          {bike.title ?? 'No Title'}
        </h3>
        <div className="flex flex-col mb-4 text-sm">
          <span className="text-gray-400">{format(new Date(bike.date_stolen * 1000), 'MMM dd yyyy')}</span>
          <span className="text-gray-400">
            {bike.stolen_location ?? 'No Location'}
          </span>
        </div>
        <div className="flex flex-row space-x-2">
          {bike.frame_model &&
            <span className="px-2 py-1 text-sm text-green-400 bg-green-100">
              {bike.frame_model}
            </span>
          }

          {bike.frame_colors && bike.frame_colors.length > 0 &&
            bike.frame_colors.map((color) => (
              <span key={color} className="px-2 py-1 text-sm text-indigo-400 bg-indigo-100">
                {color}
              </span>
            ))
          }
        </div>
      </div>
    </article>
  )
}

export default BikeItem
