import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";

class PeopleItem extends Component {
    render() {
        const {name,height,mass,eye_color} = this.props
        return (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <ListGroup as="ul" >
                    <ListGroup.Item as="li" active>
                        name: {name}
                    </ListGroup.Item>
                    <ListGroup.Item as="li">height: {height}</ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                        mass: {mass}
                    </ListGroup.Item>
                    <ListGroup.Item as="li">eye_color: {eye_color}</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default PeopleItem;