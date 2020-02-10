import axios from 'axios';
import { getStorageToken } from './utils';

let url = '';
let title = '';

// receive data from content-script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { url: recUrl, title: recTitle } = request;
  console.log(`收到 title: ${recTitle}, url: ${recUrl}`);
  url = recUrl;
  title = recTitle;
  sendResponse(`receive data: ${JSON.stringify(request)}`);
});

function star() {
  getStorageToken((token) => {
    if (!url || !title || !token) {
      console.log(`no url or title or token: url: ${url}, title: ${title}, token: ${token}`);
      return;
    }
    console.log('star 正在发送');

    axios({
      method: 'post',
      url: 'https://api.github.com/repos/yes1am/PiggyBank/issues',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
      data: {
        title,
        body: url,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log('star 发送成功');
        }
      })
      .catch((err) => {
        console.log('err', err);
        console.log('star 发送失败');
      });
  });
}

chrome.contextMenus.create({
  title: 'star',
  onclick() {
    star();
  },
});
