let lis=document.getElementById('lis');
let sdiv1=document.getElementById('sdiv1');
let sdiv2=document.getElementById('sdiv2');
let sdiv3=document.getElementById('sdiv3');
let sdiv4=document.getElementById('sdiv4');
let div2=document.getElementById('div2');


let h1=document.createElement('h1');
h1.style.color='white';
h1.style.textAlign='center';
h1.style.fontSize='50px';
h1.style.paddingLeft='45px';
h1.style.paddingTop='170px';
h1.style.fontFamily='lucida calligraphy';
let ptext=document.createTextNode('You are good man')



sdiv1.onclick=function(){
    sdiv1.focus;
    window.localStorage.setItem('backgroundColor','red')
  div2.style.backgroundColor= window.localStorage.getItem('backgroundColor')
    h1.appendChild(ptext);
div2.appendChild(h1);
window.localStorage.setItem('display','flex');
h1.style.display= window.localStorage.getItem('display');
}

sdiv1.ondblclick=function(){
    window.localStorage.setItem('display','none');
  h1.style.display= window.localStorage.getItem('display');
}


sdiv2.onclick=function(){
    sdiv2.focus;
    window.localStorage.setItem('backgroundColor','blue')
  div2.style.backgroundColor= window.localStorage.getItem('backgroundColor')
  h1.appendChild(ptext);
  div2.appendChild(h1);
  window.localStorage.setItem('display','flex');
h1.style.display= window.localStorage.getItem('display');

}
sdiv2.ondblclick=function(){
    window.localStorage.setItem('display','none');
  h1.style.display= window.localStorage.getItem('display');
    }

sdiv3.onclick=function(){
    sdiv3.focus;
    window.localStorage.setItem('backgroundColor','greenyellow')
  div2.style.backgroundColor= window.localStorage.getItem('backgroundColor')
  h1.appendChild(ptext);
  div2.appendChild(h1);
  window.localStorage.setItem('display','flex');
h1.style.display= window.localStorage.getItem('display');

}
sdiv3.ondblclick=function(){
        window.localStorage.setItem('display','none');
  h1.style.display= window.localStorage.getItem('display');
    }

sdiv4.onclick=function(){
    sdiv4.focus;
    window.localStorage.setItem('backgroundColor','black')
  div2.style.backgroundColor= window.localStorage.getItem('backgroundColor')
  h1.appendChild(ptext);
  div2.appendChild(h1);
  window.localStorage.setItem('display','flex');
h1.style.display= window.localStorage.getItem('display');

}
sdiv4.ondblclick=function(){
        window.localStorage.setItem('display','none');
  h1.style.display= window.localStorage.getItem('display');
    }