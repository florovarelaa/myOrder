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
    orders: [
        {
            id: 1,
            tableId: 0,
            employee: null,
            products: [{}],
            opened: false,
        },
        {
            id: 2,
            tableId: 4,
            employee: null,
            products: [{}],
            opened: false,
        },
        {
            id: 3,
            tableId: 7,
            employee: null,
            products: [{}],
            opened: true,
        },
        {
            id: 4,
            tableId: 4,
            employee: null,
            products: [{}],
            opened: false,
        },
    ],
    tables: [
        {
            id: null,
            tableId: 5,
            employee: null,
            products: [{}],
            opened: false,
        },
        {
            id: null,
            tableId: 4,
            employee: null,
            products: [{}],
            opened: false,
        },
        {
            id: null,
            tableId: 3,
            employee: null,
            products: [{}],
            opened: true,
        },
        {
            id: null,
            tableId: 2,
            employee: null,
            products: [{}],
            opened: true,
        },
        {
            id: null,
            tableId: 1,
            employee: null,
            products: [{}],
            opened: true,
        }
    ],
  };