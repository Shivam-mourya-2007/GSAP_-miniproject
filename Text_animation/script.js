function breakTheText() {

  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;

  const splittedText = h1Text.split("");

  let halfvalue = Math.floor(splittedText.length / 2);
//   console.log(halfvalue)
  let clutter = "";

  splittedText.forEach(function (elem,idx) {

    if (elem === " ") {
      clutter += `<span class="word-space"></span>`;
      return;
    }
    if(halfvalue > idx){
        clutter += `<span class ="firstName">${elem}</span>`;
    }else{
    clutter += `<span class = "lastName">${elem}</span>`;
    }
    
  });

  h1.innerHTML = clutter;
}


breakTheText();

gsap.from("h1 .firstName",{
    y:100,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    stagger: 0.2
})


gsap.from("h1 .lastName",{
    y: -100,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    stagger: -0.2
})