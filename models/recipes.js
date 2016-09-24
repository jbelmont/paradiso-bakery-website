const recipes = [
  {
    'breakfastAlaCarte': [
        {oatmeal: 'Steel Cut Oatmeal with Whipped Butter, Brown Sugar, Fresh Berries, and Half & Half'},
        {waffles: 'Belgium Silver Dollar Waffles with Whipped Butter and Local Maple Syrup'},
        {breakfastBurrito: 'Breakfast Burrito (Choice of Breakfast meat, cheddar cheese, fried potatoes with sour cream and salsa on side)'},
        {omelet: 'Omelet Any Way'},
        {eggs: 'Eggs Any Way'},
        {hardBoiledEggs: 'Hardboiled Eggs'},
        {goetta: 'Goetta'},
        {hamSteak: 'Sky Heaven Ham Steak'},
        {turkeySausage: 'Turkey Sausage'},
        {noMeatBacon: 'Meatless Bacon and Sausage'},
    ],
    bacon: [
      { cherry: 'Cherry Smoked Bacon'},
      { apple: 'Apple Hickory Bacon'}
    ],
    drinks: [
      {orangeJuice: '16 oz Orange Juice, Fresh Squeezed'},
      {grapeFruitJuice: '16 oz GrapeFruit Juice, Fresh Squeezed'},
      {cranberryJuice: '16 oz Cranberry Juice'},
      {appleJuice: '16 oz Apple Juice'},
      {milk: 'Any Requested Milk'},
      {halfAndHalf: 'Half and Half'}
    ]
  },
  {
      'breakfast': [
          {
              deluxeBreakfast: 'Fruit Salad with Berries, Greek Flavored Yogurt with a side of Granola, Real Fresh Squeezed Orange Juice, Fresh Baked Pastry or Muffin and Bagel with Swiss Preserves, Whipped Butter and Philadelphia Cream Cheese'
          },
          {
              continental: 'Fruit Salad, Greek Flavored Yogurt, Side of Granola, Fresh Danish or Muffin, and Bagel with Swiss Preserves, Whipped Butter, and Philadelphia Cream Cheese'
          },
          {
              healthyCereal: 'Kashi Brand Cereal served with 2% Milk (unless otherwise requested), Vanilla Yogurt, Fresh Cut Fruit, and Zucchini Bread'
          },
          {
              sweetSavoryBreakfast: 'Our own Fresh Baked Pastries, Muffins, Scones, and Croissants baked right here, served with Whipped Butter and Swiss Preserves, 3 Miniatures per guest'
          },
          {
              loxWithBagels: 'Traditional Lox, Sliced Hardboiled Egg, Diced Tomato, Diced Red Onion, Capers, Lemon Wedge, Fresh Bagels, and Philadelphia Cream Cheese'
          },
          {
              freshSlicedFruit: 'Fresh Cut Pineapple, Grapes, Honeydew, Cantaloupe, and Seasonal Fruits with Assorted Berries for 1 with Yogurt Fruit Dip'
          },
          {
              parfait: 'Vanilla Yogurt, Fresh Cut Berries, Organic Granola, Banana Bread, Croissant, Whipped Butter'
          },
          {
              signatureBreakfast: 'Hibiscus Poached Bosh Pear, Whole Wheat English Muffin, Light Cottage Cheese, Whipped Butter and Red Currant Preserve'
          }
      ]
  },
  {
      boxedLunches: [
        { title: 'Boxed Lunches' },
        { headerNotice: 'Every Box contains Fruit Salad, Cheese, a Cracker, Dessert, All Condiments and Utensils'},
        { sandwichNotice: 'Sandwich of Choice - One Sandwich Per Box' },
        {
            miniGourmetDesserts: "Chef's assortment of 3 bite-sized house prepared cheesecake bites, flourless cakes and bourbon pecan tarts"
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
              antipasto: 'Cured meats (Genoa Salami, Porchetta, Sopressata Grande), cheese(triple cream Brie, Manchego, and Gouda), mixed olives and marinated vegetables'
          },
          {
              spinachSalad: 'Baby spinach topped with mandarin oranges, mushrooms, red onion, walnuts, craisins, and bleu cheese'
          },
          {
              chefSalad: 'Mixed Greens topped with julienne of ham, turkey, cheddar, and swiss cheeses, pecans, sunflower seeds, and raisins'
          },
          {
              tomatoMozzarella: 'Fresh sliced beek steak tomatoes, fresh basil leaves, half grilled artichoke, grilled bread, olive oil, and balsamic reduction'
          },
          {
              caesarSalad: 'A traditional salad of Romaine topped with imported shredded parmesan cheese and homemade croutons'
          },
          {
              gardenSalad: 'Mixed Greens topped with vegetables of your choice'
          },
          {
              grecianSalad: 'A Mediterranean inspired salad of mixed greens topped with artichoke hearts, tomatoes, kalamatas, feta, and toasted pine nuts'
          }
      ],
      extras: [
        {extra1: 'All salads are available with bread'}, {extra2: 'All salads are available with chicken, grilled salmon, sliced beef tenderloin or shrimp with an upcharge'}
      ]
  },
  {
      gourmetTraysAndApps: [
          {
              slicedFruitTray: 'Pineapple, Grapes, Berries, Honeydew, Cantaloupe, Fresh Seasonal Fruit with a Yogurt Dipping Sauce'
          },
          {
              artisanCheeseTray: 'Triple Cream Brie, Maytag Blue, Goat Cheese, Manchego, Aged White Cheddar, Fresh Grapes, Dried Fruit and Mixed Nuts'
          },
          {
              domesticCheeseTray: 'Triple Cream Brie, Sharp Cheddar, Smoked Gouda, Havarti, Goat Cheese, Dried Fruit and Mixed Nuts'
          },
          {
              shrimpCocktail: 'Jumbo Gulf Shrimp (U10) served with Cocktail Sauce, Hot Sauce and Lemon Wedges'
          },
          {
              seafoodTray: '3 shrimp / 1 split lobster tail / 2oz crab lump'
          }
      ],
      alaCarteApps: [
        {crabCake: 'Miniature Crab Cake'}, {springRolls: 'Spring Rolls'}, {stuffedMushroomCaps: 'Stuffed Mushroom Caps'}, {satay: 'Chicken or Beek Satay with assorted dipping sauces'}, {chickenFingers: 'Grilled or Fried Chicken Fingers with dipping sauce'}, {crabMeal: 'Signature Jumbo Lump Blue Fin Crab with fresh dill, spicy Greek yogurt, on rye crostini'}
      ]
  },
  {
      mainSelections: [
          {
              grilledChicken: 'Grilled Chicken Breast, Steamed Vegetables, Starch, Bruschetta mix and Garnish'
          },
          {
              grilledFilet: 'Filet Mignon USDA Choice, Steamed Vegetable, Starch, 4oz Demi Sauce and Garnish'
          },
          {
              ravioli: 'Homemade pasta stuffed with sun dried tomatoes, roasted peppers, mushrooms and chevre pooled in red pepper cream sauce with spinach and meatballs'
          },
          {
              chickenfarfalle: 'Mushrooms, sun dried tomatoes are simmered with burgundy and shallots and then tossed with spinach, chicken and farfalle in a parmesan cream sauce. Topped with pine nuts'
          },
          {
              chickenMarsala: 'Chicken flambeed in marsala then served with pasta in a rich demi glace, marsala reduction'
          },
          {
              grilledSalmon: 'Atlantic Salmon Filet or Pacific Salmon Filet, Grilled or Steamed Vegetables, Starch, Lemon Butter Sauce or Citrus Relish and Garnish'
          },
          {
              vegetarianSampler: 'Eggplant Slices 1/2 thick Red and Yellow Peppers, Grilled Red Onion Slices, Roasted Tomato, Fresh Herb Garnish and Balsamic Drizzle'
          }
      ],
      cincinattiFavorites: [
          {
              title: "Cincinnati Chili 3-ways, Ribs with Montgomery Inn Sauce, Pasta with LaRosa's Pasta Sauce and White Castles"
          },
          {
              beverages: 'We provide a full line of beverages and can fulfill any special request'
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
            {ingreds: 'Pesto, Kalamata, red onion, artichokes, tomatoes, feta, pine nuts, and mozzarella'}
          ],
          blackenedPizza: [
            {title: 'Blackened Chicken Alfredo'},
            {ingreds: 'Alfredo, blackened chicken, jalapenos, Parmesan and mozzarella'}
          ],
          northernWoods: [
            {title: 'Northern Woods'},
            {ingreds: 'Wild mushrooms sauteed in rosemary and garlic. Finished with goat cheese and mozzarella'}
          ],
          sicilian: [
            {title: 'Sicilian Mount Vesuvio'},
            {ingreds: 'Pepperoni, salami, ham, capicola, tomatoes, basic, garlic, and mozzarella'}
          ],
          margarita: [
            {title: 'Margarita'},
            {ingreds: 'Traditional pizza with tomatoes, onions, basil, garlic and mozzarella'}
          ],
          bigDaddyStonePie: [
            {title: 'Big Daddy Stone Pie'},
            {ingreds: 'Deep-dish pie with Italian sausage, peppers, onions, roasted balsamic tomatoes, and mozzarella'}
          ],
          jambo: [
            {title: 'Jambolitos Lovers Pie'},
            {ingreds: 'Shrimp, asparagus, and mozzarella'}
          ]
      }
  }
];

exports.recipes = recipes;
