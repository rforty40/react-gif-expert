import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  /*
    //variable de estado
    const [images, setImages] = useState([]);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
    };
    useEffect(() => {
      getImages();
    }, []);
  */
  //usando un custom hook
  const { images, isLoading } = useFetchGifs(category);

  //
  return (
    <>
      <h3>{category}</h3>

      {/* {isLoading ? <h2>Cargando...</h2> : null} */}
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          // esparcir las propiedades
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

/*
export const GifGrid = ({ category }) => {
  //
  // const [counter, setCounter] = useState(10);
  //getGifs(category);

  //provocar bucle infinito
  // setCounter(counter + 1);


  useEffect(() => {
    getGifs(category);
  }, []); //si se queda vacio significa que este hook solo se va la primera vez que se renderiza el componente

  return (
    <>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
*/
