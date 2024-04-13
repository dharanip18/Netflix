export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z]+@[a-zA]+\.[A-Za-z]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      password
    );

  if (!isEmailValid) return "Email is invalid";
  if (!isPasswordValid) return "Password is invalid";
  return null;
};
