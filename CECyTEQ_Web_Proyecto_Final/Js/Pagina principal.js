function cerrame()
{
    if(abierto)
    {
        ifr.style.display="none";
    }
    else
    {
        ifr.style,display="block"
    }
    abierto=!abierto;
}
const img1 = document.getElementById('basqv');
const img2 = document.getElementById('basqf');
const img3 = document.getElementById('futv');
const img4 = document.getElementById('futf');
const img5 = document.getElementById('volim');
const panter = document.getElementById('panters');
const tabla = document.getElementById('Selection');
const evenaca = document.getElementById('Eventaca');
const evenex = document.getElementById('Evenex');
const even = document.getElementById('iframeeven');

panter.addEventListener('click', () =>
    {
        panter.style.display='none';
        tabla.style.display='block';
        evenaca.style.display='block';
        evenex.style.display='block'
        img1.style.display='block';
        img2.style.display='block';
        img3.style.display='block';
        img4.style.display='block';
        img5.style.display='block';
    });

evenaca.addEventListener('click', () =>
    {
        evenaca.style.display='none';
        tabla.style.display='none';
        panter.style.display='block';
        evenex.style.display='block';
        even.style.display='block';
    });

evenex.addEventListener('click', () =>
    {
        evenex.style.display='none';
        evenaca.style.display='block';
        panter.style.display='block';
        tabla.style.display='none';
        even.style.display='block';
    });  

img1.addEventListener('click', () =>
    {
        img1.style.display='none';
        img2.style.display='block';
        img3.style.display='block';
        img4.style.display='block';
        img5.style.display='block';
        even.style.display='block';
    });

img2.addEventListener('click', () => 
    {
        img2.style.display='none';
        img1.style.display='block';
        img3.style.display='block';
        img4.style.display='block';
        img5.style.display='block';
        even.style.display='block';
    });

img3.addEventListener('click', () =>
    {
        img3.style.display='none';
        img1.style.display='block';
        img2.style.display='block';
        img4.style.display='block';
        img5.style.display='block';
        even.style.display='block';
    });

img4.addEventListener('click', () =>
    {
        img4.style.display='none';
        img1.style.display='block';
        img2.style.display='block';
        img3.style.display='block';
        img5.style.display='block';
        even.style.display='block';
    });

img5.addEventListener('click', () =>
    {
        img5.style.display='none';
        img1.style.display='block';
        img2.style.display='block';
        img3.style.display='block';
        img4.style.display='block';
        even.style.display='block';
    });
    