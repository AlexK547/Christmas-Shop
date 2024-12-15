import { ICardProps } from "../../interfaces/ICardProps";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

interface HomeProps {
  data: ICardProps[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [result, setResult] = useState(data);

  const handleChange: Function = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    function filteredData(products: ICardProps[], selected: string) {
      let filteredProducts = products;

      if (selected) {
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
      <Sidebar handleChange={handleChange} />
      <Products data={result} />
    </main>
  );
};

export default Home;
