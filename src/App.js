import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Consoles",
      imageUrl: "https://i.ibb.co/vvW535g/Png-Item-65683.png",
    },
    {
      id: 2,
      title: "Handhelds",
      imageUrl: "https://i.ibb.co/XxmjHK0/Png-Item-4685454.png",
    },
    {
      id: 3,
      title: "Games",
      imageUrl: "https://i.ibb.co/Lr7Z3Q5/Video-Games-612x445-1.jpg",
    },
    {
      id: 4,
      title: "Accessories",
      imageUrl: "https://i.ibb.co/rf8v41d/Png-Item-1234395.png",
    },
    {
      id: 5,
      title: "Parts and Replacements",
      imageUrl:
        "https://i.ibb.co/crYVMbW/Hc72296ee88294753b700aaee30920d7b-V.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
