import Categories from "../../components/categories/Categories";
import { ICardProps } from "../../interfaces/ICardProps";
import { Products } from "../../components/products/Products";

interface HomeProps {
  data: ICardProps[];
}

export const Home = ({ data }: HomeProps) => {
  return (
    <main>
      <Categories />
      <Products data={data} />

    </main>
  );
};
