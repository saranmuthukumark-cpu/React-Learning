const mainEl = document.getElementById("root");

const parentEl = document.createElement("div");
parentEl.classList.add("bg-white", "rounded", "text-black", "p-5" , "w-[600px]", "mx-auto", "mt-10");

// creating child element
const headEl = document.createElement("h1");
headEl.textContent = "React Learning Path👋";
headEl.classList.add("text-4xl", "text-center", "font-bold");

// creating ul element
const ulEl = document.createElement("ul");
ulEl.classList.add("flex", "items-center", "justify-center", "gap-5", "mt-5");

// creating li element
const skills = ["Fundamentals", "Hooks", "Routing", "State Management"];

skills.forEach((skill) => {
  const liEl = document.createElement("li");
  liEl.textContent = skill;
  liEl.classList.add("px-4", "py-1", "text-white", "rounded");

  switch (skill) {
    case "Fundamentals":
      liEl.classList.add("bg-purple-500");
      break;
    case "Hooks":
      liEl.classList.add("bg-blue-500");
      break;
    case "Routing":
      liEl.classList.add("bg-green-500");
      break;
    case "State Management":
      liEl.classList.add("bg-yellow-500");
      break;
  }

  ulEl.appendChild(liEl);
});

// appending to parent
parentEl.appendChild(headEl);
parentEl.appendChild(ulEl);

//append all
mainEl.appendChild(parentEl);
