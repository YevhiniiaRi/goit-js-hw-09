!function(){function e(e,t){return new Promise((function(n,o){var a=Math.random()>.3;setTimeout((function(){a?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),a=Number(t.target.elements.amount.value),i=0;i<a;i++)e(i,n+i*o).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.1f552bf3.js.map
