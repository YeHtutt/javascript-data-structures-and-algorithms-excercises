function calculateTotalSalesWithTax(products, taxRate) {
    //  Calculate total sales amount using the product price and quantity using the reduce method
    const totalSales = products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0 //start value at 0
    );
    console.log('totalSales: ', totalSales);

    // Calculate the tax amount using the total sales amount and the tax rate
    const taxAmount = (totalSales * taxRate) / 100;
    console.log('taxAmount: ', taxAmount);

    // Return the total sales amount with tax rounded to 2 decimal places
    const totalSalesWithTax = totalSales + taxAmount;
    return parseFloat(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;