WITH category_recipes AS (
    SELECT c.id, c.category, c.slug, r.image_url,
           ROW_NUMBER() OVER (PARTITION BY c.category ORDER BY r.id) AS row_number
    FROM recipe_categories c
    LEFT JOIN recipes_to_categories rtc ON c.id = rtc.category_id
    LEFT JOIN recipes r ON rtc.recipe_id = r.id
)
SELECT 
	id, 
	category, 
	slug,
	COUNT(image_url) AS recipe_count, 
	MAX(image_url) AS image_url
FROM category_recipes
GROUP BY id, category, slug
ORDER BY recipe_count DESC
LIMIT 10;
