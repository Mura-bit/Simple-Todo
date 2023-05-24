import { students } from "./studentsData";
import "./studentsList.style.css";

const StudentsList = () => {
    const showStudents = students.map((el, index) => {
        return <li key={index}>
            {el.name}: Hobbies : {el.hobby} <img src={el.picture} />
        </li>
    })

    return (
        <div className="container-app">
            <div className="students-box">
                <ol>{showStudents}</ol>
            </div>
        </div>
    )
}

export default StudentsList;