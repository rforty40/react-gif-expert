import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components/index.js";
//

export const GifExpertApp = () => {
  //la variable categoria se inicializa como un arreglo
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  //Lo que hace onAddCategory es recibir un nuevo elemento que agregara al arreglo categories
  const onAddCategory = (newCategory) => {
    //validacion de elementos repetidos
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setcategories(cate => [...cate,"valorant"]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        //setCategories={setCategories}
        //al componente AddCategory en la propiedad onNewCategory
        //se le envia como valor el comportamiento de una funcion
        //que pasa su valor a la funcion onAddCategory.

        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* ---gif item */}
    </>
  );
};
