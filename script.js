// get the data element to display the page data
const dataSection = document.getElementById("data");

// add event listeners to all nav links to enable single page routing
const links = Array.from(document.querySelectorAll(".link"));
links.forEach((link) => {
  link.addEventListener("click", route);
});

function route(e) {
  // prevent default action of a tag
  e.preventDefault();
  // get the page name from query. this defaults to home if no query is empty
  const page = e.target.getAttribute("href").split("?")[1] || "home";
  getContent(page);
}

// links to html pages
const pages = {
  home: "/pages/home.html",
  books: "/pages/books.html",
  quotes: "/pages/quotes.html",
};

async function getContent(page) {
  // get the page content and add it to the data section
  const path = pages[page];
  const res = await fetch(path);
  const data = await res.text();
  dataSection.innerHTML = data;
}

// get home page content on load
getContent("home");
