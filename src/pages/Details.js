import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import LocationDetails from "../components/LocationDetails";
import classes from '../style/details.module.css';
import EpisodeDetails from "../components/EpisodeDetails";
import { useDetails } from "../hooks/useDetails";

const Details = () => {
    const details = useDetails();
    
    return (
        <Container>
            <Row>
                <Col md={{span: 10,  offset: 1}} lg={{span: 8, offset: 2}}>
                    <Card bg="light" className={`${classes.card} border-0 d-md-flex flex-row`}>
                        <Card.Img variant="start" src={details.character.avatar} className="rounded-start"/>
                        <Card.Body>
                            <Card.Title className="text-uppercase title-details">{details.character.name}</Card.Title>
                            <ListGroup as="ul" className="font-14 mb-4">
                                <ListGroup.Item as="li" className="rounded-0 border-top-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">species:</strong> {details.character.species}
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">gender:</strong> {details.character.gender}
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="rounded-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">status:</strong> {details.character.status}
                                </ListGroup.Item>
                            </ListGroup>                          
                            
                            <LocationDetails title="Last known location" data={details.lastLocationDetails} />
                            <LocationDetails title="First seen in" data={details.originLocationDetails} />

                            <EpisodeDetails title="Appeared on" data={details.episodeList} />

                            <div className="text-end">
                                <Button variant="primary" className="text-uppercase border-0 mt-5" onClick={() => details.navigate('/')}>Back</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Details;