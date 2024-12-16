import { ICardProps } from "../../interfaces/ICardProps";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

interface HomeProps {
  data: ICardProps[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [result, setResult] = useState<ICardProps[]>(data);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    function filteredData(
      products: ICardProps[],
      selected: string
    ): ICardProps[] {
      let filteredProducts: ICardProps[] = products;

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
