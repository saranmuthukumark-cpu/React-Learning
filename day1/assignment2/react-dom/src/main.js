// Import
import React from "https://esm.sh/react@19";
import ReactDOMClient from "https://esm.sh/react-dom@19/client";

const rootEl = document.getElementById("root");

// react createElement
const mainEl = React.createElement(
  "div",
  { className: "bg-white rounded text-black p-5 bg-white rounded text-black p-5  w-[600px] mx-auto mt-10 " },

  React.createElement(
    "h1",
    { className: "text-4xl text-center " },
    "React Learning Path👋",
  ),

  React.createElement(
    "ul",
    { className: "flex items-center justify-center gap-5 mt-5" },

    React.createElement(
      "li",
      { className: "bg-purple-500 px-4 py-1 text-white rounded" },
      "Fundamentals",
    ),

    React.createElement(
      "li",
      { className: "bg-blue-500 px-4 py-1 text-white rounded" },
      "Hooks",
    ),

    React.createElement(
      "li",
      { className: "bg-green-500 px-4 py-1 text-white rounded" },
      "Routing",
    ),

    React.createElement(
      "li",
      { className: "bg-yellow-500 px-4 py-1 text-white rounded" },
      "State Management",
    ),
  ),
);

const root = ReactDOMClient.createRoot(rootEl);
root.render(mainEl);
