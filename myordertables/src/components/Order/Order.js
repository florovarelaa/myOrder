import React, { Component } from 'react';
import OrderModal from './OrderModal/OrderModal'

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }

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