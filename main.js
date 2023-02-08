const addDiv = (text) =>
  document.body.insertAdjacentHTML("beforeEnd", `<div>${text}</div>`);

const text = JSON.stringify(
  UAParser(),
  null,
  "&nbsp;&nbsp;&nbsp;&nbsp;"
).replaceAll("\n", "<br>");
addDiv(text);
