import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //hook para el value del input
  const [inputValue, setInputValue] = useState("");

  //funcion para guardar en el hook el valor del input
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  //funcion para consultar el valor actual del input, validarlo y pasarlo a la funcion que llega desde el componente padre, al final se limpia el input
  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    //funcion se activar al enviar el formulario
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifts"
        //esta funcion se ejecuta con cada cambio en el input
        onChange={onInputChange}
      />
    </form>
  );
};
