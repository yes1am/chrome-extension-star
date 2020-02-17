import { StorageItem } from './types';

export function debug(...args: any) {
  console.group('%c Chrome Extension Star: ', 'color: white;background:#1791f2;');
  console.debug('%clog:', 'color: red', ...args);
  console.groupEnd();
}

export function getStorageToken(callback?:(token:string) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ token: '' }, (item: StorageItem) => {
    const { token } = item;
    debug(`get token: ${token}`);
    if (callback) {
      callback(token);
    }
  });
}

export function setStorageToken(token:string, callback:Function) {
  chrome.storage.sync.set({ token }, () => {
    debug(`set token: ${token}`);
    if (callback) {
      callback();
    }
  });
}
