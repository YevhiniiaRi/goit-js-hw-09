function e(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=Number(t.target.elements.delay.value),n=Number(t.target.elements.step.value),l=Number(t.target.elements.amount.value);for(let t=0;t<l;t++)e(t,o+t*n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.c456357c.js.map
