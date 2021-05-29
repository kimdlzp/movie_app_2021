import React from 'react';
import PropTypes from "prop-types";


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};



const foodILike = [
  {
    id:1,
    name: "Salad",
    image:
      "https://simply-delicious-food.com/wp-content/uploads/2019/04/greek-chicken-salad-4.jpg"
  },
  {
    id:2,
    name: "Salmon",
    image:
      "https://www.eatwell101.com/wp-content/uploads/2020/12/Garlic-Butter-Baked-Salmon-recipe-2.jpg"
  },
  {
    id:3,
    name: "Sushi",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2016/04/ss_blackcod-1024x683.jpg"
  },
  {
    id:4,
    name: "Unagi",
    image:
      "https://www.natashathenomad.com/assets/images/cover/unagi.jpg"
  }
];


function Food({ name, picture }) {
  return (
    <div>
      <h2> I Like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}



export default App;
