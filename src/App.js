import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import GlobalStyles from './globalStyles'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'

import Layout from './components/Layout'
import { H1 } from './components/Typography'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Layout>
          <H1>
            <Link to="/">React Nights Merch</Link>
          </H1>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/:productId" component={ProductDetail} />
          </Switch>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App
