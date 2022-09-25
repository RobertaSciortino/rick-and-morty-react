import { Fragment } from "react";
import { ListGroup } from "react-bootstrap";

import classes from '../style/details.module.css';

const LocationDetails = (props) => {
    return (
        <Fragment>
            <h3 className={`text-uppercase ${classes['section-title']}`}>{props.title}</h3>
            <ListGroup as="ul" className="font-14 mb-4">
                <ListGroup.Item as="li" className="rounded-0 border-top-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                    <strong className="text-uppercase">name:</strong> {props.data.name}
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                    <strong className="text-uppercase">type:</strong> {props.data.type}
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                    <strong className="text-uppercase">dimension:</strong> {props.data.dimension}
                </ListGroup.Item>
                <ListGroup.Item as="li" className="rounded-0 border-start-0 border-end-0 ps-0 pe-0 text-overflow bg-light">
                    <strong className="text-uppercase">residents:</strong> {props.data.residents}
                </ListGroup.Item>
            </ListGroup>
        </Fragment>
    )
}

export default LocationDetails;