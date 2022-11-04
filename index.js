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


    //const menuList = document.getElementById("menuLists");
    //menuList.option.length = 0;

    function init()
    {
        const menuList = document.getElementById("menuList");
        menuList.onchange = onMenuListChanged;
    }

    function onMenuListChanged() 
    {
        const menuList = document.getElementById("menuList");
        let selectedValue = menuList.value;

        let menuLength = menu.length;
        for (let i = 0; i < menuLength; i++)
        {
            let ()
        }
    }