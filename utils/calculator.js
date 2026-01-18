function calculateTotal(price, quantity) {
    const total = parseFloat(price) * parseInt(quantity);
    return total.toFixed(2);
}

module.exports = { calculateTotal };