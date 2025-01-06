// 📁 src/services/validation.js
export const isValidEmail = (email) => {
  return email.includes('@') && email.includes('.');
};

export const isValidName = (name) => {
  return name.length >= 2 && /^[a-zA-Z\s]+$/.test(name);
};
