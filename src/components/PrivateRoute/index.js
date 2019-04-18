import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// TODO: connect to global state

//const isAuthenticated = true

// const Component = ({ component: Test, user, ...rest }) => ({

//   <Test />
// })

const PrivateRouteView = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        if (user.email) {
          return <Component {...routeProps} />
        }

        return (
          <Redirect
            to={{
              pathname: '/signup',
              state: {
                from: routeProps.location.pathname,
              },
            }}
          />
        )
      }}
    />
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

// const actionCreators = {
//   //removeProduct,
// }

const PrivateRoute = connect(
  mapStateToProps
  //  actionCreators
)(PrivateRouteView)

export { PrivateRoute }
