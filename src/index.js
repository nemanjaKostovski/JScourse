/* eslint-disable no-redeclare */
//import '../assets/css/style.css';



//dan 1
console.log('Hello by js');

const app = document.getElementById('app');
console.log(app);

app.innerHTML = '<p>Hello to BootcampPizza by JavaScript Basics</p>';
const social = document.getElementById('social');

social.innerHTML = '<a href="https://www.facebook.com" target="_blank"><img  class="social-icon" src="assets/images/fb_ico.png"></a>';
social.innerHTML += '<a href="https://www.youtube.com" target="_blank"><img  class="social-icon" src="assets/images/icons8-youtube-30.png"></a>';
social.innerHTML += '<a href="https://www.twitter.com" target="_blank"><img  class="social-icon" src="assets/images/icons8-twitter-64.png"></a>';
social.innerHTML += '<a href="https://www.instagram.com" target="_blank"><img  class="social-icon" src="assets/images/icons8-instagram-64.png"></a>';

//Nedelja 1
var variable = 'Dobar dan!';
console.log(variable);
var variable2 = 'Dodatak poruke';
console.log(variable + variable2);
var number1 = 8;
var number2 = 12;
var number3 = number1 + number2;
console.log(number3);
{
    var number1 = 15;
    var number2 = 10;
    var number3 = 2;
    console.log(number1 + number2 * number3);
    const constant = 5;
    console.log(constant);
    // ne mere constant = 6;
}

{
    var a = 12;
    let b = 5;
    console.log(a);
    console.log(b);
}

console.log(a);
//let b=15; //Ako imamo let spolja onda je naredna linija okej. U suprotnom nije okej!
// console.log(b);

{ //s1
    let b;
    b= 10;
    console.log(b);
    { //s2
        let c;
        b=15;
        c=8;
        console.log(c);
        { //s3
            let d;
            d=21;
            console.log(d);
        }
        let d;
        console.log(d);
    }
}
var b;
console.log(b);

{
    {
        //y je deklarisan u skoupu sa let, a definisan u child skoupu i to funkcionise
        let y;
        {
            //z je deklarisan u skoupu sa let, a u parent skoupu definisan, to ne funkcionise
            var x;
            y=2;
            console.log(y);
            //let z;
        }
        //z=3;
        //ovo radi, ali dobijamo za x undefined
        console.log(x);
    }
}
// x je deklarisan sa var unutar skopa, ali je dostupan globalno
// definisan je u globalu i to funkcionise
x= 1;