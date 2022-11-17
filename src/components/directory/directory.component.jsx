import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "Consoles",
    imageUrl: "https://i.ibb.co/Svwhtng/consoles.jpg",
    route: "shop/consoles",
  },
  {
    id: 2,
    title: "Handhelds",
    imageUrl: "https://i.ibb.co/XxmjHK0/Png-Item-4685454.png",
    route: "shop/handheld",
  },
  {
    id: 3,
    title: "Games",
    imageUrl: "https://i.ibb.co/Lr7Z3Q5/Video-Games-612x445-1.jpg",
    route: "shop/games",
  },
  {
    id: 4,
    title: "Accessories",
    imageUrl: "https://i.ibb.co/rf8v41d/Png-Item-1234395.png",
    route: "shop/accesories",
  },
  {
    id: 5,
    title: "Parts and Replacements",
    imageUrl: "https://i.ibb.co/v3WKFKr/parts-and-replacement.jpg",
    route: "shop/parts and replacement",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
