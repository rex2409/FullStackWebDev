console.log(document);

const h1 = document.getElementById('heading');//selector type
console.log(h1);


//--------------styling--------------------
// h1.style.color='red';
// h1.style.border='3px solid black';
// h1.style.backgroundColor='aqua';


//---------------------traversal--------------------------------
const strong = document.querySelector('strong');//selector type
console.log(strong);

console.log(strong.parentElement);
console.log(strong.parentElement.parentElement);
console.log(strong.parentElement.parentElement.parentElement);
console.log(strong.parentElement.parentElement.parentElement.parentElement);//null

const p = document.querySelector('p');
console.log(p);
console.log(p.children);

const h2 = document.querySelector('h2');
console.log(h2);
console.log(h2.nextElementSibling);
console.log(h2.previousElementSibling);


//-----------------------selector---------------------------
const sel = document.getElementsByTagName('section');//array
console.log(sel);
console.log(sel[0]);

const favM = document.getElementsByClassName('fav-movie')//array
console.log(favM);
for(let mov of favM){
    mov.style.color='purple';
    mov.style.fontWeight='bold';
}

const inp = document.getElementsByName('username');
console.log(inp);

const h1_1 = document.querySelector('#heading');
console.log(h1_1);

const movie = document.querySelectorAll('.fav-movie');//array
console.log(movie);

const a = document.querySelector('ul a');
console.log(a);

console.log(p.innerText);//aware of styling
console.log(p.textContent);//not aware of styling
console.log(p.innerHTML);


//------------------classlist---------------------------
h1.classList.add('heading-class');
console.log(h1.classList);
h1.classList.add('one');
h1.classList.remove('one');
h1.classList.toggle('heading-class');//toggles its addition and removal
console.log(h1.classList.contains('heading-class'));


//----------------getAttribute, setAttribute---------------------
const i = document.querySelector('input');
console.log(i.getAttribute('type'));
console.log(i.getAttribute('name'));

i.setAttribute('type','date');

const img = document.querySelector('img');
img.setAttribute('src','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HEWc4UQg4s-gNFlFgRxCBQHaLG%26pid%3DApi&f=1&ipt=e81c0bace79bd51aff44e8ca15b842fb31cb0df79ef7b5e5e11da90ab8851466&ipo=images');


//-------------creating and adding elements-----------------------
const strong1 = document.createElement('strong');
strong1.innerText = 'THIS IS A STRONG TAG';
// p.appendChild(strong); //can only append html elements
p.append(strong1);//appends html elements and simple text
p.append('This is a random text');
p.prepend('this is a prepend');


//----------------removing elements----------------------------
p.removeChild(strong1);
// p.remove();//removes entire para