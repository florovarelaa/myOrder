export default {
    products: [
        {
            id: 0,
            name: 'Producto0',
            quantity: 5,
            unitPrcie: 2,
        },
        {
            id: 1,
            name: 'Producto1',
            quantity: 6,
            unitPrcie: 3,
        },
        {
            id: 2,
            name: 'Producto2',
            quantity: 7,
            unitPrcie: 2,
        },
        {
            id: 3,
            name: 'Producto3',
            quantity: 3,
            unitPrcie: 1,
        },
    ],
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
  };