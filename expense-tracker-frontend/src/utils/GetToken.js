const getUserFromStorage = () => {
  const userToken = JSON.parse(localStorage.getItem("user")) || null;
  return userToken?.token;
};
export default getUserFromStorage;
