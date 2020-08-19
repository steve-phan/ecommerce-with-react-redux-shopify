var applicationVerifier = new firebase.auth.RecaptchaVerifier(
  "recaptcha-container"
);
var provider = new firebase.auth.PhoneAuthProvider();
provider
  .verifyPhoneNumber("+16505550101", applicationVerifier)
  .then(function (verificationId) {
    var verificationCode = window.prompt(
      "Please enter the verification " +
        "code that was sent to your mobile device."
    );
    return firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
  })
  .then(function (phoneCredential) {
    return firebase.auth().signInWithCredential(phoneCredential);
  });
