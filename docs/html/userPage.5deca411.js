const e="https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users",t=localStorage.getItem("user");const o=document.querySelector("#name"),c=document.querySelector("#avatar"),n=document.querySelector("#other-users-container"),a=localStorage.getItem("viewUser"),s=localStorage.getItem("viewUserAvatar"),r=localStorage.getItem("viewedUserId");document.querySelector("#other-user").innerText=`${a}'s posts`,async function(e,t,o,c){o.src=e,c.innerText=t}(s,a,c,o),async function(){const t=await fetch(e+`/${r}/posts.json`),o=await t.json();if(console.log(o),null!=o){const e=Object.values(o);console.log(e),c=e,(n=l).innerHTML="",c.forEach((e=>{const t=document.createElement("div");t.classList.add("post-card");const o=document.createElement("p");o.innerText=`${e}`,t.append(o),n.prepend(t)}))}var c,n}(),async function(o){const c=await fetch(e+".json"),n=await c.json();console.log(n);const a=Object.values(n),s=Object.keys(n);!function(e){let c=0;e.forEach((e=>{const{username:n,avatar:a}=e;if(n!=t){const e=document.createElement("h3");e.innerText=n;const t=document.createElement("img");t.src=a,t.style.maxHeight="100px";const r=document.createElement("div");r.append(e,t),o.append(r),r.classList.add("user-card");const l=s[c];t.addEventListener("click",(()=>{localStorage.setItem("viewUser",n),localStorage.setItem("viewUserAvatar",a),localStorage.setItem("viewedUserId",l),setTimeout((()=>{window.location.href="../html/userPage.html"}),100)}))}c++}))}(a)}(n);const l=document.querySelector("#post-card");
//# sourceMappingURL=userPage.5deca411.js.map