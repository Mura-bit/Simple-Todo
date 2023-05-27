
import { city } from "./cityData";
import Card from "../card/Card.jsx";

const CityList = () => {

    const showCityList = city.map((el, index) => <Card cardData={el} key={index} />);

    return (
        <div className="container-app">
            <div className="students-box">
                {showCityList}
            </div>
        </div>
    )
}

export default CityList;