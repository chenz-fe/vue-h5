(function() {
  const scale = 1 / window.devicePixelRatio;
  let viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    viewport = document.createElement("meta");
    viewport.setAttribute("name", "viewport");
    window.document.head.appendChild(viewport);
  }
  viewport.setAttribute(
    "content",
    "width=device-width,user-scalable=no,initial-scale=" +
      scale +
      ",maximum-scale=" +
      scale +
      ",minimum-scale=" +
      scale
  );
})();
