
const ArrayDados = [
    {
       name:"fruta", 
       value:[
       "uva","pera","maça","abacaxi"
       ]
   
   },
    {
       name:"Carro",
        value:[
       "onix","gol","voyage","corsa"]
   }
   ];

   var palavraSort = document.querySelector(".plr_comp");
   var dicaSort = document.querySelector(".dicasort");
   
   document
   .querySelector(".btn_Sort")
   .addEventListener("click", function(e){
       e.preventDefault();
       const digito = document.querySelector("#Txt_Inp").value.toUpperCase();
       console.log(digito)
   });
   
   document
   .querySelector(".Reset")
   .addEventListener("click", function(e){
   e.preventDefault();
   const numero = Math.floor(Math.random() * ArrayDados.length);
   const posicao = Math.floor(Math.random() * ArrayDados[1].value.length);
   
   const palavraCErta = ArrayDados[numero].value[posicao];
   const dicaCErta = ArrayDados[numero].name;
   dicaSort.textContent= dicaCErta;
   palavraSort.textContent = palavraCErta;
   alert(ArrayDados[1].name)
   
   
   
   })













   
const ArrayDados = [
    {
       name:"fruta", 
       value:[
       "uva","pera","maça","abacaxi"
       ]
   
   },
    {
       name:"Carro",
        value:[
       "onix","gol","voyage","corsa"]
   }
   ];
   
   const Dica = [
   
   ]
   
   var palavraSort = document.querySelector(".plr_comp");
   var dicaSort = document.querySelector(".dicasort");
   
   document
   .querySelector(".btn_Sort")
   .addEventListener("click", function(e){
       e.preventDefault();
       const digito = document.querySelector("#Txt_Inp").value.toUpperCase();
       console.log(digito)
   });
   
   document
   .querySelector(".Reset")
   .addEventListener("click", function(e){
   e.preventDefault();
   const numero = Math.floor(Math.random() * ArrayDados.length);
   const posicao = Math.floor(Math.random() * ArrayDados[1].value.length);
   dicaSort.textContent=ArrayDados[1].name;
   palavraSort.textContent = ArrayDados[posicao];
   
   alert(ArrayDados[numero].value[posicao])
   
   
   
   })





   let trans = palavraCErta.split("");
   trans.map((e)=>{
    alert(e)
   })








 tdP.map((e)=>{
        let result = palavraCErta.indexOf(`${digito}`)
        if ( result > -1 ){
            alert(palavraCErta) 
            console.log(result)
            pltT[result] = digito ;
            palavraSort.textContent = pltT.toString().replaceAll("," , " ");
        }else {
            
                
            
        }
       })





var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var elemento = 'a';
var idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);





   var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var elemento = 'a';
var idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);