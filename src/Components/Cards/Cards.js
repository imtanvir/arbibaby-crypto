import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../Header/images/banner14.png";
import Banner2 from "../Header/images/banner30.png";
import "./Cards.css";
import { Fade } from "react-reveal";
const Cards = () => {
  return (
    <div className="pb-5">
      <Container>
        <h1
          className="cards__heading text-center text-white mb-4"
          style={{ fontSize: "3.75rem" }}
        >
          Staking
        </h1>
        <Tabs
          defaultActiveKey="pool"
          id="justify-tab-example"
          className="mb-2 custom-tab"
          size="sm"
          justify
        >
          <div className="d-flex justify-content-center mb-5">
            <div className="summery px-4 py-3 customSecondary text-white text-center mb-3 header-div">
              <h6>Total stakers: 807</h6>
              <h6>Total staked: 208,129,668 </h6>
              <p className="last-header">or 23.8% of supply</p>
            </div>
          </div>
          <Tab eventKey="pool" title="POOL" className="rounded-pill tab-style">
            <div className="cards-style">
              <Row xs={1} md={1} lg={2} className="g-5 w-75 mx-auto row-style">
                <Col className="d-flex justify-content-center">
                  <Fade bottom>
                    <Card className="bgDark p-4 customRounded shadow">
                      <Card.Img variant="top" src={Banner} />
                      <Card.Body className="ps-0 p-0">
                        {/* Tooltip section  */}
                        <OverlayTrigger
                          style={{
                            width: "25rem",
                            backgroundColor: "red !important",
                          }}
                          placement="bottom"
                          overlay={
                            <Tooltip className="cardTooltip">
                              14-day Staking Rewards are calculated based on the
                              amount of accumulated from the 0.3% Stake
                              Tax on each transaction.
                            </Tooltip>
                          }
                        >
                          <p className="text-left p-0 text-white">
                            Reward Pool: 10% of Stake Tax
                          </p>
                        </OverlayTrigger>
                        {/* data show section */}
                        <div className="datasets text-white">
                          <div className="d-flex justify-content-between pb-2">
                            <h5>Stakers</h5>
                            <span>158</span>
                          </div>
                          <div className="d-flex justify-content-between pb-2">
                            <h5>Staked </h5>
                            <span>46,558,554</span>
                          </div>
                          <div className="d-flex justify-content-between pb-2 border-bottom border-secondary">
                            <h5>Rewards claimed</h5>
                            <span>102,892</span>
                          </div>
                        </div>
                        {/* stake amount enter form  */}
                        <Form>
                          <Form.Group
                            className="mb-4"
                            controlId="formGroupEmail"
                          >
                            <Form.Label className="text-white pt-1 balance-para">
                              Balance:
                            </Form.Label>
                            <Form.Control
                              className="customSecondary border-0"
                              type="email"
                              placeholder="Enter amount to stake"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Col>
                              <Button
                                variant="outline-info"
                                className="bg-light py-2 fs-4 submitTxt"
                                style={{ width: "100%" }}
                                type="submit"
                              >
                                Stake
                              </Button>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Fade bottom>
                    <Card className="bgDark p-4 customRounded shadow">
                      <Card.Img variant="top" src={Banner} />
                      <Card.Body className="ps-0 p-0">
                        {/* Tooltip section  */}
                        <OverlayTrigger
                          style={{
                            width: "25rem",
                            backgroundColor: "red !important",
                          }}
                          placement="bottom"
                          overlay={
                            <Tooltip className="cardTooltip">
                              14-day Staking Rewards are calculated based on the
                              amount of accumulated  from the 0.3% Stake
                              Tax on each transaction.
                            </Tooltip>
                          }
                        >
                          <p className="text-left p-0 text-white">
                            Reward Pool: 20% of Stake Tax
                          </p>
                        </OverlayTrigger>
                        {/* data show section */}
                        <div className="datasets text-white">
                          <div className="d-flex justify-content-between pb-2">
                            <h5>Stakers</h5>
                            <span>158</span>
                          </div>
                          <div className="d-flex justify-content-between pb-2">
                            <h5>Staked </h5>
                            <span>46,558,554</span>
                          </div>
                          <div className="d-flex justify-content-between pb-2 border-bottom border-secondary">
                            <h5>Rewards claimed</h5>
                            <span>102,892</span>
                          </div>
                        </div>
                        {/* stake amount enter form  */}
                        <Form>
                          <Form.Group
                            className="mb-4"
                            controlId="formGroupEmail"
                          >
                            <Form.Label className="text-white pt-1">
                              Balance:
                            </Form.Label>
                            <Form.Control
                              className="customSecondary border-0"
                              type="email"
                              placeholder="Enter amount to stake"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Col>
                              <Button
                                variant="outline-info"
                                className="bg-light py-2 fs-4 submitTxt"
                                style={{ width: "100%" }}
                                type="submit"
                              >
                                Stake
                              </Button>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Fade bottom>
                    <Card className="bgDark p-4 customRounded shadow">
                      <Card.Img variant="top" src={Banner} />
                      <Card.Body className="ps-0 p-0">
                        {/* Tooltip section  */}
                        <OverlayTrigger
                          style={{
                            width: "25rem",
                            backgroundColor: "red !important",
                          }}
                          placement="bottom"
                          overlay={
                            <Tooltip className="cardTooltip">
                              14-day Staking Rewards are calculated based on the
                              amount of accumulated from the 0.3% Stake
                              Tax on each transaction.
                            </Tooltip>
                          }
                        >
                          <p className="text-left p-0 text-white">
                            Reward Pool: 35% of Stake Tax
                          </p>
                        </OverlayTrigger>
                        {/* data show section */}
                        <div className="datasets text-white">
                          <div className="d-flex justify-content-between pb-2">
                            <h5>Stakers</h5>
                            <span>158</span>
                          </div>
                          <div className="d-flex justify-content-between pb-2">
                            <h5>Staked </h5>
                            <span>46,558,554</span>
                          </div>
                          <div className="d-flex justify-content-between pb-2 border-bottom border-secondary">
                            <h5>Rewards claimed</h5>
                            <span>102,892</span>
                          </div>
                        </div>
                        {/* stake amount enter form  */}
                        <Form>
                          <Form.Group
                            className="mb-4"
                            controlId="formGroupEmail"
                          >
                            <Form.Label className="text-white pt-1">
                              Balance:
                            </Form.Label>
                            <Form.Control
                              className="customSecondary border-0"
                              type="email"
                              placeholder="Enter amount to stake"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Col>
                              <Button
                                variant="outline-info"
                                className="bg-light py-2 fs-4 submitTxt"
                                style={{ width: "100%" }}
                                type="submit"
                              >
                                Stake
                              </Button>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Fade bottom>
                    <Card className="bgDark p-4 customRounded shadow">
                      <Card.Img variant="top" src={Banner} />
                      <Card.Body className="ps-0 p-0">
                        {/* Tooltip section  */}
                        <OverlayTrigger
                          style={{
                            width: "25rem",
                            backgroundColor: "red !important",
                          }}
                          placement="bottom"
                          overlay={
                            <Tooltip className="cardTooltip">
                              14-day Staking Rewards are calculated based on the
                              amount of accumulated  from the 0.3% Stake
                              Tax on each transaction.
                            </Tooltip>
                          }
                        >
                          <p className="text-left p-0 text-white">
                            Reward Pool: 75% of Stake Tax
                          </p>
                        </OverlayTrigger>
                        {/* data show section */}
                        <div className="datasets text-white">
                          <div className="d-flex justify-content-between pb-2">
                            <h5>Stakers</h5>
                            <span>158</span>
                          </div>
                          <div className="d-flex justify-content-between pb-2">
                            <h5>Staked </h5>
                            <span>46,558,554</span>
                          </div>
                          <div className="d-flex justify-content-between pb-2 border-bottom border-secondary">
                            <h5>Rewards claimed</h5>
                            <span>102,892</span>
                          </div>
                        </div>
                        {/* stake amount enter form  */}
                        <Form>
                          <Form.Group
                            className="mb-4"
                            controlId="formGroupEmail"
                          >
                            <Form.Label className="text-white pt-1">
                              Balance:
                            </Form.Label>
                            <Form.Control
                              className="customSecondary border-0"
                              type="email"
                              placeholder="Enter amount to stake"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Col>
                              <Button
                                variant="outline-info"
                                className="bg-light py-2 fs-4 submitTxt"
                                style={{ width: "100%" }}
                                type="submit"
                              >
                                Stake
                              </Button>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="personal" title="PERSONAL" className="rounded-pill">
            {/* Data Table */}
            <Fade bottom>
              <Table responsive className="w-75">
                <thead>
                  <tr className="text-white">
                    <th className="border-0">#</th>
                    <th className="border-0">STAKED</th>
                    <th className="border-0">REWARDS TOTAL</th>
                    <th className="border-0">REWARDS HARVESTED </th>
                    <th className="border-0">LOCK PERIOD</th>
                    <th className="border-0">UNLOCK TIME</th>
                    <th className="border-0">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white">
                    {/* {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))} */}
                  </tr>
                </tbody>
              </Table>
            </Fade>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Cards;
