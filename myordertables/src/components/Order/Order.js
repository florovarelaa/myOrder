import React, { Component } from 'react'; 

class Order extends Component {
    render() {
        return ( 
            <div>
                <button>{ this.props.tableNumber ? this.props.tableNumber : this.props.orderNumber}</button>
            </div>
        )
    }
}

export default Order;