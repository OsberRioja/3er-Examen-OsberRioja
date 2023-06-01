function Cambio(venta, efectivo) {
  if(venta!=null||efectivo!=null)
  {
    return efectivo-venta;
  }
  else{
    return "";
  }
}

export default Cambio;
