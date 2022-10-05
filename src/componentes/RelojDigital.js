import React from "react";

function RelojDigital(){
  return (
    <div class="inline-block  text-center m-1.5 w-40 bg-white">  
      <span id="hora" class="hora">15</span>
        :
      <span id="minutos" class="minutos">00</span>
        :
      <span id="segundos" class="segundos">00</span>
        __
      <span id="ampm" class="ampm">AM</span>
      
    </div>
);
}
export default RelojDigital;
