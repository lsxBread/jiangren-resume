"use strict"

let resumePage
let homePage
let allPages
let pageNavigationMap

function init() {
  allPages = document.querySelectorAll('main section')
  homePage = document.querySelector('main > section[data-page-xxx="#home"]')
  resumePage = document.querySelector('main > section[data-page-yyy="#resume"]')
  homePage.style.display = 'block'
  resumePage.style.display = 'none'

  pageNavigationMap = {
    "#home": homePage,
    "#resume": resumePage
  }
}

function highlighNavButton (navButton) {
  // hightligtht
}
function addListenerForNavButton() {
  const navButtons = document.querySelectorAll('header nav a')
  navButtons.forEach(navButton => {
    navButton.addEventListener('click', (event) => {
      highlighNavButton(event.target)
    })
  })
}

function addHomeHashOnFirstLoad() {
  if (location.hash === "") {
    location.hash = "#home"
  }
}

function hideAllPage() {
  allPages.forEach(page => {
    page.style.display = 'none'
  })
}

/**
 * display the targeted page section
 * @param {*} pageNode the seciton html tag
 */
function showTargetPage(pageNode) {
  hideAllPage()
  pageNode.style.display = "block"
}

function navigatePage() {
  const targetPage = pageNavigationMap[location.hash]
  showTargetPage(targetPage)
}

window.onload = function () {
  // init
  init()
  // add listener for hash change
  window.onhashchange = navigatePage

  // if currnet hash is empty, add #home
  addHomeHashOnFirstLoad()

  // add listern to nav button
  addListenerForNavButton()
};

