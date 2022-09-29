import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import LocationDetails from "../components/LocationDetails";
import classes from '../style/details.module.css';
import EpisodeDetails from "../components/EpisodeDetails";
import { useDetails } from "../hooks/useDetails";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const {character, lastLocationDetails, originLocationDetails, episodeList } = useDetails();
    const navigate = useNavigate();
    
    return (
        <Container>
            <Row>
                <Col md={{span: 10,  offset: 1}} lg={{span: 8, offset: 2}}>
                    <Card bg="light" className={`${classes.card} border-0 d-md-flex flex-md-row`}>
                        <Card.Img src={character.avatar} className={classes['rounded-start']}/>
                        <Card.Body>
                            <Card.Title className="text-uppercase title-details">{character.name}</Card.Title>
                            <ListGroup as="ul" className="font-14 mb-4">
                                <ListGroup.Item as="li" className="rounded-0 border-top-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">species:</strong> {character.species}
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">gender:</strong> {character.gender}
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="rounded-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                                    <strong className="text-uppercase">status:</strong> {character.status}
                                </ListGroup.Item>
                            </ListGroup>                          
                            
                            <LocationDetails title="Last known location" data={lastLocationDetails} />
                            <LocationDetails title="First seen in" data={originLocationDetails} />

                            <EpisodeDetails title="Appeared on" data={episodeList} />

                            <div className="text-end">
                                <Button variant="primary" className="text-uppercase border-0 mt-5" onClick={() => navigate('/')}>Back</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Details;