"use strict";

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

// Define a function to open all links in the sidebar.
function openSidebarLinks() {
  // Select all links with a specific class or other criteria that identifies them as sidebar links.
  const sidebarLinks = document.querySelectorAll(
    'a[href^="https://sidebar.io/out"]'
  );

  // Remove duplicate links.
  const filteredSidebarLinks = Array.from(sidebarLinks).filter(
    (link, index) => index % 2 === 0
  );

  // Open each link in a new tab.
  for (const link of filteredSidebarLinks) {
    window.open(link.href, "_blank");
  }
}

openSidebarLinks();
