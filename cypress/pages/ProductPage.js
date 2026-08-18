class ProductPage {

    sortProducts(option) {
    cy.get('[data-test="product-sort-container"]').select(option);
}

}

export default ProductPage;