
let Jogador = "Rodrigo"
let experienciaXP = 9900
let nivelDoJogo = ["Ferro", "Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]

if (experienciaXP <= 1000){
console.log("O Herói de nome " + Jogador + " está no nível " + nivelDoJogo[0])
}
else if (experienciaXP >= 1001 && experienciaXP <= 2000){
console.log("O Herói de nome " + Jogador + " está no nível " + nivelDoJogo[1])
}
else if (experienciaXP >= 2001 && experienciaXP <= 5000){
console.log("O Herói de nome " + Jogador + " está no nível " + nivelDoJogo[2])
}
else if (experienciaXP >= 5001 && experienciaXP <= 6000){
console.log("O Herói de nome " + Jogador + " está no nível " + nivelDoJogo[3])
}
else if (experienciaXP >= 6001 && experienciaXP <= 7000){
console.log("O Herói de nome " + Jogador + " está no nível " + nivelDoJogo[4])
}
else if (experienciaXP >= 7001 && experienciaXP <= 8000){
console.log("O Herói de nome " + Jogador + " está no nível " + nivelDoJogo[5])
}
else if (experienciaXP >= 8001 && experienciaXP <= 9000){
console.log("O Herói de nome " + Jogador + " está no nível " + nivelDoJogo[6])
}
else if (experienciaXP >= 9001 && experienciaXP <= 10000){
console.log("O Herói de nome " + Jogador + " está no nível " + nivelDoJogo[7])
}
else {
console.log("experienciaXP inválida")

}