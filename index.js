window.onload = () =>{
   
    sorteadorGeral();
}


const rotas= [
    "./img/erro1.png",
    "./img/erro2.png",
    "./img/erro3.png",
    "./img/erro4.png",
    "./img/erro5.png",
    "./img/erro6.png",
]
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
   var errosPla = document.querySelector(".lixeira_P");
   var vd = document.querySelector("#Vida");

   var palavraCErta = "";
   var dicaCErta = "";

   var  trans = "";
   var pltT = [];
   var Erros = -1;
   

   var plaErrada = [];

   let vida = "";
   var img = document.getElementById("CN_ImgP");


document.
querySelector(".stpImg")
.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("start").style.display = "none";
    
}) 

document
.querySelector(".Reset")
.addEventListener("click", function(e){
    e.preventDefault();
    sorteadorGeral();
    plaErrada.splice(0);
    vd.textContent= "vida 6";
   
   })


 function sorteadorGeral (){
    


    vida = 6;
    img.src= "./img/start.png";
    errosPla.textContent = "";

    
   pltT.splice(0);
    const numero = Math.floor(Math.random() * ArrayDados.length);
    const posicao = Math.floor(Math.random() * ArrayDados[1].value.length);

    palavraCErta = ArrayDados[numero].value[posicao].toUpperCase();
    dicaCErta = ArrayDados[numero].name;

   dicaSort.textContent= dicaCErta;
   
  
    trans = palavraCErta.split("");
   
   trans.map((e)=>{
    
    pltT.push(e.replace(e, " -"))
   })
   palavraSort.textContent = pltT.toString().replaceAll("," , "");
 }


setInterval(()=>{
    if(pltT.toString().replaceAll("," , "") === palavraCErta){
        alert("você venceu");
        sorteadorGeral();
    }
},1000)
   document
   .querySelector(".conteiner_sort")
   .addEventListener("click", function(e){
    
       e.preventDefault();
       const digito = document.querySelector("#Txt_Inp").value.toUpperCase();
       
       var tdP = palavraCErta.split("");
       var elemento = digito;
       var idx = tdP.indexOf(elemento);

       var idPlE = plaErrada.toString().indexOf(digito);
      
       
        if(vida <= 0 ){
            alert("voce perdeu");
            window.location.reload(true);
  
        }

        if(idPlE > -1){
            alert("digite outra letra")
            console.log( pltT.toString().replaceAll("," , ""))
            
        }else {
            if(idx > -1){
               
                while (idx != -1) {
                    pltT[idx] = digito ;
                    idx = tdP.indexOf(elemento, idx+1);
                    palavraSort.textContent = pltT.toString().replaceAll("," , " ");

                    }
                 
            }else if(idx < 0){
                plaErrada.push(digito);
                Erros = Erros+1;
                vida = vida -1 ;
               
                
                vd.textContent= `vida ${vida}`;
                
                img.src= rotas[Erros];
                errosPla.textContent = `${plaErrada.toString().replaceAll("," , " ")}`;
                
               
               
            }
        }

      
       

        
   });
   




   

 
   



