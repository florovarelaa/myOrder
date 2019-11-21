import React, { Component } from 'react';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Order from '../Order/Order';
import './OrdersPannel.css';
import API from '../../API';

class OrdersPannel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            orders: [],
            tables: [{}],
            products: [{}],
            employees: [{}],
            total: 0,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({  employees: data })); 

        this.setState({
            // orders: API.orders,
            products: API.products,
            tables: API.tables,
        })
    }

    newOrder = (newOrder) => {
        this.setState({
            orders: [...this.state.orders, newOrder]
        })
    }

    render () {
        return (
            // Main Container
            <div>
                <div>
                    {/* Tables */}
                    <Container>
                        {this.state.tables.map( (table, index) => {
                            return <Order order={table} tableNumber={table.tableId} orderNumber={null} key={index} />
                        })}
                    </Container>

                    {/* Orders To Go */}
                    <Container>
                        <button onClick={ () => {
                            this.newOrder({
                                id: this.state.orders.length + 1,
                                tableId: null,
                                employee: null,
                                products: [{}],
                                opened: true
                            })
                        }}> New Order </button>

                        {Array.from(this.state.orders).filter( e => e.opened === true && e.tableId == null).map( (order, index) => {
                            return <Order order={order} tableNumber={null} orderNumber={order.id} key={index} />
                        })}
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}

export default OrdersPannel;