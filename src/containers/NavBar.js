import { connect } from 'react-redux'
import { push } from 'redux-router'
import NavBar from '../components/NavBar'
import { logout } from '../actions/auth'

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
})

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push('/login')),
  goToSignup: () => dispatch(push('/signup')),
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
