const addDiv = (text) =>
  document.body.insertAdjacentHTML("beforeEnd", `<div>${text}</div>`);

const text = JSON.stringify(UAParser(), null, "\t")
  .replaceAll("\n", "<br>")
  .replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
addDiv(text);
