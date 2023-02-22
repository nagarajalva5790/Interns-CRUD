import "./App.css";
import {v4 as uuid} from "uuid";
import Header from "./components/Header";
import AddIntern from "./components/AddIntern";
import { useEffect, useState } from "react";
import InternList from "./components/InternsList";

function App() {
  const LOCAL_STORAGE_KEY = "interns";
  const [interns, setInterns] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addInternHandler = (contact) => {
    setInterns([...interns, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(interns));
  }, [interns]);

  const removeInternsFromList = (id) => {
    const newInternList = interns.filter((intern) => {
      return intern.id !== id
    });

    setInterns(newInternList);
  }

  return (
    <div className="ui container">
      <Header />
      <AddIntern addInternHander={addInternHandler} />
      <InternList internsObj={interns} getInternId={removeInternsFromList}/>
    </div>
  );
}

export default App;
