import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const m="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",i);e.addEventListener("submit",s);let a=e.elements.email,l=e.elements.message,r=JSON.parse(localStorage.getItem(m))||{email:"",message:""};function i(t){r={email:a.value.trim(),message:l.value.trim()},localStorage.setItem(m,JSON.stringify(r))}function s(t){if(t.preventDefault(),a.value===""||l.value==="")return alert("Please fill in all the fields!");console.log({email:a.value.trim(),message:l.value.trim()}),localStorage.removeItem(m),t.currentTarget.reset()}
//# sourceMappingURL=commonHelpers2.js.map
