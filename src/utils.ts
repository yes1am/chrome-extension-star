import { StorageItem } from './types';

export function getStorageToken(callback?:(token:string) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ token: '' }, (item: StorageItem) => {
    const { token } = item;
    console.log(`get token: ${token}`);
    if (callback) {
      callback(token);
    }
  });
}

export function setStorageToken(token:string, callback:Function) {
  chrome.storage.sync.set({ token }, () => {
    console.log(`set token: ${token}`);
    if (callback) {
      callback();
    }
  });
}
