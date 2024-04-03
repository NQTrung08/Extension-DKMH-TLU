console.log("Running");

chrome.cookies.getAll({ url: "https://dangkyhoc.thanglong.edu.vn/" }, function(cookies) {
  if (cookies && cookies.length > 0) {
    console.log("Cookies found:", cookies);
    // Gửi danh sách cookie đến content script
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   chrome.tabs.sendMessage(tabs[0].id, { cookies: cookies });
    // });
  } else {
    console.log("No cookies found or access denied.");
  }
});