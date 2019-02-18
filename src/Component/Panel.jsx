import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';

class Panel extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className="panel">
                <Row>
                    <Col md={12}>   
                        <div className="title">
                            <h3>{this.props.panelTitle}}</h3>
                        </div>
                        {
                           this.props.children
                        }
                    </Col>
                </Row>
            </section>
        );
    }
}


  export default Panel