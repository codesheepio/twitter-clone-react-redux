import { connect } from 'react-redux'
import { push } from 'redux-router'
import NavBar from '../components/NavBar'

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
})

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push('/login')),
  goToSignup: () => dispatch(push('/signup')),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
