
var cat = document.querySelector('img');
var but = document.querySelector('button')


but.addEventListener('click',function(){
  

   if(cat.getAttribute('src') == './images/cat-1.jpg'){
       cat.setAttribute('src', './images/cat-2.jpg')
   }
   else if(cat.getAttribute('src') == './images/cat-2.jpg'){
       cat.setAttribute('src', './images/cat-3.jpg')
   }
   else if(cat.getAttribute('src') == './images/cat-3.jpg'){
       cat.setAttribute('src', './images/cat-4.jpg')
   }
   else  if(cat.getAttribute('src') == './images/cat-4.jpg'){
       cat.setAttribute('src', './images/cat-5.jpg')
   }
   else  if(cat.getAttribute('src') == './images/cat-5.jpg'){
       cat.setAttribute('src', './images/cat-6.jpg')
   }
   else  if(cat.getAttribute('src') == './images/cat-6.jpg'){
       cat.setAttribute('src', './images/cat-7.jpg')
   }
   else if(cat.getAttribute('src') == './images/cat-7.jpg'){
       cat.setAttribute('src', './images/cat-8.jpg')
   }
   else if(cat.getAttribute('src') == './images/cat-8.jpg'){
       cat.setAttribute('src', './images/cat-9.jpg')
   }
   else if(cat.getAttribute('src') == './images/cat-9.jpg'){
       cat.setAttribute('src', './images/cat-10.jpg')
   }
   else if(cat.getAttribute('src') == './images/cat-10.jpg'){
       cat.setAttribute('src', './images/cat-11.jpg')
   }
   else  if(cat.getAttribute('src') == './images/cat-11.jpg'){
       cat.setAttribute('src', './images/cat-12.jpg')
   }
   else   if(cat.getAttribute('src') == './images/cat-12.jpg'){
       cat.setAttribute('src', './images/cat-13.jpg')
   }
   else  if(cat.getAttribute('src') == './images/cat-1.jpg'){
       cat.setAttribute('src', './images/cat-2.jpg')
    }

})

