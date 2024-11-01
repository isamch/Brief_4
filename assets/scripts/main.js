// var :
const formCont = document.getElementById('formCont');
// nexts:
const firstNext = document.getElementById('next-1');
const secondNext = document.getElementById('next-2');
const thirdNext = document.getElementById('next-3');
// prevuis :
const firstPre = document.getElementById('previous-1');
const secondPre = document.getElementById('previous-2');

// firstNext.addEventListener("click", () => {
//   formCont.style.justifyContent = 'center';
// });
// secondNext.addEventListener("click", () => {
//   formCont.style.justifyContent = 'end';
// });
firstPre.addEventListener("click", () => {
  formCont.style.justifyContent = 'start';
});
secondPre.addEventListener("click", () => {
  formCont.style.justifyContent = 'center';
});

// validation :
// var :
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const pNum = document.getElementById("pNumber");


// regex :
const fNameRegex = /^[A-Za-z]{3,20}$/;
const lNameRegex = /^[A-Za-z]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+?[0-9]{1,3}[-.\s]?([0-9]{2,3}[-.\s]?){2,4}[0-9]{3,4}$/;


fName.addEventListener("input", ()=>{
  const spanfName = document.getElementById("spanfName");
  if (!fNameRegex.test(fName.value) ) {
    spanfName.style.visibility = 'visible';
    spanfName.textContent = " error ";
    spanfName.style.color = 'red';
  }else{
    spanfName.style.color = 'green';
    spanfName.textContent = "good";

    firstNext.addEventListener("click", () => {
      formCont.style.justifyContent = 'center';
    });
  }
});

lName.addEventListener("input", ()=>{
  const spanlName = document.getElementById("spanlName");
  if (!lNameRegex.test(lName.value) ) {
    spanlName.style.visibility = 'visible';
    spanlName.textContent = " error ";
    spanlName.style.color = 'red';
  }else{
    spanlName.style.color = 'green';
    spanlName.textContent = "good";

    firstNext.addEventListener("click", () => {
      formCont.style.justifyContent = 'center';
    });
  }
});


email.addEventListener("input", ()=>{
  const emailSpan = document.getElementById("emailSpan");
  if (!emailRegex.test(email.value) ) {
    emailSpan.style.visibility = 'visible';
    emailSpan.textContent = " error ";
    emailSpan.style.color = 'red';
  }else{
    emailSpan.style.color = 'green';
    emailSpan.textContent = "good";

    secondNext.addEventListener("click", () => {
      formCont.style.justifyContent = 'end';
    });
  }
});

pNum.addEventListener("input", ()=>{
  const phoneSpan = document.getElementById("phoneSpan");
  if (!phoneRegex.test(pNum.value) ) {
    phoneSpan.style.visibility = 'visible';
    phoneSpan.textContent = " error ";
    phoneSpan.style.color = 'red';
  }else{
    phoneSpan.style.color = 'green';
    phoneSpan.textContent = "good";

    secondNext.addEventListener("click", () => {
      formCont.style.justifyContent = 'end';
    });
  }
});




// show popup info :
const popUp = document.getElementById('popInfo');
const closePop = document.getElementById('btnClosePop');

thirdNext.addEventListener('click', ()=>{
  popUp.style.display = 'block';
});

closePop.addEventListener('click', ()=>{
  popUp.style.display = 'none';
});




// local storage :
var popUpList = document.querySelectorAll('#popInfo span');

var formInfo = document.querySelectorAll('form input, form textarea');


formInfo.forEach((singleInput) => {
  singleInput.addEventListener('input', () => {
    localStorage.setItem(singleInput.id, singleInput.value);
  
  });
});


// load data :
window.addEventListener('load', () => {
  let j = 0;
  for (let i = 2; i < 7 ; i++) {
    popUpList[i].textContent = localStorage.getItem(formInfo[j].id);
    j++;
  } 
});




