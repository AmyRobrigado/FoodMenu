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
        const menuList = document.getElementById("menuList"); //... check for entrees or desserts...
        let selectedValue = menuList.value;
        let theList;
        //-------------------------------------------------------------------------------------
        if(selectedValue == "drinks"){
            theList = menu.drinks;
        }
        if(selectedValue == "entrees"){
            theList = menu.entrees;
        }
        if(selectedValue == "desserts"){
            theList = menu.desserts;
        }

        //-------------------------------------------------------------------------------------
        let listLength = theList.length;
        for (let i = 0; i < listLength; i++)
        {
            let newOption = document.createElement("subItems");
            newOption.value = menu[i].drinks;
            newOption.value = menu [i].entrees;
            newOption.value = menu[i].desserts;

            listLength.appendChild(newOption);
        }
    }