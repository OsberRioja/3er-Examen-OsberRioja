function Cambio(venta, efectivo) {
  if(venta!=null||efectivo!=null)
  {
    return efectivo-venta;
  }
  else{
    return "";
  }
}


function Fraccionar(monto)
{
    return [1,1,1,1,1];
}

export default (Cambio,Fraccionar);
