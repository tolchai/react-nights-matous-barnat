import React, { Component } from 'react'

import ProductListComponent from './components/ProductList'
import Loader from '../../components/Loader'

import { getProducts } from '../../api/get-products'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: [],
  }

  async componentDidMount() {
    let products = await getProducts()

    this.setState({
      isLoading: false,
      products,
    })
  }

  render() {
    const { isLoading, products } = this.state

    return (
      <div>
        {isLoading && <Loader />}
        {products && <ProductListComponent products={products} />}
      </div>
    )
  }
}

export { ProductList }
