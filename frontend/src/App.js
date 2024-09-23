import { useState, useEffect } from "react";

function App() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/profile-admin/add-section/skills")
      .then((res) => res.json())
      .then((skills) => {
        // console.log(skills);
        setSkill(skills);
      });
  }, []);
  return (
    <div className="App">
      {skill.map((item) => (
        <p>{item.skill}</p>
      ))}
    </div>
  );
}

export default App;
