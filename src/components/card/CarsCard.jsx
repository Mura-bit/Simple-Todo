import "../card/card.style.css";

function CarsCard(props) {
  const { name, picture, description } = props.carsCardData;
  return (
    <div className="cars-list">
      <img src={picture} alt="carsPhoto" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CarsCard;