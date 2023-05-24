import { students } from "./studentsData";
import "./studentsList.style.css";

const StudentsList = () => {
    const showStudents = students.map((el, index) => {
        return (
          <div className="students-list" key={index}>
            <img src={el.picture} />
            <h2>{el.name}</h2>
            <p>{el.hobby}</p>
          </div>
        );
    })

    return (
        <div className="container-app">
            <div className="students-box">
                {showStudents}
            </div>
        </div>
    )
}

export default StudentsList;