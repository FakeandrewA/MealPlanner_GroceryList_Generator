//Setting the predefined datesets so i can use it later

const breakfastItems = [
  { 
    recipe: 'Classic Oatmeal', 
    ingredients: ['Oats', 'Water or Milk', 'Honey', 'Fruits'], 
    calories: 200, 
    instructions: '1. Boil oats in water or milk.<br>2. Sweeten with honey and top with your favorite fruits.'
    
  },
  { 
    recipe: 'Scrambled Eggs with Toast', 
    ingredients: ['Eggs', 'Butter', 'Salt', 'Pepper', 'Bread'], 
    calories: 300, 
    instructions: '1. Whisk eggs with salt and pepper.<br>2. Scramble in a pan with butter.<br>3. Serve with toasted bread.' 
  },
  { 
    recipe: 'Banana Pancakes', 
    ingredients: ['Bananas', 'Flour', 'Milk', 'Baking Powder'], 
    calories: 250, 
    instructions: '1. Mash bananas and mix with flour, milk, and baking powder.<br>2. Cook on a griddle until golden brown.' 
  },
  { 
    recipe: 'Greek Yogurt Parfait', 
    ingredients: ['Greek Yogurt', 'Granola', 'Berries', 'Honey'], 
    calories: 220, 
    instructions: '1. Layer Greek yogurt, granola, and berries in a glass.<br>2. Drizzle with honey.' 
  },
  { 
    recipe: 'Vegetable Omelette', 
    ingredients: ['Eggs', 'Bell Peppers', 'Onions', 'Tomatoes', 'Cheese'], 
    calories: 280, 
    instructions: '1. Whisk eggs and pour into a hot pan.<br>2. Add diced vegetables and cheese.<br>3. Fold and cook until eggs are set.' 
  },
  { 
    recipe: 'Whole Grain Toast with Avocado', 
    ingredients: ['Whole Grain Bread', 'Avocado', 'Salt', 'Pepper'], 
    calories: 230, 
    instructions: '1. Toast whole grain bread.<br>2. Spread mashed avocado on top.<br>3. Season with salt and pepper.' 
  },
  { 
    recipe: 'Fruit Smoothie Bowl', 
    ingredients: ['Mixed Berries', 'Banana', 'Yogurt', 'Granola'], 
    calories: 260, 
    instructions: '1. Blend mixed berries, banana, and yogurt until smooth.<br>2. Pour into a bowl and top with granola.' 
  },
  { 
    recipe: 'Peanut Butter Banana Wrap', 
    ingredients: ['Tortilla', 'Peanut Butter', 'Banana', 'Honey'], 
    calories: 290, 
    instructions: '1. Spread peanut butter on a tortilla.<br>2. Add sliced banana and drizzle with honey.<br>3. Roll up and enjoy.' 
  },
  { 
    recipe: 'Veggie Breakfast Burrito', 
    ingredients: ['Eggs', 'Black Beans', 'Tomatoes', 'Avocado', 'Tortilla'], 
    calories: 310, 
    instructions: '1. Scramble eggs and assemble in a tortilla with black beans, diced tomatoes, and sliced avocado.' 
  },
  { 
    recipe: 'Blueberry Muffins', 
    ingredients: ['Flour', 'Sugar', 'Blueberries', 'Milk', 'Baking Powder'], 
    calories: 240, 
    instructions: '1. Mix flour, sugar, blueberries, milk, and baking powder.<br>2. Spoon into muffin cups and bake until golden.' 
  },
  { 
    recipe: 'Cottage Cheese and Pineapple Bowl', 
    ingredients: ['Cottage Cheese', 'Pineapple Chunks', 'Nuts'], 
    calories: 270, 
    instructions: '1. Combine cottage cheese, pineapple chunks, and nuts in a bowl.<br>2. Mix well and enjoy.' 
  },
  { 
    recipe: 'Vegetarian Breakfast Burrito', 
    ingredients: ['Eggs', 'Black Beans', 'Cheese', 'Salsa', 'Tortilla'], 
    calories: 320, 
    instructions: '1. Scramble eggs and assemble in a tortilla with black beans, cheese, and salsa.' 
  },
  { 
    recipe: 'Apple Cinnamon Overnight Oats', 
    ingredients: ['Oats', 'Milk', 'Apple', 'Cinnamon', 'Honey'], 
    calories: 250, 
    instructions: '1. Mix oats, milk, diced apple, cinnamon, and honey in a jar.<br>2. Refrigerate overnight and enjoy in the morning.' 
  },
  { 
    recipe: 'Egg and Cheese Breakfast Sandwich', 
    ingredients: ['Eggs', 'Cheese', 'English Muffin', 'Butter'], 
    calories: 280, 
    instructions: '1. Cook eggs and place on an English muffin with cheese.<br>2. Toast until the cheese melts.' 
  },
  { 
    recipe: 'Spinach and Feta Breakfast Wrap', 
    ingredients: ['Eggs', 'Spinach', 'Feta Cheese', 'Tortilla'], 
    calories: 290, 
    instructions: '1. Scramble eggs and assemble in a tortilla with spinach and crumbled feta cheese.' 
  },
  { 
    recipe: 'Peach and Almond Smoothie', 
    ingredients: ['Peach', 'Almond Milk', 'Yogurt', 'Honey'], 
    calories: 260, 
    instructions: '1. Blend peach, almond milk, yogurt, and honey until smooth.<br>2. Pour into a glass and enjoy.' 
  },
  { 
    recipe: 'Avocado and Tomato Toast', 
    ingredients: ['Whole Grain Bread', 'Avocado', 'Tomato', 'Salt', 'Pepper'], 
    calories: 230, 
    instructions: '1. Toast whole grain bread.<br>2. Spread mashed avocado on top and add sliced tomatoes.<br>3. Season with salt and pepper.' 
  },
  { 
    recipe: 'Vegetarian Breakfast Bowl', 
    ingredients: ['Quinoa', 'Black Beans', 'Avocado', 'Salsa', 'Eggs'], 
    calories: 310, 
    instructions: '1. Cook quinoa and assemble in a bowl with black beans, sliced avocado, salsa, and poached eggs.' 
  },
  { 
    recipe: 'Strawberry Banana Pancakes', 
    ingredients: ['Strawberries', 'Bananas', 'Flour', 'Milk', 'Baking Powder'], 
    calories: 240, 
    instructions: '1. Mash strawberries and bananas and mix with flour, milk, and baking powder.<br>2. Cook on a griddle until golden brown.' 
  },
  { 
    recipe: 'Tomato and Basil Egg Muffins', 
    ingredients: ['Eggs', 'Tomatoes', 'Basil', 'Cheese'], 
    calories: 280, 
    instructions: '1. Whisk eggs and pour into muffin cups.<br>2. Add diced tomatoes, chopped basil, and cheese.<br>3. Bake until eggs are set.' 
  },
  { 
    recipe: 'Peanut Butter Banana Smoothie', 
    ingredients: ['Banana', 'Peanut Butter', 'Milk', 'Yogurt'], 
    calories: 250, 
    instructions: '1. Blend banana, peanut butter, milk, and yogurt until smooth.<br>2. Pour into a glass and enjoy.' 
  },
  { 
    recipe: 'Vegetable and Cheese Omelette', 
    ingredients: ['Eggs', 'Bell Peppers', 'Onions', 'Tomatoes', 'Cheese'], 
    calories: 290, 
    instructions: '1. Whisk eggs and pour into a hot pan.<br>2. Add diced vegetables and cheese.<br>3. Fold and cook until eggs are set.' 
  },
  { 
    recipe: 'Cinnamon Raisin French Toast', 
    ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Raisins'], 
    calories: 260, 
    instructions: '1. Dip bread in a mixture of eggs, milk, and cinnamon.<br>2. Cook until golden brown.<br>3. Sprinkle with raisins.' 
  },
  { 
    recipe: 'Mango Coconut Chia Pudding', 
    ingredients: ['Chia Seeds', 'Coconut Milk', 'Mango', 'Honey'], 
    calories: 270, 
    instructions: '1. Mix chia seeds and coconut milk in a jar.<br>2. Refrigerate until it thickens.<br>3. Top with diced mango and drizzle with honey.' 
  },
  { 
    recipe: 'Spinach and Mushroom Breakfast Wrap', 
    ingredients: ['Eggs', 'Spinach', 'Mushrooms', 'Cheese', 'Tortilla'], 
    calories: 310, 
    instructions: '1. Scramble eggs and assemble in a tortilla with sautéed spinach, mushrooms, and cheese.' 
  },
  { 
    recipe: 'Yogurt and Berry Parfait', 
    ingredients: ['Yogurt', 'Mixed Berries', 'Granola'], 
    calories: 280, 
    instructions: '1. Layer yogurt, mixed berries, and granola in a glass.<br>2. Repeat until the glass is full.' 
  },
  { 
    recipe: 'Tomato and Avocado Egg Sandwich', 
    ingredients: ['Eggs', 'Whole Grain Bread', 'Tomato', 'Avocado'], 
    calories: 320, 
    instructions: '1. Cook eggs and place on whole grain bread with sliced tomatoes and avocados.<br>2. Top with another slice of bread.' 
  },
  { 
    recipe: 'Chocolate Banana Overnight Oats', 
    ingredients: ['Oats', 'Milk', 'Banana', 'Cocoa Powder', 'Honey'], 
    calories: 250, 
    instructions: '1. Mix oats, milk, mashed banana, cocoa powder, and honey in a jar.<br>2. Refrigerate overnight and enjoy in the morning.' 
  },
  { 
    recipe: 'Vegetarian Breakfast Burrito', 
    ingredients: ['Eggs', 'Black Beans', 'Cheese', 'Salsa', 'Tortilla'], 
    calories: 330, 
    instructions: '1. Scramble eggs and assemble in a tortilla with black beans, cheese, and salsa.' 
  },
  { 
    recipe: 'Blueberry Almond Butter Smoothie Bowl', 
    ingredients: ['Blueberries', 'Almond Butter', 'Banana', 'Almond Milk'], 
    calories: 270, 
    instructions: '1. Blend blueberries, almond butter, banana, and almond milk until smooth.<br>2. Pour into a bowl and top with your favorite toppings.' 
  },
  { 
    recipe: 'Ricotta and Berry Stuffed French Toast', 
    ingredients: ['Bread', 'Ricotta Cheese', 'Mixed Berries', 'Eggs', 'Milk'], 
    calories: 340, 
    instructions: '1. Mix ricotta cheese and mixed berries.<br>2. Spread on slices of bread to make a sandwich.<br>3. Dip in a mixture of eggs and milk.<br>4. Cook until golden brown.' 
  },
  { 
    recipe: 'Cranberry Walnut Overnight Oats', 
    ingredients: ['Oats', 'Milk', 'Cranberries', 'Walnuts', 'Maple Syrup'], 
    calories: 280, 
    instructions: '1. Mix oats, milk, cranberries, walnuts, and maple syrup in a jar.<br>2. Refrigerate overnight and enjoy in the morning.' 
  },
  { 
    recipe: 'Mexican Chorizo and Egg Tacos', 
    ingredients: ['Chorizo', 'Eggs', 'Tortillas', 'Onion', 'Cilantro'], 
    calories: 350, 
    instructions: '1. Cook chorizo in a pan.<br>2. Scramble eggs and add to the pan.<br>3. Assemble in tortillas with diced onion and cilantro.' 
  },
  { 
    recipe: 'Pumpkin Spice Pancakes', 
    ingredients: ['Pumpkin Puree', 'Flour', 'Milk', 'Spices', 'Maple Syrup'], 
    calories: 310, 
    instructions: '1. Mix pumpkin puree, flour, milk, and spices to make pancake batter.<br>2. Cook on a griddle and drizzle with maple syrup.' 
  },
  { 
    recipe: 'Smoked Salmon Bagel with Cream Cheese', 
    ingredients: ['Bagel', 'Smoked Salmon', 'Cream Cheese', 'Red Onion', 'Capers'], 
    calories: 360, 
    instructions: '1. Toast a bagel.<br>2. Spread cream cheese on the bagel halves.<br>3. Top with smoked salmon, sliced red onion, and capers.' 
  },
  { 
    recipe: 'Mango Coconut Chia Seed Pudding', 
    ingredients: ['Chia Seeds', 'Coconut Milk', 'Mango', 'Honey'], 
    calories: 290, 
    instructions: '1. Mix chia seeds and coconut milk in a jar.<br>2. Refrigerate until it thickens.<br>3. Top with diced mango and drizzle with honey.' 
  },
  { 
    recipe: 'Spinach and Feta Quiche', 
    ingredients: ['Pie Crust', 'Eggs', 'Milk', 'Spinach', 'Feta Cheese'], 
    calories: 370, 
    instructions: '1. Line a pie crust with spinach and feta cheese.<br>2. Whisk eggs and milk and pour over the filling.<br>3. Bake until set.' 
  },
  { 
    recipe: 'Cinnamon Roll Waffles', 
    ingredients: ['Cinnamon Roll Dough', 'Waffle Iron'], 
    calories: 320, 
    instructions: '1. Place cinnamon roll dough in a preheated waffle iron.<br>2. Cook until golden brown.<br>3. Drizzle with icing.' 
  },
  { 
    recipe: 'Sun-Dried Tomato and Basil Egg Muffins', 
    ingredients: ['Eggs', 'Sun-Dried Tomatoes', 'Basil', 'Cheese'], 
    calories: 300, 
    instructions: '1. Whisk eggs and pour into muffin cups.<br>2. Add diced sun-dried tomatoes, chopped basil, and cheese.<br>3. Bake until eggs are set.' 
  },
  { 
    recipe: 'Pineapple Coconut Smoothie', 
    ingredients: ['Pineapple', 'Coconut Milk', 'Yogurt', 'Honey'], 
    calories: 330, 
    instructions: '1. Blend pineapple, coconut milk, yogurt, and honey until smooth.<br>2. Pour into a glass and enjoy.' 
  },
  { 
    recipe: 'Vegetarian Tofu Scramble', 
    ingredients: ['Tofu', 'Bell Peppers', 'Onions', 'Spinach', 'Turmeric'], 
    calories: 310, 
    instructions: '1. Crumble tofu and sauté with diced bell peppers, onions, and spinach.<br>2. Season with turmeric.' 
  },
  { 
    recipe: 'Cherry Almond Breakfast Cookies', 
    ingredients: ['Oats', 'Almond Butter', 'Cherries', 'Maple Syrup'], 
    calories: 340, 
    instructions: '1. Mix oats, almond butter, chopped cherries, and maple syrup.<br>2. Form into cookies and bake until golden brown.' 
  },
  { 
    recipe: 'Bacon and Egg Breakfast Burrito', 
    ingredients: ['Eggs', 'Bacon', 'Cheese', 'Salsa', 'Tortilla'], 
    calories: 350, 
    instructions: '1. Scramble eggs and cook bacon.<br>2. Assemble in a tortilla with cheese and salsa.' 
  },
  { 
    recipe: 'Coconut Mango Chia Seed Pudding', 
    ingredients: ['Chia Seeds', 'Coconut Milk', 'Mango', 'Honey'], 
    calories: 290, 
    instructions: '1. Mix chia seeds and coconut milk in a jar.<br>2. Refrigerate until it thickens.<br>3. Top with diced mango and drizzle with honey.' 
  },
  { 
    recipe: 'Spinach and Mushroom Breakfast Quesadilla', 
    ingredients: ['Eggs', 'Spinach', 'Mushrooms', 'Cheese', 'Tortilla'], 
    calories: 320, 
    instructions: '1. Scramble eggs and assemble in a tortilla with sautéed spinach, mushrooms, and cheese.<br>2. Fold in half and cook until cheese is melted.' 
  },
  { 
    recipe: 'Peach Cobbler Overnight Oats', 
    ingredients: ['Oats', 'Milk', 'Peaches', 'Cinnamon', 'Maple Syrup'], 
    calories: 330, 
    instructions: '1. Mix oats, milk, diced peaches, cinnamon, and maple syrup in a jar.<br>2. Refrigerate overnight and enjoy in the morning.' 
  },
  { 
    recipe: 'Savory Breakfast Quinoa Bowl', 
    ingredients: ['Quinoa', 'Eggs', 'Avocado', 'Cherry Tomatoes', 'Cilantro'], 
    calories: 340, 
    instructions: '1. Cook quinoa and assemble in a bowl with scrambled eggs, sliced avocado, halved cherry tomatoes, and cilantro.' 
  },
  { 
    recipe: 'Chocolate Peanut Butter Banana Smoothie', 
    ingredients: ['Banana', 'Peanut Butter', 'Cocoa Powder', 'Milk'], 
    calories: 300, 
    instructions: '1. Blend banana, peanut butter, cocoa powder, and milk until smooth.<br>2. Pour into a glass and enjoy.' 
  },
  { 
    recipe: 'Caprese Breakfast Sandwich', 
    ingredients: ['English Muffin', 'Eggs', 'Tomato', 'Fresh Mozzarella', 'Basil'], 
    calories: 360, 
    instructions: '1. Cook eggs and place on an English muffin with sliced tomatoes, fresh mozzarella, and basil.<br>2. Top with another slice of muffin.' 
  },
  { 
    recipe: 'Apple Cider Pancakes', 
    ingredients: ['Apple Cider', 'Flour', 'Milk', 'Cinnamon'], 
    calories: 310, 
    instructions: '1. Mix apple cider, flour, milk, and cinnamon to make pancake batter.<br>2. Cook on a griddle until golden brown.' 
  },
  { 
    recipe: 'Southwest Breakfast Wrap', 
    ingredients: ['Eggs', 'Black Beans', 'Salsa', 'Avocado', 'Tortilla'], 
    calories: 330, 
    instructions: '1. Scramble eggs and assemble in a tortilla with black beans, salsa, and sliced avocado.' 
  },
  { 
    recipe: 'Almond Joy Chia Pudding', 
    ingredients: ['Chia Seeds', 'Almond Milk', 'Coconut Flakes', 'Almonds', 'Chocolate Chips'], 
    calories: 290, 
    instructions: '1. Mix chia seeds and almond milk in a jar.<br>2. Refrigerate until it thickens.<br>3. Top with coconut flakes, sliced almonds, and chocolate chips.' 
  },
  { 
    recipe: 'Ham and Cheese Croissant Sandwich', 
    ingredients: ['Croissant', 'Ham', 'Cheese', 'Mustard'], 
    calories: 340, 
    instructions: '1. Slice croissant and layer with ham and cheese.<br>2. Add mustard to taste.' 
  },
  { 
    recipe: 'Pomegranate Parfait', 
    ingredients: ['Yogurt', 'Pomegranate Seeds', 'Granola', 'Honey'], 
    calories: 280, 
    instructions: '1. Layer yogurt, pomegranate seeds, granola, and drizzle with honey in a glass.<br>2. Repeat until the glass is full.' 
  },
  { 
    recipe: 'Chickpea and Spinach Breakfast Hash', 
    ingredients: ['Chickpeas', 'Spinach', 'Tomatoes', 'Onions', 'Spices'], 
    calories: 320, 
    instructions: '1. Sauté chickpeas, spinach, diced tomatoes, and onions in a pan with your favorite spices.' 
  },
  { 
    recipe: 'Raspberry Lemon Ricotta Pancakes', 
    ingredients: ['Flour', 'Ricotta Cheese', 'Eggs', 'Raspberries', 'Lemon Zest'], 
    calories: 310, 
    instructions: '1. Mix flour, ricotta cheese, eggs, raspberries, and lemon zest to make pancake batter.<br>2. Cook on a griddle until golden brown.' 
  },
  { 
    recipe: 'Vegetarian Breakfast Sandwich', 
    ingredients: ['English Muffin', 'Egg', 'Cheese', 'Tomato', 'Avocado'], 
    calories: 350, 
    instructions: '1. Cook egg and place on an English muffin with cheese, sliced tomato, and avocado.<br>2. Top with another slice of muffin.' 
  },
  { 
    recipe: 'Mango Raspberry Smoothie Bowl', 
    ingredients: ['Mango', 'Raspberries', 'Yogurt', 'Granola'], 
    calories: 300, 
    instructions: '1. Blend mango, raspberries, and yogurt until smooth.<br>2. Pour into a bowl and top with granola.' 
  },
  { 
    recipe: 'Sweet Potato and Black Bean Breakfast Burrito', 
    ingredients: ['Sweet Potato', 'Black Beans', 'Eggs', 'Cheese', 'Tortilla'], 
    calories: 360, 
    instructions: '1. Roast sweet potato and sauté with black beans.<br>2. Scramble eggs and assemble in a tortilla with cheese.' 
  },
  { 
    recipe: 'Blueberry Lemon Poppy Seed Muffins', 
    ingredients: ['Flour', 'Sugar', 'Blueberries', 'Lemon Zest', 'Poppy Seeds'], 
    calories: 330, 
    instructions: '1. Mix flour, sugar, blueberries, lemon zest, and poppy seeds.<br>2. Spoon into muffin cups and bake until golden.' 
  },
  { 
    recipe: 'Vegetarian Breakfast Skillet', 
    ingredients: ['Potatoes', 'Bell Peppers', 'Onions', 'Eggs', 'Cheese'], 
    calories: 370, 
    instructions: '1. Cook diced potatoes, bell peppers, and onions in a skillet.<br>2. Crack eggs over the mixture and cook until eggs are set.<br>3. Top with cheese.' 
  },
  { 
    recipe: 'Peanut Butter and Banana Stuffed French Toast', 
    ingredients: ['Bread', 'Peanut Butter', 'Banana', 'Eggs', 'Milk'], 
    calories: 340, 
    instructions: '1. Spread peanut butter on slices of bread.<br>2. Place banana slices between two slices to make a sandwich.<br>3. Dip in a mixture of eggs and milk.<br>4. Cook until golden brown.' 
  },
  { 
    recipe: 'Tomato Basil Breakfast Quesadilla', 
    ingredients: ['Eggs', 'Tomatoes', 'Basil', 'Cheese', 'Tortilla'], 
    calories: 320, 
    instructions: '1. Scramble eggs and assemble in a tortilla with diced tomatoes, chopped basil, and cheese.<br>2. Fold in half and cook until cheese is melted.' 
  },
  { 
    recipe: 'Chocolate Hazelnut Overnight Oats', 
    ingredients: ['Oats', 'Milk', 'Chocolate Hazelnut Spread', 'Hazelnuts'], 
    calories: 330, 
    instructions: '1. Mix oats, milk, and chocolate hazelnut spread in a jar.<br>2. Refrigerate overnight and top with chopped hazelnuts before serving.' 
  },
  { 
    recipe: 'Mushroom and Spinach Breakfast Wrap', 
    ingredients: ['Eggs', 'Mushrooms', 'Spinach', 'Cheese', 'Tortilla'], 
    calories: 310, 
    instructions: '1. Scramble eggs and assemble in a tortilla with sautéed mushrooms, spinach, and cheese.' 
  },
  { 
    recipe: 'Coconut Banana Bread', 
    ingredients: ['Flour', 'Bananas', 'Coconut Milk', 'Coconut Flakes'], 
    calories: 350, 
    instructions: '1. Mix flour, mashed bananas, coconut milk, and coconut flakes.<br>2. Bake until a toothpick comes out clean.' 
  },
  { 
    recipe: 'Avocado and Black Bean Breakfast Bowl', 
    ingredients: ['Avocado', 'Black Beans', 'Salsa', 'Eggs', 'Quinoa'], 
    calories: 300, 
    instructions: '1. Assemble diced avocado, black beans, salsa, scrambled eggs, and quinoa in a bowl.' 
  },
  { 
    recipe: 'Cinnamon Sugar Waffles', 
    ingredients: ['Waffle Mix', 'Cinnamon Sugar', 'Whipped Cream'], 
    calories: 340, 
    instructions: '1. Prepare waffle mix according to package instructions.<br>2. Sprinkle with cinnamon sugar and top with whipped cream.' 
  },
  { 
    recipe: 'Chia Seed and Berry Breakfast Popsicles', 
    ingredients: ['Chia Seeds', 'Mixed Berries', 'Yogurt', 'Honey'], 
    calories: 290, 
    instructions: '1. Mix chia seeds, mixed berries, yogurt, and honey.<br>2. Pour into popsicle molds and freeze overnight.' 
  },
  { 
    recipe: 'Greek Yogurt and Honey Parfait', 
    ingredients: ['Greek Yogurt', 'Honey', 'Granola', 'Mixed Berries'], 
    calories: 320, 
    instructions: '1. Layer Greek yogurt, honey, granola, and mixed berries in a glass.<br>2. Repeat until the glass is full.' 
  },
  { 
    recipe: 'Caprese Omelette', 
    ingredients: ['Eggs', 'Tomato', 'Fresh Mozzarella', 'Basil'], 
    calories: 330, 
    instructions: '1. Whisk eggs and pour into a hot pan.<br>2. Add sliced tomatoes, fresh mozzarella, and chopped basil.<br>3. Fold and cook until eggs are set.' 
  },
  { 
    recipe: 'Peach and Raspberry Breakfast Cobbler', 
    ingredients: ['Peaches', 'Raspberries', 'Oats', 'Maple Syrup'], 
    calories: 310, 
    instructions: '1. Mix sliced peaches, raspberries, oats, and maple syrup.<br>2. Bake until bubbly and golden brown.' 
  },
  { 
    recipe: 'Spinach and Feta Breakfast Wrap', 
    ingredients: ['Eggs', 'Spinach', 'Feta Cheese', 'Tomato', 'Tortilla'], 
    calories: 340, 
    instructions: '1. Scramble eggs and assemble in a tortilla with sautéed spinach, crumbled feta cheese, and sliced tomato.' 
  },
  { 
    recipe: 'Banana Walnut Baked Oatmeal', 
    ingredients: ['Oats', 'Bananas', 'Walnuts', 'Milk', 'Maple Syrup'], 
    calories: 310, 
    instructions: '1. Mix oats, mashed bananas, chopped walnuts, milk, and maple syrup.<br>2. Bake until set and golden brown.' 
  },
  { 
    recipe: 'Egg and Veggie Breakfast Burrito', 
    ingredients: ['Eggs', 'Bell Peppers', 'Onions', 'Cheese', 'Tortilla'], 
    calories: 330, 
    instructions: '1. Scramble eggs and assemble in a tortilla with sautéed bell peppers, onions, and cheese.' 
  },
  { 
    recipe: 'Blueberry Lemon Ricotta Toast', 
    ingredients: ['Bread', 'Ricotta Cheese', 'Blueberries', 'Lemon Zest', 'Honey'], 
    calories: 280, 
    instructions: '1. Toast slices of bread.<br>2. Spread ricotta cheese on the toast and top with blueberries, lemon zest, and a drizzle of honey.' 
  },
  { 
    recipe: 'Mexican Breakfast Skillet', 
    ingredients: ['Eggs', 'Chorizo', 'Black Beans', 'Tomatoes', 'Cheese'], 
    calories: 350, 
    instructions: '1. Cook chorizo in a skillet.<br>2. Add black beans, diced tomatoes, and crack eggs over the mixture.<br>3. Cook until eggs are set.<br>4. Top with cheese.' 
  },
  { 
    recipe: 'Pumpkin Pie Smoothie Bowl', 
    ingredients: ['Pumpkin Puree', 'Banana', 'Milk', 'Pumpkin Spice', 'Granola'], 
    calories: 320, 
    instructions: '1. Blend pumpkin puree, banana, milk, and pumpkin spice until smooth.<br>2. Pour into a bowl and top with granola.' 
  },
  { 
    recipe: 'Bacon and Cheese Breakfast Quesadilla', 
    ingredients: ['Eggs', 'Bacon', 'Cheese', 'Tortilla'], 
    calories: 340, 
    instructions: '1. Scramble eggs and cook bacon.<br>2. Assemble in a tortilla with cheese.<br>3. Fold in half and cook until cheese is melted.' 
  },
  { 
    recipe: 'Apple Cinnamon Pancakes', 
    ingredients: ['Apples', 'Flour', 'Milk', 'Cinnamon'], 
    calories: 300, 
    instructions: '1. Dice apples and mix with pancake batter made from flour, milk, and cinnamon.<br>2. Cook on a griddle until golden brown.' 
  },
  { 
    recipe: 'Vegetarian Breakfast Enchiladas', 
    ingredients: ['Eggs', 'Black Beans', 'Cheese', 'Salsa', 'Tortillas'], 
    calories: 360, 
    instructions: '1. Scramble eggs and assemble in tortillas with black beans, cheese, and salsa.<br>2. Roll up and place in a baking dish.<br>3. Bake until cheese is melted.' 
  },
  { 
    recipe: 'Raspberry Almond Breakfast Quinoa', 
    ingredients: ['Quinoa', 'Raspberries', 'Almonds', 'Honey'], 
    calories: 310, 
    instructions: '1. Cook quinoa and top with raspberries, sliced almonds, and a drizzle of honey.' 
  },
  { 
    recipe: 'Cranberry Orange Scones', 
    ingredients: ['Flour', 'Cranberries', 'Orange Zest', 'Butter', 'Sugar'], 
    calories: 330, 
    instructions: '1. Mix flour, cranberries, orange zest, butter, and sugar.<br>2. Shape into scones and bake until golden brown.' 
  },
  { 
    recipe: 'Avocado Toast with Poached Eggs', 
    ingredients: ['Bread', 'Avocado', 'Eggs', 'Salt', 'Pepper'], 
    calories: 290, 
    instructions: '1. Toast slices of bread.<br>2. Spread mashed avocado on the toast.<br>3. Top with poached eggs and season with salt and pepper.' 
  },
  { 
    recipe: 'Chocolate Raspberry Chia Pudding', 
    ingredients: ['Chia Seeds', 'Almond Milk', 'Cocoa Powder', 'Raspberries'], 
    calories: 330, 
    instructions: '1. Mix chia seeds, almond milk, and cocoa powder in a jar.<br>2. Refrigerate until it thickens.<br>3. Top with fresh raspberries.' 
  },
  { 
    recipe: 'Greek Yogurt and Berry Waffle Stack', 
    ingredients: ['Waffles', 'Greek Yogurt', 'Mixed Berries', 'Honey'], 
    calories: 320, 
    instructions: '1. Toast waffles and layer with Greek yogurt and mixed berries.<br>2. Drizzle with honey.' 
  },
  { 
    recipe: 'Tomato Basil Breakfast Pizza', 
    ingredients: ['Pizza Dough', 'Eggs', 'Tomatoes', 'Basil', 'Cheese'], 
    calories: 340, 
    instructions: '1. Roll out pizza dough and top with scrambled eggs, sliced tomatoes, basil, and cheese.<br>2. Bake until crust is golden brown.' 
  },
  { 
    recipe: 'Almond Butter and Banana Breakfast Burrito', 
    ingredients: ['Almond Butter', 'Banana', 'Tortilla', 'Honey'], 
    calories: 350, 
    instructions: '1. Spread almond butter on a tortilla.<br>2. Add sliced banana and drizzle with honey.<br>3. Roll up and enjoy.' 
  },
  { 
    recipe: 'Strawberry Cheesecake Overnight Oats', 
    ingredients: ['Oats', 'Milk', 'Strawberries', 'Cream Cheese', 'Honey'], 
    calories: 300, 
    instructions: '1. Mix oats, milk, diced strawberries, cream cheese, and honey in a jar.<br>2. Refrigerate overnight and enjoy in the morning.' 
  },
  { 
    recipe: 'Mushroom and Swiss Breakfast Casserole', 
    ingredients: ['Eggs', 'Mushrooms', 'Swiss Cheese', 'Bread', 'Milk'], 
    calories: 370, 
    instructions: '1. Whisk eggs and milk.<br>2. Layer sliced bread, sautéed mushrooms, and Swiss cheese in a baking dish.<br>3. Pour egg mixture over the layers.<br>4. Bake until set.' 
  },
  { 
    recipe: 'Banana Chocolate Chip Breakfast Cookies', 
    ingredients: ['Bananas', 'Oats', 'Chocolate Chips', 'Peanut Butter', 'Honey'], 
    calories: 330, 
    instructions: '1. Mash bananas and mix with oats, chocolate chips, peanut butter, and honey.<br>2. Form into cookies and bake until golden brown.' 
  },
  { 
    recipe: 'Cherry Almond Granola Parfait', 
    ingredients: ['Granola', 'Yogurt', 'Cherries', 'Almonds', 'Honey'], 
    calories: 310, 
    instructions: '1. Layer granola, yogurt, pitted cherries, sliced almonds, and drizzle with honey in a glass.<br>2. Repeat until the glass is full.' 
  },
  { 
    recipe: 'Pesto and Sun-Dried Tomato Scramble', 
    ingredients: ['Eggs', 'Pesto', 'Sun-Dried Tomatoes', 'Parmesan Cheese'], 
    calories: 340, 
    instructions: '1. Scramble eggs and fold in pesto, chopped sun-dried tomatoes, and grated Parmesan cheese.' 
  },
  { 
    recipe: 'Coconut Mango Chia Seed Pudding', 
    ingredients: ['Chia Seeds', 'Coconut Milk', 'Mango', 'Agave Syrup'], 
    calories: 320, 
    instructions: '1. Mix chia seeds, coconut milk, diced mango, and agave syrup in a jar.<br>2. Refrigerate until it thickens.' 
  },
  { 
    recipe: 'Breakfast BLT Sandwich', 
    ingredients: ['Bread', 'Bacon', 'Lettuce', 'Tomato', 'Mayonnaise'], 
    calories: 330, 
    instructions: '1. Toast slices of bread and spread mayonnaise.<br>2. Layer with bacon, lettuce, and tomato.<br>3. Top with another slice of bread.' 
  },
  { 
    recipe: 'Vegetarian Breakfast Burrito Bowl', 
    ingredients: ['Eggs', 'Black Beans', 'Avocado', 'Salsa', 'Quinoa'], 
    calories: 340, 
    instructions: '1. Scramble eggs and assemble in a bowl with black beans, sliced avocado, salsa, and quinoa.' 
  },
  { 
    recipe: 'Peanut Butter Banana Overnight Oats', 
    ingredients: ['Oats', 'Milk', 'Peanut Butter', 'Banana', 'Honey'], 
    calories: 310, 
    instructions: '1. Mix oats, milk, peanut butter, sliced banana, and honey in a jar.<br>2. Refrigerate overnight and enjoy in the morning.' 
  },
  { 
    recipe: 'Sausage and Veggie Breakfast Skillet', 
    ingredients: ['Sausage', 'Bell Peppers', 'Onions', 'Potatoes', 'Eggs'], 
    calories: 330, 
    instructions: '1. Cook sausage, bell peppers, onions, and diced potatoes in a skillet.<br>2. Crack eggs over the mixture and cook until eggs are set.' 
  },
  { 
    recipe: 'Cherry Almond Pancakes', 
    ingredients: ['Flour', 'Cherries', 'Almonds', 'Milk', 'Vanilla Extract'], 
    calories: 280, 
    instructions: '1. Mix flour, pitted cherries, chopped almonds, milk, and vanilla extract to make pancake batter.<br>2. Cook on a griddle until golden brown.' 
  },
  { 
    recipe: 'Mediterranean Breakfast Wrap', 
    ingredients: ['Eggs', 'Spinach', 'Tomatoes', 'Feta Cheese', 'Tortilla'], 
    calories: 350, 
    instructions: '1. Scramble eggs and assemble in a tortilla with sautéed spinach, diced tomatoes, and crumbled feta cheese.' 
  },
  { 
    recipe: 'Cinnamon Apple French Toast', 
    ingredients: ['Bread', 'Eggs', 'Milk', 'Apples', 'Cinnamon'], 
    calories: 300, 
    instructions: '1. Dip slices of bread in a mixture of eggs, milk, and cinnamon.<br>2. Cook on a griddle until golden brown.<br>3. Top with sliced apples.' 
  },
  { 
    recipe: 'Huevos Rancheros Breakfast Tostadas', 
    ingredients: ['Eggs', 'Refried Beans', 'Avocado', 'Salsa', 'Tostadas'], 
    calories: 360, 
    instructions: '1. Cook eggs and assemble on tostadas with refried beans, sliced avocado, and salsa.' 
  },
  { 
    recipe: 'Pineapple Coconut Chia Pudding', 
    ingredients: ['Chia Seeds', 'Coconut Milk', 'Pineapple', 'Shredded Coconut'], 
    calories: 320, 
    instructions: '1. Mix chia seeds, coconut milk, diced pineapple, and shredded coconut in a jar.<br>2. Refrigerate until it thickens.' 
  },
  { 
    recipe: 'Shakshuka with Feta', 
    ingredients: ['Eggs', 'Tomatoes', 'Bell Peppers', 'Onions', 'Feta Cheese'], 
    calories: 340, 
    instructions: '1. Cook tomatoes, bell peppers, and onions until softened.<br>2. Crack eggs over the mixture and cook until eggs are set.<br>3. Top with crumbled feta cheese.' 
  },
  { 
    recipe: 'Maple Pecan Waffles', 
    ingredients: ['Waffle Mix', 'Pecans', 'Maple Syrup'], 
    calories: 310, 
    instructions: '1. Prepare waffle mix according to package instructions.<br>2. Fold in chopped pecans.<br>3. Cook until golden brown and serve with maple syrup.' 
  },
  { 
    recipe: 'Tomato Basil Mozzarella Breakfast Sandwich', 
    ingredients: ['English Muffin', 'Eggs', 'Tomato', 'Fresh Mozzarella', 'Basil'], 
    calories: 330, 
    instructions: '1. Cook eggs and place on an English muffin with sliced tomatoes, fresh mozzarella, and basil.<br>2. Top with another slice of muffin.' 
  },
  { 
    recipe: 'Quinoa and Berry Breakfast Bowl', 
    ingredients: ['Quinoa', 'Mixed Berries', 'Yogurt', 'Honey'], 
    calories: 290, 
    instructions: '1. Cook quinoa and top with mixed berries, yogurt, and a drizzle of honey.' 
  },
  { 
    recipe: 'Sesame Ginger Tofu Scramble', 
    ingredients: ['Tofu', 'Bell Peppers', 'Spinach', 'Sesame Ginger Sauce'], 
    calories: 350, 
    instructions: '1. Crumble tofu and cook with bell peppers, spinach, and sesame ginger sauce until heated through.' 
  },
  { 
    recipe: 'Banana Nutella Stuffed Pancakes', 
    ingredients: ['Bananas', 'Nutella', 'Pancake Mix', 'Milk'], 
    calories: 330, 
    instructions: '1. Spread Nutella on slices of banana.<br>2. Place between two pancake slices to make a sandwich.<br>3. Cook on a griddle until golden brown.' 
  },
  { 
    recipe: 'Mango Coconut Breakfast Smoothie', 
    ingredients: ['Mango', 'Coconut Milk', 'Yogurt', 'Honey'], 
    calories: 300, 
    instructions: '1. Blend mango, coconut milk, yogurt, and honey until smooth.<br>2. Pour into a glass and enjoy.' 
  },
  { 
    recipe: 'Cranberry Orange Greek Yogurt Parfait', 
    ingredients: ['Greek Yogurt', 'Cranberries', 'Orange Zest', 'Granola'], 
    calories: 320, 
    instructions: '1. Layer Greek yogurt, dried cranberries, orange zest, and granola in a glass.<br>2. Repeat until the glass is full.' 
  },
  { 
    recipe: 'Spinach and Artichoke Breakfast Casserole', 
    ingredients: ['Eggs', 'Spinach', 'Artichoke Hearts', 'Cheese', 'Bread'], 
    calories: 340, 
    instructions: '1. Whisk eggs and mix with sautéed spinach, chopped artichoke hearts, and cheese.<br>2. Layer with sliced bread in a baking dish.<br>3. Bake until set.' 
  },
  { 
    recipe: 'Apricot Almond Breakfast Bars', 
    ingredients: ['Oats', 'Apricots', 'Almonds', 'Honey', 'Coconut Oil'], 
    calories: 330, 
    instructions: '1. Blend oats, dried apricots, chopped almonds, honey, and coconut oil.<br>2. Press into a baking dish and bake until firm.<br>3. Cut into bars.' 
  },
  { 
    recipe: 'Pesto Tomato Breakfast Bagel', 
    ingredients: ['Bagel', 'Cream Cheese', 'Pesto', 'Tomato', 'Basil'], 
    calories: 340, 
    instructions: '1. Toast a bagel and spread cream cheese on each half.<br>2. Top with pesto, sliced tomatoes, and fresh basil.' 
  },
  { 
    recipe: 'Sweet Potato and Black Bean Breakfast Burrito', 
    ingredients: ['Eggs', 'Sweet Potato', 'Black Beans', 'Cheese', 'Tortilla'], 
    calories: 350, 
    instructions: '1. Scramble eggs and assemble in a tortilla with roasted sweet potato, black beans, and cheese.' 
  },
  { 
    recipe: 'Blueberry Almond Chia Seed Pudding', 
    ingredients: ['Chia Seeds', 'Almond Milk', 'Blueberries', 'Maple Syrup'], 
    calories: 310, 
    instructions: '1. Mix chia seeds, almond milk, blueberries, and maple syrup in a jar.<br>2. Refrigerate until it thickens.' 
  },
  { 
    recipe: 'Sun-Dried Tomato and Spinach Breakfast Wrap', 
    ingredients: ['Eggs', 'Sun-Dried Tomatoes', 'Spinach', 'Feta Cheese', 'Tortilla'], 
    calories: 330, 
    instructions: '1. Scramble eggs and assemble in a tortilla with chopped sun-dried tomatoes, sautéed spinach, and crumbled feta cheese.' 
  },
  { 
    recipe: 'Chocolate Peanut Butter Banana Smoothie Bowl', 
    ingredients: ['Banana', 'Peanut Butter', 'Cocoa Powder', 'Milk', 'Granola'], 
    calories: 320, 
    instructions: '1. Blend banana, peanut butter, cocoa powder, and milk until smooth.<br>2. Pour into a bowl and top with granola.'

  },
];
const lunchItems = [
  { 
    recipe: 'Vegetarian Chickpea Stir-Fry', 
    ingredients: ['Chickpeas', 'Mixed Vegetables', 'Soy Sauce', 'Garlic', 'Ginger'], 
    calories: 400, 
    instructions: '1. Sauté chickpeas, mixed vegetables, garlic, and ginger in soy sauce.<br>2. Cook until vegetables are tender.' 
  },
  { 
    recipe: 'Caprese Salad with Balsamic Glaze', 
    ingredients: ['Tomatoes', 'Fresh Mozzarella', 'Basil', 'Balsamic Glaze', 'Olive Oil'], 
    calories: 350, 
    instructions: '1. Slice tomatoes and fresh mozzarella.<br>2. Arrange on a plate with basil leaves.<br>3. Drizzle with balsamic glaze and olive oil.' 
  },
  { 
    recipe: 'Quinoa and Black Bean Bowl', 
    ingredients: ['Quinoa', 'Black Beans', 'Corn', 'Avocado', 'Lime'], 
    calories: 380, 
    instructions: '1. Cook quinoa and mix with black beans, corn, and diced avocado.<br>2. Squeeze lime juice over the bowl.' 
  },
  { 
    recipe: 'Grilled Chicken Caesar Salad', 
    ingredients: ['Grilled Chicken', 'Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'], 
    calories: 420, 
    instructions: '1. Grill chicken and slice.<br>2. Toss with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.' 
  },
  { 
    recipe: 'Vegetable and Tofu Stir-Fry', 
    ingredients: ['Tofu', 'Broccoli', 'Carrots', 'Snap Peas', 'Soy Sauce'], 
    calories: 360, 
    instructions: '1. Sauté tofu, broccoli, carrots, and snap peas in soy sauce.<br>2. Cook until vegetables are tender.' 
  },
  { 
    recipe: 'Mediterranean Quinoa Salad', 
    ingredients: ['Quinoa', 'Cucumber', 'Tomatoes', 'Olives', 'Feta Cheese'], 
    calories: 330, 
    instructions: '1. Cook quinoa and mix with diced cucumber, tomatoes, olives, and crumbled feta cheese.' 
  },
  { 
    recipe: 'Chicken and Vegetable Wrap', 
    ingredients: ['Grilled Chicken', 'Whole Wheat Wrap', 'Lettuce', 'Tomato', 'Tzatziki Sauce'], 
    calories: 390, 
    instructions: '1. Grill chicken and slice.<br>2. Assemble in a whole wheat wrap with lettuce, tomato, and tzatziki sauce.' 
  },
  { 
    recipe: 'Spaghetti Aglio e Olio with Broccoli', 
    ingredients: ['Spaghetti', 'Garlic', 'Olive Oil', 'Red Pepper Flakes', 'Broccoli'], 
    calories: 370, 
    instructions: '1. Cook spaghetti and sauté garlic in olive oil with red pepper flakes.<br>2. Toss with steamed broccoli.' 
  },
  { 
    recipe: 'Chickpea and Spinach Curry', 
    ingredients: ['Chickpeas', 'Spinach', 'Tomatoes', 'Onions', 'Curry Powder'], 
    calories: 400, 
    instructions: '1. Cook chickpeas, spinach, tomatoes, and onions in curry powder.<br>2. Simmer until flavors meld.' 
  },
  { 
    recipe: 'Grilled Vegetable Wrap', 
    ingredients: ['Zucchini', 'Bell Peppers', 'Eggplant', 'Hummus', 'Whole Wheat Wrap'], 
    calories: 360, 
    instructions: '1. Grill zucchini, bell peppers, and eggplant.<br>2. Spread hummus on a whole wheat wrap and fill with grilled vegetables.' 
  },
  { 
    recipe: 'Shrimp and Quinoa Salad', 
    ingredients: ['Shrimp', 'Quinoa', 'Cucumber', 'Cherry Tomatoes', 'Lemon'], 
    calories: 410, 
    instructions: '1. Grill shrimp and mix with cooked quinoa, diced cucumber, cherry tomatoes, and a squeeze of lemon.' 
  },
  { 
    recipe: 'Vegetarian Buddha Bowl', 
    ingredients: ['Brown Rice', 'Roasted Sweet Potato', 'Avocado', 'Chickpeas', 'Tahini Dressing'], 
    calories: 390, 
    instructions: '1. Cook brown rice and arrange in a bowl with roasted sweet potato, sliced avocado, and chickpeas.<br>2. Drizzle with tahini dressing.' 
  },
  { 
    recipe: 'Turkey and Cranberry Wrap', 
    ingredients: ['Roast Turkey', 'Cranberry Sauce', 'Lettuce', 'Whole Wheat Wrap', 'Cream Cheese'], 
    calories: 380, 
    instructions: '1. Assemble roast turkey, cranberry sauce, lettuce, and cream cheese in a whole wheat wrap.' 
  },
  { 
    recipe: 'Vegetable and Lentil Soup', 
    ingredients: ['Lentils', 'Carrots', 'Celery', 'Onions', 'Vegetable Broth'], 
    calories: 350, 
    instructions: '1. Cook lentils, carrots, celery, and onions in vegetable broth.<br>2. Simmer until vegetables and lentils are tender.' 
  },
  { 
    recipe: 'Eggplant Parmesan with Whole Wheat Pasta', 
    ingredients: ['Eggplant', 'Whole Wheat Pasta', 'Tomato Sauce', 'Mozzarella Cheese', 'Basil'], 
    calories: 370, 
    instructions: '1. Bread and bake eggplant slices.<br>2. Layer with whole wheat pasta, tomato sauce, mozzarella cheese, and basil.' 
  },
  { 
    recipe: 'Asian Sesame Noodle Bowl', 
    ingredients: ['Rice Noodles', 'Sesame Sauce', 'Edamame', 'Carrots', 'Green Onions'], 
    calories: 340, 
    instructions: '1. Cook rice noodles and toss with sesame sauce, edamame, julienned carrots, and sliced green onions.' 
  },
  { 
    recipe: 'Mushroom and Spinach Quesadilla', 
    ingredients: ['Mushrooms', 'Spinach', 'Whole Wheat Tortilla', 'Cheese'], 
    calories: 360, 
    instructions: '1. Sauté mushrooms and spinach.<br>2. Assemble in a whole wheat tortilla with cheese and cook until cheese is melted.' 
  },
  { 
    recipe: 'Chickpea Salad Sandwich', 
    ingredients: ['Chickpeas', 'Celery', 'Red Onion', 'Mayonnaise', 'Whole Wheat Bread'], 
    calories: 330, 
    instructions: '1. Mash chickpeas and mix with diced celery, red onion, and mayonnaise.<br>2. Spread on whole wheat bread to make a sandwich.' 
  },
  { 
    recipe: 'Vegetarian Stuffed Bell Peppers', 
    ingredients: ['Bell Peppers', 'Quinoa', 'Black Beans', 'Corn', 'Salsa'], 
    calories: 370, 
    instructions: '1. Cook quinoa and mix with black beans, corn, and salsa.<br>2. Stuff bell peppers with the quinoa mixture and bake until peppers are tender.' 
  },
  { 
    recipe: 'Mango and Avocado Sushi Bowl', 
    ingredients: ['Sushi Rice', 'Mango', 'Avocado', 'Cucumber', 'Soy Sauce'], 
    calories: 360, 
    instructions: '1. Cook sushi rice and arrange in a bowl with sliced mango, avocado, and cucumber.<br>2. Drizzle with soy sauce.' 
  },
  { 
    recipe: 'Turkey and Vegetable Skewers', 
    ingredients: ['Turkey Breast', 'Bell Peppers', 'Zucchini', 'Cherry Tomatoes', 'Olive Oil'], 
    calories: 390, 
    instructions: '1. Thread turkey breast, bell peppers, zucchini, and cherry tomatoes onto skewers.<br>2. Grill until turkey is cooked through and vegetables are tender.' 
  },
  { 
    recipe: 'Lentil and Vegetable Curry', 
    ingredients: ['Lentils', 'Mixed Vegetables', 'Coconut Milk', 'Curry Paste', 'Basmati Rice'], 
    calories: 400, 
    instructions: '1. Cook lentils, mixed vegetables, coconut milk, and curry paste in a pot.<br>2. Serve over cooked basmati rice.' 
  },
  { 
    recipe: 'Mediterranean Chickpea Wrap', 
    ingredients: ['Chickpeas', 'Cucumber', 'Tomatoes', 'Red Onion', 'Tahini Sauce'], 
    calories: 380, 
    instructions: '1. Mix chickpeas, diced cucumber, tomatoes, and red onion.<br>2. Assemble in a whole wheat wrap and drizzle with tahini sauce.' 
  },
  { 
    recipe: 'Pesto and Tomato Pizza with Whole Wheat Crust', 
    ingredients: ['Whole Wheat Pizza Dough', 'Pesto', 'Tomatoes', 'Mozzarella Cheese', 'Basil'], 
    calories: 360, 
    instructions: '1. Roll out whole wheat pizza dough and spread with pesto.<br>2. Top with sliced tomatoes, mozzarella cheese, and basil.<br>3. Bake until crust is golden and cheese is melted.' 
  },
  { 
    recipe: 'Sesame Ginger Tofu Stir-Fry', 
    ingredients: ['Tofu', 'Broccoli', 'Carrots', 'Snap Peas', 'Sesame Ginger Sauce'], 
    calories: 370, 
    instructions: '1. Sauté tofu, broccoli, carrots, and snap peas in sesame ginger sauce.<br>2. Cook until vegetables are tender.' 
  },
  { 
    recipe: 'Tomato Basil Mozzarella Panini', 
    ingredients: ['Whole Wheat Bread', 'Tomato', 'Fresh Mozzarella', 'Basil', 'Olive Oil'], 
    calories: 350, 
    instructions: '1. Assemble slices of whole wheat bread with tomato, fresh mozzarella, and basil.<br>2. Brush with olive oil and grill until bread is toasted and cheese is melted.' 
  }, { 
    recipe: 'Mushroom and Spinach Stuffed Bell Peppers', 
    ingredients: ['Bell Peppers', 'Mushrooms', 'Spinach', 'Quinoa', 'Feta Cheese'], 
    calories: 380, 
    instructions: '1. Cut bell peppers in half and remove seeds.<br>2. Sauté mushrooms and spinach.<br>3. Mix with cooked quinoa and feta cheese.<br>4. Stuff bell peppers and bake until peppers are tender.' 
  },
  { 
    recipe: 'Teriyaki Chicken and Vegetable Skewers', 
    ingredients: ['Chicken Breast', 'Bell Peppers', 'Zucchini', 'Pineapple', 'Teriyaki Sauce'], 
    calories: 400, 
    instructions: '1. Cut chicken into cubes and marinate in teriyaki sauce.<br>2. Thread chicken, bell peppers, zucchini, and pineapple onto skewers.<br>3. Grill until chicken is cooked through and vegetables are tender.' 
  },
  { 
    recipe: 'Chickpea and Avocado Salad', 
    ingredients: ['Chickpeas', 'Avocado', 'Cherry Tomatoes', 'Cucumber', 'Lemon'], 
    calories: 350, 
    instructions: '1. Mix chickpeas, diced avocado, halved cherry tomatoes, and sliced cucumber.<br>2. Squeeze lemon juice over the salad.' 
  },
  { 
    recipe: 'Cauliflower and Chickpea Curry', 
    ingredients: ['Cauliflower', 'Chickpeas', 'Tomatoes', 'Coconut Milk', 'Curry Powder'], 
    calories: 380, 
    instructions: '1. Cook cauliflower, chickpeas, tomatoes, coconut milk, and curry powder in a pot.<br>2. Simmer until flavors meld.' 
  },
  { 
    recipe: 'Turkey and Vegetable Stir-Fry', 
    ingredients: ['Ground Turkey', 'Broccoli', 'Carrots', 'Snap Peas', 'Soy Sauce'], 
    calories: 390, 
    instructions: '1. Cook ground turkey and stir-fry with broccoli, carrots, and snap peas in soy sauce.<br>2. Cook until vegetables are tender.' 
  },
  { 
    recipe: 'Pesto and Tomato Bruschetta', 
    ingredients: ['Baguette Slices', 'Pesto', 'Tomatoes', 'Basil', 'Olive Oil'], 
    calories: 360, 
    instructions: '1. Toast baguette slices.<br>2. Spread with pesto and top with diced tomatoes and basil.<br>3. Drizzle with olive oil.' 
  },
  { 
    recipe: 'Lentil and Vegetable Wrap', 
    ingredients: ['Lentils', 'Cucumber', 'Red Onion', 'Lettuce', 'Whole Wheat Wrap'], 
    calories: 370, 
    instructions: '1. Cook lentils and mix with diced cucumber, sliced red onion, and lettuce.<br>2. Assemble in a whole wheat wrap.' 
  },
  { 
    recipe: 'Salmon and Quinoa Bowl', 
    ingredients: ['Salmon Fillet', 'Quinoa', 'Asparagus', 'Cherry Tomatoes', 'Lemon'], 
    calories: 410, 
    instructions: '1. Grill salmon fillet and cook quinoa.<br>2. Arrange in a bowl with grilled asparagus, halved cherry tomatoes, and a squeeze of lemon.' 
  },
  { 
    recipe: 'Chickpea and Spinach Stuffed Sweet Potatoes', 
    ingredients: ['Sweet Potatoes', 'Chickpeas', 'Spinach', 'Red Onion', 'Tahini Sauce'], 
    calories: 380, 
    instructions: '1. Bake sweet potatoes until tender.<br>2. Sauté chickpeas, spinach, and red onion.<br>3. Cut sweet potatoes in half, stuff with the chickpea mixture, and drizzle with tahini sauce.' 
  },
  { 
    recipe: 'Black Bean and Corn Quesadilla', 
    ingredients: ['Black Beans', 'Corn', 'Red Pepper', 'Cheese', 'Whole Wheat Tortilla'], 
    calories: 360, 
    instructions: '1. Mix black beans, corn, and diced red pepper.<br>2. Assemble in a whole wheat tortilla with cheese and cook until cheese is melted.' 
  },
  { 
    recipe: 'Chicken Caesar Wrap', 
    ingredients: ['Grilled Chicken', 'Romaine Lettuce', 'Parmesan Cheese', 'Whole Wheat Wrap', 'Caesar Dressing'], 
    calories: 390, 
    instructions: '1. Grill chicken and slice.<br>2. Assemble in a whole wheat wrap with romaine lettuce, Parmesan cheese, and Caesar dressing.' 
  },
  { 
    recipe: 'Vegetarian Sushi Rolls', 
    ingredients: ['Sushi Rice', 'Nori Sheets', 'Cucumber', 'Avocado', 'Carrots'], 
    calories: 350, 
    instructions: '1. Cook sushi rice and place on a nori sheet.<br>2. Add sliced cucumber, avocado, and julienned carrots.<br>3. Roll tightly and slice into pieces.' 
  },
  { 
    recipe: 'Mango and Black Bean Salad', 
    ingredients: ['Black Beans', 'Mango', 'Red Onion', 'Cilantro', 'Lime'], 
    calories: 330, 
    instructions: '1. Mix black beans, diced mango, chopped red onion, cilantro, and lime juice.<br>2. Toss gently.' 
  },
  { 
    recipe: 'Egg Fried Rice with Vegetables', 
    ingredients: ['Rice', 'Eggs', 'Mixed Vegetables', 'Soy Sauce', 'Green Onions'], 
    calories: 370, 
    instructions: '1. Cook rice and scramble eggs.<br>2. Stir-fry mixed vegetables and combine with rice and eggs.<br>3. Drizzle with soy sauce and garnish with chopped green onions.' 
  },
  { 
    recipe: 'Tofu and Broccoli Noodle Bowl', 
    ingredients: ['Tofu', 'Broccoli', 'Rice Noodles', 'Soy Sauce', 'Ginger'], 
    calories: 340, 
    instructions: '1. Sauté tofu and broccoli in soy sauce and ginger.<br>2. Cook rice noodles and toss with the tofu and broccoli mixture.' 
  },
  { 
    recipe: 'Greek Salad with Quinoa', 
    ingredients: ['Quinoa', 'Cucumber', 'Tomatoes', 'Kalamata Olives', 'Feta Cheese'], 
    calories: 360, 
    instructions: '1. Cook quinoa and mix with diced cucumber, tomatoes, kalamata olives, and crumbled feta cheese.' 
  },
  { 
    recipe: 'Sweet Potato and Black Bean Burrito', 
    ingredients: ['Sweet Potatoes', 'Black Beans', 'Brown Rice', 'Salsa', 'Whole Wheat Tortilla'], 
    calories: 380, 
    instructions: '1. Bake sweet potatoes and mix with black beans and brown rice.<br>2. Assemble in a whole wheat tortilla with salsa.' 
  },
  { 
    recipe: 'Mediterranean Chickpea Salad', 
    ingredients: ['Chickpeas', 'Cherry Tomatoes', 'Cucumber', 'Red Onion', 'Feta Cheese'], 
    calories: 350, 
    instructions: '1. Mix chickpeas, halved cherry tomatoes, diced cucumber, red onion, and crumbled feta cheese.<br>2. Toss with olive oil and lemon juice.' 
  },
  { 
    recipe: 'Chicken and Vegetable Curry with Basmati Rice', 
    ingredients: ['Chicken Thighs', 'Mixed Vegetables', 'Coconut Milk', 'Curry Paste', 'Basmati Rice'], 
    calories: 400, 
    instructions: '1. Cook chicken thighs, mixed vegetables, coconut milk, and curry paste in a pot.<br>2. Serve over cooked basmati rice.' 
  },
  { 
    recipe: 'Vegetarian Burrito Bowl', 
    ingredients: ['Black Beans', 'Corn', 'Avocado', 'Tomatoes', 'Brown Rice'], 
    calories: 370, 
    instructions: '1. Mix black beans, corn, diced avocado, and chopped tomatoes.<br>2. Serve over cooked brown rice.' 
  },
  { 
    recipe: 'Shrimp and Avocado Salad', 
    ingredients: ['Shrimp', 'Avocado', 'Mixed Greens', 'Cherry Tomatoes', 'Lemon'], 
    calories: 410, 
    instructions: '1. Grill shrimp and arrange on a bed of mixed greens with sliced avocado and halved cherry tomatoes.<br>2. Drizzle with lemon juice.' 
  },
  { 
    recipe: 'Spinach and Feta Stuffed Chicken Breast', 
    ingredients: ['Chicken Breast', 'Spinach', 'Feta Cheese', 'Garlic', 'Olive Oil'], 
    calories: 360, 
    instructions: '1. Butterfly chicken breast and stuff with sautéed spinach, crumbled feta cheese, and minced garlic.<br>2. Drizzle with olive oil and bake until chicken is cooked through.' 
  },{ 
    recipe: 'Crispy Tofu and Vegetable Stir-Fry', 
    ingredients: ['Tofu', 'Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce'], 
    calories: 360, 
    instructions: '1. Sauté crispy tofu, broccoli, carrots, and bell peppers in soy sauce.<br>2. Cook until vegetables are tender.' 
  },
  { 
    recipe: 'Mango and Shrimp Spring Rolls', 
    ingredients: ['Shrimp', 'Rice Paper Wrappers', 'Mango', 'Rice Noodles', 'Mint'], 
    calories: 320, 
    instructions: '1. Cook shrimp and rice noodles.<br>2. Soften rice paper wrappers in warm water.<br>3. Assemble with shrimp, mango slices, rice noodles, and mint.<br>4. Roll tightly and serve.' 
  },
  { 
    recipe: 'Chickpea and Spinach Stuffed Mushrooms', 
    ingredients: ['Mushrooms', 'Chickpeas', 'Spinach', 'Garlic', 'Olive Oil'], 
    calories: 340, 
    instructions: '1. Remove stems from mushrooms and set aside.<br>2. Sauté chickpeas, spinach, and garlic in olive oil.<br>3. Stuff mushrooms with the mixture and bake until mushrooms are tender.' 
  },
  { 
    recipe: 'Veggie Pita Sandwich', 
    ingredients: ['Whole Wheat Pita Bread', 'Hummus', 'Cucumber', 'Tomato', 'Lettuce'], 
    calories: 330, 
    instructions: '1. Cut pita bread in half.<br>2. Spread hummus inside each half.<br>3. Fill with sliced cucumber, tomato, and lettuce.' 
  },
  { 
    recipe: 'Spicy Black Bean and Corn Salad', 
    ingredients: ['Black Beans', 'Corn', 'Red Onion', 'Cherry Tomatoes', 'Cilantro'], 
    calories: 350, 
    instructions: '1. Mix black beans, corn, diced red onion, halved cherry tomatoes, and chopped cilantro.<br>2. Add a touch of spice with your favorite hot sauce.' 
  },
  { 
    recipe: 'Pumpkin and Lentil Soup', 
    ingredients: ['Lentils', 'Pumpkin Puree', 'Carrots', 'Onions', 'Vegetable Broth'], 
    calories: 320, 
    instructions: '1. Cook lentils, pumpkin puree, carrots, and onions in vegetable broth.<br>2. Simmer until vegetables and lentils are tender.' 
  },
  { 
    recipe: 'Chicken and Quinoa Stuffed Bell Peppers', 
    ingredients: ['Bell Peppers', 'Ground Chicken', 'Quinoa', 'Tomato Sauce', 'Cheese'], 
    calories: 370, 
    instructions: '1. Cut bell peppers in half and remove seeds.<br>2. Cook ground chicken, quinoa, and tomato sauce.<br>3. Stuff bell peppers with the mixture, top with cheese, and bake until peppers are tender.' 
  },
  { 
    recipe: 'Broccoli and Cheddar Baked Potatoes', 
    ingredients: ['Potatoes', 'Broccoli', 'Cheddar Cheese', 'Greek Yogurt', 'Chives'], 
    calories: 340, 
    instructions: '1. Bake potatoes until tender.<br>2. Steam broccoli and mix with shredded cheddar cheese.<br>3. Cut open potatoes, fluff with a fork, and top with the broccoli and cheddar mixture.<br>4. Garnish with a dollop of Greek yogurt and chopped chives.' 
  },
  { 
    recipe: 'Tuna Salad Lettuce Wraps', 
    ingredients: ['Canned Tuna', 'Greek Yogurt', 'Celery', 'Dill', 'Lettuce'], 
    calories: 320, 
    instructions: '1. Mix canned tuna with Greek yogurt, diced celery, and chopped dill.<br>2. Spoon the mixture onto lettuce leaves and wrap.' 
  },
  { 
    recipe: 'Eggplant and Tomato Panini', 
    ingredients: ['Eggplant', 'Tomato', 'Mozzarella Cheese', 'Basil', 'Whole Wheat Bread'], 
    calories: 360, 
    instructions: '1. Grill slices of eggplant and tomato.<br>2. Assemble in a panini with mozzarella cheese, basil, and whole wheat bread.<br>3. Grill until bread is toasted and cheese is melted.' 
  },
  { 
    recipe: 'Asian Quinoa Salad', 
    ingredients: ['Quinoa', 'Edamame', 'Red Cabbage', 'Carrots', 'Sesame Ginger Dressing'], 
    calories: 330, 
    instructions: '1. Cook quinoa and mix with edamame, shredded red cabbage, and julienned carrots.<br>2. Toss with sesame ginger dressing.' 
  },
  { 
    recipe: 'Caprese Pasta Salad', 
    ingredients: ['Whole Wheat Pasta', 'Cherry Tomatoes', 'Fresh Mozzarella', 'Basil', 'Balsamic Vinaigrette'], 
    calories: 350, 
    instructions: '1. Cook whole wheat pasta and toss with halved cherry tomatoes, fresh mozzarella balls, and chopped basil.<br>2. Drizzle with balsamic vinaigrette.' 
  },
  { 
    recipe: 'Vegetarian Nachos', 
    ingredients: ['Tortilla Chips', 'Black Beans', 'Corn', 'Salsa', 'Guacamole'], 
    calories: 340, 
    instructions: '1. Arrange tortilla chips on a baking sheet.<br>2. Top with black beans, corn, salsa, and guacamole.<br>3. Bake until ingredients are heated through.' 
  },
  { 
    recipe: 'Lemon Garlic Shrimp and Zoodles', 
    ingredients: ['Shrimp', 'Zucchini', 'Cherry Tomatoes', 'Lemon', 'Garlic'], 
    calories: 380, 
    instructions: '1. Sauté shrimp, zucchini noodles, cherry tomatoes, lemon juice, and minced garlic.<br>2. Cook until shrimp is opaque and zoodles are tender.' 
  },
  { 
    recipe: 'Quinoa and Black Bean Stuffed Peppers', 
    ingredients: ['Bell Peppers', 'Quinoa', 'Black Beans', 'Corn', 'Salsa'], 
    calories: 360, 
    instructions: '1. Cut bell peppers in half and remove seeds.<br>2. Cook quinoa and mix with black beans, corn, and salsa.<br>3. Stuff bell peppers with the quinoa mixture and bake until peppers are tender.' 
  },
  { 
    recipe: 'Spinach and Artichoke Quesadilla', 
    ingredients: ['Spinach', 'Artichoke Hearts', 'Whole Wheat Tortilla', 'Cheese'], 
    calories: 370, 
    instructions: '1. Sauté spinach and artichoke hearts.<br>2. Assemble in a whole wheat tortilla with cheese and cook until cheese is melted.' 
  },
  { 
    recipe: 'BBQ Chickpea and Veggie Skewers', 
    ingredients: ['Chickpeas', 'Bell Peppers', 'Zucchini', 'Red Onion', 'BBQ Sauce'], 
    calories: 390, 
    instructions: '1. Thread chickpeas, bell peppers, zucchini, and red onion onto skewers.<br>2. Grill until vegetables are tender and chickpeas are coated with BBQ sauce.' 
  },
  { 
    recipe: 'Greek Chicken Salad Wrap', 
    ingredients: ['Grilled Chicken', 'Lettuce', 'Cucumber', 'Tomatoes', 'Tzatziki Sauce'], 
    calories: 360, 
    instructions: '1. Grill chicken and slice.<br>2. Assemble in a whole wheat wrap with lettuce, cucumber, tomatoes, and tzatziki sauce.' 
  },
  { 
    recipe: 'Sweet Potato and Kale Buddha Bowl', 
    ingredients: ['Sweet Potatoes', 'Kale', 'Quinoa', 'Chickpeas', 'Tahini Sauce'], 
    calories: 380, 
    instructions: '1. Roast sweet potatoes and chickpeas.<br>2. Cook quinoa and sauté kale.<br>3. Assemble in a bowl and drizzle with tahini sauce.' 
  },
  { 
    recipe: 'Mango and Avocado Chicken Salad', 
    ingredients: ['Grilled Chicken', 'Mango', 'Avocado', 'Mixed Greens', 'Balsamic Vinaigrette'], 
    calories: 410, 
    instructions: '1. Grill chicken and slice.<br>2. Arrange on a bed of mixed greens with sliced mango and avocado.<br>3. Drizzle with balsamic vinaigrette.' 
  },
  { 
    recipe: 'Tomato Basil Chickpea Pasta', 
    ingredients: ['Chickpea Pasta', 'Cherry Tomatoes', 'Basil', 'Parmesan Cheese', 'Olive Oil'], 
    calories: 350, 
    instructions: '1. Cook chickpea pasta and toss with halved cherry tomatoes, chopped basil, grated Parmesan cheese, and olive oil.' 
  },
  { 
    recipe: 'Egg Salad and Avocado Wrap', 
    ingredients: ['Eggs', 'Avocado', 'Lettuce', 'Whole Wheat Wrap', 'Mustard'], 
    calories: 330, 
    instructions: '1. Hard boil eggs and chop.<br>2. Mash avocado.<br>3. Mix eggs with mashed avocado and spread in a whole wheat wrap with lettuce.<br>4. Add a touch of mustard.' 
  }, { 
    recipe: 'Mediterranean Quinoa Bowl', 
    ingredients: ['Quinoa', 'Cherry Tomatoes', 'Cucumber', 'Kalamata Olives', 'Feta Cheese'], 
    calories: 360, 
    instructions: '1. Cook quinoa and mix with halved cherry tomatoes, diced cucumber, kalamata olives, and crumbled feta cheese.' 
  },
  { 
    recipe: 'Chicken and Broccoli Alfredo Pasta', 
    ingredients: ['Chicken Breast', 'Broccoli', 'Fettuccine Pasta', 'Alfredo Sauce', 'Parmesan Cheese'], 
    calories: 400, 
    instructions: '1. Grill chicken and slice.<br>2. Steam broccoli.<br>3. Cook fettuccine pasta and toss with Alfredo sauce, grilled chicken, steamed broccoli, and grated Parmesan cheese.' 
  },
  { 
    recipe: 'Caprese Avocado Toast', 
    ingredients: ['Whole Grain Bread', 'Avocado', 'Tomato', 'Fresh Mozzarella', 'Balsamic Glaze'], 
    calories: 340, 
    instructions: '1. Toast whole grain bread.<br>2. Mash avocado and spread on toast.<br>3. Top with sliced tomato, fresh mozzarella, and a drizzle of balsamic glaze.' 
  },
  { 
    recipe: 'Turkey and Cranberry Wrap', 
    ingredients: ['Turkey Breast', 'Cranberry Sauce', 'Lettuce', 'Whole Wheat Wrap', 'Cream Cheese'], 
    calories: 330, 
    instructions: '1. Slice turkey breast.<br>2. Assemble in a whole wheat wrap with cranberry sauce, lettuce, and a smear of cream cheese.' 
  },
  { 
    recipe: 'Vegetarian Lentil Soup', 
    ingredients: ['Lentils', 'Carrots', 'Celery', 'Onions', 'Vegetable Broth'], 
    calories: 320, 
    instructions: '1. Cook lentils, carrots, celery, and onions in vegetable broth.<br>2. Simmer until vegetables and lentils are tender.' 
  },
  { 
    recipe: 'Shrimp and Pineapple Fried Rice', 
    ingredients: ['Shrimp', 'Pineapple', 'Rice', 'Peas', 'Soy Sauce'], 
    calories: 370, 
    instructions: '1. Cook shrimp and set aside.<br>2. Stir-fry cooked rice with diced pineapple, peas, and soy sauce.<br>3. Add cooked shrimp and mix until heated through.' 
  },
  { 
    recipe: 'Avocado and Black Bean Wrap', 
    ingredients: ['Black Beans', 'Avocado', 'Tomato', 'Lettuce', 'Whole Wheat Wrap'], 
    calories: 350, 
    instructions: '1. Mix black beans with diced avocado, tomato, and lettuce.<br>2. Assemble in a whole wheat wrap.' 
  },
  { 
    recipe: 'Teriyaki Tofu Bowl', 
    ingredients: ['Tofu', 'Broccoli', 'Carrots', 'Brown Rice', 'Teriyaki Sauce'], 
    calories: 360, 
    instructions: '1. Sauté tofu, broccoli, and carrots in teriyaki sauce.<br>2. Serve over cooked brown rice.' 
  },
  { 
    recipe: 'Chicken and Pesto Panini', 
    ingredients: ['Grilled Chicken', 'Pesto', 'Tomato', 'Mozzarella Cheese', 'Ciabatta Bread'], 
    calories: 380, 
    instructions: '1. Grill chicken and slice.<br>2. Spread pesto on ciabatta bread.<br>3. Assemble in a panini with grilled chicken, sliced tomato, and mozzarella cheese.<br>4. Grill until bread is toasted and cheese is melted.' 
  },
  { 
    recipe: 'Mango and Chicken Lettuce Wraps', 
    ingredients: ['Grilled Chicken', 'Mango', 'Lettuce Leaves', 'Cilantro', 'Lime'], 
    calories: 340, 
    instructions: '1. Grill chicken and slice.<br>2. Assemble in lettuce leaves with diced mango, cilantro, and a squeeze of lime.' 
  },
  { 
    recipe: 'Italian Farro Salad', 
    ingredients: ['Farro', 'Cherry Tomatoes', 'Cucumber', 'Feta Cheese', 'Basil'], 
    calories: 350, 
    instructions: '1. Cook farro and mix with halved cherry tomatoes, diced cucumber, crumbled feta cheese, and chopped basil.' 
  },
  { 
    recipe: 'Hummus and Veggie Wrap', 
    ingredients: ['Whole Wheat Wrap', 'Hummus', 'Cucumber', 'Carrots', 'Bell Peppers'], 
    calories: 330, 
    instructions: '1. Spread hummus on a whole wheat wrap.<br>2. Fill with sliced cucumber, shredded carrots, and diced bell peppers.' 
  },
  { 
    recipe: 'Salmon and Asparagus Quinoa Bowl', 
    ingredients: ['Salmon Fillet', 'Quinoa', 'Asparagus', 'Lemon', 'Dill'], 
    calories: 390, 
    instructions: '1. Grill salmon fillet and cook quinoa.<br>2. Arrange in a bowl with grilled asparagus.<br>3. Drizzle with lemon juice and sprinkle with dill.' 
  },
  { 
    recipe: 'Chickpea and Vegetable Ratatouille', 
    ingredients: ['Chickpeas', 'Eggplant', 'Zucchini', 'Bell Peppers', 'Tomato Sauce'], 
    calories: 360, 
    instructions: '1. Sauté chickpeas, eggplant, zucchini, and bell peppers in tomato sauce.<br>2. Simmer until vegetables are tender.' 
  },
  { 
    recipe: 'Caprese Quinoa Bowl', 
    ingredients: ['Quinoa', 'Cherry Tomatoes', 'Fresh Mozzarella', 'Basil', 'Balsamic Glaze'], 
    calories: 340, 
    instructions: '1. Cook quinoa and mix with halved cherry tomatoes, fresh mozzarella balls, and chopped basil.<br>2. Drizzle with balsamic glaze.' 
  },
  { 
    recipe: 'Peanut Tofu Noodle Stir-Fry', 
    ingredients: ['Tofu', 'Rice Noodles', 'Broccoli', 'Carrots', 'Peanut Sauce'], 
    calories: 370, 
    instructions: '1. Sauté tofu, rice noodles, broccoli, and carrots in peanut sauce.<br>2. Cook until vegetables are tender.' 
  },
  { 
    recipe: 'Turkey and Quinoa Stuffed Peppers', 
    ingredients: ['Bell Peppers', 'Ground Turkey', 'Quinoa', 'Tomato Sauce', 'Cheese'], 
    calories: 380, 
    instructions: '1. Cut bell peppers in half and remove seeds.<br>2. Cook ground turkey, quinoa, and tomato sauce.<br>3. Stuff bell peppers with the mixture, top with cheese, and bake until peppers are tender.' 
  },
  { 
    recipe: 'Mushroom and Spinach Omelette', 
    ingredients: ['Eggs', 'Mushrooms', 'Spinach', 'Cheese', 'Olive Oil'], 
    calories: 350, 
    instructions: '1. Sauté mushrooms and spinach in olive oil.<br>2. Pour beaten eggs over the vegetables and cook until set.<br>3. Fold in half and sprinkle with cheese.' 
  },
  { 
    recipe: 'Vegan Lentil Sloppy Joes', 
    ingredients: ['Lentils', 'Tomato Sauce', 'Onions', 'Bell Peppers', 'Whole Wheat Buns'], 
    calories: 360, 
    instructions: '1. Cook lentils, tomato sauce, onions, and bell peppers in a skillet.<br>2. Spoon the mixture onto whole wheat buns.' 
  },
  { 
    recipe: 'Cauliflower and Chickpea Curry', 
    ingredients: ['Cauliflower', 'Chickpeas', 'Coconut Milk', 'Curry Powder', 'Basmati Rice'], 
    calories: 390, 
    instructions: '1. Sauté cauliflower and chickpeas in curry powder.<br>2. Add coconut milk and simmer until vegetables are tender.<br>3. Serve over cooked basmati rice.' 
  },{ 
    recipe: 'Shrimp and Avocado Salad', 
    ingredients: ['Shrimp', 'Avocado', 'Mixed Greens', 'Cherry Tomatoes', 'Lemon Vinaigrette'], 
    calories: 350, 
    instructions: '1. Cook shrimp and let them cool.<br>2. Arrange mixed greens on a plate.<br>3. Top with sliced avocado, cooked shrimp, halved cherry tomatoes, and drizzle with lemon vinaigrette.' 
  },
  { 
    recipe: 'Miso Glazed Salmon Bowl', 
    ingredients: ['Salmon Fillet', 'Brown Rice', 'Broccoli', 'Carrots', 'Miso Glaze'], 
    calories: 380, 
    instructions: '1. Grill salmon fillet and cook brown rice.<br>2. Sauté broccoli and carrots.<br>3. Assemble in a bowl and drizzle with miso glaze.' 
  },
  { 
    recipe: 'Chickpea Caesar Salad Wrap', 
    ingredients: ['Chickpeas', 'Romaine Lettuce', 'Parmesan Cheese', 'Whole Wheat Wrap', 'Caesar Dressing'], 
    calories: 340, 
    instructions: '1. Roast chickpeas until crispy.<br>2. Assemble in a whole wheat wrap with chopped romaine lettuce, shaved Parmesan cheese, and Caesar dressing.' 
  },
  { 
    recipe: 'Vegetarian Sushi Bowl', 
    ingredients: ['Sushi Rice', 'Avocado', 'Cucumber', 'Carrots', 'Edamame'], 
    calories: 320, 
    instructions: '1. Cook sushi rice and let it cool.<br>2. Arrange in a bowl with sliced avocado, diced cucumber, julienne carrots, and edamame.' 
  },
  { 
    recipe: 'Italian Chicken Pasta Salad', 
    ingredients: ['Grilled Chicken', 'Rotini Pasta', 'Cherry Tomatoes', 'Olives', 'Italian Dressing'], 
    calories: 370, 
    instructions: '1. Grill chicken and slice.<br>2. Cook rotini pasta and toss with halved cherry tomatoes, sliced olives, and Italian dressing.' 
  },
  { 
    recipe: 'Veggie and Hummus Wrap', 
    ingredients: ['Whole Wheat Wrap', 'Hummus', 'Cucumber', 'Carrots', 'Spinach'], 
    calories: 330, 
    instructions: '1. Spread hummus on a whole wheat wrap.<br>2. Fill with sliced cucumber, shredded carrots, and spinach.' 
  },
  { 
    recipe: 'Quinoa and Vegetable Stuffed Acorn Squash', 
    ingredients: ['Acorn Squash', 'Quinoa', 'Bell Peppers', 'Onions', 'Tomato Sauce'], 
    calories: 360, 
    instructions: '1. Cut acorn squash in half and remove seeds.<br>2. Cook quinoa and mix with diced bell peppers, onions, and tomato sauce.<br>3. Stuff acorn squash halves with the quinoa mixture and bake until squash is tender.' 
  },
  { 
    recipe: 'Pesto Zucchini Noodles with Cherry Tomatoes', 
    ingredients: ['Zucchini', 'Cherry Tomatoes', 'Pesto', 'Parmesan Cheese', 'Pine Nuts'], 
    calories: 340, 
    instructions: '1. Spiralize zucchini into noodles.<br>2. Sauté zucchini noodles with halved cherry tomatoes in pesto.<br>3. Top with grated Parmesan cheese and pine nuts.' 
  },
  { 
    recipe: 'Moroccan Chickpea and Couscous Salad', 
    ingredients: ['Chickpeas', 'Couscous', 'Cucumber', 'Dried Apricots', 'Moroccan Spice Blend'], 
    calories: 350, 
    instructions: '1. Cook couscous and let it cool.<br>2. Mix with chickpeas, diced cucumber, chopped dried apricots, and a Moroccan spice blend.' 
  },
  { 
    recipe: 'Teriyaki Mushroom and Tofu Bowl', 
    ingredients: ['Tofu', 'Mushrooms', 'Broccoli', 'Brown Rice', 'Teriyaki Sauce'], 
    calories: 370, 
    instructions: '1. Sauté tofu, mushrooms, and broccoli in teriyaki sauce.<br>2. Serve over cooked brown rice.' 
  },
  { 
    recipe: 'Tomato Basil Mozzarella Sandwich', 
    ingredients: ['Whole Grain Bread', 'Tomato', 'Fresh Mozzarella', 'Basil', 'Balsamic Glaze'], 
    calories: 330, 
    instructions: '1. Toast whole grain bread.<br>2. Assemble with sliced tomato, fresh mozzarella, and basil.<br>3. Drizzle with balsamic glaze.' 
  },
  { 
    recipe: 'Lentil and Vegetable Curry', 
    ingredients: ['Lentils', 'Bell Peppers', 'Zucchini', 'Coconut Milk', 'Curry Powder'], 
    calories: 360, 
    instructions: '1. Cook lentils, bell peppers, and zucchini in coconut milk and curry powder.<br>2. Simmer until vegetables are tender.' 
  },
  { 
    recipe: 'Mushroom and Spinach Quesadilla', 
    ingredients: ['Mushrooms', 'Spinach', 'Whole Wheat Tortilla', 'Cheese'], 
    calories: 340, 
    instructions: '1. Sauté mushrooms and spinach.<br>2. Assemble in a whole wheat tortilla with cheese and cook until cheese is melted.' 
  },
  { 
    recipe: 'Cranberry Walnut Chicken Salad', 
    ingredients: ['Grilled Chicken', 'Mixed Greens', 'Cranberries', 'Walnuts', 'Balsamic Vinaigrette'], 
    calories: 380, 
    instructions: '1. Grill chicken and slice.<br>2. Arrange on a bed of mixed greens with dried cranberries, chopped walnuts, and drizzle with balsamic vinaigrette.' 
  },
  { 
    recipe: 'Sesame Ginger Tofu Bowl', 
    ingredients: ['Tofu', 'Brown Rice', 'Broccoli', 'Carrots', 'Sesame Ginger Sauce'], 
    calories: 350, 
    instructions: '1. Sauté tofu, broccoli, and carrots in sesame ginger sauce.<br>2. Serve over cooked brown rice.' 
  },
  { 
    recipe: 'Greek Orzo Salad', 
    ingredients: ['Orzo Pasta', 'Cucumber', 'Kalamata Olives', 'Feta Cheese', 'Greek Dressing'], 
    calories: 330, 
    instructions: '1. Cook orzo pasta and let it cool.<br>2. Mix with diced cucumber, halved kalamata olives, crumbled feta cheese, and Greek dressing.' 
  },
  { 
    recipe: 'Vegan Chickpea and Spinach Stew', 
    ingredients: ['Chickpeas', 'Spinach', 'Tomatoes', 'Onions', 'Vegetable Broth'], 
    calories: 340, 
    instructions: '1. Cook chickpeas, spinach, tomatoes, and onions in vegetable broth.<br>2. Simmer until flavors meld together.' 
  },
  { 
    recipe: 'Eggplant Parmesan Sandwich', 
    ingredients: ['Eggplant', 'Whole Grain Bread', 'Tomato Sauce', 'Mozzarella Cheese', 'Basil'], 
    calories: 360, 
    instructions: '1. Bread and bake eggplant slices until golden.<br>2. Assemble in whole grain bread with tomato sauce, mozzarella cheese, and basil.<br>3. Bake until cheese is melted.' 
  },
  { 
    recipe: 'Asian Inspired Quinoa Bowl', 
    ingredients: ['Quinoa', 'Edamame', 'Carrots', 'Cabbage', 'Soy Ginger Dressing'], 
    calories: 370, 
    instructions: '1. Cook quinoa and let it cool.<br>2. Mix with edamame, shredded carrots, shredded cabbage, and toss with soy ginger dressing.' 
  },
  { 
    recipe: 'Black Bean and Corn Quesadilla', 
    ingredients: ['Black Beans', 'Corn', 'Whole Wheat Tortilla', 'Cheese', 'Salsa'], 
    calories: 350, 
    instructions: '1. Mix black beans and corn.<br>2. Assemble in a whole wheat tortilla with cheese and cook until cheese is melted.<br>3. Serve with salsa.' 
  },
  { 
    recipe: 'Pesto Chicken and Sun-Dried Tomato Wrap', 
    ingredients: ['Grilled Chicken', 'Pesto', 'Sun-Dried Tomatoes', 'Lettuce', 'Whole Wheat Wrap'], 
    calories: 340, 
    instructions: '1. Grill chicken and slice.<br>2. Spread pesto on a whole wheat wrap.<br>3. Assemble with grilled chicken, sun-dried tomatoes, and lettuce.' 
  },
  { 
    recipe: 'Southwest Quinoa Salad', 
    ingredients: ['Quinoa', 'Black Beans', 'Corn', 'Avocado', 'Cilantro Lime Dressing'], 
    calories: 360, 
    instructions: '1. Cook quinoa and let it cool.<br>2. Mix with black beans, corn, diced avocado, and toss with cilantro lime dressing.' 
  },
  { 
    recipe: 'Smashed Chickpea Salad Sandwich', 
    ingredients: ['Chickpeas', 'Celery', 'Red Onion', 'Vegan Mayonnaise', 'Whole Grain Bread'], 
    calories: 320, 
    instructions: '1. Mash chickpeas and mix with diced celery, red onion, and vegan mayonnaise.<br>2. Spread on whole grain bread.' 
  },
  { 
    recipe: 'Mango Basil Chicken Lettuce Wraps', 
    ingredients: ['Grilled Chicken', 'Mango', 'Basil', 'Lettuce Leaves', 'Sweet Chili Sauce'], 
    calories: 350, 
    instructions: '1. Grill chicken and slice.<br>2. Assemble in lettuce leaves with diced mango, chopped basil, and drizzle with sweet chili sauce.' 
  },
  { 
    recipe: 'Spinach and Feta Stuffed Portobello Mushrooms', 
    ingredients: ['Portobello Mushrooms', 'Spinach', 'Feta Cheese', 'Garlic', 'Olive Oil'], 
    calories: 330, 
    instructions: '1. Clean Portobello mushrooms and remove stems.<br>2. Sauté spinach with garlic in olive oil.<br>3. Stuff mushrooms with the sautéed spinach and crumbled feta cheese.<br>4. Bake until mushrooms are tender.' 
  },
  { 
    recipe: 'Asian Noodle Salad with Peanut Sauce', 
    ingredients: ['Rice Noodles', 'Cucumber', 'Carrots', 'Edamame', 'Peanut Sauce'], 
    calories: 370, 
    instructions: '1. Cook rice noodles and let them cool.<br>2. Toss with sliced cucumber, shredded carrots, edamame, and peanut sauce.' 
  },
  { 
    recipe: 'Caprese Chicken Panini', 
    ingredients: ['Grilled Chicken', 'Tomato', 'Fresh Mozzarella', 'Basil', 'Ciabatta Bread'], 
    calories: 380, 
    instructions: '1. Grill chicken and slice.<br>2. Assemble in a panini with sliced tomato, fresh mozzarella, and basil.<br>3. Grill until bread is toasted and cheese is melted.' 
  },
  { 
    recipe: 'Chickpea and Avocado Salad', 
    ingredients: ['Chickpeas', 'Avocado', 'Tomato', 'Cilantro', 'Lime Juice'], 
    calories: 340, 
    instructions: '1. Mix chickpeas with diced avocado, tomato, chopped cilantro, and lime juice.' 
  },
  { 
    recipe: 'Tomato Basil Pesto Pasta', 
    ingredients: ['Whole Wheat Pasta', 'Cherry Tomatoes', 'Basil Pesto', 'Parmesan Cheese', 'Olive Oil'], 
    calories: 350, 
    instructions: '1. Cook whole wheat pasta and toss with halved cherry tomatoes, basil pesto, grated Parmesan cheese, and olive oil.' 
  },
  { 
    recipe: 'Mediterranean Chickpea Salad', 
    ingredients: ['Chickpeas', 'Cucumber', 'Kalamata Olives', 'Red Onion', 'Greek Dressing'], 
    calories: 330, 
    instructions: '1. Mix chickpeas with diced cucumber, halved kalamata olives, diced red onion, and toss with Greek dressing.' 
  },
  { 
    recipe: 'Teriyaki Salmon Bowl', 
    ingredients: ['Salmon Fillet', 'Brown Rice', 'Broccoli', 'Carrots', 'Teriyaki Sauce'], 
    calories: 360, 
    instructions: '1. Grill salmon fillet and cook brown rice.<br>2. Sauté broccoli and carrots.<br>3. Assemble in a bowl and drizzle with teriyaki sauce.' 
  },
  { 
    recipe: 'Spicy Black Bean and Corn Salad', 
    ingredients: ['Black Beans', 'Corn', 'Red Bell Pepper', 'Cilantro', 'Lime Vinaigrette'], 
    calories: 340, 
    instructions: '1. Mix black beans with corn, diced red bell pepper, chopped cilantro, and toss with lime vinaigrette.' 
  },
  { 
    recipe: 'Thai Basil Eggplant Stir-Fry', 
    ingredients: ['Eggplant', 'Tofu', 'Bell Peppers', 'Thai Basil', 'Soy Sauce'], 
    calories: 370, 
    instructions: '1. Sauté eggplant, tofu, and bell peppers in soy sauce.<br>2. Add Thai basil and stir-fry until everything is cooked through.' 
  },
  { 
    recipe: 'Roasted Vegetable and Hummus Wrap', 
    ingredients: ['Whole Wheat Wrap', 'Hummus', 'Zucchini', 'Bell Peppers', 'Red Onion'], 
    calories: 350, 
    instructions: '1. Roast zucchini, bell peppers, and red onion.<br>2. Spread hummus on a whole wheat wrap.<br>3. Fill with the roasted vegetables.' 
  },
  { 
    recipe: 'Blackened Chicken Caesar Salad', 
    ingredients: ['Blackened Chicken Breast', 'Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'], 
    calories: 380, 
    instructions: '1. Blacken chicken breast and slice.<br>2. Toss with chopped romaine lettuce, croutons, shaved Parmesan cheese, and Caesar dressing.' 
  },
  { 
    recipe: 'Mushroom and Kale Farro Risotto', 
    ingredients: ['Farro', 'Mushrooms', 'Kale', 'Parmesan Cheese', 'Vegetable Broth'], 
    calories: 340, 
    instructions: '1. Cook farro in vegetable broth until tender.<br>2. Sauté mushrooms and kale.<br>3. Mix the cooked farro with sautéed mushrooms, kale, and grated Parmesan cheese.' 
  },
  { 
    recipe: 'Peach and Goat Cheese Salad', 
    ingredients: ['Mixed Greens', 'Peach', 'Goat Cheese', 'Walnuts', 'Balsamic Vinaigrette'], 
    calories: 330, 
    instructions: '1. Toss mixed greens with sliced peaches, crumbled goat cheese, chopped walnuts, and drizzle with balsamic vinaigrette.' 
  },
  { 
    recipe: 'Moroccan Couscous Stuffed Bell Peppers', 
    ingredients: ['Bell Peppers', 'Couscous', 'Chickpeas', 'Apricots', 'Moroccan Spice Blend'], 
    calories: 360, 
    instructions: '1. Cut bell peppers in half and remove seeds.<br>2. Cook couscous and mix with chickpeas, diced apricots, and Moroccan spice blend.<br>3. Stuff bell peppers with the couscous mixture and bake until peppers are tender.' 
  },
  { 
    recipe: 'Lemon Garlic Shrimp Pasta', 
    ingredients: ['Shrimp', 'Whole Wheat Pasta', 'Broccoli', 'Lemon', 'Garlic'], 
    calories: 350, 
    instructions: '1. Cook whole wheat pasta and steam broccoli.<br>2. Sauté shrimp with lemon and garlic.<br>3. Toss pasta and broccoli with the cooked shrimp.' 
  },
  { 
    recipe: 'Korean BBQ Tofu Bowl', 
    ingredients: ['Tofu', 'Brown Rice', 'Broccoli', 'Carrots', 'Korean BBQ Sauce'], 
    calories: 370, 
    instructions: '1. Sauté tofu, broccoli, and carrots in Korean BBQ sauce.<br>2. Serve over cooked brown rice.' 
  },
  { 
    recipe: 'Caprese Orzo Salad', 
    ingredients: ['Orzo Pasta', 'Cherry Tomatoes', 'Fresh Mozzarella', 'Basil', 'Balsamic Glaze'], 
    calories: 340, 
    instructions: '1. Cook orzo pasta and let it cool.<br>2. Mix with halved cherry tomatoes, fresh mozzarella balls, and chopped basil.<br>3. Drizzle with balsamic glaze.' 
  },
  { 
    recipe: 'Vegan Mediterranean Wrap', 
    ingredients: ['Whole Wheat Wrap', 'Hummus', 'Cucumber', 'Tomato', 'Kalamata Olives'], 
    calories: 330, 
    instructions: '1. Spread hummus on a whole wheat wrap.<br>2. Fill with sliced cucumber, tomato, and kalamata olives.' 
  }
];
const dinnerItems = [
  { 
    recipe: 'Grilled Chicken Caesar Wrap', 
    ingredients: ['Grilled Chicken', 'Romaine Lettuce', 'Parmesan Cheese', 'Caesar Dressing', 'Whole Wheat Wrap'], 
    calories: 400, 
    instructions: '1. Grill the chicken and slice it.<br>2. Assemble with lettuce, Parmesan, and Caesar dressing in a whole wheat wrap.' 
  },
  { 
    recipe: 'Vegetable Tikki Burger', 
    ingredients: ['Vegetable Patties', 'Buns', 'Lettuce', 'Tomato', 'Mayonnaise'], 
    calories: 350, 
    instructions: '1. Cook vegetable patties as per instructions.<br>2. Assemble with lettuce, tomato, and mayonnaise in a burger bun.' 
  },
  { 
    recipe: 'Lemon Garlic Shrimp Scampi', 
    ingredients: ['Shrimp', 'Linguine Pasta', 'Garlic', 'Lemon', 'Butter'], 
    calories: 380, 
    instructions: '1. Cook linguine pasta.<br>2. Sauté shrimp with garlic, lemon, and butter. Toss with pasta.' 
  },
  { 
    recipe: 'Caprese Stuffed Chicken Breast', 
    ingredients: ['Chicken Breast', 'Tomato', 'Mozzarella Cheese', 'Basil', 'Balsamic Glaze'], 
    calories: 370, 
    instructions: '1. Slice a pocket into chicken breasts.<br>2. Stuff with tomato, mozzarella, and basil. Bake until cooked.<br>3. Drizzle with balsamic glaze.' 
  },
  { 
    recipe: 'Spaghetti Carbonara', 
    ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'], 
    calories: 410, 
    instructions: '1. Cook spaghetti.<br>2. Sauté bacon.<br>3. Mix eggs, Parmesan, and black pepper. Toss with cooked spaghetti.' 
  },
  { 
    recipe: 'Mediterranean Quinoa Salad', 
    ingredients: ['Quinoa', 'Cucumber', 'Tomato', 'Olives', 'Feta Cheese'], 
    calories: 340, 
    instructions: '1. Cook quinoa.<br>2. Mix with diced cucumber, tomato, olives, and feta cheese.' 
  },
  { 
    recipe: 'Honey Sesame Glazed Chicken', 
    ingredients: ['Chicken Thighs', 'Soy Sauce', 'Honey', 'Sesame Seeds', 'Green Onions'], 
    calories: 390, 
    instructions: '1. Marinate chicken thighs in soy sauce and honey.<br>2. Grill until cooked.<br>3. Sprinkle with sesame seeds and chopped green onions.' 
  },
  { 
    recipe: 'Vegetarian Enchilada Casserole', 
    ingredients: ['Black Beans', 'Corn Tortillas', 'Enchilada Sauce', 'Cheese'], 
    calories: 370, 
    instructions: '1. Layer black beans, tortillas, enchilada sauce, and cheese in a baking dish.<br>2. Bake until bubbly.' 
  },
  { 
    recipe: 'Baked Zucchini with Tomato Sauce', 
    ingredients: ['Zucchini', 'Tomato Sauce', 'Mozzarella Cheese', 'Italian Herbs'], 
    calories: 360, 
    instructions: '1. Slice zucchini and layer in a baking dish.<br>2. Top with tomato sauce, mozzarella, and Italian herbs. Bake until golden.' 
  },
  { 
    recipe: 'Chickpea and Spinach Stew', 
    ingredients: ['Chickpeas', 'Spinach', 'Tomatoes', 'Spices'], 
    calories: 350, 
    instructions: '1. Cook chickpeas until tender.<br>2. Simmer with spinach, tomatoes, and spices.' 
  },
  { 
    recipe: 'Sweet Potato and Black Bean Burritos', 
    ingredients: ['Sweet Potatoes', 'Black Beans', 'Salsa', 'Cheese', 'Flour Tortillas'], 
    calories: 400, 
    instructions: '1. Roast sweet potatoes and mix with black beans, salsa, and cheese.<br>2. Roll into flour tortillas.' 
  },
  { 
    recipe: 'Teriyaki Salmon Bowl', 
    ingredients: ['Salmon', 'Teriyaki Sauce', 'Brown Rice', 'Avocado', 'Cucumber'], 
    calories: 370, 
    instructions: '1. Grill salmon with teriyaki sauce.<br>2. Serve over brown rice with sliced avocado and cucumber.' 
  },
  { 
    recipe: 'Vegetable Stir-Fry with Tofu', 
    ingredients: ['Tofu', 'Mixed Vegetables', 'Soy Sauce', 'Ginger', 'Brown Rice'], 
    calories: 360, 
    instructions: '1. Stir-fry tofu and vegetables in soy sauce and ginger.<br>2. Serve over brown rice.' 
  },
  { 
    recipe: 'Chicken and Broccoli Alfredo', 
    ingredients: ['Chicken', 'Broccoli', 'Fettuccine Pasta', 'Alfredo Sauce'], 
    calories: 400, 
    instructions: '1. Cook fettuccine pasta.<br>2. Sauté chicken and broccoli.<br>3. Mix with Alfredo sauce and toss with pasta.' 
  },
  { 
    recipe: 'Mushroom Risotto', 
    ingredients: ['Arborio Rice', 'Mushrooms', 'Parmesan Cheese', 'Broth'], 
    calories: 390, 
    instructions: '1. Sauté mushrooms and rice.<br>2. Gradually add broth and stir until creamy.<br>3. Mix in Parmesan cheese.' 
  },
  { 
    recipe: 'Cajun Shrimp Tacos', 
    ingredients: ['Shrimp', 'Cajun Spices', 'Cabbage Slaw', 'Flour Tortillas'], 
    calories: 370, 
    instructions: '1. Season shrimp with Cajun spices and grill.<br>2. Serve in flour tortillas with cabbage slaw.' 
  },
  { 
    recipe: 'Eggplant Lasagna', 
    ingredients: ['Eggplant', 'Tomato Sauce', 'Ricotta Cheese', 'Mozzarella Cheese'], 
    calories: 350, 
    instructions: '1. Slice eggplant and layer with tomato sauce, ricotta, and mozzarella. Bake until bubbly.' 
  },
  { 
    recipe: 'Sesame Ginger Tofu Bowl', 
    ingredients: ['Tofu', 'Brown Rice', 'Broccoli', 'Sesame Ginger Sauce'], 
    calories: 340, 
    instructions: '1. Grill tofu and serve over brown rice with steamed broccoli. Drizzle with sesame ginger sauce.' 
  },
  { 
    recipe: 'Mango Salsa Chicken', 
    ingredients: ['Chicken Breast', 'Mango Salsa', 'Quinoa', 'Lime'], 
    calories: 360, 
    instructions: '1. Grill chicken and top with mango salsa.<br>2. Serve over quinoa and squeeze lime on top.' 
  },
  { 
    recipe: 'Vegetable Gyoza with Soy Dipping Sauce', 
    ingredients: ['Vegetable Gyoza', 'Soy Sauce', 'Rice Vinegar', 'Green Onions'], 
    calories: 340, 
    instructions: '1. Pan-fry or steam vegetable gyoza until golden.<br>2. Mix soy sauce, rice vinegar, and chopped green onions for dipping.' 
  },
  { 
    recipe: 'Pesto Chicken Pasta', 
    ingredients: ['Chicken', 'Fettuccine Pasta', 'Pesto Sauce', 'Cherry Tomatoes', 'Parmesan Cheese'], 
    calories: 380, 
    instructions: '1. Cook fettuccine pasta.<br>2. Sauté chicken and cherry tomatoes. Toss with pesto sauce and Parmesan cheese.' 
  },
  { 
    recipe: 'Vegetarian Baked Eggplant Parmesan', 
    ingredients: ['Eggplant', 'Tomato Sauce', 'Mozzarella Cheese', 'Breadcrumbs'], 
    calories: 350, 
    instructions: '1. Dip eggplant slices in breadcrumbs and bake until golden.<br>2. Layer with tomato sauce and mozzarella cheese. Bake until bubbly.' 
  },
  { 
    recipe: 'Black Bean and Corn Quesadillas', 
    ingredients: ['Black Beans', 'Corn', 'Cheese', 'Flour Tortillas', 'Salsa'], 
    calories: 360, 
    instructions: '1. Mash black beans and mix with corn.<br>2. Spread on flour tortillas, add cheese, and fold.<br>3. Grill until cheese melts.<br>4. Serve with salsa.' 
  },
  { 
    recipe: 'Mushroom and Spinach Stuffed Bell Peppers', 
    ingredients: ['Bell Peppers', 'Mushrooms', 'Spinach', 'Quinoa', 'Cheese'], 
    calories: 370, 
    instructions: '1. Sauté mushrooms and spinach.<br>2. Mix with cooked quinoa and stuff into bell peppers.<br>3. Top with cheese and bake until peppers are tender.' 
  },
  { 
    recipe: 'Honey Mustard Glazed Salmon', 
    ingredients: ['Salmon', 'Honey Mustard Glaze', 'Asparagus', 'Lemon'], 
    calories: 400, 
    instructions: '1. Glaze salmon with honey mustard.<br>2. Roast with asparagus.<br>3. Serve with a squeeze of lemon.' 
  },
  { 
    recipe: 'Veggie-Packed Spaghetti Bolognese', 
    ingredients: ['Ground Turkey', 'Tomato Sauce', 'Carrots', 'Zucchini', 'Whole Wheat Spaghetti'], 
    calories: 380, 
    instructions: '1. Cook ground turkey with tomato sauce.<br>2. Add grated carrots and zucchini.<br>3. Serve over whole wheat spaghetti.' 
  },
  { 
    recipe: 'Sweet and Sour Tofu Stir-Fry', 
    ingredients: ['Tofu', 'Mixed Vegetables', 'Pineapple Chunks', 'Sweet and Sour Sauce', 'Brown Rice'], 
    calories: 350, 
    instructions: '1. Stir-fry tofu and vegetables.<br>2. Add pineapple chunks and sweet and sour sauce.<br>3. Serve over brown rice.' 
  },
  { 
    recipe: 'Chana Masala with Basmati Rice', 
    ingredients: ['Chickpeas', 'Tomatoes', 'Onion', 'Spices', 'Basmati Rice'], 
    calories: 360, 
    instructions: '1. Cook chickpeas with tomatoes, onions, and spices.<br>2. Serve over fluffy basmati rice.' 
  },
  { 
    recipe: 'Teriyaki Veggie Noodles', 
    ingredients: ['Udon Noodles', 'Mixed Vegetables', 'Teriyaki Sauce', 'Sesame Seeds'], 
    calories: 330, 
    instructions: '1. Cook udon noodles.<br>2. Stir-fry mixed vegetables with teriyaki sauce.<br>3. Toss with noodles and sprinkle with sesame seeds.' 
  },
  { 
    recipe: 'Mushroom and Swiss Stuffed Chicken', 
    ingredients: ['Chicken Breast', 'Mushrooms', 'Swiss Cheese', 'Herbs', 'Olive Oil'], 
    calories: 370, 
    instructions: '1. Slice a pocket into chicken breasts.<br>2. Stuff with sautéed mushrooms, Swiss cheese, and herbs.<br>3. Bake until chicken is cooked.' 
  },
  { 
    recipe: 'Quinoa and Black Bean Bowl', 
    ingredients: ['Quinoa', 'Black Beans', 'Corn', 'Avocado', 'Cilantro'], 
    calories: 340, 
    instructions: '1. Cook quinoa and mix with black beans and corn.<br>2. Top with sliced avocado and cilantro.' 
  }, { 
    recipe: 'Vegetarian Mediterranean Stuffed Zucchini', 
    ingredients: ['Zucchini', 'Quinoa', 'Chickpeas', 'Tomatoes', 'Feta Cheese'], 
    calories: 360, 
    instructions: '1. Halve zucchinis and scoop out the seeds.<br>2. Cook quinoa and mix with chickpeas, diced tomatoes, and feta cheese.<br>3. Stuff the zucchinis and bake until tender.' 
  },
  { 
    recipe: 'Soy Ginger Glazed Tofu Bowl', 
    ingredients: ['Tofu', 'Soy Ginger Glaze', 'Broccoli', 'Carrots', 'Brown Rice'], 
    calories: 340, 
    instructions: '1. Cube tofu and coat with soy ginger glaze.<br>2. Stir-fry with broccoli and carrots.<br>3. Serve over brown rice.' 
  },
  { 
    recipe: 'Caprese Quinoa Salad', 
    ingredients: ['Quinoa', 'Cherry Tomatoes', 'Mozzarella Cheese', 'Basil', 'Balsamic Vinaigrette'], 
    calories: 330, 
    instructions: '1. Cook quinoa and let it cool.<br>2. Mix with halved cherry tomatoes, diced mozzarella cheese, and fresh basil.<br>3. Drizzle with balsamic vinaigrette.' 
  },
  { 
    recipe: 'Moroccan Spiced Chicken with Couscous', 
    ingredients: ['Chicken Thighs', 'Moroccan Spice Blend', 'Couscous', 'Apricots'], 
    calories: 380, 
    instructions: '1. Rub chicken thighs with Moroccan spice blend.<br>2. Roast until cooked.<br>3. Serve over couscous with chopped apricots.' 
  },
  { 
    recipe: 'Vegetarian Pad Thai', 
    ingredients: ['Rice Noodles', 'Tofu', 'Bean Sprouts', 'Peanuts', 'Pad Thai Sauce'], 
    calories: 350, 
    instructions: '1. Cook rice noodles and set aside.<br>2. Stir-fry tofu, bean sprouts, and peanuts.<br>3. Toss with rice noodles and pad Thai sauce.' 
  },
  { 
    recipe: 'Lentil and Vegetable Stuffed Bell Peppers', 
    ingredients: ['Bell Peppers', 'Lentils', 'Mixed Vegetables', 'Tomato Sauce'], 
    calories: 360, 
    instructions: '1. Cook lentils and mix with sautéed mixed vegetables.<br>2. Stuff into bell peppers and bake until peppers are tender.<br>3. Top with tomato sauce.' 
  },
  { 
    recipe: 'Teriyaki Veggie Skewers', 
    ingredients: ['Assorted Vegetables', 'Teriyaki Sauce', 'Wooden Skewers'], 
    calories: 340, 
    instructions: '1. Marinate assorted vegetables in teriyaki sauce.<br>2. Thread onto wooden skewers and grill until vegetables are tender.' 
  },
  { 
    recipe: 'Baked Pesto Chicken with Roasted Vegetables', 
    ingredients: ['Chicken Breast', 'Pesto Sauce', 'Zucchini', 'Cherry Tomatoes'], 
    calories: 370, 
    instructions: '1. Coat chicken breast with pesto sauce.<br>2. Arrange on a baking sheet with sliced zucchini and cherry tomatoes.<br>3. Bake until chicken is cooked.' 
  },
  { 
    recipe: 'Mediterranean Chickpea Salad', 
    ingredients: ['Chickpeas', 'Cucumber', 'Tomato', 'Red Onion', 'Feta Cheese'], 
    calories: 330, 
    instructions: '1. Mix chickpeas with diced cucumber, tomato, red onion, and crumbled feta cheese.<br>2. Drizzle with olive oil and toss.' 
  },
  { 
    recipe: 'Honey Balsamic Glazed Salmon', 
    ingredients: ['Salmon Fillets', 'Honey Balsamic Glaze', 'Asparagus'], 
    calories: 360, 
    instructions: '1. Glaze salmon fillets with honey balsamic glaze.<br>2. Roast with asparagus until salmon is cooked.' 
  },
  { 
    recipe: 'Vegetarian Burrito Bowl', 
    ingredients: ['Black Beans', 'Corn', 'Avocado', 'Salsa', 'Brown Rice'], 
    calories: 350, 
    instructions: '1. Mix black beans, corn, diced avocado, and salsa.<br>2. Serve over brown rice.' 
  },
  { 
    recipe: 'Greek Chicken Souvlaki Wrap', 
    ingredients: ['Chicken Skewers', 'Whole Wheat Wrap', 'Greek Salad', 'Tzatziki Sauce'], 
    calories: 380, 
    instructions: '1. Grill chicken skewers until cooked.<br>2. Assemble in a whole wheat wrap with Greek salad and tzatziki sauce.' 
  },
  { 
    recipe: 'Shrimp Scampi Pasta', 
    ingredients: ['Shrimp', 'Linguine Pasta', 'Garlic', 'White Wine', 'Butter'], 
    calories: 380, 
    instructions: '1. Cook linguine pasta.<br>2. Sauté shrimp and garlic in white wine and butter.<br>3. Toss with cooked pasta.' 
  },
  { 
    recipe: 'Cauliflower and Chickpea Curry', 
    ingredients: ['Cauliflower', 'Chickpeas', 'Coconut Milk', 'Curry Spices', 'Basmati Rice'], 
    calories: 360, 
    instructions: '1. Cook cauliflower and chickpeas in coconut milk with curry spices.<br>2. Serve over fluffy basmati rice.' 
  },
  { 
    recipe: 'Lemon Herb Grilled Vegetables', 
    ingredients: ['Assorted Vegetables', 'Lemon', 'Herbs', 'Olive Oil'], 
    calories: 330, 
    instructions: '1. Marinate assorted vegetables in lemon juice, herbs, and olive oil.<br>2. Grill until vegetables are tender.' 
  },
  { 
    recipe: 'Pesto Zoodle Bowl', 
    ingredients: ['Zucchini Noodles', 'Cherry Tomatoes', 'Pesto Sauce', 'Parmesan Cheese'], 
    calories: 340, 
    instructions: '1. Spiralize zucchini into noodles.<br>2. Toss with halved cherry tomatoes, pesto sauce, and Parmesan cheese.' 
  },
  { 
    recipe: 'Crispy Baked Tofu with Quinoa', 
    ingredients: ['Tofu', 'Quinoa', 'Soy Sauce', 'Sesame Oil'], 
    calories: 370, 
    instructions: '1. Press and cube tofu.<br>2. Toss with soy sauce and sesame oil.<br>3. Bake until crispy and serve over cooked quinoa.' 
  },
  { 
    recipe: 'Mango Avocado Black Bean Salad', 
    ingredients: ['Black Beans', 'Mango', 'Avocado', 'Red Onion', 'Lime'], 
    calories: 350, 
    instructions: '1. Mix black beans with diced mango, avocado, red onion, and a squeeze of lime.' 
  },
  { 
    recipe: 'Stuffed Acorn Squash with Wild Rice', 
    ingredients: ['Acorn Squash', 'Wild Rice', 'Pecans', 'Cranberries'], 
    calories: 360, 
    instructions: '1. Roast acorn squash halves.<br>2. Fill with cooked wild rice, pecans, and cranberries.' 
  },
  { 
    recipe: 'Sesame Crusted Tuna Steaks', 
    ingredients: ['Tuna Steaks', 'Sesame Seeds', 'Soy Sauce', 'Ginger'], 
    calories: 390, 
    instructions: '1. Coat tuna steaks in sesame seeds.<br>2. Sear in a hot pan with soy sauce and ginger.' 
  },
  { 
    recipe: 'Quinoa Stuffed Bell Peppers with Salsa', 
    ingredients: ['Bell Peppers', 'Quinoa', 'Black Beans', 'Corn', 'Salsa'], 
    calories: 370, 
    instructions: '1. Cook quinoa and mix with black beans, corn, and salsa.<br>2. Stuff into bell peppers and bake until peppers are tender.' 
  },
  { 
    recipe: 'Teriyaki Beef Stir-Fry', 
    ingredients: ['Beef Strips', 'Broccoli', 'Bell Peppers', 'Teriyaki Sauce', 'Brown Rice'], 
    calories: 380, 
    instructions: '1. Stir-fry beef strips with broccoli and bell peppers in teriyaki sauce.<br>2. Serve over brown rice.' 
  },
  { 
    recipe: 'Cajun Chicken and Sausage Jambalaya', 
    ingredients: ['Chicken Thighs', 'Sausage', 'Bell Peppers', 'Tomatoes', 'Cajun Spices'], 
    calories: 400, 
    instructions: '1. Sauté chicken thighs and sausage.<br>2. Add bell peppers, tomatoes, and Cajun spices.<br>3. Simmer with cooked rice.' 
  },
  { 
    recipe: 'Caprese Stuffed Portobello Mushrooms', 
    ingredients: ['Portobello Mushrooms', 'Tomato', 'Mozzarella Cheese', 'Balsamic Glaze'], 
    calories: 350, 
    instructions: '1. Remove stems from portobello mushrooms.<br>2. Stuff with sliced tomato and mozzarella cheese.<br>3. Drizzle with balsamic glaze and bake.' 
  },
  { 
    recipe: 'Vegetarian Lentil Loaf', 
    ingredients: ['Lentils', 'Carrots', 'Onion', 'Oats', 'Ketchup'], 
    calories: 360, 
    instructions: '1. Cook lentils and mix with grated carrots, diced onion, oats, and ketchup.<br>2. Shape into a loaf and bake until firm.' 
  },
  { 
    recipe: 'Soy Ginger Glazed Salmon Bowl', 
    ingredients: ['Salmon', 'Soy Ginger Glaze', 'Edamame', 'Cucumber', 'Brown Rice'], 
    calories: 370, 
    instructions: '1. Glaze salmon with soy ginger glaze.<br>2. Serve over brown rice with steamed edamame and sliced cucumber.' 
  },{ 
    recipe: 'Vegetarian Stuffed Grape Leaves', 
    ingredients: ['Grape Leaves', 'Rice', 'Pine Nuts', 'Dill', 'Lemon'], 
    calories: 340, 
    instructions: '1. Prepare grape leaves by blanching them.<br>2. Mix cooked rice with pine nuts, dill, and lemon juice.<br>3. Roll the mixture into grape leaves.' 
  },
  { 
    recipe: 'Moroccan Chickpea Tagine', 
    ingredients: ['Chickpeas', 'Tomatoes', 'Carrots', 'Couscous', 'Moroccan Spice Blend'], 
    calories: 360, 
    instructions: '1. Cook chickpeas, tomatoes, and carrots in a tagine with Moroccan spice blend.<br>2. Serve over fluffy couscous.' 
  },
  { 
    recipe: 'Pumpkin Sage Risotto', 
    ingredients: ['Arborio Rice', 'Pumpkin Puree', 'Sage', 'Parmesan Cheese'], 
    calories: 330, 
    instructions: '1. Sauté Arborio rice with pumpkin puree and sage.<br>2. Gradually stir in vegetable broth until creamy.<br>3. Mix in Parmesan cheese.' 
  },
  { 
    recipe: 'Grilled Eggplant and Tomato Stack', 
    ingredients: ['Eggplant', 'Tomato', 'Basil', 'Balsamic Glaze'], 
    calories: 340, 
    instructions: '1. Grill slices of eggplant and tomato.<br>2. Stack them with fresh basil leaves.<br>3. Drizzle with balsamic glaze.' 
  },
  { 
    recipe: 'Spicy Peanut Tofu Stir-Fry', 
    ingredients: ['Tofu', 'Broccoli', 'Carrots', 'Snow Peas', 'Spicy Peanut Sauce'], 
    calories: 350, 
    instructions: '1. Stir-fry tofu, broccoli, carrots, and snow peas.<br>2. Toss with spicy peanut sauce.<br>3. Serve over rice or noodles.' 
  },
  { 
    recipe: 'Lemon Garlic Shrimp and Asparagus', 
    ingredients: ['Shrimp', 'Asparagus', 'Lemon', 'Garlic', 'Olive Oil'], 
    calories: 370, 
    instructions: '1. Sauté shrimp and asparagus in olive oil with lemon and garlic.<br>2. Serve over rice or pasta.' 
  },
  { 
    recipe: 'Vegetable Paella', 
    ingredients: ['Arborio Rice', 'Artichokes', 'Bell Peppers', 'Peas', 'Saffron'], 
    calories: 380, 
    instructions: '1. Sauté Arborio rice with artichokes, bell peppers, and peas.<br>2. Infuse with saffron and simmer until rice is cooked.' 
  },
  { 
    recipe: 'Thai Red Curry with Tofu', 
    ingredients: ['Tofu', 'Red Curry Paste', 'Coconut Milk', 'Vegetables', 'Jasmine Rice'], 
    calories: 390, 
    instructions: '1. Sauté tofu and vegetables in red curry paste.<br>2. Pour in coconut milk and simmer until vegetables are tender.<br>3. Serve over jasmine rice.' 
  },
  { 
    recipe: 'Mushroom and Truffle Oil Risotto', 
    ingredients: ['Arborio Rice', 'Mushrooms', 'Truffle Oil', 'Parmesan Cheese'], 
    calories: 400, 
    instructions: '1. Sauté Arborio rice with mushrooms.<br>2. Drizzle with truffle oil and gradually stir in vegetable broth until creamy.<br>3. Mix in Parmesan cheese.' 
  },
  { 
    recipe: 'Chickpea and Spinach Coconut Curry', 
    ingredients: ['Chickpeas', 'Spinach', 'Coconut Milk', 'Curry Spices', 'Basmati Rice'], 
    calories: 350, 
    instructions: '1. Cook chickpeas and spinach in coconut milk with curry spices.<br>2. Serve over fluffy basmati rice.' 
  },
  { 
    recipe: 'Baked Cod with Lemon and Herbs', 
    ingredients: ['Cod Fillets', 'Lemon', 'Herbs', 'Olive Oil'], 
    calories: 360, 
    instructions: '1. Place cod fillets on a baking sheet.<br>2. Drizzle with olive oil, sprinkle with herbs, and squeeze lemon on top.<br>3. Bake until fish is cooked.' 
  },
  { 
    recipe: 'Vegetarian Mexican Quinoa Bowl', 
    ingredients: ['Quinoa', 'Black Beans', 'Corn', 'Avocado', 'Salsa'], 
    calories: 370, 
    instructions: '1. Cook quinoa and mix with black beans, corn, diced avocado, and salsa.<br>2. Serve as a bowl or wrap in tortillas.' 
  },
  { 
    recipe: 'Pesto Shrimp and Tomato Linguine', 
    ingredients: ['Shrimp', 'Linguine Pasta', 'Pesto Sauce', 'Cherry Tomatoes', 'Parmesan Cheese'], 
    calories: 380, 
    instructions: '1. Cook linguine pasta.<br>2. Sauté shrimp and cherry tomatoes with pesto sauce.<br>3. Toss with cooked pasta and sprinkle with Parmesan cheese.' 
  },
  { 
    recipe: 'Vegetarian Mediterranean Couscous Salad', 
    ingredients: ['Couscous', 'Chickpeas', 'Cucumber', 'Tomato', 'Feta Cheese'], 
    calories: 330, 
    instructions: '1. Cook couscous and let it cool.<br>2. Mix with chickpeas, diced cucumber, diced tomato, and crumbled feta cheese.' 
  },
  { 
    recipe: 'Garlic Butter Herb Chicken Thighs', 
    ingredients: ['Chicken Thighs', 'Garlic', 'Butter', 'Rosemary', 'Thyme'], 
    calories: 380, 
    instructions: '1. Sauté chicken thighs in garlic and butter.<br>2. Sprinkle with chopped rosemary and thyme.<br>3. Bake until chicken is golden brown.' 
  },
  { 
    recipe: 'Vegetarian Ratatouille', 
    ingredients: ['Eggplant', 'Zucchini', 'Bell Peppers', 'Tomatoes', 'Herbs de Provence'], 
    calories: 360, 
    instructions: '1. Layer sliced eggplant, zucchini, bell peppers, and tomatoes in a baking dish.<br>2. Sprinkle with Herbs de Provence.<br>3. Bake until vegetables are tender.' 
  },
  { 
    recipe: 'Lemon Garlic Butter Shrimp Pasta', 
    ingredients: ['Shrimp', 'Linguine Pasta', 'Garlic', 'Butter', 'Lemon'], 
    calories: 340, 
    instructions: '1. Cook linguine pasta.<br>2. Sauté shrimp in garlic and butter.<br>3. Toss with cooked pasta and squeeze fresh lemon on top.' 
  },
  { 
    recipe: 'Sweet Potato and Black Bean Enchiladas', 
    ingredients: ['Sweet Potatoes', 'Black Beans', 'Enchilada Sauce', 'Cheese', 'Tortillas'], 
    calories: 370, 
    instructions: '1. Roast sweet potatoes and mix with black beans.<br>2. Roll the mixture in tortillas and place in a baking dish.<br>3. Pour enchilada sauce over the top and sprinkle with cheese.<br>4. Bake until cheese is melted and bubbly.' 
  },
  { 
    recipe: 'Mushroom Spinach Stuffed Chicken Breast', 
    ingredients: ['Chicken Breast', 'Mushrooms', 'Spinach', 'Cheese', 'Garlic'], 
    calories: 390, 
    instructions: '1. Flatten chicken breasts and stuff with sautéed mushrooms, spinach, and cheese.<br>2. Roll and secure with toothpicks.<br>3. Bake until chicken is cooked through.' 
  },
  { 
    recipe: 'Teriyaki Salmon with Pineapple Salsa', 
    ingredients: ['Salmon Fillets', 'Teriyaki Sauce', 'Pineapple', 'Red Onion', 'Cilantro'], 
    calories: 400, 
    instructions: '1. Marinate salmon fillets in teriyaki sauce.<br>2. Grill or bake until salmon is cooked.<br>3. Top with pineapple salsa made with diced pineapple, red onion, and cilantro.' 
  },
  { 
    recipe: 'Crispy Baked Falafel Bowl', 
    ingredients: ['Chickpeas', 'Onion', 'Garlic', 'Cumin', 'Tahini Sauce'], 
    calories: 350, 
    instructions: '1. Blend chickpeas, onion, garlic, and cumin into a falafel mixture.<br>2. Shape into balls and bake until crispy.<br>3. Serve over a bowl of greens and drizzle with tahini sauce.' 
  },
  { 
    recipe: 'Lemon Herb Quinoa with Roasted Vegetables', 
    ingredients: ['Quinoa', 'Assorted Vegetables', 'Lemon', 'Herbs', 'Olive Oil'], 
    calories: 360, 
    instructions: '1. Cook quinoa and toss with roasted vegetables.<br>2. Drizzle with a mixture of lemon, herbs, and olive oil.' 
  },
  { 
    recipe: 'Stuffed Chicken Parmesan', 
    ingredients: ['Chicken Breasts', 'Tomato Sauce', 'Mozzarella Cheese', 'Parmesan Cheese', 'Breadcrumbs'], 
    calories: 380, 
    instructions: '1. Butterfly chicken breasts and stuff with tomato sauce, mozzarella cheese, and Parmesan cheese.<br>2. Coat with breadcrumbs and bake until golden brown.' 
  },
  { 
    recipe: 'Vegetarian Lentil Lasagna', 
    ingredients: ['Lentils', 'Lasagna Noodles', 'Tomato Sauce', 'Ricotta Cheese', 'Spinach'], 
    calories: 370, 
    instructions: '1. Cook lentils and mix with tomato sauce.<br>2. Layer with cooked lasagna noodles, ricotta cheese, and spinach.<br>3. Bake until bubbly and golden.' 
  },
  { 
    recipe: 'Cajun Shrimp and Sausage Skillet', 
    ingredients: ['Shrimp', 'Sausage', 'Bell Peppers', 'Onion', 'Cajun Spices'], 
    calories: 390, 
    instructions: '1. Sauté shrimp and sausage with bell peppers and onion in a skillet.<br>2. Season with Cajun spices.<br>3. Serve over rice.' 
  },
  { 
    recipe: 'Mango Chicken Curry', 
    ingredients: ['Chicken Thighs', 'Mango', 'Coconut Milk', 'Curry Spices', 'Basmati Rice'], 
    calories: 360, 
    instructions: '1. Sauté chicken thighs with mango and curry spices.<br>2. Pour in coconut milk and simmer until chicken is cooked.<br>3. Serve over fluffy basmati rice.' 
  },
  { 
    recipe: 'Caprese Pesto Pizza', 
    ingredients: ['Pizza Dough', 'Pesto Sauce', 'Tomatoes', 'Mozzarella Cheese', 'Basil'], 
    calories: 380, 
    instructions: '1. Roll out pizza dough and spread with pesto sauce.<br>2. Top with sliced tomatoes, mozzarella cheese, and fresh basil.<br>3. Bake until crust is golden and cheese is melted.' 
  },{ 
    recipe: 'Vegetable and Chickpea Stir-Fry', 
    ingredients: ['Chickpeas', 'Broccoli', 'Carrots', 'Snow Peas', 'Soy Sauce'], 
    calories: 350, 
    instructions: '1. Stir-fry chickpeas, broccoli, carrots, and snow peas in soy sauce.<br>2. Serve over rice or noodles.' 
  },
  { 
    recipe: 'Butternut Squash and Sage Risotto', 
    ingredients: ['Arborio Rice', 'Butternut Squash', 'Sage', 'Parmesan Cheese'], 
    calories: 360, 
    instructions: '1. Sauté Arborio rice with diced butternut squash and sage.<br>2. Gradually stir in vegetable broth until creamy.<br>3. Mix in Parmesan cheese.' 
  },
  { 
    recipe: 'Sesame Ginger Tofu Stir-Fry', 
    ingredients: ['Tofu', 'Broccoli', 'Bell Peppers', 'Sesame Ginger Sauce', 'Brown Rice'], 
    calories: 370, 
    instructions: '1. Stir-fry tofu, broccoli, and bell peppers in sesame ginger sauce.<br>2. Serve over brown rice.' 
  },
  { 
    recipe: 'Mediterranean Quinoa Stuffed Peppers', 
    ingredients: ['Quinoa', 'Chickpeas', 'Tomatoes', 'Olives', 'Feta Cheese'], 
    calories: 380, 
    instructions: '1. Cook quinoa and mix with chickpeas, diced tomatoes, olives, and feta cheese.<br>2. Stuff into bell peppers and bake until peppers are tender.' 
  },
  { 
    recipe: 'Honey Mustard Glazed Salmon', 
    ingredients: ['Salmon Fillets', 'Honey Mustard Glaze', 'Green Beans', 'Almonds'], 
    calories: 390, 
    instructions: '1. Glaze salmon fillets with honey mustard glaze.<br>2. Roast with green beans and almonds until salmon is cooked.' 
  },
  { 
    recipe: 'Vegetarian Sushi Bowl', 
    ingredients: ['Sushi Rice', 'Avocado', 'Cucumber', 'Carrots', 'Soy Sauce'], 
    calories: 400, 
    instructions: '1. Cook sushi rice and let it cool.<br>2. Arrange avocado slices, cucumber, and shredded carrots over the rice.<br>3. Drizzle with soy sauce.' 
  },
  { 
    recipe: 'Chickpea and Spinach Stuffed Sweet Potatoes', 
    ingredients: ['Sweet Potatoes', 'Chickpeas', 'Spinach', 'Yogurt', 'Cumin'], 
    calories: 410, 
    instructions: '1. Bake sweet potatoes until tender.<br>2. Mix chickpeas with sautéed spinach, yogurt, and cumin.<br>3. Stuff the sweet potatoes.' 
  },
  { 
    recipe: 'Pineapple Fried Rice with Cashews', 
    ingredients: ['Cooked Rice', 'Pineapple', 'Cashews', 'Peas', 'Soy Sauce'], 
    calories: 420, 
    instructions: '1. Sauté cooked rice with diced pineapple, cashews, peas, and soy sauce.<br>2. Stir until well combined.' 
  },
  { 
    recipe: 'Tomato Basil Pesto Chicken', 
    ingredients: ['Chicken Breasts', 'Tomato Sauce', 'Basil Pesto', 'Mozzarella Cheese'], 
    calories: 430, 
    instructions: '1. Sear chicken breasts and top with tomato sauce, basil pesto, and mozzarella cheese.<br>2. Bake until chicken is cooked and cheese is melted.' 
  },
  { 
    recipe: 'Vegetarian Black Bean Chili', 
    ingredients: ['Black Beans', 'Tomatoes', 'Corn', 'Onion', 'Chili Powder'], 
    calories: 440, 
    instructions: '1. Cook black beans, tomatoes, corn, and onion with chili powder.<br>2. Simmer until flavors meld together.' 
  },
  { 
    recipe: 'Lemon Garlic Herb Quinoa with Grilled Vegetables', 
    ingredients: ['Quinoa', 'Assorted Vegetables', 'Lemon', 'Garlic', 'Herbs'], 
    calories: 450, 
    instructions: '1. Cook quinoa and toss with grilled vegetables.<br>2. Drizzle with a mixture of lemon, garlic, and herbs.' 
  },
  { 
    recipe: 'Crispy Baked Coconut Shrimp', 
    ingredients: ['Shrimp', 'Coconut Flakes', 'Egg', 'Flour'], 
    calories: 460, 
    instructions: '1. Dip shrimp in egg, coat with flour, and press coconut flakes onto each shrimp.<br>2. Bake until shrimp is crispy.' 
  },{ 
    recipe: 'Vegetarian Chickpea Tikka Masala', 
    ingredients: ['Chickpeas', 'Tomato Sauce', 'Coconut Milk', 'Indian Spices', 'Basmati Rice'], 
    calories: 470, 
    instructions: '1. Sauté chickpeas in a mixture of tomato sauce, coconut milk, and Indian spices.<br>2. Simmer until flavors meld together.<br>3. Serve over fluffy basmati rice.' 
  },
  { 
    recipe: 'Honey Soy Glazed Beef Stir-Fry', 
    ingredients: ['Beef Strips', 'Broccoli', 'Carrots', 'Honey Soy Glaze', 'Rice Noodles'], 
    calories: 480, 
    instructions: '1. Stir-fry beef strips with broccoli and carrots in a honey soy glaze.<br>2. Cook rice noodles separately.<br>3. Combine and toss.' 
  },
  { 
    recipe: 'Greek Salad with Grilled Chicken', 
    ingredients: ['Chicken Breast', 'Romaine Lettuce', 'Cucumber', 'Tomatoes', 'Feta Cheese'], 
    calories: 490, 
    instructions: '1. Grill chicken breast until cooked.<br>2. Assemble a salad with romaine lettuce, cucumber, tomatoes, and feta cheese.<br>3. Top with grilled chicken.' 
  },
  { 
    recipe: 'Spaghetti Aglio e Olio with Shrimp', 
    ingredients: ['Shrimp', 'Spaghetti Pasta', 'Garlic', 'Red Pepper Flakes', 'Olive Oil'], 
    calories: 500, 
    instructions: '1. Cook spaghetti pasta.<br>2. Sauté shrimp, garlic, and red pepper flakes in olive oil.<br>3. Toss with cooked pasta.' 
  },
  { 
    recipe: 'Vegan Lentil Shepherd’s Pie', 
    ingredients: ['Lentils', 'Carrots', 'Peas', 'Mashed Potatoes', 'Vegetable Broth'], 
    calories: 510, 
    instructions: '1. Cook lentils with carrots and peas in vegetable broth.<br>2. Layer in a baking dish and top with mashed potatoes.<br>3. Bake until the top is golden.' 
  },
  { 
    recipe: 'Shrimp and Avocado Mango Salad', 
    ingredients: ['Shrimp', 'Avocado', 'Mango', 'Lime', 'Cilantro'], 
    calories: 520, 
    instructions: '1. Grill or sauté shrimp until cooked.<br>2. Toss with diced avocado, mango, lime juice, and cilantro.' 
  },
  { 
    recipe: 'Tomato Basil Mozzarella Stuffed Chicken', 
    ingredients: ['Chicken Breasts', 'Tomato', 'Basil', 'Mozzarella Cheese', 'Balsamic Glaze'], 
    calories: 530, 
    instructions: '1. Butterfly chicken breasts and stuff with sliced tomato, basil, and mozzarella cheese.<br>2. Drizzle with balsamic glaze and bake until chicken is cooked.' 
  },
  { 
    recipe: 'Vegetable Pad Thai with Tofu', 
    ingredients: ['Rice Noodles', 'Tofu', 'Bean Sprouts', 'Peanuts', 'Pad Thai Sauce'], 
    calories: 540, 
    instructions: '1. Cook rice noodles.<br>2. Stir-fry tofu, bean sprouts, and peanuts with pad Thai sauce.<br>3. Toss with cooked noodles.' 
  },
  { 
    recipe: 'Crispy Baked Zucchini Fries', 
    ingredients: ['Zucchini', 'Breadcrumbs', 'Parmesan Cheese', 'Egg'], 
    calories: 550, 
    instructions: '1. Cut zucchini into fry shapes.<br>2. Dip in beaten egg and coat with a mixture of breadcrumbs and Parmesan cheese.<br>3. Bake until crispy.' 
  },
  { 
    recipe: 'Miso Glazed Eggplant with Quinoa', 
    ingredients: ['Eggplant', 'Quinoa', 'Miso Glaze', 'Green Onions', 'Sesame Seeds'], 
    calories: 560, 
    instructions: '1. Roast eggplant slices.<br>2. Serve over cooked quinoa and drizzle with miso glaze.<br>3. Garnish with chopped green onions and sesame seeds.' 
  },
  { 
    recipe: 'Blackened Salmon with Mango Salsa', 
    ingredients: ['Salmon Fillets', 'Blackened Seasoning', 'Mango Salsa'], 
    calories: 570, 
    instructions: '1. Coat salmon fillets with blackened seasoning.<br>2. Grill or bake until salmon is cooked.<br>3. Top with refreshing mango salsa.' 
  },
  { 
    recipe: 'Vegan Thai Green Curry', 
    ingredients: ['Mixed Vegetables', 'Coconut Milk', 'Thai Green Curry Paste', 'Tofu', 'Jasmine Rice'], 
    calories: 580, 
    instructions: '1. Sauté mixed vegetables and tofu in Thai green curry paste.<br>2. Pour in coconut milk and simmer until vegetables are tender.<br>3. Serve over jasmine rice.' 
  },
  { 
    recipe: 'Peach and Pecan Quinoa Salad', 
    ingredients: ['Quinoa', 'Peaches', 'Pecans', 'Feta Cheese', 'Balsamic Vinaigrette'], 
    calories: 590, 
    instructions: '1. Cook quinoa and let it cool.<br>2. Toss with diced peaches, chopped pecans, crumbled feta cheese, and balsamic vinaigrette.' 
  },
  { 
    recipe: 'Chickpea and Cauliflower Curry', 
    ingredients: ['Chickpeas', 'Cauliflower', 'Coconut Milk', 'Curry Spices', 'Basmati Rice'], 
    calories: 600, 
    instructions: '1. Cook chickpeas and cauliflower in coconut milk with curry spices.<br>2. Serve over fluffy basmati rice.' 
  },
  { 
    recipe: 'Cajun Chicken Alfredo Pasta', 
    ingredients: ['Chicken Breast', 'Fettuccine Pasta', 'Cajun Seasoning', 'Alfredo Sauce'], 
    calories: 610, 
    instructions: '1. Season chicken breast with Cajun seasoning and cook until done.<br>2. Cook fettuccine pasta.<br>3. Toss cooked pasta with Alfredo sauce.<br>4. Slice the Cajun chicken and place on top.' 
  },
  { 
    recipe: 'Mediterranean Grilled Lamb Chops', 
    ingredients: ['Lamb Chops', 'Olive Oil', 'Garlic', 'Rosemary', 'Lemon'], 
    calories: 620, 
    instructions: '1. Marinate lamb chops in olive oil, minced garlic, chopped rosemary, and lemon juice.<br>2. Grill until desired doneness.' 
  },
  { 
    recipe: 'Vegan Chickpea and Sweet Potato Curry', 
    ingredients: ['Chickpeas', 'Sweet Potatoes', 'Coconut Milk', 'Curry Spices', 'Quinoa'], 
    calories: 630, 
    instructions: '1. Cook chickpeas and sweet potatoes in coconut milk with curry spices.<br>2. Serve over cooked quinoa.' 
  },
  { 
    recipe: 'Teriyaki Tofu and Vegetable Skewers', 
    ingredients: ['Tofu', 'Bell Peppers', 'Zucchini', 'Teriyaki Sauce', 'Sesame Seeds'], 
    calories: 640, 
    instructions: '1. Cut tofu into cubes and thread onto skewers with bell peppers and zucchini.<br>2. Brush with teriyaki sauce and grill until vegetables are tender.' 
  },
  { 
    recipe: 'Mushroom and Spinach Stuffed Pork Tenderloin', 
    ingredients: ['Pork Tenderloin', 'Mushrooms', 'Spinach', 'Garlic', 'Dijon Mustard'], 
    calories: 650, 
    instructions: '1. Butterfly pork tenderloin and stuff with sautéed mushrooms, spinach, garlic, and Dijon mustard.<br>2. Roast until pork is cooked.' 
  },
  { 
    recipe: 'Crispy Baked Cauliflower Wings', 
    ingredients: ['Cauliflower Florets', 'Flour', 'Almond Milk', 'Buffalo Sauce'], 
    calories: 660, 
    instructions: '1. Dip cauliflower florets in a mixture of flour and almond milk.<br>2. Bake until crispy.<br>3. Toss in buffalo sauce.' 
  },
  { 
    recipe: 'Thai Peanut Noodle Bowl with Shrimp', 
    ingredients: ['Shrimp', 'Rice Noodles', 'Vegetables', 'Peanut Sauce'], 
    calories: 670, 
    instructions: '1. Cook rice noodles and sauté shrimp with vegetables.<br>2. Toss with peanut sauce until well combined.' 
  },
  { 
    recipe: 'Vegan BBQ Jackfruit Tacos', 
    ingredients: ['Jackfruit', 'BBQ Sauce', 'Corn Tortillas', 'Cabbage Slaw'], 
    calories: 680, 
    instructions: '1. Cook jackfruit in BBQ sauce until heated through.<br>2. Serve in corn tortillas with a side of cabbage slaw.' 
  },
  { 
    recipe: 'Miso Glazed Salmon with Stir-Fried Vegetables', 
    ingredients: ['Salmon Fillets', 'Miso Glaze', 'Broccoli', 'Carrots', 'Snap Peas'], 
    calories: 690, 
    instructions: '1. Brush salmon fillets with miso glaze.<br>2. Bake until salmon is cooked.<br>3. Stir-fry broccoli, carrots, and snap peas in a hot wok.' 
  },
  { 
    recipe: 'Vegetarian Quinoa and Black Bean Stuffed Bell Peppers', 
    ingredients: ['Quinoa', 'Black Beans', 'Tomatoes', 'Onion', 'Cheese'], 
    calories: 700, 
    instructions: '1. Cook quinoa and mix with black beans, diced tomatoes, onion, and cheese.<br>2. Stuff into bell peppers and bake until peppers are tender.' 
  },
  { 
    recipe: 'Lemon Herb Grilled Swordfish', 
    ingredients: ['Swordfish Steaks', 'Lemon', 'Herbs', 'Olive Oil'], 
    calories: 710, 
    instructions: '1. Marinate swordfish steaks in a mixture of lemon, herbs, and olive oil.<br>2. Grill until fish is cooked.' 
  },
];

