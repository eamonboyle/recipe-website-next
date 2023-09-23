-- Create the table to store recipe categories
CREATE TABLE recipe_categories (
    id serial PRIMARY KEY,
    category varchar(255) NOT NULL,
	active boolean NOT NULL DEFAULT true
);

-- Insert data into the table
INSERT INTO recipe_categories (category) VALUES
    ('Breakfast'),
    ('Lunch'),
    ('Dinner'),
    ('Desserts'),
    ('Appetizers'),
    ('Salads'),
    ('Soups'),
    ('Beverages'),
    ('Vegetarian'),
    ('Vegan'),
    ('Gluten-Free'),
    ('Keto'),
    ('Paleo'),
    ('Mediterranean'),
    ('Asian'),
    ('Mexican'),
    ('Italian'),
    ('BBQ and Grilling'),
    ('Seafood'),
    ('Comfort Food'),
    ('Healthy'),
    ('Quick and Easy'),
    ('Budget-Friendly'),
    ('Holiday and Special Occasions'),
    ('Kid-Friendly'),
    ('International'),
    ('Slow Cooker'),
    ('One-Pot Meals'),
    ('Baking'),
    ('Grains and Pasta'),
    ('Side Dishes'),
    ('Snacks'),
    ('Healthy Bowls'),
    ('Fusion'),
    ('Breakfast Bowls'),
    ('Sandwiches and Wraps'),
    ('Low-Carb'),
    ('High-Protein'),
    ('Comfort Desserts'),
    ('Smoothies and Shakes');

-- Check the inserted data
SELECT * FROM recipe_categories;