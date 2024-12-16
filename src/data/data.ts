import { ICardProps } from "../interfaces/ICardProps";

const data: ICardProps[] = [
  // "искуственные елки"
  {
    id: 1,
    srcImg: [
      "/christmas-shop/images/webp/trees/tree_1_1.webp",
      "/christmas-shop/images/webp/trees/tree_1_2.webp",
      "/christmas-shop/images/webp/trees/tree_1_3.webp",
      "/christmas-shop/images/webp/trees/tree_1_4.webp",
    ],
    title: "mag 2000 Елка искусственная, Из ПВХ, 80 см",
    rate: 4.7,
    reviews: "13 отзыва",
    prevPrice: "1 243",
    newPrice: "1 045",
    deliveryData: "послезавтра",
    category: "искуственные елки",
  },
  {
    id: 2,
    srcImg: [
      "/christmas-shop/images/webp/trees/tree_2_1.webp",
      "/christmas-shop/images/webp/trees/tree_2_2.webp",
      "/christmas-shop/images/webp/trees/tree_2_3.webp",
      "/christmas-shop/images/webp/trees/tree_2_4.webp",
      "/christmas-shop/images/webp/trees/tree_2_5.webp",
    ],
    title:
      "Елка искусственная 215 см Кремлевская ель шишками, пышная без запаха с белыми кончиками ПВХ новогодняя",
    rate: 4.9,
    reviews: "49 отзыва",
    prevPrice: "29 900",
    newPrice: "14 326",
    deliveryData: "15 декабря",
    category: "искуственные елки",
  },
  {
    id: 3,
    srcImg: [
      "/christmas-shop/images/webp/trees/tree_3_1.webp",
      "/christmas-shop/images/webp/trees/tree_3_2.webp",
      "/christmas-shop/images/webp/trees/tree_3_3.webp",
    ],
    title: "HOMART Елка искусственная, Из лески, 180 см",
    rate: 4.8,
    reviews: "5357 отзыва",
    prevPrice: "2 265",
    newPrice: "8 596",
    deliveryData: "послезавтра",
    category: "искуственные елки",
  },
  {
    id: 4,
    srcImg: [
      "/christmas-shop/images/webp/trees/tree_4_1.webp",
      "/christmas-shop/images/webp/trees/tree_4_2.webp",
      "/christmas-shop/images/webp/trees/tree_4_3.webp",
      "/christmas-shop/images/webp/trees/tree_4_4.webp",
    ],
    title:
      'Ель искусственная Triumph Tree "Нормандия стройная 100% литая" зеленая, 230 см',
    rate: 5,
    reviews: "2 отзыва",
    prevPrice: "52 742",
    newPrice: "129 990",
    deliveryData: "17 декабря",
    category: "искуственные елки",
  },
  {
    id: 5,
    srcImg: [
      "/christmas-shop/images/webp/trees/tree_5_1.webp",
      "/christmas-shop/images/webp/trees/tree_5_2.webp",
      "/christmas-shop/images/webp/trees/tree_5_3.webp",
    ],
    title: "Искусственная новогодняя елка Царь Елка Пандора, литая, 230 см",
    rate: 5,
    reviews: "172 отзыва",
    prevPrice: "34 448",
    newPrice: "58 792",
    deliveryData: "17 декабря",
    category: "искуственные елки",
  },

  // "пластиковые шары"
  {
    id: 6,
    srcImg: [
      "/christmas-shop/images/webp/balls/ball_1_1.webp",
      "/christmas-shop/images/webp/balls/ball_1_2.webp",
      "/christmas-shop/images/webp/balls/ball_1_3.webp",
    ],
    title: "ZAVITOK Набор ёлочных шаров 28 шт",
    rate: 0,
    reviews: "нет отзывов",
    prevPrice: "329",
    newPrice: "1 494",
    deliveryData: "завтра",
    category: "пластиковые шары",
  },
  {
    id: 7,
    srcImg: [
      "/christmas-shop/images/webp/balls/ball_2_1.webp",
      "/christmas-shop/images/webp/balls/ball_2_2.webp",
      "/christmas-shop/images/webp/balls/ball_2_3.webp",
      "/christmas-shop/images/webp/balls/ball_2_4.webp",
    ],
    title: "шары на елку набор 25 шт , 6см красные",
    rate: 0,
    reviews: "1 855 отзывов",
    prevPrice: "859",
    newPrice: "4 118",
    deliveryData: "18 декабря",
    category: "пластиковые шары",
  },
  {
    id: 8,
    srcImg: [
      "/christmas-shop/images/webp/balls/ball_3_1.webp",
      "/christmas-shop/images/webp/balls/ball_3_2.webp",
      "/christmas-shop/images/webp/balls/ball_3_3.webp",
      "/christmas-shop/images/webp/balls/ball_3_4.webp",
      "/christmas-shop/images/webp/balls/ball_3_5.webp",
    ],
    title:
      'ChristmasDays Набор ёлочных шаров "Happy New Year", диаметр 8 см, 7 шт',
    rate: 0,
    reviews: "111 отзыва",
    prevPrice: "1 039",
    newPrice: "9 594",
    deliveryData: "19 декабря",
    category: "пластиковые шары",
  },
  {
    id: 9,
    srcImg: [
      "/christmas-shop/images/webp/balls/ball_4_1.webp",
      "/christmas-shop/images/webp/balls/ball_4_2.webp",
    ],
    title: "Набор ёлочных шаров ChristmasDeLuxe, диаметр 6 см, 30 шт",
    rate: 0,
    reviews: "3 461 отзыв",
    prevPrice: "1 116",
    newPrice: "2 490",
    deliveryData: "завтра",
    category: "пластиковые шары",
  },

  // "стеклянные шары"
  {
    id: 10,
    srcImg: [
      "/christmas-shop/images/webp/balls/ball_5_1.webp",
      "/christmas-shop/images/webp/balls/ball_5_2.webp",
    ],
    title:
      "Елочная игрушка шар Коломеев Не верил в Деда Мороза размер 8 см из стекла в подарочной упаковке",
    rate: 4.9,
    reviews: "61 отзыв",
    prevPrice: "428",
    newPrice: "2 222",
    deliveryData: "послезавтра",
    category: "стеклянные шары",
  },
  {
    id: 11,
    srcImg: [
      "/christmas-shop/images/webp/balls/ball_6_1.webp",
      "/christmas-shop/images/webp/balls/ball_6_2.webp",
      "/christmas-shop/images/webp/balls/ball_6_3.webp",
      "/christmas-shop/images/webp/balls/ball_6_4.webp",
    ],
    title:
      'Елочная игрушка шар Коломеев "Змея в ушанке" Символ года 2025 размер 6,5 см. из стекла в подарочной упаковке',
    rate: 4.9,
    reviews: "558 отзывов",
    prevPrice: "427",
    newPrice: "2 022",
    deliveryData: "19 декабря",
    category: "стеклянные шары",
  },
  {
    id: 12,
    srcImg: [
      "/christmas-shop/images/webp/balls/ball_7_1.webp",
      "/christmas-shop/images/webp/balls/ball_7_2.webp",
      "/christmas-shop/images/webp/balls/ball_7_3.webp",
      "/christmas-shop/images/webp/balls/ball_7_4.webp",
    ],
    title:
      "Irena-Co Набор елочных игрушек, стекло Василиса - 14,5х7х6,5, Богатырь - 14,5х11х6, Водяной - 13,5х10,5х5,5, Дракоша - 12х9х7, Лесовик - 11х9,5х7,5",
    rate: 4.8,
    reviews: "56 отзывов",
    prevPrice: "19 842",
    newPrice: "83 160",
    deliveryData: "20 декабря",
    category: "стеклянные шары",
  },
];

export default data;
