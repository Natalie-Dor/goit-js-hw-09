import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",i);e.addEventListener("submit",formSubmit);let m=e.elements.email,s=e.elements.message,t=JSON.parse(localStorage.getItem(a))||{email:"",message:""};function i(r){t={email:m.value.trim(),message:s.value.trim()},localStorage.setItem(a,JSON.stringify(t))}
//# sourceMappingURL=commonHelpers2.js.map
