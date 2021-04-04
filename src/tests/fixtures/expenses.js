import moment from 'moment';

export default [
    {
        id: '1',
        description: 'rent',
        amount: 2000,
        note: '',
        createdAt: moment(0).add(10, 'day').valueOf()
    },
    {
        id: '2',
        description: 'gas bill',
        amount: 20,
        note: '',
        createdAt: moment(0).subtract(4, 'day').valueOf()
    },
    {
        id: '3',
        description: 'lunch',
        amount: 15,
        note: '',
        createdAt: moment(0).add(4, 'day').valueOf()
    },
]