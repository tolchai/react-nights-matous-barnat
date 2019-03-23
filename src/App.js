import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import config from './config'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 1rem 2rem 0 rgba(0, 0, 0, 0.09)',
}

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2rem;
		font-family: sans-serif;
	}
	a {
		text-decoration: none;
		color: ${theme.black};
	}
  img {
    max-width: 100%;
    height: auto;
  }
`

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Header = styled.header`
  padding: 2rem 0;
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  gridpadding: 2rem;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0 0 4rem;
`

const GridItem = styled.li`
  padding: 2rem;
  border: 1px solid ${props => props.theme.lightgrey};
  box-shadow: ${props => props.theme.bs};
`

const getToken = () =>
  fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_secret: config.clientSecret,
      client_id: config.clientId,
      scope: config.scope,
    }),
  }).then(res => res.json())

const getSkus = access_token =>
  fetch(`${config.apiUrl}/api/skus`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  }).then(res => res.json())

class App extends Component {
  state = {
    isLoading: true,
    products: {},
  }

  async componentDidMount() {
    const { access_token } = await getToken()
    const response = await getSkus(access_token)
    const products = response.data
    this.setState({ products, isLoading: false })
  }

  render() {
    const { isLoading, products } = this.state
    return (
      <div>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Inner>
              <Header>
                <h1>React Nights Merch</h1>
              </Header>
              {isLoading && <p>Loading products...</p>}
              {!isLoading && (
                <Grid>
                  {products.map(product => (
                    <GridItem key={product.id}>
                      <img
                        src={product.attributes.image_url}
                        alt={product.attributes.description}
                      />
                      <h2>{product.attributes.name}</h2>
                    </GridItem>
                  ))}
                </Grid>
              )}
            </Inner>
          </StyledPage>
        </ThemeProvider>
        <GlobalStyle />
      </div>
    )
  }
}

export default App
