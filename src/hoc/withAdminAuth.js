import useAdminAuth from '../redux/customHooks/useAdminAuth'

const WithAdminAuth = props =>  useAdminAuth(props) ||  props.children;
 
export default WithAdminAuth