//#############################//################//##################//#####################//########################//######################//########################

//declaring all variables i'll use in the program

let breakfastItemsasHTML="";
let lunchItemsasHTML='';
let dinnerItemsasHTML='';
let breakfastIngredients=[];
let lunchIngredients=[];
let dinnerIngredients=[];
let tempbreakfastIngredients=[];
let templunchIngredients=[];
let tempdinnerIngredients=[];
let breakfastIngredientsAsHTML='';
let lunchIngredientsAsHTML='';
let dinnerIngredientsAsHTML='';
let tempbreakfastIngredientsAsHTML='';
let templunchIngredientsAsHTML='';
let tempdinnerIngredientsAsHTML='';
let breakfastInstructions='';
let lunchInstructions='';
let dinnerInstructions='';
let breakfastDetails='';
let lunchDetails='';
let dinnerDetails='';
let date='';
let breakfastMenu='';
let lunchMenu='';
let dinnerMenu='';
let breakfastCalories=0;
let lunchCalories=0;
let dinnerCalories=0;
let totalCalories=0;

//#############################//################//##################//#####################//########################//######################//########################

//Accessing the dataset to create a option tags

breakfastItems.forEach((value,index) => {breakfastItemsasHTML+=`<option id=${index}>${value.recipe}</option>`});
lunchItems.forEach((value,index) => {lunchItemsasHTML+=`<option id=${index}>${value.recipe}</option>`}) 
dinnerItems.forEach((value,index) => {dinnerItemsasHTML+=`<option id=${index}>${value.recipe}</option>`})

