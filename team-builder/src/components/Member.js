import React from "react";
import "./Member.css";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Col,
  CardSubtitle,
} from "reactstrap";

const Member = ({ data }) => {
  return (
    <Col xs="6" md="4" b xl="3" className="Member">
      <Card>
        <CardBody>
          <CardTitle>{data.name}</CardTitle>
          <CardSubtitle>{data.role}</CardSubtitle>
          <hr />
          <CardText>{data.email}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Member;
