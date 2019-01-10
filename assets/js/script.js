const initMenu = () => {
  const $el = document.querySelector('#navigation');

  $el.classList.add('active');

  console.log($el);
}

const highlightCode = () => {
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach((el)=>{
    hljs.highlightBlock(el);
  });
}

window.onload = ()=>{
  const isPost = document.querySelectorAll('.post-template').length > 0;

  if (isPost) {
    highlightCode();
  }

  initMenu();
}