//#############################//################//##################//#####################//########################//######################//########################

// function to add option in the page while loading

function addOptionsToPage()
{
document.querySelector('#breakfastmenu').innerHTML="<option id='' disabled>Select One Menu</option>"+breakfastItemsasHTML
document.querySelector('#lunchmenu').innerHTML="<option id='' disabled>Select One Menu</option>"+lunchItemsasHTML
document.querySelector('#dinnermenu').innerHTML="<option id='' disabled>Select One Menu</option>"+dinnerItemsasHTML
}

//#############################//################//##################//#####################//########################//######################//########################

// Functions to get the selected option from the user

function getBreakfastDetails() 
{
    selectElement = document.querySelector('#breakfastmenu');
    output = selectElement.value;
    
    breakfastItems.forEach((v,i) => {
      if (v.recipe == output)
      {
        breakfastMenu=v.recipe
        breakfastIngredients=v.ingredients
        breakfastInstructions=v.instructions
        breakfastCalories=v.calories
      }
    })
    breakfastIngredients.forEach((v,i) => {breakfastIngredientsAsHTML+=`<li>${v}</li>`})
    breakfastDetails=`<p>Ingredients Required:</p><p class='ingredients'><ul>${breakfastIngredientsAsHTML}</ul></p><p>Steps to cook:</p><p class='instructions'>${breakfastInstructions}</p><p>Calories per Serving(1 Bowl):</p><p class='calories'>${breakfastCalories} Kcal</p>`
    document.querySelector('.breakfast-details').innerHTML= breakfastDetails
    tempbreakfastIngredientsAsHTML=breakfastIngredientsAsHTML
    breakfastIngredientsAsHTML=''
    tempbreakfastIngredients=breakfastIngredients
}
function getLunchDetails() 
{
  selectElement = document.querySelector('#lunchmenu');
  output = selectElement.value;
  lunchItems.forEach((v,i) => {
    if (v.recipe == output)
    {
      lunchMenu=v.recipe
      lunchIngredients=v.ingredients
      lunchInstructions=v.instructions
      lunchCalories=v.calories
    }
    lunchIngredients.forEach((v,i) => {lunchIngredientsAsHTML+=`<li>${v}</li>`})
    lunchDetails=`<p>Ingredients Required:</p><p class='ingredients'><ul>${lunchIngredientsAsHTML}</ul></p><p>Steps to cook:</p><p class='instructions'>${lunchInstructions}</p><p>Calories per Serving(1 Bowl):</p><p class='calories'>${lunchCalories} Kcal</p>`
    document.querySelector('.lunch-details').innerHTML=lunchDetails
    templunchIngredientsAsHTML=lunchIngredientsAsHTML
    lunchIngredientsAsHTML=''
    templunchIngredients=lunchIngredients
})

}
function getDinnerDetails() 
{
  selectElement = document.querySelector('#dinnermenu');
  output = selectElement.value;
  dinnerItems.forEach((v,i) => {
    if (v.recipe == output)
    {
      dinnerMenu=v.recipe
      dinnerIngredients=v.ingredients
      dinnerInstructions=v.instructions
      dinnerCalories=v.calories
    }
    dinnerIngredients.forEach((v,i) => {dinnerIngredientsAsHTML+=`<li>${v}</li>`})
    dinnerDetails=`<p>Ingredients Required:</p><p class='ingredients'><ul>${dinnerIngredientsAsHTML}</ul></p><p>Steps to cook:</p><p class='instructions'>${dinnerInstructions}</p><p>Calories per Serving(1 Bowl):</p><p class='calories'>${dinnerCalories} Kcal</p>`
    document.querySelector('.dinner-details').innerHTML=dinnerDetails
    tempdinnerIngredientsAsHTML=dinnerIngredientsAsHTML
    dinnerIngredientsAsHTML=''
    tempdinnerIngredients=dinnerIngredients
})
}

