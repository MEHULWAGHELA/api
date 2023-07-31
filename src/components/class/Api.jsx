import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
const Api = () => {
    let [arr, setarr] = useState()

    const setdata = () => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get')
            .then((res) => {
                console.log(res.data.data)
                setarr(res.data.data)
            }
            )
            .catch((err) => console.log(err))
    }
    const submitFunction = (e) => {
        e.preventDefault();
        setdata()
    }
    return (
        <div>
            {arr?.map((x, i) => {
                return <h4 key={i}>{x.firstName}</h4>

            })}
            <Row>
                <Col xs={6} className="offset-3">
                    <Container className="mt-1 py-1 px-4 border border-1 border-black rounded-2 shadow-lg">
                        <h1 className="text-center py-3">Employee Form</h1>
                        <Form onSubmit={(e) => { submitFunction(e) }}>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="firstName" className="fw-600 fs-5">
                                            First Name
                                        </Label>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            placeholder=""
                                            type="text"
                                            className="main"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="lastName" className="fw-600 fs-5">
                                            last Name
                                        </Label>
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            placeholder=""
                                            type="text"
                                            className="main"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="age" className="fw-600 fs-5">
                                            User Name
                                        </Label>
                                        <Input
                                            id="age"
                                            name="age"
                                            placeholder=""
                                            type="text"
                                            className="main"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <Label for="example" className="fw-600 fs-5">
                                        Gender
                                    </Label>
                                    <div className="d-flex">
                                        <div>
                                            <Input
                                                id="exampleCheck3"
                                                name="gender"
                                                type="radio"
                                                className="gender me-2"
                                            />
                                            <Label
                                                check
                                                for="radio"
                                                className="px-2"
                                            >
                                                Male
                                            </Label>
                                        </div>
                                        <div>
                                            <Input
                                                id="exampleCheck3"
                                                name="gender"
                                                type="radio"
                                                className="gender me-2"

                                            />
                                            <Label
                                                check
                                                for="radio"
                                                className="px-2"
                                            >
                                                Female
                                            </Label>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} className="">
                                    <Label
                                        check
                                        for="example"
                                        className="fw-600 fs-5
                                my-2"
                                    >
                                        hobbies
                                    </Label>
                                    <Row className="">
                                        <Col xs={3}>
                                            <Input
                                                id="red"
                                                name="hobbies"
                                                type="checkbox"
                                                className="language me-2"
                                            />
                                            <Label
                                                check
                                                for="red"
                                                className="px-2"
                                            >
                                                Red
                                            </Label>
                                        </Col>
                                        <Col xs={3}>
                                            <Input
                                                id="blue"
                                                name="hobbies"
                                                type="checkbox"
                                                className="language me-2"
                                            />
                                            <Label
                                                check
                                                for="blue"
                                                className="px-2"
                                            >
                                                Blue
                                            </Label>
                                        </Col>
                                        <Col xs={3}>
                                            <Input
                                                id="black"
                                                name="hobbies"
                                                type="checkbox"
                                                className="language me-2"
                                            />
                                            <Label
                                                check
                                                for="black"
                                                className="px-2"
                                            >
                                                Black
                                            </Label>
                                        </Col>
                                        <Col xs={3}>
                                            <Input
                                                id="yellow"
                                                name="hobbies"
                                                type="checkbox"
                                                className="language me-2"
                                            />
                                            <Label
                                                check
                                                for="yellow"
                                                className="px-2"
                                            >
                                                Yellow
                                            </Label>
                                        </Col>
                                        <Col xs={3}>
                                            <Input
                                                id="Travelling"
                                                name="hobbies"
                                                type="checkbox"
                                                className="language me-2"
                                            />
                                            <Label
                                                check
                                                for="Travelling"
                                                className="px-2"
                                            >
                                                Travelling
                                            </Label>
                                        </Col>
                                        <Col xs={3}>
                                            <Input
                                                id="Reading"
                                                name="hobbies"
                                                type="checkbox"
                                                className="language me-2"
                                            />
                                            <Label
                                                check
                                                for="Reading"
                                                className="px-2"
                                            >
                                                Reading
                                            </Label>
                                        </Col>
                                        <Col xs={3}>
                                            <Input
                                                id="Exersice"
                                                name="hobbies"
                                                type="checkbox"
                                                className="language me-2"
                                            />
                                            <Label
                                                check
                                                for="Exersice"
                                                className="px-2"
                                            >
                                                Exersice
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <div className="text-center">
                                <button className="my-2 btn btn-secondary submit fs-4">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Container>
                </Col>
            </Row>

        </div>
    )
}

export default Api