function verificar(){

    var data = new Date() // Data Atual
    var ano = data.getFullYear() //Ano atual com 4 digitos
    var fano = document.getElementById('txtano') // *01
    var res = document.querySelector('div#res')  // *02

    if(fano.value.length == 0 || fano.value > ano) /* *03  Se o usuario nao 
    preencer o ano de nascimento ou por um ano superior ao ano corrente */ {

        alert('{ERRO} Verifique os dados e tente novamente!')
    }else{
      //novas variaveis
       var fsex = document.getElementsByName('radsex') /* Para buscar a opção escolida entre masculino e feminino!*/
       var idade =  ano - Number(fano.value) //convertendo o texto digitato na variavel fano para numeros 
       var genero = ''
       var img = document.createElement('img') // criando um elemento
       img.setAttribute('id', 'foto') /* como se estivesse crindo uma tag de imagem no HTML
       com um id = foto*/ 

       if(fsex[0].checked) //se a opcao marcada for a opsao '0' que é = a mascolino 
       {
           genero = 'Homem'
           if (idade >=0 && idade < 10){
               //criança
               img.setAttribute('src', 'imagem/HomemCrianca.png')

           }else if (idade >=10 && idade <21){
               //jovem
               img.setAttribute('src', 'imagem/HomemJovem.png')
               

           }else if (idade >=21 && idade < 50){
               //adulto
               img.setAttribute('src', 'imagem/HomemAdulto.png')

           }else  {
               //idoso
               img.setAttribute('src', 'imagem/HomemIdoso.png')

           }
       }else if (fsex[1].checked) {
           genero = 'Mulher'
           if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagem/MulherCrianca.png')

        }else if (idade >=10 && idade <21){
            //jovem
            img.setAttribute('src', 'imagem/MulherJovem.png')
            

        }else if (idade >=21 && idade < 50){
            //adulto
            img.setAttribute('src', 'imagem/MulherAdulta.png')

        }else  {
            //idoso
            img.setAttribute('src', 'imagem/MulherIdosa.png')

        }
       }
       res.innerHTML = `Detectamos ${genero} de ${idade} anos`
      res.appendChild(img) 
       
    }
    
}