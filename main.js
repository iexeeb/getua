const addDiv = (text) =>
  document.body.insertAdjacentHTML("beforeEnd", `<div>${text}</div>`);

const text = JSON.stringify(UAParser(), null, 4)
  .replaceAll("\n", "<br>")
  .replaceAll("\u0020", "&nbsp;");
addDiv(text);
