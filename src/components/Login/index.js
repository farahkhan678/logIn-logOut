import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button type="button" className="logout" onClick={login}>
      LogIn
    </button>
  )
}

export default Login
