import guitars from "../assets/category-images/guitars.png";
import drums from "../assets/category-images/drums.png";
import keyboards from "../assets/category-images/keyboards.png";
import ukulele from "../assets/category-images/ukulele.png";
import pipes from "../assets/category-images/pipes.png";
import traditional from "../assets/category-images/traditional.png";
import homeStudio from "../assets/category-images/home-studio.png";

const categories = () => {
  return [
    { name: "Guitars", image: guitars },
    { name: "Drums", image: drums },
    { name: "Keyboards", image: keyboards },
    { name: "Ukulele", image: ukulele },
    { name: "Wind Pipes", image: pipes },
    { name: "Traditional", image: traditional },
    { name: "Home Studio", image: homeStudio },
  ];
};

export default categories;
