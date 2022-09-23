import { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterDetails } from "../api/characterApi";
import { getLocationDetails } from "../api/locationApi";
import LocationDetails from "../components/LocationDetails";

import classes from '../style/details.module.css';

const Details = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [characterDetails, setCharacterDetails] = useState({});
    const [originLocationDetails, setOriginLocationDetails] = useState({});
    const [lastLocationDetails, setLastLocationDetails] = useState({});

    useEffect(() => {
        getCharacterDetails(params.id).then(details => {
            setCharacterDetails(details);

            let locationIds = [];
            locationIds.push(details.originLocation.id, details.lastLocation.id);

            getLocationDetails(locationIds)
            .then(locations => {
                let originLocationData = locations.filter(location => location.id == details.originLocation.id || location.id == 0);
                setOriginLocationDetails(originLocationData[0]);

                let lastLocationData = locations.filter(location => location.id == details.lastLocation.id || location.id == 0);
                setLastLocationDetails(lastLocationData[0]);
            })
        })
    }, [params.id])

    return (
        <Container>
            <Row>
                <Col md={{span: 10,  offset: 1}} lg={{span: 8, offset: 2}}>
                    <Card bg="light" className={`${classes.card} border-0 d-md-flex flex-row`}>
                        <Card.Img variant="start" src={characterDetails.avatar} className="rounded-start"/>
                        <Card.Body>
                            <Card.Title className="text-uppercase title-details">{characterDetails.name}</Card.Title>
                            <ListGroup as="ul" className="font-14 mb-4">
                                <ListGroup.Item as="li" className="rounded-0 border-top-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">species:</strong> {characterDetails.species}
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">gender:</strong> {characterDetails.gender}
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="rounded-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">status:</strong> {characterDetails.status}
                                </ListGroup.Item>
                            </ListGroup>                          
                            
                            <LocationDetails title="Last known location" data={lastLocationDetails} />
                            <LocationDetails title="First seen in" data={originLocationDetails} />

                            <Button variant="primary" className="text-uppercase border-0 mt-5" onClick={() => navigate('/')}>Back</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Details;