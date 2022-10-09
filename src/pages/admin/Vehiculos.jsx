import React from "react";
import { useEffect } from "react";

const Vehiculos = () => {
  return (
    <div>
      <form classname="flex flex-col">
        <h2>Formulario de creación de vehículos</h2>
        <div>
          <input type="text" placeholder="Nombre del Vehículo" />
        </div>
        <div>
          <input type="text" placeholder="Marca del Vehículo" />
        </div>
        <div>
          <input type="text" placeholder="Modelo del Vehículo" />
        </div>
        <button className="bg-indigo-500 text-white">Enviar Datos</button>
      </form>
    </div>
  );
};

export default Vehiculos;
