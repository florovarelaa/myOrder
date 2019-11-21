import React, { Component } from 'react';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Order from '../Order/Order';
import './OrdersPannel.css'

class OrdersPannel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            orders: [{
                id: 0,
                employee: null,
                products: [{}],
                closed: false,
            },
            {
                id: 1,
                employee: null,
                products: [{}],
                closed: false,
            },
            {
                id: 2,
                employee: null,
                products: [{}],
                closed: true,
            }],
            tables: [{}],
            products: [],
            total: 0,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({  tables: data }))
        
        fetch('https://jsonplaceholder.typicode.com/albums/10')
            .then(response => response.json())
            .then(data => this.setState({  products: data }))
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
                            return (
                                <Order tableNumber={table.id} orderNumber={null} key={index}>
                                </Order>
                            )
                        })}
                    </Container>
                    
                    {/* Orders To Go */}
                    <Container>
                        <button onClick={ () => {
                            this.newOrder({
                                id: this.state.orders.length,
                                employee: null,
                                products: [{}],
                                closed: false
                            })
                        }}> New Order </button>

                        {Array.from(this.state.orders).map( (order, index) => {
                            return <Order tableNumber={null} orderNumber={order.id} key={index} />
                        })}
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}

export default OrdersPannel;