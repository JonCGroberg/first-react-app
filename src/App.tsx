import "./App.css";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="p-5 text-white">
        <ListGroup></ListGroup>
      </div>
    </>
  );
}

export default App;
