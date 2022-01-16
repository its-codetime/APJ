const dataSection = document.getElementById("data");

const links = Array.from(document.querySelectorAll(".link"));
links.forEach((link) => {
  link.addEventListener("click", route);
});

function route(e) {
  e.preventDefault();
  const page = e.target.getAttribute("href").split("?")[1] || "home";
  getContent(page);
}

const pages = {
  home: "/pages/home.html",
  books: "/pages/books.html",
  quotes: "/pages/quotes.html",
};

async function getContent(page) {
  const path = pages[page];
  const res = await fetch(path);
  const data = await res.text();
  dataSection.innerHTML = data;
}

getContent("home");
