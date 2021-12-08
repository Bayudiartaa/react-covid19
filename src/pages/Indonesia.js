import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';

const Indonesia = () => {

    const [indonesia, setIndonesia] = useState()
    const [provinsi, setProvinsi] = useState()

    useEffect(() => {
        getIndonesia();
    }, [])

    useEffect(() => {
        getProvinsi();
    }, [])

    function getIndonesia() {
        axios.get("https://api.kawalcorona.com/indonesia",{
            headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            }   
        })
        .then(function (response) {
        // console.log(response);
        setIndonesia(response.data);
        })
        .catch(function (error) {
        // console.log(error);
        });
    }

    function getProvinsi() {
        axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi",{
            headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            }   
        })
        .then(function (response) {
        // console.log(response);
        setProvinsi(response.data);
        })
        .catch(function (error) {
        // console.log(error);
        });
    }

    // console.log(provinsi)

    return (
        <Container>
            <Row className="my-4">
            <Col className="my-2" md={4}>
                {indonesia &&
                indonesia.map((item) => (
                    <CardComponent
                    title="Total Positif"
                    body={item.positif}
                    bg="primary"
                    text="white"
                    />
                ))}
            </Col>
            <Col className="my-2" md={4}>
                {indonesia &&
                indonesia.map((item) => (
                    <CardComponent
                    title="Total Sembuh"
                    body={item.sembuh}
                    bg="success"
                    text="white"
                    />
                ))}
            </Col>
            <Col className="my-2" md={4}>
                {indonesia &&
                indonesia.map((item) => (
                    <CardComponent
                    title="Total Meninggal"
                    body={item.sembuh}
                    bg="danger"
                    text="white"
                    />
                ))}
            </Col>
            </Row>

            <Row className="my-4">
            <Col md={12}>
                {provinsi && (
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Kasus Covid Indonesia Berdasarkan Provinsi</Card.Title>
                    <Card.Text
                        style={{ height: "500px" }}
                        className="overflow-auto"
                    >
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Kasus</th>
                            <th>Dirawat</th>
                            <th>Sembuh</th>
                            <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                        {provinsi.map((item, index) => (
                            <tr>
                                {/* {console.log(item.provinsi)} */}
                                <td>{index + 1}</td>
                                <td>{item.provinsi}</td>
                                <td>{item.kasus}</td>
                                <td>{item.dirawat}</td>
                                <td>{item.sembuh}</td>
                                <td>{item.meninggal}</td>
                            </tr>
                        ))}
                        </tbody>
                        </Table>
                    </Card.Text>
                    </Card.Body>
                </Card>
                )}
            </Col>
            </Row>
        </Container>
    );
};

export default Indonesia;

