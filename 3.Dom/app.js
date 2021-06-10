var titre = document.querySelectorAll('h1')

for(i=0;i<titre.length;i++){
    titre[i].addEventListener('click',function(){
        // console.log(this.textContent);
       if(this.textContent == "Rouge"){
           this.style="background-color: red"
       }
       if(this.textContent == "Bleu"){
           this.style="background-color: blue"
       }
       if(this.textContent == "Vert"){
           this.style="background-color: green"
       }
       if(this.textContent == "Jaune"){
           this.style="background-color: yellow"
       }
       if(this.textContent == "Orange"){
           this.style="background-color: orange"
       }
       if(this.textContent == "Rose"){
           this.style="background-color: pink"
       }
    })
}