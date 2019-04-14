import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'

import { getCustomerToken } from '../../api/get-customer-token'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import Button from '../../components/Button'

import { loginUser } from '../../store/user/actions'

//import { schema } from './schema'

class SignInView extends Component {
  state = {
    globalError: '',
  }

  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const customerToken = await getCustomerToken(values)
      if (customerToken) {
        this.props.loginUser({
          email: values.email,
          token: customerToken,
        })
        this.props.history.push('/')
      } else {
        this.setState({
          globalError: 'Wrong credentials',
        })
      }
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  render() {
    const { globalError } = this.state

    return (
      <Layout>
        <H1 textAlign="center">Sign In</H1>
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {Boolean(globalError) && (
                <GlobalFormError>{globalError}</GlobalFormError>
              )}
              <Input name="email" type="email" label="Email address" />
              <Input name="password" type="password" label="Password" />
              <Button disabled={isSubmitting}>
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

const mapStateToProps = () => ({})

const actionCreators = {
  loginUser,
}

const SignIn = connect(
  mapStateToProps,
  actionCreators
)(SignInView)

export { SignIn }
