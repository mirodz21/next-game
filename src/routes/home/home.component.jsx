import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Consoles",
      imageUrl: "https://i.ibb.co/Svwhtng/consoles.jpg",
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
      imageUrl: "https://i.ibb.co/v3WKFKr/parts-and-replacement.jpg",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
