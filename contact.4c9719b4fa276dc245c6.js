(()=>{const e=document.getElementById("contact");e.addEventListener("submit",(function(a){a.preventDefault();const r=document.getElementById("first_name"),u=document.getElementById("last_name"),n=document.getElementById("message"),s=document.getElementById("email"),l=document.getElementById("accept");if(""===r.value)return alert("Please enter your Name."),r.focus(),!1;if(""===u.value)return alert("Please enter your Last Name."),u.focus(),!1;if(""===s.value)return alert("Please enter your email address."),s.focus(),!1;if(!t(s.value))return alert("Please enter a valid email address."),s.focus(),!1;if(""===n.value)return alert("Please enter your message for us."),n.focus(),!1;if("true"!==l.getAttribute("aria-checked"))return alert("Please accept our privacy policy."),l.focus(),!1;e.submit()}),!1);const t=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)})();