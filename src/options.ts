import { getStorageToken, setStorageToken } from './utils';

window.addEventListener('load', () => {
  const tokenInput = document.querySelector('#token');
  let isClicked = false;
  const addConfigBtn = document.querySelector('#add-config-btn');
  if (tokenInput) {
    getStorageToken((token) => {
      (tokenInput as HTMLInputElement).value = token;
    });
  }

  if (addConfigBtn && tokenInput) {
    addConfigBtn.addEventListener('click', () => {
      if (isClicked) {
        return;
      }
      isClicked = true;
      const token = (tokenInput as HTMLInputElement).value;
      if (!token) {
        isClicked = false;
        alert('token cant be empty');
        return;
      }
      setStorageToken(token, () => {
        isClicked = false;
        alert('token save success');
      });
    });
  }
});
