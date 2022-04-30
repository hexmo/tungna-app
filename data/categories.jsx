import guitars from "../assets/category-images/guitars.png";
import drums from "../assets/category-images/drums.png";
import keyboards from "../assets/category-images/keyboards.png";
import ukulele from "../assets/category-images/ukulele.png";
import pipes from "../assets/category-images/pipes.png";
import traditional from "../assets/category-images/traditional.png";
import homeStudio from "../assets/category-images/home-studio.png";

const categories = () => {
  return [
    { name: "Guitar", image: guitars },
    { name: "Drum", image: drums },
    { name: "Piano & Keyboard", image: keyboards },
    { name: "Ukulele", image: ukulele },
    { name: "Wind pipes", image: pipes },
    { name: "Traditional Instruments", image: traditional },
    { name: "Home Studio", image: homeStudio },
  ];
};

export default categories;
