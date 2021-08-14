import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
 class Input extends Component {
    render() {
        return (
            <div>
                <Form.Control size="lg" type="text" placeholder="Large text" />
            </div>
        )
    }
}

export default Input
