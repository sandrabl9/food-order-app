import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Strawberry',
//       description: 'Delicious natural strawberry, without milk',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Dark Chocolate',
//       description: 'The house specialty! With chocolate chips.',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Lemon',
//       description: 'Pronounced citrus aroma and flavour',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Vanilla',
//       description: 'A great classic that is never the wrong choise',
//       price: 18.99,
//     },
//   ];



const AvailableMeals = () => {
const [meals,setMeals] = useState([]);

  useEffect (() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-9a610-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].descrption,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);

    };
    fetchMeals();
  }, []);

  

    const mealsList = meals.map(meal => <MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name} 
      description={meal.description} 
      price={meal.price}/>);

    return(
        <section className={classes.meals}>
          <Card>
          
           <ul>
                {mealsList}
            </ul>
          </Card>
        </section>

    )
};

export default AvailableMeals;