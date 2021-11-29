import React from 'react';
import { Bike } from '../../types/bikes';
import BikeItem from './BikeItem';

interface Props {
  bikes: Bike[];
}

const BikeList: React.FC<Props> = ({ bikes }) => {
  return (
    <>
      {bikes.length > 0 ? (
        <ul className="block mb-8 space-y-4">
          {bikes.map((bike) => (
            <BikeItem bike={bike} key={bike.id} />
          ))}
        </ul>
      ) :
        <p>No Results</p>
      }
    </>
  )
}

export default BikeList
