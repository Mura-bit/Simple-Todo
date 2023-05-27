import Card from "../card/Card";
import { students } from "./studentsData";
import "../card/card.style.css";

const StudentsList = () => {
    const showStudents = students.map((el, index) => <Card cardData={el} key={index} /> )
            
    return (
      <div className="container-app">
        <div className="students-box">{showStudents}</div>
      </div>
    );
}

export default StudentsList;