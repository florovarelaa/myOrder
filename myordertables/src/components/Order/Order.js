import React, { Component } from 'react';
import OrderModal from '../OrderModal/OrderModal.js';

class Order extends Component {
    constructor(props) {
        super(props)
    }

    showModal(order) {
    }

    render() {
        return ( 
            <div>
                <button onClick={ () => this.showModal(this.props.order) }>{ this.props.tableNumber ? this.props.tableNumber : this.props.orderNumber}</button>
            </div>
        )
    }
}

export default Order;