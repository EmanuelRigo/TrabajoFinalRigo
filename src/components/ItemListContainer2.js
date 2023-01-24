import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState([]);
  const props = useParams();
  console.log(props);

  useEffect(() => {
    const pedido = fetch("../datosPeliculas.json");

    pedido
      .then((respuesta) => {
        const productos = respuesta.json();
        console.log(productos);
        return productos;
      })
      .then((productos) => {
        setProductos(productos);
        setLoad(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {load ? null : "cargando..."}
      <ItemList productos={productos}></ItemList>
    </>
  );
};

export default ItemListContainer;
