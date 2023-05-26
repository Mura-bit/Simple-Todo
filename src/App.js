import StudentsList from "./components/studentsList/StudentsList.jsx";
import './App.css';
import CarsList from "./components/carsList/CarsList.jsx";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-text">Students List</h1>
      <StudentsList />
      <br />
      <h1 className="main-text">Cars List</h1>
      <CarsList />
    </div>
  );
}

export default App;
