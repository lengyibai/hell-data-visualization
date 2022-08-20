(function flexible(window, document) {
  // Tips：Vscode插件的 remSize  根据浏览器宽度进行设置，控制台输入 document.documentElement.clientWidth，如 1920，则 remSize 为192px
  const el = document.documentElement;
  function setRemUnit() {
    let rem = 0;

    rem = el.clientWidth / 10;
    el.style.fontSize = rem + "px";
  }

  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", setRemUnit);
})(window, document);
