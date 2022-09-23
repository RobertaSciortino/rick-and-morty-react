import { useNavigate } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { characterActions } from "../store/character-slice";
import { getCharacterDetails } from "../api/characterApi";

function CharacterCard(props) {
  const navigate = useNavigate();

  return (
    <Card bg="light" className="border-0">
      <Card.Img variant="top" src={props.data.avatar} />
      <Card.Body>
        <Card.Title className="text-uppercase">{props.data.name}</Card.Title>
        <ListGroup as="ul" className="font-14">
          <ListGroup.Item as="li" className="rounded-0 border-top-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
            <strong className="text-uppercase">species:</strong> {props.data.species}
          </ListGroup.Item>
          <ListGroup.Item as="li" className="border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
            <strong className="text-uppercase">gender:</strong> {props.data.gender}
          </ListGroup.Item>
          <ListGroup.Item as="li" className="border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
            <strong className="text-uppercase">status:</strong> {props.data.status}
          </ListGroup.Item>
          <ListGroup.Item as="li" className="border-start-0 border-end-0 ps-0 pe-0  text-overflow bg-light">
            <strong className="text-uppercase">location:</strong> {props.data.lastLocation.name}
          </ListGroup.Item>
          <ListGroup.Item as="li" className="rounded-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
            <strong className="text-uppercase">origin:</strong> {props.data.originLocation.name}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer bg="none" className="border-0 text-center bg-light">
        <Button variant="primary" className="text-uppercase border-0" onClick={() => navigate(`character/${props.data.id}`)}>Details</Button>
      </Card.Footer>
    </Card>
  );
}

export default CharacterCard;