// ##########################################################################################################################################################


// localStorage.removeItem('date')
// localStorage.removeItem('data')  // testing purpose
// localStorage.removeItem('ing')

//creating a localstorage loop so the the lists will be updated every reload

let ingredientslist=JSON.parse(localStorage.getItem('ing'))
let datelist=JSON.parse(localStorage.getItem('date'));
let tableList=JSON.parse(localStorage.getItem('data'));

//#############################//################//##################//#####################//########################//######################//########################

// A condition to display the data every reload 

if (tableList != null)//if user uses the webpage the first time the lists will be null
{

let tabledata='';//created a variable for storing the data from the list every reload to display it to the client side every reload

for(let i=0;i<tableList.length;i++)
{
  tableitem=tableList[i]
  dateitem=datelist[i]
  tabledata+=tableitem[dateitem]
} // loop to write data into the variable


if (location.pathname == 'https://fakeandrewa.github.io/MealPlanner_GroceryList_Generator/')//to check if its homepage

{

document.querySelector('.datafromjs').innerHTML=tabledata //For client side

}


if (JSON.parse(localStorage.getItem('date')).length==0)
{
  document.querySelector('.datafromjs').innerHTML='<p style="text-align: center;">Create A Plan to display</p>'//default message to display in the start
}
}

//#############################//################//##################//#####################//########################//######################//########################

