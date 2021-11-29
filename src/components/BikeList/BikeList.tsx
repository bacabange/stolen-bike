import React from 'react';
import { Bike } from '../../store/features/bikes/bikeSlice';
import BikeItem from './BikeItem';

interface Props {
  bikes: Bike[];
}

const BikeList: React.FC<Props> = ({ bikes }) => {
  return (
    <ul className="block mb-8 space-y-4">
      {bikes.map((bike) => (
        <BikeItem bike={bike} key={bike.id} />
      ))}
    </ul>
  )
}

export default BikeList
