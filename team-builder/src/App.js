import React, { useState } from "react";
import data from "./data";
import Member from "./components/Member";
import { Container, Row } from "reactstrap";
import AddForm from "./components/Form";
import "./App.css";

function App() {
  const [team, setTeam] = useState(data);

  return (
    <Container>
      <h1>Development Team</h1>
      <hr />
      <Row>
        {team.map((t) => (
          <Member data={t}> </Member>
        ))}
      </Row>
      <AddForm setTeam={setTeam} team={team} />
    </Container>
  );
}

export default App;
