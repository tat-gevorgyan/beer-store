export const saveToStore = (name, value) => {
  localStorage.setItem(name, value);
};

export const getFromStore = name => {
  return localStorage.getItem(name);
};

export const removeFromStore = name => {
  localStorage.removeItem(name);
};

export const removeAllStore = () => {
  localStorage.clear();
};
