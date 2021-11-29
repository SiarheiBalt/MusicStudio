const storageName = 'userData';

export const setUserLocalStorage = (data) => {
  localStorage.setItem(
    storageName,
    JSON.stringify({
      ...data,
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
