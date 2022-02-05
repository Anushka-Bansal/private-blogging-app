import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Google, Facebook } from "react-bootstrap-icons";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../config/MyServices";
import Validation from "../common/Validation";
import "./login.css";
// import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Login() {
    const navigate = useNavigate();

    const success = (data) =>
        toast.success(data, { position: toast.POSITION.TOP_RIGHT });
    const failure = (data) =>
        toast.error(data, { position: toast.POSITION.TOP_RIGHT });

    const warning = (data) =>
        toast.warn(data, { position: toast.POSITION.TOP_CENTER });
    const formLogin = () => {
        console.log("callback function called");
        login(values).then((res) => {
            if (res.data.err) {
                failure(res.data.err);
            } else {
                success(res.data.msg);
                localStorage.setItem("_token", res.data.token);
                console.log(res.data);
                navigate("/");
            }
        });
    };
    //custom hook call
    const { handler, values, errors, handleSubmit } = Validation(formLogin);
    console.log(values);
    console.log(errors);

    return (
        <>
            <div className="background w-100 justify-content-center ">
                <br />
                <div className="bg-light text-dark p-3 mt-5 ml-5 holder w-50 ">
                    <h1 className="pt-2 pb-3  text-secondary">Log In</h1>
                    <Row>
                        <Col md={6} lg={6} sm={12} xs={12}>
                            <div>
                                <h5>
                                    Not Registered yet ?{" "}
                                    <a href="/signup" className="link-style">
                                        Register Now
                                    </a>
                                </h5>
                            </div>
                            <Form className="pt-4 " onSubmit={handleSubmit}>
                                <Form.Group className="mb-4 ">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        name="email"
                                        id="email"
                                        onChange={handler}
                                    />
                                    {errors.email && (
                                        <p
                                            style={{
                                                color: "red",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {errors.email}
                                        </p>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        id="password"
                                        onChange={handler}
                                    />
                                    {errors.password && (
                                        <p
                                            style={{
                                                color: "red",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {errors.password}
                                        </p>
                                    )}
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
                        <Col
                            md={6}
                            lg={6}
                            sm={12}
                            xs={12}
                            className="text-center"
                        >
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
            {/* <ToastContainer /> */}
        </>
    );
}
