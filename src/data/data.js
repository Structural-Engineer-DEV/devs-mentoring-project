const categories = [
  {
    label: "Category 1",
    options: ["Option 11", "Option 12", "Option 13", "Option 14"],
  },
  {
    label: "Category 2",
    options: ["Option 21", "Option 22", "Option 23", "Option 24"],
  },
  {
    label: "Category 3",
    options: ["Option 31", "Option 32", "Option 33", "Option 34"],
  },
  {
    label: "Category 4",
    options: ["Option 41", "Option 42", "Option 43", "Option 44"],
  },
  {
    label: "Category 5",
    options: ["Option 51", "Option 52", "Option 53", "Option 54"],
  },
  {
    label: "Category 6",
    options: ["Option 61", "Option 62", "Option 63", "Option 64"],
  },
];

const tabsData = [
  { id: 0, label: "Tab 1", content: "Tab1 Content" },
  { id: 1, label: "Tab 2", content: "Tab2 Content" },
  { id: 2, label: "Tab 3", content: "Tab3 Content" },
  { id: 3, label: "Tab 4", content: "Tab4 Content" },
  { id: 4, label: "Tab 5", content: "Tab5 Content" },
  { id: 5, label: "Tab 6", content: "Tab6 Content" },
  { id: 6, label: "Tab 7", content: "Tab7 Content" },
  { id: 7, label: "Tab 8", content: "Tab8 Content" },
  { id: 8, label: "Tab 9", content: "Tab9 Content" },
  { id: 9, label: "Tab 10", content: "Tab10 Content" },
  { id: 19, label: "Tab 11", content: "Tab11 Content" },
];

const collapseData = [
  { id: 0, label: "Collapse 1", content: "Collapse 1 content" },
  { id: 1, label: "Collapse 2", content: "Collapse 2 content" },
  { id: 2, label: "Collapse 3", content: "Collapse 3 content" },
  { id: 3, label: "Collapse 4", content: "Collapse 4 content" },
  { id: 4, label: "Collapse 5", content: "Collapse 5 content" },
  { id: 5, label: "Collapse 6", content: "Collapse 6 content" },
];

const products = [
  {
    id: 0,
    name: "Product1",
    description:
      "Product1 description Product1 description Product1 description",
    image:
      "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD85ME2GT-QW/DCD85ME2GT_1.jpg?resize=530x530",
  },
  {
    id: 1,
    name: "Product2",
    description:
      "Product2 description Product2 description Product2 description",
    image:
      "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_1.jpg?resize=530x530",
  },
  {
    id: 2,
    name: "Product3",
    description:
      "Product3 description Product3 description Product3 description",
    image:
      "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/D215825-XJ/D215825_1.jpg?resize=530x530",
  },
];

const cardsData = [
  {
    id: 0,
    title: "Card1",
    description: "Description card1",
    buttonText: "Dowiedz się więcej1",
    image:
      "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    title: "Card2",
    description: "Description card2",
    buttonText: "Dowiedz się więcej2",
    image:
      "https://plus.unsplash.com/premium_photo-1661897931465-8974f15313a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9vbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Card3",
    description: "Description card3",
    buttonText: "Dowiedz się więcej3",
    image:
      "https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRvb2x8ZW58MHx8MHx8fDA%3D",
  },
];

const productsDetails = {
  title: '18V XR Brushless 8mm (1/4") Router - 2 X 5Ah',
  photos: [
    "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_1.jpg?resize=530x530",
    "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_2.jpg?resize=530x530",
    "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_4.jpg?resize=530x530",
    "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_A1.jpg?resize=530x530",
    "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_A3.jpg?resize=530x530",
    "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_A5.jpg?resize=530x530",
    "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_F2.jpg?resize=530x530",
    "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD999X1-QW/DCD999X1_K1.jpg?resize=530x530",
  ],
  features: [
    "Technologia narzędziowa FLEXVOLT ADVANTAGE: narzędzie wykorzystuje inteligentną elektronikę, aby wykryć, jaki akumulator jest w narzędziu i zwiększyć moc i moment obrotowy podczas korzystania z akumulatorów FLEXVOLT",
    "51% więcej mocy przy zastosowaniu akumulatora DCB547 XR FLEXVOLT 9 Ah w porównaniu z akumulatorem DCB184 18 V XR 5 Ah",
    "O 42% więcej mocy przy zastosowaniu akumulatora DCB546 XR FLEXVOLT 6 Ah w porównaniu z akumulatorem DCB184 18 V XR 5 Ah",
  ],
};

export {
  categories,
  collapseData,
  tabsData,
  products,
  cardsData,
  productsDetails,
};
