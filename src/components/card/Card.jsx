import "./card.style.css";
import PropTypes from "prop-types";

function Card(props){
    const { name, picture, description, look } = props.cardData;
    return (
      <div className="students-list">
        <img src={picture} alt="studentsPhoto"/>
        <h2>{name}</h2>
            <p>{description}</p>
            <button>{look}</button>
      </div>
    );
}


Card.propTypes = {
    cardData: PropTypes.shape({
        name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })
}

export default Card;