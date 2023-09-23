SELECT
    r.id,
    r.recipe_name,
    r.description
FROM
    recipes r
INNER JOIN
    recipes_to_categories rtc ON r.id = rtc.recipe_id
INNER JOIN
    recipe_categories c ON rtc.category_id = c.id
WHERE
    c.category IN ('Lunch');