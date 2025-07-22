import { useState } from "react";
import { AddCategory } from "./components/handleAdd/AddCategory";
import { GifGrid } from "./components/gif-grid/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z", "Dragon Quest"]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <div className="p-15 text-zinc-950 dark:text-zinc-100">
      {/* titulo*/}
      <h1 className="text-4xl font-bold pb-8">Gif App</h1>

      {/* input*/}
      <AddCategory
        textLabel="Buscar"
        onNewValue={(value) => onAddCategory(value)}
      />

      {categories.map((cat) => {
        return <GifGrid category={cat} key={cat} />;
      })}
    </div>
  );
};
