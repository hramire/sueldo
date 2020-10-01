let Sueldo = 10000
let Porcentaje

if(Sueldo > 0 && Sueldo < 1001)
    {Porcentaje = 0.15
    Sueldo =  ((Sueldo*Porcentaje)+Sueldo)}
else if(Sueldo > 1000 && Sueldo < 1201)
    {Porcentaje = 0.12
    Sueldo =  ((Sueldo*Porcentaje)+Sueldo)}
else if(Sueldo > 1200 && Sueldo < 1401)
    {Porcentaje = 0.10
    Sueldo =  ((Sueldo*Porcentaje)+Sueldo)}
else if(Sueldo > 1400 && Sueldo < 1501)
    {Porcentaje = 0.08
    Sueldo =  ((Sueldo*Porcentaje)+Sueldo)}
else if(Sueldo > 1500)
    {Porcentaje = 0.05
    Sueldo =  ((Sueldo*Porcentaje)+Sueldo)}

console.log("El sueldo nuevo es de $"+Sueldo+" el aumento fue de "+Porcentaje)