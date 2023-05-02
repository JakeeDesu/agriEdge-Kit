import Cookies from 'js-cookie';

export const setAuthCookie = (token) => {
  Cookies.set('authToken', token, { expires: 1 }); // Set the cookie to expire in 1 day
};

export const removeAuthCookie = () => {
  Cookies.remove('authToken');
};

export const getAuthCookie = () => {
  return Cookies.get('authToken');
};