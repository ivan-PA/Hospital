import React from "react";
import ButtonNav from "./ButtonNav.js";
import RelojDigital from "./RelojDigital.js";

//Componente para la barra de navegador 
const HeaderNav = () =>(
  <div>
    <div className="bg-gray-100 w-auto h-20">
      <ul className="flex flex-row place-content-around">
        <ButtonNav>FICHA MMPP</ButtonNav>
        <ButtonNav>UBICACION DE RIESGOS</ButtonNav>
        <ButtonNav>PLANOS</ButtonNav>
        <ButtonNav>FICHA CHECKLIST</ButtonNav>
        <ButtonNav>INTERVENCION POR NIVEL DE EMERGENCIA</ButtonNav>
  
        <div className="bg-blue-200 border-zinc-300 border-4 p-2">
          <RelojDigital className="w-96"></RelojDigital>
        </div>
      </ul>
    </div>
  </div>
);

export default HeaderNav;