window.addEventListener('load', () => {
  const { href: url } = window.location;
  const { title } = document;

  // send url and title to background
  chrome.runtime.sendMessage({
    url,
    title,
  }, (response) => {
    console.log(`receive response: ${response}`);
  });
});
