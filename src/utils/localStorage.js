const storageName = 'userData';

export const setUserLocalStorage = (data) => {
  localStorage.setItem(
    storageName,
    JSON.stringify({
      userId: data.userId,
      token: data.token,
      name: data.name,
    })
  );
};

export const checkUserLocalStorage = () => {
  return !!localStorage.getItem(storageName);
};

export const getUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem(storageName));
};

export const cleanUserLocalStorage = () => {
  localStorage.removeItem(storageName);
};
