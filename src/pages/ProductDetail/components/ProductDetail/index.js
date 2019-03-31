import React from 'react'
import {
  ProductWrap,
  ContentWrap,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Description,
} from './styled'

const ProductDetail = ({ product }) => (
  <ProductWrap>
    <ImgWrap>
      <Img src={product.image_url} alt={`${product.name} image`} />
    </ImgWrap>
    <ContentWrap>
      <TitleWrap>
        <Title>{product.name}</Title>
      </TitleWrap>
      <Description>{product.description}</Description>
    </ContentWrap>
  </ProductWrap>
)

export default ProductDetail
