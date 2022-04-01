import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = ({ addToFavList }) => {
  const [name, setName] = useState("");
  const [robot, setRobot] = useState();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setRobot(name);
    setName("");
    //console.log(name);
    //call the function to call the api
  };

  const addAndResetRobot = (name) => {
    addToFavList(name);
    setRobot();
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Input your name ..."
              onChange={handleOnChange}
              value={name}
            />
          </Col>
          <Col>
            <Button className="bg-primary fs-5" variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="mt-5">
        <Col>
          <CustomCard name={robot} fun={addAndResetRobot} />
        </Col>
      </Row>
    </div>
  );
};
