import { connect } from 'react-redux'
import BodyContainer from '../components/BodyContainer'
import { fetchProfile } from '../actions/profile'

const mapStateToProps = state => ({
  username: state.router.params.username ? state.router.params.username : state.auth.username,
})

export default connect(mapStateToProps, { fetchProfile })(BodyContainer)
