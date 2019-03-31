import React, { Component } from 'react'
import Loader from '../../components/Loader'
import { getProduct } from '../../api/get-product'
import ProductDetailComponent from './components/ProductDetail'

class ProductDetail extends Component {
  state = {
    isLoading: true,
    product: false,
  }

  async componentDidMount() {
    let product = await getProduct(this.props.match.params.productId)

    this.setState({
      isLoading: false,
      product: product,
    })
  }

  render() {
    const { isLoading, product } = this.state

    return (
      <div>
        {isLoading && <Loader />}
        {product && <ProductDetailComponent product={product} />}
      </div>
    )
  }
}

export { ProductDetail }
