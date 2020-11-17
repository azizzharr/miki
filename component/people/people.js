import React, {Component} from 'react';
import PeopleItem from "./people-item";
import {Row, Container} from "react-bootstrap";
import {getProduct} from "../action/action";
import {connect} from "react-redux";


class People extends Component {
    componentDidMount() {
        this.props.getProduct()
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="mt-3">
                        {this.props.data.map((item, index) => <PeopleItem {...item} key={index}/>)}
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({data}) => {
    return {data}
}

const mapActionsToProps = (dispatch) => {
    return {
        getProduct: getProduct(dispatch)
    }
}


export default connect(mapStateToProps, mapActionsToProps)(People);