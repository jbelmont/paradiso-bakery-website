const recipes = [
  {
    'breakfastAlaCarte': [
        {oatmeal: 'Steel Cut Oatmeal with Whipped Butter, Brown Sugar, Fresh Berries, and Half & Half',price: 1.00},
        {waffles: 'Belgium Silver Dollar Waffles with Whipped Butter and Local Maple Syrup', price: 2.50},
        {breakfastBurrito: 'Breakfast Burrito (Choice of Breakfast meat, cheddar cheese, fried potatoes with sour cream and salsa on side)',price: 2.25},
        {omelet: 'Omelet Any Way', price: 2.75},
        {eggs: 'Eggs Any Way', price: 1.75},
        {hardBoiledEggs: 'Hardboiled Eggs', price: 1.25},
        {goetta: 'Goetta', price: 1.00},
        {hamSteak: 'Sky Heaven Ham Steak', price: 1.50},
        {turkeySausage: 'Turkey Sausage', price: 1.25},
        {noMeatBacon: 'Meatless Bacon and Sausage', price: 1.00}
    ],
    bacon: [
      { cherry: 'Cherry Smoked Bacon', price: 1.25},
      { apple: 'Apple Hickory Bacon', price: 1.50}
    ],
    drinks: [
      {orangeJuice: '16 oz Orange Juice, Fresh Sqeezed', price: 0.75},
      {grapeFruitJuice: '16 oz GrapeFruit Juice, Fresh Squeezed', price: 0.75},
      {cranberryJuice: '16 oz Cranberry Juice', price: 0.75},
      {appleJuice: '16 oz Apple Juice', price: 0.75},
      {milk: 'Any Requested Milk', price: 0.75},
      {halfAndHalf: 'Half and Half', price: 0.75}
    ]
  },
  {
    'breakfast': [
      {
        deluxeBreakfast: 'Fruit Salad with Berries, Greek Flavored Yogurt with a side of Granola, Real Fresh Squeezed Orange Juice, Fresh Baked Pastry or Muffin and Bagel with Swiss Preserves, Whipped Butter and Philadelphia Cream Cheese',
        price: 3.75
      },
      {
        continental: 'Fruit Salad, Greek Flavored Yogurt, Side of Granola, Fresh Danish or Muffin, and Bagel with Swiss Preserves, Whipped Butter, and Philadelphia Cream Cheese',
        price: 4.00
      },
      {
        healthyCereal: 'Kashi Brand Cereal served with 2% Milk (unless otherwise requested), Vanilla Yogurt, Fresh Cut Fruit, and Zucchini Bread',
        price: 3.50
      },
      {
        sweetSavoryBreakfast: 'Our own Fresh Baked Pastries, Muffins, Scones, and Croissants baked right here, served with Whipped Butter and Swiss Preserves, 3 Miniatures per guest',
        price: 4.25
      },
      {
        loxWithBagels: 'Traditional Lox, Sliced Hardboiled Egg, Diced Tomato, Diced Red Onion, Capers, Lemon Wedge, Fresh Bagels, and Philadelphia Cream Cheese',
        price: 4.50
      },
      {
        freshSlicedFruit: 'Fresh Cut Pineapple, Grapes, Honeydew, Cantaloupe, and Seasonal Fruits with Assorted Berries for 1 with Yogurt Fruit Dip',
        price: 3.75
      },
      {
        parfait: 'Vanilla Yogurt, Fresh Cut Berries, Organic Granola, Banana Bread, Croissant, Whipped Butter',
        price: 3.50
      },
      {
        signatureBreakfast: 'Hibiscus Poached Bosh Pear, Whole Wheat English Muffin, Light Cottage Cheese, Whipped Butter and Red Currant Preserve',
        price: 4.75
      }
    ]
  },
  {
    boxedLunches: [
        { title: 'Boxed Lunches' },
        { headerNotice: 'Every Box contains Fruit Salad, Cheese, a Cracker, Dessert, All Condiments and Utensils'},
        { sandwichNotice: 'Sandwich of Choice - One Sandwich Per Box', price: 5.75 },
      {
        miniGourmetDesserts: 'Chef\'s assortment of 3 bite-sized house prepared cheesecake bites, flourless cakes and bourbon pecan tarts'
      }
    ],
    filling: [
        {house: 'House-roasted Angus Beef'}, {skyHam: 'Sky Heaven Ham'}, {smokedTurkey: 'Smoked Honey Turkey'}, {chickenSalad: 'Chicken Salad'}, {tunaSalad: 'Tuna Salad'}, {eggSalad: 'Egg Salad'}, {italian: 'Italian 5 Tierra'}, {clubSandwich: 'Club Sandwich'}, {vegetarianWrap : 'Vegetarian Wrap'}, {vegan: 'Vegan la Bamba'}
    ],
    breadSelection: [
        {rye: 'Rye'}, {white: 'White'}, {wheatBerry: 'Wheat berry'}, {wraps: 'Wraps'}, {croissants: 'Croissants'}, {multigrainBaguette: 'Multigrain Baguette'}
    ],
    cheeseSelection: [
        {swiss: 'Swiss'}, {camembert: 'Camembert' }, {provolone: 'Provolone'}, {monteRay: 'Monte Rey'}, {jack: 'Jack'}
    ]
  },
  {
    entreeSalads: [
      {
        antipasto: 'Cured meats (Genoa Salami, Porchetta, Sopressata Grande), cheese(triple cream Brie, Manchego, and Gouda), mixed olives and marinated vegetables',
        price: 5.25
      },
      {
        spinachSalad: 'Baby spinach topped with mandarin oranges, mushrooms, red onion, walnuts, craisins, and bleu cheese',
        price: 5.50
      },
      {
        chefSalad: 'Mixed Greens topped with julienne of ham, turkey, cheddar, and swiss cheeses, pecans, sunflower seeds, and raisins',
        price: 5.75
      },
      {
        tomatoMozzarella: 'Fresh sliced beek steak tomatoes, fresh basil leaves, half grilled artichoke, grilled bread, olive oil, and balsamic reduction',
        price: 6.25
      },
      {
        caesarSalad: 'A traditional salad of Romaine topped with imported shredded parmesan cheese and homemade croutons',
        price: 5.00
      },
      {
        gardenSalad: 'Mixed Greens topped with vegetables of your choice',
        price: 5.25
      },
      {
        grecianSalad: 'A Mediterranean inspired salad of mixed greens topped with artichoke hearts, tomatoes, kalamatas, feta, and toasted pine nuts',
        price: 6.50
      }
    ],
    extras: [
        {extra1: 'All salads are available with bread'}, {extra2: 'All salads are available with chicken, grilled salmon, sliced beef tenderloin or shrimp with an upcharge'}
    ]
  },
  {
    gourmetTraysAndApps: [
      {
        slicedFruitTray: 'Pineapple, Grapes, Berries, Honeydew, Cantaloupe, Fresh Seasonal Fruit with a Yogurt Dipping Sauce',
        price: 8.75
      },
      {
        artisanCheeseTray: 'Triple Cream Brie, Maytag Blue, Goat Cheese, Manchego, Aged White Cheddar, Fresh Grapes, Dried Fruit and Mixed Nuts',
        price: 7.50
      },
      {
        domesticCheeseTray: 'Triple Cream Brie, Sharp Cheddar, Smoked Gouda, Havarti, Goat Cheese, Dried Fruit and Mixed Nuts',
        price: 7.75
      },
      {
        shrimpCocktail: 'Jumbo Gulf Shrimp (U10) served with Cocktail Sauce, Hot Sauce and Lemon Wedges',
        price: 10.25
      },
      {
        seafoodTray: '3 shrimp / 1 split lobster tail / 2oz crab lump',
        price: 14.50
      }
    ],
    alaCarteApps: [
        {crabCake: 'Miniature Crab Cake', price: 6.25}, {springRolls: 'Spring Rolls', price: 6.50}, {stuffedMushroomCaps: 'Stuffed Mushroom Caps', price: 6.50}, {satay: 'Chicken or Beek Satay with assorted dipping sauces', price: 7.75}, {chickenFingers: 'Grilled or Fried Chicken Fingers with dipping sauce', price: 5.00}, {crabMeal: 'Signature Jumbo Lump Blue Fin Crab with fresh dill, spicy Greek yogurt, on rye crostini', price: 6.75}
    ]
  },
  {
    mainSelections: [
      {
        grilledChicken: 'Grilled Chicken Breast, Steamed Vegetables, Starch, Bruschetta mix and Garnish',
        price: 7.25
      },
      {
        grilledFilet: 'Filet Mignon USDA Choice, Steamed Vegetable, Starch, 4oz Demi Sauce and Garnish',
        price: 9.50
      },
      {
        ravioli: 'Homemade pasta stuffed with sun dried tomatoes, roasted peppers, mushrooms and chevre pooled in red pepper cream sauce with spinach and meatballs',
        price: 6.50
      },
      {
        chickenfarfalle: 'Mushrooms, sun dried tomatoes are simmered with burgundy and shallots and then tossed with spinach, chicken and farfalle in a parmesan cream sauce. Topped with pine nuts',
        price: 7.25
      },
      {
        chickenMarsala: 'Chicken flambeed in marsala then served with pasta in a rich demi glace, marsala reduction',
        price: 6.50
      },
      {
        grilledSalmon: 'Atlantic Salmon Filet or Pacific Salmon Filet, Grilled or Steamed Vegetables, Starch, Lemon Butter Sauce or Citrus Relish and Garnish',
        price: 8.50
      },
      {
        vegetarianSampler: 'Eggplant Slices 1/2 thick Red and Yellow Peppers, Grilled Red Onion Slices, Roasted Tomato, Fresh Herb Garnish and Balsamic Drizzle',
        price: 8.75
      }
    ],
    cincinattiFavorites: [
      {
        title: 'Cincinnati Chili 3-ways, Ribs with Montgomery Inn Sauce, Pasta with LaRosa\'s Pasta Sauce and White Castles',
        price: 4.25
      },
      {
        beverages: 'We provide a full line of beverages and can fulfill any special request',
        price: 1.25
      },
      {
        notice: 'With advanced notice, Cincinnati Aviation Catering will accomodate any dietary needs or restrictions'
      }
    ]
  },
  {
    pizzas: {
      grecian: [
            {title: 'Grecian Pizza'},
            {ingreds: 'Pesto, Kalamata, red onion, artichokes, tomatoes, feta, pine nuts, and mozzarella'},
            {price: 7.50}
      ],
      blackenedPizza: [
            {title: 'Blackened Chicken Alfredo'},
            {ingreds: 'Alfredo, blackened chicken, jalapenos, Parmesan and mozzarella'},
            {price: 7.75}
      ],
      northernWoods: [
            {title: 'Northern Woods'},
            {ingreds: 'Wild mushrooms sauteed in rosemary and garlic. Finished with goat cheese and mozzarella'},
            {price: 8.25}
      ],
      sicilian: [
            {title: 'Sicilian Mount Vesuvio'},
            {ingreds: 'Pepperoni, salami, ham, capicola, tomatoes, basic, garlic, and mozzarella'},
            {price: 9.50}
      ],
      margarita: [
            {title: 'Margarita'},
            {ingreds: 'Traditional pizza with tomatoes, onions, basil, garlic and mozzarella'},
            {price: 6.75}
      ],
      bigDaddyStonePie: [
            {title: 'Big Daddy Stone Pie'},
            {ingreds: 'Deep-dish pie with Italian sausage, peppers, onions, roasted balsamic tomatoes, and mozzarella'},
            {price: 10.50}
      ],
      jambo: [
            {title: 'Jambolitos Lovers Pie'},
            {ingreds: 'Shrimp, asparagus, and mozzarella'},
            {price: 9.25}
      ]
    }
  }
];

exports.recipes = recipes;
