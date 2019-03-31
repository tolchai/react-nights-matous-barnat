import styled from 'styled-components/macro'
import { Link as BaseLink } from 'react-router-dom'
import theme from '../../../../../common/theme'

export const Wrapper = styled.li``

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: initial;
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 4rem;
`

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.div`
  color: ${theme.color.red};
  font-size: 1.8rem;
`

export const Img = styled.img`
  max-width: 100%;
`

export const TitleWrap = styled.div`
  overflow: hidden;
`

export const Title = styled.h3`
  font-weight: 100;
  text-transform: uppercase;
`
