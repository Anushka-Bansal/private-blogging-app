import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Google, Facebook } from "react-bootstrap-icons";

import "./login.css";

export default function login() {
    return (
        <>
            <div className="background">
                <br />
                <div className="bg-light text-dark p-3 holder">
                    <h1 className="pt-2 pb-3  text-secondary">Log In</h1>
                    <Row>
                        <Col md={6}>
                            <div>
                                <h5>
                                    Not Registered yet ?{" "}
                                    <a href="/register" className="link-style">
                                        Register Now
                                    </a>
                                </h5>
                            </div>
                            <Form className="pt-4 ">
                                <Form.Group className="mb-4 ">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        name="email"
                                        id="email"
                                        // onChange={handler}
                                    />
                                    {/* {errors.email && (
                                        <p
                                            style={{
                                                color: "red",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {errors.email}
                                        </p>
                                    )} */}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        id="password"
                                        // onChange={handler}
                                    />
                                    {/* {errors.password && (
                                        <p
                                            style={{
                                                color: "red",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {errors.password}
                                        </p>
                                    )} */}
                                </Form.Group>
                                <div className="d-flex">
                                    <Button
                                        variant="secondary"
                                        type="submit"
                                        className="m-2 text-center"
                                    >
                                        <b>Login</b>
                                    </Button>

                                    <h6 className="mt-3 text-right">
                                        Forgot{" "}
                                        <a
                                            href="/register"
                                            className="link-style"
                                        >
                                            Password
                                        </a>
                                    </h6>
                                </div>
                            </Form>
                        </Col>
                        <Col md={6} className="text-center">
                            <h5>Or you can login with ...</h5>
                            <br />
                            <Facebook className="icons" />
                            {/* &nbsp;&nbsp; */}
                            <br />
                            <br />
                            <Google className="icons" />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
