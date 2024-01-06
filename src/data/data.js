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

const productsData = [
  {
    id: 0,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCF961H2G-QW/DCF961H2G_1.jpg?resize=530x530",
    description: "Product 1",
    price: "Price for product 1",
  },
  {
    id: 1,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/D25881K-QS/D25881K_1.jpg?resize=530x530",
    description: "Product 2",
    price: "Price for product 2",
  },
  {
    id: 2,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCF961H2T-QW/DCF961H2T_1.jpg?resize=530x530",
    description: "Product 3",
    price: "Price for product 3",
  },
  {
    id: 3,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCH911NK-XJ/DCH911NK_1.jpg?resize=530x530",
    description: "Product 4",
    price: "Price for product 4",
  },
  {
    id: 4,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCK200ME2GT-QW/DCK200ME2GT_K1.jpg?resize=530x530",
    description: "Product 5",
    price: "Price for product 5",
  },
  {
    id: 5,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCD85ME2GT-QW/DCD85ME2GT_1.jpg?resize=530x530",
    description: "Product 6",
    price: "Price for product 6",
  },
  {
    id: 6,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCFA4141-QZ/DCFA4141_1.jpg?resize=530x530",
    description: "Product 7",
    price: "Price for product 7",
  },
  {
    id: 7,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCFA4141-QZ/DCFA4141_1.jpg?resize=530x530",
    description: "Product 8",
    price: "Price for product 8",
  },
  {
    id: 8,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCF403D2GT-QW/DCF403D2GT_K1.jpg?resize=530x530",
    description: "Product 9",
    price: "Price for product 9",
  },
  {
    id: 9,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DT3367-QZ/DT3367_1.jpg?resize=530x530",
    description: "Product 10",
    price: "Price for product 10",
  },
  {
    id: 10,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCW604N-XJ/DCW604N_1.jpg?resize=530x530",
    description: "Product 11",
    price: "Price for product 11",
  },
  {
    id: 11,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCW600N-XJ/DCW600N_1.jpg?resize=530x530",
    description: "Product 12",
    price: "Price for product 12",
  },
  {
    id: 12,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCW604NT-XJ/DCW604NT_1.jpg?resize=530x530",
    description: "Product 13",
    price: "Price for product 13",
  },
  {
    id: 13,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCP580P2-QW/DCP580P2_1.jpg?resize=530x530",
    description: "Product 14",
    price: "Price for product 14",
  },
  {
    id: 14,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/D26203-QS/D26203.jpg?resize=530x530",
    description: "Product 15",
    price: "Price for product 15",
  },
  {
    id: 15,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/D26204K-QS/D26204K.jpg?resize=530x530",
    description: "Product 16",
    price: "Price for product 16",
  },
  {
    id: 16,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DW680K-QS/DW680K_1.jpg?resize=530x530",
    description: "Product 17",
    price: "Price for product 17",
  },
  {
    id: 17,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DW621-QS/DW621_1.jpg?resize=530x530",
    description: "Product 18",
    price: "Price for product 18",
  },
  {
    id: 18,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCMPW1600N-XJ/DCMPW1600_1.jpg?resize=530x530",
    description: "Product 19",
    price: "Price for product 19",
  },
  {
    id: 19,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCMPP568P1-QW/DCMPP568P1_1.jpg?resize=530x530",
    description: "Product 20",
    price: "Price for product 20",
  },
  {
    id: 20,
    img: "https://www.dewalt.pl/EMEA/PRODUCT/IMAGES/HIRES/DCM575X1-QW/DCM575X1_1.jpg?resize=530x530",
    description: "Product 21",
    price: "Price for product 21",
  },
];

export { categories, collapseData, tabsData, productsData };
