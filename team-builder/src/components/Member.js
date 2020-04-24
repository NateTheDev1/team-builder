import React from "react";
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
    <Col xs="6" md="4" b xl="3">
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
