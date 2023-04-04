import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
//
//custom hook
export const useFetchGifs = (category) => {
  //hooks de estado
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //funcion que setea los hooks con lo que devuelve la funcion que trae los gifs de la API
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //hook de efecto solo se ejecuta cuando el componente se renderiza por primera debido al segundo parametro es un array vacio
  useEffect(() => {
    getImages();
  }, []);

  return {
    //cuando el value tiene el mismo nombre que la key se puede omitir
    images,
    isLoading,
  };
};
