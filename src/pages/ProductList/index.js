import React, { useState } from 'react'
import { connect } from 'react-redux'
import qs from 'qs'

import { getProducts } from '../../api/products/get-products'
import { useApi } from '../../api/use-api'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { Pagination } from '../../components/Pagination'

import * as cartActions from '../../store/cart/actions'
import Product from './Product'
import { ProductsWrap } from './styled'

const Products = ({ match, location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))
  const [count, setCount] = useState(25)

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page, size: count } }),
    [page, count]
  )

  const handleAddToCart = productId => addProduct(productId)
  const handleCount = event => {
    if (event.target.value !== count) {
      setCount(event.target.value)
    }
  }

  return (
    <Layout>
      <H1 textAlign="center">E-Commerce app</H1>
      Products per page:
      <select value={count} onChange={handleCount} onBlur={handleCount}>
        <option value="9">9</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      {isLoading && <Loader />}
      {res && (
        <>
          <Pagination
            pages={res.meta.page_count}
            activePage={match.params.page}
          />
          <ProductsWrap>
            {res.data.map(product => (
              <Product
                key={product.id}
                node={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ProductsWrap>
        </>
      )}
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
