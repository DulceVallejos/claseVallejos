
let entrada = Number(prompt("Responda correctamente cuantos años cumple nuestro emprendimiento y gane un premio!"));
let counter = 0;

const infomys = [ 
    { 
   emprendedores: "Marianela y Sebastián",
   categoría: "Productos de limpieza",
   desde: "01/08/2020",
}
]
     
const premios = [
    {
    premio1: "Uva",
    categoria: "perfumes textiles",
},
{
    premio1: "Coco-vainilla",
    categoria: "perfumes textiles",
},
{
    premio2: "Citrico",
    categoria: "aromatizante de ambientes",
},
{
    premio2: "Floral",
    categoria: "aromatizante de ambientes",
},
{
    premio3: "Tutti-frutti",
    categoria: "aromatizante de auto",
},
{
    premio3: "Tropical",
    categoria: "aromatizante de auto",
}
]


while(entrada !== 2 && counter < 2){
    alert("Incorrecto, intenta de nuevo");
    entrada = Number(prompt("Responda correctamente cuantos años cumple nuestro emprendimiento y gane un premio!"));
    counter++;
}if(counter < 2){
    alert("Felicidades! Ganaste un premio");
    const informacion = infomys.map (mys => mys.desde);
    console.log(informacion);
    let eleccion = Number(prompt("Elija una categoría para su premio e ingrese el número correspondiente 1: Perfumes textiles, 2: Aromatizante de ambiente, 3: Aromatizante de auto"));
    if (eleccion == 1){
        const resultados = premios.filter(premio => premio.categoria == "perfumes textiles");
        console.log("Como usted eligió perfumes textiles los aromas a elegir son: " );
        console.log(resultados)
    } else if (eleccion == 2){ 
        const resultados1 = premios.filter(premio => premio.categoria == "aromatizante de ambientes");
        console.log("Como usted eligió aromatizante de ambientes los aromas a elegir son: "  );
        console.log(resultados1)
    } else if ( eleccion == 3){
        const resultados2 = premios.filter(premio => premio.categoria == "aromatizante de auto");
        console.log("Como usted eligió aromatizante de auto los aromas a elegir son: " );
        console.log(resultados2)
    } else
        alert("El número ingresado no es correcto");
    }
else {
    alert("Te quedaste sin intentos");
}
