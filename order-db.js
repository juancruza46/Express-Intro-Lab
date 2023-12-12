const orders = [
    {order: 'Cheeseburger', done: true},
    {order: 'Chicken Salad', done: false},
    {order: 'Alfredo Pasta', done: false}
];
module.exports = {
    getAll: function() {
        return orders;
    }
};