import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { getProductById } from '../../api/get-product'
import { loadProducts } from '../../store/products/actions'
import { addProduct } from '../../store/cartItems/actions'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
  AddButton,
} from './styled'

class TheProduct extends Component {
  state = {
    product: null,
  }

  fetchProduct = async productId => {
    this.setState({ isLoading: true })
    const product = await getProductById(productId)

    let products = []
    products.push(product.data.attributes)

    this.props.loadProducts(products)
    this.setState({ isLoading: false, product })
  }

  componentDidMount() {
    const { productId } = this.props.match.params
    this.fetchProduct(productId)
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props.match.params
    if (prevProps.match.params.productId !== productId) {
      this.fetchProduct(productId)
    }
  }

  handleAddToCart = evt => {
    const { productId } = this.props.match.params
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    const { isLoading, product } = this.state

    return (
      <Layout>
        <Wrapper>
          {isLoading && <Loader />}
          {product && (
            <>
              <ImgWrapper>
                <Img src={product.data.attributes.image_url} />
              </ImgWrapper>
              <DetailsWrapper>
                <H1 textAlign="center">{product.data.attributes.name}</H1>
                <Price>{product.included[0].attributes.formatted_amount}</Price>
                <AddButton onClick={evt => this.handleAddToCart(evt)}>
                  Add to Cart
                </AddButton>
                <Description>{product.data.attributes.description}</Description>
                <Link to="/">Back</Link>
              </DetailsWrapper>
            </>
          )}
        </Wrapper>
      </Layout>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  loadProducts,
  addProduct,
}

const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheProduct)

export { ProductDetail }
