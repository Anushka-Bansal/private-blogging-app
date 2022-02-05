import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Google, Facebook } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../config/MyServices";
import Validation from "../common/Validation";
import "./signup.css";
// import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Signup() {
    const navigate = useNavigate();
    const success = (data) =>
        toast.success(data, { position: toast.POSITION.TOP_RIGHT });
    const failure = (data) =>
        toast.error(data, { position: toast.POSITION.TOP_RIGHT });

    const formRegister = () => {
        console.log("Callback function when form is submitted!");
        register(values).then((res) => {
            if (res.data.err) {
                failure(res.data.err);
                console.log(res.data.err);
            } else {
                success(res.data.msg);
                navigate("/login");
                console.log(res.data.msg);
            }
        });
        console.log("Form Values ", values);
    };
    //Custom hook call
    const { handler, values, errors, handleSubmit } = Validation(formRegister);
    console.log(values);
    console.log(errors);
    return (
        <>
            <div className="background w-100 justify-content-center">
                <br />
                <div className="bg-light text-dark p-4 mt-5 ml-5 holder w-50">
                    <h1 className="pt-2 pb-3 text-secondary">Sign Up</h1>
                    <div className="d-flex mr-5">
                        <h5>Or you can signup with ...</h5>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Facebook className="icons" />
                        &nbsp;&nbsp;
                        <Google className="icons" />
                    </div>
                    <Row>
                        <Form method="post" className="pt-3 mt-3 ">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter First Name"
                                            name="fname"
                                            id="fname"
                                            onChange={handler}
                                        />
                                        <Form.Text>
                                            {errors.fname && (
                                                <span style={{ color: "red" }}>
                                                    {errors.fname}
                                                </span>
                                            )}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Last Name"
                                            name="lname"
                                            id="lname"
                                            onChange={handler}
                                        />
                                        <Form.Text>
                                            {errors.lname && (
                                                <span style={{ color: "red" }}>
                                                    {errors.lname}
                                                </span>
                                            )}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 ">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Email"
                                            name="email"
                                            id="email"
                                            onChange={handler}
                                        />
                                        <Form.Text>
                                            {errors.email && (
                                                <span style={{ color: "red" }}>
                                                    {errors.email}
                                                </span>
                                            )}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 ">
                                        <Form.Control
                                            type="string"
                                            placeholder="Enter Contact Number"
                                            name="contact"
                                            id="contact"
                                            onChange={handler}
                                        />
                                        <Form.Text>
                                            {errors.contact && (
                                                <span style={{ color: "red" }}>
                                                    {errors.contact}
                                                </span>
                                            )}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter Password"
                                            name="password"
                                            id="password"
                                            onChange={handler}
                                        />
                                        <Form.Text>
                                            {errors.password && (
                                                <span style={{ color: "red" }}>
                                                    {errors.password}
                                                </span>
                                            )}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter ConfirmPassword"
                                            name="cpassword"
                                            id="cpassword"
                                            onChange={handler}
                                        />
                                        <Form.Text>
                                            {errors.cpassword && (
                                                <span style={{ color: "red" }}>
                                                    {errors.cpassword}
                                                </span>
                                            )}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="secondary" onClick={handleSubmit}>
                                <b>Register</b>
                            </Button>
                            &nbsp;&nbsp;
                        </Form>
                    </Row>
                </div>
            </div>
        </>
    );
}