//From here on i have used date to manipulate the data to my extent
//function to create table and storing it in localstorage so it can be used every reload

function createTheDataTable()
{
  
 date=document.querySelector('.date').value //getting date after clicking the create button
 
 if(date) //if there is no date the whole function will not run
 {

  if (tableList==null) // for the first users the lists will be null to make updation we have changed it empty array
  {
    tableList=[]
    datelist=[]
    ingredientslist=[]
  }

  // for(let i=0;i<datelist.length;i++)
  // { 
  //   if(date===datelist[i])
  //   {
  //   datelist.splice(i,1)
  //   tableList.splice(i,1)
  //   console.log('hello')
  //   }
    
  // }

  ingredientslist.push({content:[tempbreakfastIngredients,templunchIngredients,tempdinnerIngredients]})
 
  datelist.push(date) // date will be pushed into its list for future use

// all 8 combination of selection of menus , to make sure the data is stored accurately as table tags

if(breakfastMenu && !lunchMenu && !dinnerMenu)
  {
    tableList.push({[`${date}`]:
  `<div class="table-content">
  <div class='table-div'>
    <table border="2" >
      <thead>
        <tr>
          <th>Date</th>
          <th>Menu</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="11">${date}</td>
          <td rowspan="3">${breakfastMenu}</td>
          <td>${breakfastIngredients}</td>
        </tr>
        <tr>
          <td>${breakfastInstructions}</td>
        </tr>
        <tr>
          <td>${breakfastCalories}Kcal</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2">Total Calories</td>
            <td>${breakfastCalories+dinnerCalories+lunchCalories}Kcal</td>
            <td><button class='${date}' style="display:inline; background-color:Red" onclick="removeFromTable(${date});">X</button></td>
          </tr>
        </tfoot>
    </table>
    </div>

    <div class='printable'>
    <p class='GLtitle'>GROCERY LIST</p>
    <p>${breakfastMenu}</p>
    <p><ul>${tempbreakfastIngredientsAsHTML}</ul></p>
    <p>${lunchMenu}</p>
    <p><ul>${templunchIngredientsAsHTML}</ul></p>
    <p>${dinnerMenu}</p>
    <p><ul>${tempdinnerIngredientsAsHTML}</ul></p>
    <button onclick="goToPrintPage(${date})">Print me</button>
    </div>

</div>
<hr class='horizontalbreak' style="border: 3px solid green; border-radius: 50px;"> `})
  }
else if(breakfastMenu && lunchMenu && dinnerMenu)
{
  tableList.push({[`${date}`]:
  `<div class="table-content">
  <div class='table-div'>
    <table border="2" >
      <thead>
        <tr>
          <th>Date</th>
          <th>Menu</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="11">${date}</td>
          <td rowspan="3">${breakfastMenu}</td>
          <td>${breakfastIngredients}</td>
        </tr>
        <tr>
          <td>${breakfastInstructions}</td>
        </tr>
        <tr>
          <td>${breakfastCalories}Kcal</td>
        </tr>
        <tr>
          <td rowspan="4">${lunchMenu}</td>
        </tr>
        <tr>
          <td>${lunchIngredients}</td>
        </tr>
        <tr>
          <td>${lunchInstructions}</td>
        </tr>
        <tr>
          <td>${lunchCalories}Kcal</td>
        </tr>
        <tr>
          <td rowspan="4">${dinnerMenu}</td>
        </tr>
        <tr>
          <td>${dinnerIngredients}</td>
        </tr>
        <tr>
          <td>${dinnerInstructions}</td>
        </tr>
        <tr>
          <td>${dinnerCalories}Kcal</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2">Total Calories</td>
            <td>${breakfastCalories+dinnerCalories+lunchCalories}Kcal</td>
            <td><button class='${date}' style="display:inline; background-color:Red" onclick="removeFromTable(${date});">X</button></td>
          </tr>
        </tfoot>
    </table>
    </div>

    <div class='printable'>
    <p class='GLtitle'>GROCERY LIST</p>
    <p>${breakfastMenu}</p>
    <p><ul>${tempbreakfastIngredientsAsHTML}</ul></p>
    <p>${lunchMenu}</p>
    <p><ul>${templunchIngredientsAsHTML}</ul></p>
    <p>${dinnerMenu}</p>
    <p><ul>${tempdinnerIngredientsAsHTML}</ul></p>
    <button onclick="goToPrintPage(${date})">Print me</button>
    </div>

</div>
<hr class='horizontalbreak' style="border: 3px solid green; border-radius: 50px;"> `})
}
else if(breakfastMenu && !lunchMenu && dinnerMenu)
{
  tableList.push({[`${date}`]:
  `<div class="table-content">
  <div class='table-div'>
    <table border="2" >
      <thead>
        <tr>
          <th>Date</th>
          <th>Menu</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="11">${date}</td>
          <td rowspan="3">${breakfastMenu}</td>
          <td>${breakfastIngredients}</td>
        </tr>
        <tr>
          <td>${breakfastInstructions}</td>
        </tr>
        <tr>
          <td>${breakfastCalories}Kcal</td>
        </tr>
        <tr>
          <td rowspan="4">${dinnerMenu}</td>
        </tr>
        <tr>
          <td>${dinnerIngredients}</td>
        </tr>
        <tr>
          <td>${dinnerInstructions}</td>
        </tr>
        <tr>
          <td>${dinnerCalories}Kcal</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2">Total Calories</td>
            <td>${breakfastCalories+dinnerCalories+lunchCalories}Kcal</td>
            <td><button class='${date}' style="display:inline; background-color:Red" onclick="removeFromTable(${date});">X</button></td>
          </tr>
        </tfoot>
    </table>
    </div>

    <div class='printable'>
    <p class='GLtitle'>GROCERY LIST</p>
    <p>${breakfastMenu}</p>
    <p><ul>${tempbreakfastIngredientsAsHTML}</ul></p>
    <p>${lunchMenu}</p>
    <p><ul>${templunchIngredientsAsHTML}</ul></p>
    <p>${dinnerMenu}</p>
    <p><ul>${tempdinnerIngredientsAsHTML}</ul></p>
    <button onclick="goToPrintPage(${date})">Print me</button>
    </div>

</div>
<hr class='horizontalbreak' style="border: 3px solid green; border-radius: 50px;"> `})
}
else if(breakfastMenu && lunchMenu && !dinnerMenu)
{
  tableList.push({[`${date}`]:
  `<div class="table-content">
  <div class='table-div'>
    <table border="2" >
      <thead>
        <tr>
          <th>Date</th>
          <th>Menu</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="11">${date}</td>
          <td rowspan="3">${breakfastMenu}</td>
          <td>${breakfastIngredients}</td>
        </tr>
        <tr>
          <td>${breakfastInstructions}</td>
        </tr>
        <tr>
          <td>${breakfastCalories}Kcal</td>
        </tr>
        <tr>
          <td rowspan="4">${lunchMenu}</td>
        </tr>
        <tr>
          <td>${lunchIngredients}</td>
        </tr>
        <tr>
          <td>${lunchInstructions}</td>
        </tr>
        <tr>
          <td>${lunchCalories}Kcal</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2">Total Calories</td>
            <td>${breakfastCalories+dinnerCalories+lunchCalories}Kcal</td>
            <td><button class='${date}' style="display:inline; background-color:Red" onclick="removeFromTable(${date});">X</button></td>
          </tr>
        </tfoot>
    </table>
    </div>

    <div class='printable'>
    <p class='GLtitle'>GROCERY LIST</p>
    <p>${breakfastMenu}</p>
    <p><ul>${tempbreakfastIngredientsAsHTML}</ul></p>
    <p>${lunchMenu}</p>
    <p><ul>${templunchIngredientsAsHTML}</ul></p>
    <p>${dinnerMenu}</p>
    <p><ul>${tempdinnerIngredientsAsHTML}</ul></p>
    <button onclick="goToPrintPage(${date})">Print me</button>
    </div>

</div>
<hr class='horizontalbreak' style="border: 3px solid green; border-radius: 50px;"> `})
}
else if(!breakfastMenu && lunchMenu && dinnerMenu)
{
  tableList.push({[`${date}`]:
  `<div class="table-content">
  <div class='table-div'>
    <table border="2" >
      <thead>
        <tr>
          <th>Date</th>
          <th>Menu</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="11">${date}</td>
          <td rowspan="3">${lunchMenu}</td>
          <td>${lunchIngredients}</td>
        </tr>
        <tr>
          <td>${lunchInstructions}</td>
        </tr>
        <tr>
          <td>${lunchCalories}Kcal</td>
        </tr>
        <tr>
          <td rowspan="4">${dinnerMenu}</td>
        </tr>
        <tr>
          <td>${dinnerIngredients}</td>
        </tr>
        <tr>
          <td>${dinnerInstructions}</td>
        </tr>
        <tr>
          <td>${dinnerCalories}Kcal</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2">Total Calories</td>
            <td>${breakfastCalories+dinnerCalories+lunchCalories}Kcal</td>
            <td><button class='${date}' style="display:inline; background-color:Red" onclick="removeFromTable(${date});">X</button></td>
          </tr>
        </tfoot>
    </table>
    </div>

    <div class='printable'>
    <p class='GLtitle'>GROCERY LIST</p>
    <p>${breakfastMenu}</p>
    <p><ul>${tempbreakfastIngredientsAsHTML}</ul></p>
    <p>${lunchMenu}</p>
    <p><ul>${templunchIngredientsAsHTML}</ul></p>
    <p>${dinnerMenu}</p>
    <p><ul>${tempdinnerIngredientsAsHTML}</ul></p>
    <button onclick="goToPrintPage(${date})">Print me</button>
    </div>

</div>
<hr class='horizontalbreak' style="border: 3px solid green; border-radius: 50px;"> `})
}
else if(!breakfastMenu && lunchMenu && !dinnerMenu)
{
  tableList.push({[`${date}`]:
  `<div class="table-content">
  <div class='table-div'>
    <table border="2" >
      <thead>
        <tr>
          <th>Date</th>
          <th>Menu</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="11">${date}</td>
          <td rowspan="3">${lunchMenu}</td>
          <td>${lunchIngredients}</td>
        </tr>
        <tr>
          <td>${lunchInstructions}</td>
        </tr>
        <tr>
          <td>${lunchCalories}Kcal</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2">Total Calories</td>
            <td>${breakfastCalories+dinnerCalories+lunchCalories}Kcal</td>
            <td><button class='${date}' style="display:inline; background-color:Red" onclick="removeFromTable(${date});">X</button></td>
          </tr>
        </tfoot>
    </table>
    </div>

    <div class='printable'>
    <p class='GLtitle'>GROCERY LIST</p>
    <p>${breakfastMenu}</p>
    <p><ul>${tempbreakfastIngredientsAsHTML}</ul></p>
    <p>${lunchMenu}</p>
    <p><ul>${templunchIngredientsAsHTML}</ul></p>
    <p>${dinnerMenu}</p>
    <p><ul>${tempdinnerIngredientsAsHTML}</ul></p>
    <button onclick="goToPrintPage(${date})">Print me</button>
    </div>

</div>
<hr class='horizontalbreak' style="border: 3px solid green; border-radius: 50px;"> `})
}
else if(!breakfastMenu && !lunchMenu && dinnerMenu)
{
  tableList.push({[`${date}`]:
  `<div class="table-content">
  <div class='table-div'>
    <table border="2" >
      <thead>
        <tr>
          <th>Date</th>
          <th>Menu</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="11">${date}</td>
          <td rowspan="3">${dinnerMenu}</td>
          <td>${dinnerIngredients}</td>
        </tr>
        <tr>
          <td>${dinnerInstructions}</td>
        </tr>
        <tr>
          <td>${dinnerCalories}Kcal</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2">Total Calories</td>
            <td>${breakfastCalories+dinnerCalories+lunchCalories}Kcal</td>
            <td><button class='${date}' style="display:inline; background-color:Red" onclick="removeFromTable(${date});">X</button></td>
          </tr>
        </tfoot>
    </table>
    </div>

    <div class='printable'>
    <p class='GLtitle'>GROCERY LIST</p>
    <p>${breakfastMenu}</p>
    <p><ul>${tempbreakfastIngredientsAsHTML}</ul></p>
    <p>${lunchMenu}</p>
    <p><ul>${templunchIngredientsAsHTML}</ul></p>
    <p>${dinnerMenu}</p>
    <p><ul>${tempdinnerIngredientsAsHTML}</ul></p>
    <button onclick="goToPrintPage(${date})">Print me</button>
    </div>

</div>
<hr class='horizontalbreak' style="border: 3px solid green; border-radius: 50px;"> `})
}
else if(!breakfastMenu && !lunchMenu && !dinnerMenu)
{
  alert('NO data to create')
}

//#############################//################//##################//#####################//########################//######################//########################

if (tableList.length !=0) // to make sure there is data to be stored in localstorage
{
localStorage.setItem('date',JSON.stringify(datelist))
localStorage.setItem('data',JSON.stringify(tableList))
localStorage.setItem('ing',JSON.stringify(ingredientslist))
}
 }
 else
 {
  alert('Enter everyting before creating')
 }
location.reload();//to reload the page
}

