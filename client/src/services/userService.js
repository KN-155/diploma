import axios from 'axios';

export const userService = {
  registration,
  login,
  relogin,
  logout,
};

function registration(email, password, alert) {
  return axios.post('/api/registration', {
    email,
    password,
  });
}

function login(email, password) {
  return axios
    .post('/api/login', {
      email,
      password,
    })
    .then(user => {
      localStorage.setItem('user', JSON.stringify({ token: user.data.token }));
      axios.defaults.headers.common['Authorization'] = user.data.token;
      return user.data.user;
    });
}

function relogin() {
  return axios.get('/api/relogin');
}

function logout() {
  localStorage.removeItem('user');
  axios.defaults.headers.common['Authorization'] = '';
}
