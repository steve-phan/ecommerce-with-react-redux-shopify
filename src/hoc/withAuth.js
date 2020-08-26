import  useAuth from './../redux/customHooks/useAuth'


const WithAuth = props =>  useAuth(props) && props.children

export default WithAuth