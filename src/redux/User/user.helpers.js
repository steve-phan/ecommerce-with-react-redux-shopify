import { auth } from './../../components/firebase/utils'

export const handleResetPasswordAPI  = (email) => {
    const config = {
        url: "http://localhost:3000/signin",
      };
    return new Promise((resolve,reject) => {
        auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
         resolve()
          // alert("Check your email to set new password");
          // props.history.push("/");
        })
        .catch(() => {
          const err = ["Email not found.. try again"];
          reject(err)
     
        });
    })
}