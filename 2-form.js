import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const m=localStorage.getItem("feedback-form-state")??"",a=document.querySelector(".feedback-form"),t={email:"",message:""};if(m!=""){const e=JSON.parse(m),s=a.elements.email,l=a.elements.message;s.value=t.email=e.email,l.value=t.message=e.message}a.addEventListener("input",o);a.addEventListener("submit",r);function o(e){t[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))}function r(e){e.preventDefault(),t.email==""||t.message==""?alert("Fill please all fields"):(console.log(t),localStorage.removeItem("feedback-form-state"),a.reset())}
//# sourceMappingURL=2-form.js.map