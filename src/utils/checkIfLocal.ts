export const checkIfLocal = () => {
  return window.location.hostname === "localhost";
};
export const getBasePath = () => {
  return checkIfLocal() ? "" : "/vue-draggable-todos";
};
