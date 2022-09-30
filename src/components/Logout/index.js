import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="logout" onClick={logout}>
      LogOut
    </button>
  )
}

export default Logout
