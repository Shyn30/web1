// menyiapkan canvas

const canvas = document.querySelector('#canvas');

// atur ukuran
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// tentukan context
const c = canvas.getContext('2d');

// // manipulasi canvas

// // membuat reactangle
// c.fillstyle = 'pink';
// c.strokeStyle = '#555';
// c.lineWidth = '5';
// // jalankan c nya, (x, y, w, h)
// c.rect(50, 50, 300,300);
// c.fill();
// c.stroke();


// buat var untuk sumbu x agar lingkarannya jalamn ke kanan
let x = 300;
let speedX = 5;
let speedY = 5;
let y = 200;
let radius = 150; 

function draw(){
    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight)
// membuat acc/circle
c.fillstyle = 'green';
c.beginPath();
// memmbuat lingkaran (x, y, radius, sudut, dikali pi)
c.arc(x, y, radius, 0, 2 * Math.PI);
c.fill();
c.stroke();

if(x + radius > innerWidth || x - radius <0  ){
    speedX=-speedX;
}
if(y + radius > innerHeight || y - radius <0  ){
    speedY=-speedY;
}


x += speedX;
y += speedY;

}
draw();