//#############################//################//##################//#####################//########################//######################//########################

//function to remove the data from the local storage

function removeFromTable(date)
{
  //problem was that date i got from the onclick was like (2023-12-01) , therefore the js thought it as arithmetic operation (date was 2010) ,so
  //to get the actual date i reverse engineered it from datelist
  //so its the way i did it 
  let datemf=[];
  let flag=0;
  let flagpos=0;

  datelist=JSON.parse(localStorage.getItem('date'));
  tableList=JSON.parse(localStorage.getItem('data'));
  ingredientslist=JSON.parse(localStorage.getItem('ing'))
  
for(let i =0;i<datelist.length;i++)
  {
    datemf.push(datelist[i].split('-'))
}
  datemf.forEach((v,i) => {
    v.forEach((a,n) => {
    if(n === 0)
    {
      flag += Number(a)
    }
    else
    {
      flag -= Number(a)
    }
  
  });
  if(flag === date)
  {
    flagpos=i
  }
  else
  {
    flag=0
  }
})

date=''

for(let i=0;i<datemf[flagpos].length;i++)
{ 
  if (i===0)
  {
  date+=datemf[flagpos][i]
  }
  else
  {
    date+="-"+datemf[flagpos][i]
  }
}

// got the date as the original format

// now using the date I removed the datas from all list 

for(let i=0;i<datelist.length;i++)
{
    if (datelist[i] === date )
    {
      datelist.splice(i,1)
    }
}

tableList.forEach((v,i) =>{delete v[date]})
ingredientslist.forEach((a,n) => {delete a[date]})

for(let i=0;i<tableList.length;i++)
{
 
  if(Object.keys(tableList[i]).length==0)
  {
    console.log('working')
    tableList.splice(i,1)
    ingredientslist.splice(i,1)
  }
}
 
// and updated the local storage

localStorage.setItem('data',JSON.stringify(tableList))
localStorage.setItem('date',JSON.stringify(datelist))
localStorage.setItem('ing',JSON.stringify(ingredientslist))

//for error handling if somehow a error pops after updation

if(!JSON.parse(localStorage.getItem('date')) && !JSON.parse(localStorage.getItem('data'))) 
{
localStorage.removeItem('date')
localStorage.removeItem('data')
localStorage.removeItem('ing')
}

location.reload();//reloads page
}

