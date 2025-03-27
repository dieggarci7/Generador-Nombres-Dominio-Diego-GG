import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

 
  //write your code here
  let pronoun = ['the', 'our','my','your'];
  let adj = ['great', 'big','strange','famous'];
  let noun = ['jogger', 'racoon','fish','biscuit'];
  let domain = ['.com','.es','.net','.fr']
  
  let allDomains=[]
  
  for(let i=0;i<pronoun.length;i++){
      for(let j=0;j<adj.length;j++){
          for(let x=0;x<noun.length;x++){
              for(let y=0;y<domain.length;y++){
                  allDomains.push(pronoun[i]+adj[j]+noun[x]+domain[y])
              }
          }
      }
  }
  
  let randomIndex = Math.floor(Math.random() * allDomains.length);
  let randomDomain = allDomains[randomIndex];;


window.onload = function(){
    document.querySelector('#H1').innerHTML= "Generador de Dominios"
    document.querySelector('#H2').innerHTML= randomDomain

}

