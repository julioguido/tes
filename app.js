function valida(f)
{
    var ok = true;
    var msg= "Favor llenar todos los campos:\n";
    var msg2="Datos Ingresados Correctamente\n";
   
    if(f.elements["name"].value.trim() =="")
    {
        msg += "campo 1 vacio\n";
        ok = false;
    }
    if(f.elements["apellido"].value.trim() =="")
    {
        msg += "campo 2 vacio\n";
        ok = false;
    }
    if(f.elements["edad"].value =="" )
    {
        msg += "campo 3 vacio\n";
        ok = false;
    }
    if(f.elements["domicilio"].value.trim() =="")
    {
        msg += "campo 5 vacio\n";
        ok = false;
    }
    if(f.elements["telefono"].value.trim() =="")
    {
        msg += "campo 6 vacio\n";
        ok = false;
    }
    if(isNaN(f.elements["telefono"].value.trim()))
    {
        msg += "campo 6 deben ser numeros";
        ok = false;
    }

    if (isNaN(f.elements["edad"].value))
    {
        msg += "campo 3 deben ser numeros";
        ok = false;
    }
    if (f.elements["telefono"].value.length > 8 || f.elements["telefono"].value.length<8 )
    {
        msg += "campo 6 de telefono, no debe ser mayor o menor que 8 digitos";
        ok = false;
    }
    if(f.elements["edad"].value.length >4 || f.elements["edad"].value.length < 4)
    {
        msg += "campo 3 de edad, no debe ser mayor o menor que 4 digitos";
        ok = false;
    }
    if(ok==false)
    {
        alert(msg);
        return ok;
    }
    else
    {
      alert(msg2);
      return ok;
    }
  
   
}
