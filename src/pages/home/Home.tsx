import Categories from "../../components/categories/Categories";
import { ICardProps } from "../../interfaces/ICardProps";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import { useEffect, useState } from "react";

interface HomeProps {
  data: ICardProps[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("искуственные елки");
  const [result, setResult] = useState(data);

  useEffect(() => {
    function filteredData(products: ICardProps[], selected: string) {
      let filteredProducts = products;

      if (!selected.includes("все")) {
        filteredProducts = filteredProducts.filter(
          ({ category }) => category === selected
        );
      }

      return filteredProducts;
    }

    setResult(filteredData(data, selectedCategory));
  }, [selectedCategory]);

  return (
    <main>
      <Slider />
      <Categories changeCategory={setSelectedCategory} />
      <Products data={result} />
    </main>
  );
};

export default Home;
