chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "SEND_STARTER") {
    const input = document.querySelector('div[data-testid="chat-input"][contenteditable="true"]');
    if (input) {
      input.focus();
      document.execCommand('insertText', false, 'starter');

      const enterEvent = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        code: 'Enter',
        keyCode: 13
      });

      input.dispatchEvent(enterEvent);
    }
  }
});
