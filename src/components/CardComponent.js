import React from 'react';
import {Card} from 'react-bootstrap';

const CardComponent = (props) => {
    // console.log(props);
    return (
        <div>
            <Card bg={props.bg} text={props.text} className="shadow text-center" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.body}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardComponent;