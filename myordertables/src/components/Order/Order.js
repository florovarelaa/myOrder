import React, { Component } from 'react'; 

class Order extends Component {

    showModal(order) {
        console.log('order', order)
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