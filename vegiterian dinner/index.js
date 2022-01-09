//one way to create object using factories
const menus = [
   {
      food: "Nuts, nut butters, and seeds",
      veg: true,
   },
   {
      food: "Hemp, flax, and chia seeds",
      veg: true,
   },
   {
      food: "eggs",
      veg: false,
   },
   {
      food: "Calcium-fortified plant milks and yogurts",
      veg: true,
   },
   {
      food: "Malabar Fish Biryani",
      veg: false,
   },
   {
      food: "Sprouted and fermented plant foods",
      veg: true,
   },
   {
      food: "Grilled Chicken",
      veg: false,
   }
];

// const veganMenus = menus.filter(function(food){
//    return food.veg == true;
// });
const allMenuNode = document.getElementById("allDishes");
const vegMenuNode = document.getElementById("vegFoodList");
menus.forEach(menuList=>{
   let list = document.createElement("li");
   list.textContent = menuList.food + " = "+ (menuList.veg ? "yes": "no");
   allMenuNode.appendChild(list);
});

const veganMenus = menus.filter(food => food.veg == true);

veganMenus.forEach(menuList=>{
   let list = document.createElement("li");
   list.textContent = menuList.food;
   vegMenuNode.appendChild(list);
});