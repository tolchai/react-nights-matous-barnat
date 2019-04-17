import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'

import { getUserById } from '../../api/customers/get-customer'
import { logoutUser } from '../../store/user/actions'

import Button from '../../components/Button'

class AccountView extends Component {
  state = {
    userName: '',
    userMail: '',
  }

  fetchUserInfo = async userId => {
    const userInfo = await getUserById(userId)
    const userName = userInfo.data.attributes.metadata.firstName
    const userMail = userInfo.data.attributes.email
    this.setState({ userName, userMail })
  }

  componentDidMount() {
    const { id } = this.props.user
    this.fetchUserInfo(id)
  }

  render() {
    return (
      <Layout>
        <H1>My Account</H1>
        <p>Name: {this.state.userName}</p>
        <p>Email: {this.state.userMail}</p>
        <Button type="button" onClick={() => this.props.logoutUser()}>
          Sign out
        </Button>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

const actionCreators = {
  logoutUser,
}

const Account = connect(
  mapStateToProps,
  actionCreators
)(AccountView)

export { Account }
