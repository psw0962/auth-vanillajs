// email
function emailInvalidCheck(emailVal, InvalidModal, sendBtn) {
  const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  const EmailValue = document.querySelector(emailVal);
  const InvalidEmail = document.querySelector(InvalidModal);
  const sendButton = document.querySelector(sendBtn);

  if (EmailValue.value !== "" && !emailValidation.test(EmailValue.value)) {
    InvalidEmail.style.display = "flex";
    EmailValue.style.background = "#FFDFEB";
    EmailValue.style.border = "1px solid #FF619A";
  } else {
    InvalidEmail.style.display = "none";
    EmailValue.style.background = "#fff";
    EmailValue.style.border = "1px solid #E4E4E4";
  }

  if (sendBtn !== null && emailValidation.test(EmailValue.value)) {
    sendButton.style.background = "#EA002B";
    sendButton.style.color = "#fff";
  } else {
    sendButton.style.background = "#f5f5f5";
    sendButton.style.color = "#b5b5b6";
  }
}

// pw
function pwInvalidCheck(pwVal, InvalidModal) {
  const pwValidation =
    /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;

  const pwValue = document.querySelector(pwVal);
  const invalidPw = document.querySelector(InvalidModal);

  if (pwValue.value !== "" && !pwValidation.test(pwValue.value)) {
    invalidPw.style.display = "flex";
    pwValue.style.background = "#FFDFEB";
    pwValue.style.border = "1px solid #FF619A";
  } else {
    invalidPw.style.display = "none";
    pwValue.style.background = "#fff";
    pwValue.style.border = "1px solid #E4E4E4";
  }
}

// pw confirm
function pwConfirmInvalidCheck(pwVal, pwConfirmVal, InvalidModal) {
  const pwValue = document.querySelector(pwVal);
  const pwConfirmValue = document.querySelector(pwConfirmVal);
  const invalidPwConfirm = document.querySelector(InvalidModal);

  if (pwConfirmValue.value !== "" && pwValue.value !== pwConfirmValue.value) {
    invalidPwConfirm.style.display = "flex";
    pwConfirmValue.style.background = "#FFDFEB";
    pwConfirmValue.style.border = "1px solid #FF619A";
  } else {
    invalidPwConfirm.style.display = "none";
    pwConfirmValue.style.background = "#fff";
    pwConfirmValue.style.border = "1px solid #E4E4E4";
  }
}

// certification num
function certificationInvalidCheck(certifiNumVal, confirmBtn) {
  const certifiNumValue = document.querySelector(certifiNumVal);
  const confirmButton = document.querySelector(confirmBtn);

  if (certifiNumValue.value !== "") {
    confirmButton.style.background = "#EA002B";
    confirmButton.style.color = "#fff";
  } else {
    confirmButton.style.background = "#f5f5f5";
    confirmButton.style.color = "#b5b5b6";
  }
}

// certification
function BorderColorHandler(type, item) {
  const inputBorderColor = document.querySelector(item);
  console.log(type);

  if (type === "onfocus") {
    inputBorderColor.style.border = "2px solid #727172";
  }

  if (type === "onblur") {
    inputBorderColor.style.border = "1px solid #e4e4e4";
  }
}
