window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  menuSettings: { 
    zoom: "Double-Click" 
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})
