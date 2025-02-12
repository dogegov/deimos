(async () =>{
  const d = (await import('./__default.js')).default;
  let s; try { s = (await import('./__strings.js')).default } catch { s = {} };
  f = { ...d, ...s };
  const w = (el) => {
    el.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        Object.keys(f).forEach((key) => {
          node.textContent = node.textContent.replace(new RegExp(key, 'g'), f[key]);
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        w(node);
      }
    });
  };
  w(document.body);
})();
