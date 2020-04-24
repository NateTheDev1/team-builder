import React, { useState } from "react";
import data from "./data";
import Member from "./components/Member";
import { Container, Row } from "reactstrap";
import AddForm from "./components/Form";
import "./App.css";

function App() {
  const [team, setTeam] = useState(data);

  const updateTeam = (newMember) => {
    setTeam([...team, newMember]);
  };

  return (
    <Container>
      <h1>Development Team</h1>
      <hr />
      <Row>
        {team.map((t) => {
          return <Member data={t} />;
        })}
      </Row>
      <AddForm updateTeam={updateTeam} />
    </Container>
  );
}

export default App;