//#############################//################//##################//#####################//########################//######################//########################

function goToPrintPage(date)
{
//to find the date from the integer value
 
  console.log(date)
  let datemf=[];
  let flag=0;
  let flagpos=0;
  let pos=0;
  let printable='';
  datelist=JSON.parse(localStorage.getItem('date'));
   
for(let i =0;i<datelist.length;i++)
{
  datemf.push(datelist[i].split('-'))
}

datemf.forEach((v,i) => {
  v.forEach((a,n) => {
  if(n === 0)
  {
    flag += Number(a)
  }
  else
  {
    flag -= Number(a)
  }

});
if(flag === date)
{
  flagpos=i
}
else
{
  flag=0
}
})
date=''

for(let i=0;i<datemf[flagpos].length;i++)
{ 
if (i===0)
{
date+=datemf[flagpos][i]
}
else
{
  date+="-"+datemf[flagpos][i]
}
}


//finding the position of ingredients in the list

for(let i=0; i<datelist.length;i++)
{
  if(datelist[i]==date)
  {
    pos=i
  } 
}
const url='https://fakeandrewa.github.io/MealPlanner_GroceryList_Generator/table.html'//locating the printing page
printable=ingredientslist[pos].content
window.location.href = `${url}?key1=${JSON.stringify(printable)}`;//going to the page with the data for printing

}
 

//#############################//################//##################//#####################//########################//######################//########################

//for printing page on loading the function will takeplace

function fetchTheData()
{
  let gro1=''
  let gro2=''
  let gro3=''
  let pr=''
  const urlParams = new URLSearchParams(window.location.search);//to search the path for data
  let key1 = urlParams.get('key1');//separating the data
  key1=JSON.parse(key1)//changing the data back to its datatype
  key1[0].forEach((v,i) => {gro1+=`<li>${v}</li>`})
  key1[1].forEach((v,i) => {gro2+=`<li>${v}</li>`})
  key1[2].forEach((v,i) => {gro3+=`<li>${v}</li>`})
  
  pr=`<p style="text-align:center;font-size:20px">Grocery List</p>
  <p style="font-size:16px"><ul>${gro1}</ul></p>
  <p style="font-size:16px"><ul>${gro2}</ul></p>
  <p style="font-size:16px"><ul>${gro3}</ul></p>
  `
  document.querySelector('.printithere').innerHTML=pr //replacing the data on to the print page
  window.print()//printing

}

//#############################//################//##################//#####################//########################//######################//########################
