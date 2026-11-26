try{document.documentElement.setAttribute('data-theme',localStorage.getItem('tfx-theme')||'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}
