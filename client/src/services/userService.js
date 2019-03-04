import axios from 'axios';

const registration = async (email, password) =>{
  const {data} = await axios.post('/api/registration', {
    email,
    password,
  });
  return data;
};

const login = async (email, password) => {
  const {data} = await axios.post('/api/login', {
      email,
      password,
  });
  localStorage.setItem('user', JSON.stringify({ token: data.token }));
  axios.defaults.headers.common['Authorization'] = data.token;
  return data;
};

const relogin = async () => {
  try {
    const {data} = await axios.get('/api/relogin');
    return data;
  }
  catch (e) {
    logout();
    return {
      success: false,
      message: 'Сессия устарела'
    };
  }
};

const editProfile = async (newUser) => {
  const {data} = await axios.put('/api/edit-profile', newUser);
  return data;
};

const logout = () => {
  localStorage.removeItem('user');
  axios.defaults.headers.common['Authorization'] = '';
};

export const userService = {
  registration,
  login,
  relogin,
  logout,
  editProfile
};