export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce(
        (acc, product) => acc + product.quantity, 0)
}

export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce(
        (acc, product) => acc + product.quantity * product.price, 0
    )
}
