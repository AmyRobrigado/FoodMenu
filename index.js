"use strict";

let menu = {
    drinks : [
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees : [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate"
    ],
    desserts: [
    "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
    };

    window.onload = function()
    {
        const menuList = document.getElementById("menuList");
        const subItems = document.getElementById("subItems");
        menuList.onchange = onMenuListChanged;
    }

    function onMenuListChanged() 
    {
        const menuItem = document.getElementById("menuList").value; 
        const subList = document.getElementById("subItems");            //... check for entrees or desserts...
        let selectedValue = menuList.value;
        let theList;



        if (menuItem == "drinks")
        {
            let drinks = menu.drinks;
            let length = drinks.length;
            subList.length = 0;
            for(let i = 0; i < length; i++)
            {
                let newOption = new Option(drinks[i]);
                subList.appendChild(newOption);
            }
        }
        else if (menuItem == "entrees")
        {
            let entrees = menu.entrees;
            let length = entrees.length;
            subList.length = 0;
            for(let i = 0; i < length; i++)
            {
                let newOption = new Option(entrees[i]);
                subList.appendChild(newOption);
            }
        }
        else if (menuItem == "desserts")
        {
            let desserts = menu.desserts;
            let length = desserts.length;
            subList.length = 0;
            for(let i = 0; i < length; i++)
            {
                let newOption = new Option(desserts[i]);
                subList.appendChild(newOption);
            }
        }
       // Implement clear menu on a later date
    }
    