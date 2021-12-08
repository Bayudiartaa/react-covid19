import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table,Card,Col,Container,Row} from 'react-bootstrap';
import CardComponent from '../components/CardComponent';

const Home = () => {

    const [positif, setPositif] = useState()
    const [sembuh, setSembuh] = useState()
    const [meninggal, setMeninggal] = useState()
    const [global, setGlobal] = useState()


    useEffect(() => {
        Positif();
    }, [])
    useEffect(() => {
        Sembuh();
    }, [])
    useEffect(() => {
        Meninggal();
    }, [])
    useEffect(() => {
        Global();
    }, [])

    function Positif() {
        axios.get('https://api.kawalcorona.com/positif',{
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            setPositif(response.data);
        })
        .catch(function (error) {
        })
    }

    function Sembuh() {
        axios.get('https://api.kawalcorona.com/sembuh',{
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            setSembuh(response.data);
        })
        .catch(function (error) {
        })
    }

    function Meninggal() {
        axios.get('https://api.kawalcorona.com/meninggal',{
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            setMeninggal(response.data);
        })
        .catch(function (error) {
        })
    }

    function Global() {
        axios.get('https://api.kawalcorona.com/',{
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            setGlobal(response.data);
        })
        .catch(function (error) {
        })
    }

    // console.log(global);
    // console.log(meninggal);
    // console.log(positif);

    return (
        <Container>
            <meta id="meta-description" name="description" content="Some description." />
            <Row className="my-4" >
                <Col className="my-2" md={4}>
                {positif && (
                <CardComponent title={positif.name} body={positif.value} bg="primary" text="white"/>
                )}
                </Col>
                <Col className="my-2" md={4}>
                {sembuh && (
                <CardComponent title={sembuh.name} body={sembuh.value} bg="success" text="white"/>
                )}
                </Col>
                <Col className="my-2" md={4}>
                {meninggal && (
                <CardComponent title={meninggal.name} body={meninggal.value} bg="danger" text="white"/>
                )}
                </Col>
            </Row>

            <Row className="my-4">
                <Col md={12}>
                    {global && (
                        <Card>
                        <Card.Body>
                            <Card.Title>Kasus Covid 19 Global</Card.Title>
                            <Card.Text
                                    style={{ height: "500px" }}
                                    className="overflow-auto"
                                >
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Negara</th>
                                            <th>Positif</th>
                                            <th>Sembuh</th>
                                            <th>Menginggal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {global.map((item,index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.attributes.Country_Region}</td>
                                                <td>{item.attributes.Confirmed}</td>
                                                <td>{item.attributes.Recovered}</td>
                                                <td>{item.attributes.Deaths}</td>
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

export default Home;