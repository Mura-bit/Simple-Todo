
import CarsCard from "../card/CarsCard";
import { cars } from "./carsData";

const CarsList = () => {

    const showCarsList = cars.map((el, index) => <CarsCard carsCardData={el} key={index} />);

    return (
      <div className="container">
        <div className="cars-box">{showCarsList}</div>
      </div>
    );
}

export default CarsList;