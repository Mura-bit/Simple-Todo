
import Card from "../card/Card";
import { cars } from "./carsData";

const CarsList = () => {

    const showCarsList = cars.map((el, index) => <Card cardData={el} key={index} />);

    return (
      <div className="container-app">
        <div className="students-box">{showCarsList}</div>
      </div>
    );
}

export default CarsList;