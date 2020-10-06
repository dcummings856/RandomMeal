let breakfast = document.getElementById('breakfast');
let lunch = document.getElementById('lunch');
let dinner = document.getElementById('dinner');
let retry = document.getElementById('retry');
let randomMealChoice = 9;

const randomBreakfastGenerator = () => {
  let randomMeal = Math.floor(Math.random() *
randomMealChoice);
  if (randomMeal === 0){
    breakfast.innerHTML = 'Eggs';
  } else if (randomMeal === 1){
    breakfast.innerHTML = 'Pancakes';
  } else if (randomMeal === 2){
    breakfast.innerHTML = 'Cereal';
  } else if (randomMeal === 3){
    breakfast.innerHTML = 'Waffles';
  } else if (randomMeal === 4){
    breakfast.innerHTML = 'Avocado Toasts';
  } else if (randomMeal === 5){
    breakfast.innerHTML = 'Breakfast Burrito';
  } else if (randomMeal === 6){
    breakfast.innerHTML = 'Cream Chipped Beef';
  } else if (randomMeal === 7){
    breakfast.innerHTML = 'Fruit Bruschetta';
  } else if (randomMeal === 8){
    breakfast.innerHTML = 'French Toast';
  }
};

const randomLunchGenerator = () => {
  let randomMeal = Math.floor(Math.random() *
randomMealChoice);
  if (randomMeal === 0){
    lunch.innerHTML = 'PB & J';
  } else if (randomMeal === 1){
    lunch.innerHTML = 'Hoagie';
  } else if (randomMeal === 2){
    lunch.innerHTML = 'Dumplings';
  } else if (randomMeal === 3){
    lunch.innerHTML = 'Salad';
  } else if (randomMeal === 4){
    lunch.innerHTML = 'Sushi';
  } else if (randomMeal === 5){
    lunch.innerHTML = 'Chicken Wrap';
  } else if (randomMeal === 6){
    lunch.innerHTML = 'Hot Dogs';
  } else if (randomMeal === 7){
    lunch.innerHTML = 'Quesadillas';
  } else if (randomMeal === 8){
    lunch.innerHTML = 'Gyoza';
  }
};

const randomDinnerGenerator = () => {
  let randomMeal = Math.floor(Math.random() *
randomMealChoice);
  if (randomMeal === 0){
    dinner.innerHTML = 'Wings';
  } else if (randomMeal === 1){
    dinner.innerHTML = 'Pizza';
  } else if (randomMeal === 2){
    dinner.innerHTML = 'Burgers';
  } else if (randomMeal === 3){
    dinner.innerHTML = 'Tacos';
  } else if (randomMeal === 4){
    dinner.innerHTML = 'Steak';
  } else if (randomMeal === 5){
    dinner.innerHTML = 'Burrito';
  } else if (randomMeal === 6){
    dinner.innerHTML = 'Meatloaf';
  } else if (randomMeal === 7){
    dinner.innerHTML = 'Sloppy Joes';
  } else if (randomMeal === 8){
    dinner.innerHTML = 'Chicken Fajitas';
  }
};

breakfast.onclick = () => {
  if (breakfast === document.getElementById('breakfast')){
    breakfast.style.backgroundColor = 'rgb(98, 129, 48)';
    breakfast = randomBreakfastGenerator();
  }
};

lunch.onclick = () => {
  if (lunch === document.getElementById('lunch')){
    lunch.style.backgroundColor = 'rgb(54, 150, 137)';
    lunch = randomLunchGenerator();
  }
};

dinner.onclick = () => {
  if (dinner === document.getElementById('dinner')){
    dinner.style.backgroundColor = 'rgb(101, 71, 104)';
    dinner = randomDinnerGenerator();
  }
};

breakfast.onmouseover = () => {
  if (breakfast === document.getElementById('breakfast')){
    breakfast.style.padding = '23px';
    breakfast.style.margin = '10px 640px';
  }
};

breakfast.onmouseout = () => {
  if (breakfast === document.getElementById('breakfast')){
    breakfast.style.padding = '20px';
    breakfast.style.margin = '10px 650px';
  }
};

lunch.onmouseover = () => {
  if (lunch === document.getElementById('lunch')){
    lunch.style.padding = '23px';
    lunch.style.margin = '20px 640px';
  }
};

lunch.onmouseout = () => {
  if (lunch === document.getElementById('lunch')){
    lunch.style.padding = '20px';
    lunch.style.margin = '20px 650px';
  }
};

dinner.onmouseover = () => {
  if (dinner === document.getElementById('dinner')){
    dinner.style.padding = '23px';
    dinner.style.margin = '20px 640px';
  }
};

dinner.onmouseout = () => {
  if (dinner === document.getElementById('dinner')){
    dinner.style.padding = '20px';
    dinner.style.margin = '20px 650px';
  }
};

let retrybutton = () => {
  document.getElementById('breakfast').style.padding = '20px';
  document.getElementById('lunch').style.padding = '20px';
  document.getElementById('dinner').style.padding = '20px';
  document.getElementById('breakfast').style.margin = '10px 650px';
  document.getElementById('lunch').style.margin = '20px 650px';
  document.getElementById('dinner').style.margin = '20px 650px';
  document.getElementById('breakfast').style.backgroundColor = 'rgb(153, 152, 75, .7)';
  document.getElementById('lunch').style.backgroundColor = 'rgb(163, 121, 30, .7)';
  document.getElementById('dinner').style.backgroundColor = 'rgb(150, 62, 3, .7)';
  document.getElementById('breakfast').innerHTML = 'Breakfast';
  document.getElementById('lunch').innerHTML = 'Lunch';
  document.getElementById('dinner').innerHTML = 'Dinner';
  breakfast = document.getElementById('breakfast');
  lunch = document.getElementById('lunch');
  dinner = document.getElementById('dinner');
};

retry.onclick = () => {
retrybutton();
};

retry.onmouseover = () => {
  retry.style.padding = '13px';
  retry.style.margin = '20px 665px';
};

retry.onmouseout = () => {
  retry.style.padding = '10px';
  retry.style.margin ='20px 675px';
};
