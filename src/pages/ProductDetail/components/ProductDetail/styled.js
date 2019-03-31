import styled from 'styled-components/macro'
import theme from '../../../../common/theme'

export const ProductWrap = styled.div`
  display: flex;
  margin-top: 4rem;
`

export const ImgWrap = styled.div`
  width: 50%;
  padding-right: 2.5%;
`

export const Img = styled.img`
  max-width: 100%;
`

export const ContentWrap = styled.div`
  width: 50%;
  padding-left: 2.5%;
`

export const Price = styled.div`
  color: ${theme.color.red};
  font-size: 1.8rem;
`

export const TitleWrap = styled.div`
  overflow: hidden;
`

export const Title = styled.h2`
  text-transform: uppercase;
  margin-top: 0;
`

export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
`
