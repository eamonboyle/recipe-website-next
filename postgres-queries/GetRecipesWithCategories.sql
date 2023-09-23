SELECT
    r.id AS recipe_id,
    r.recipe_name AS recipe_name,
    r.description AS recipe_description,
    json_agg(c.category) AS categories
FROM
    recipes r
LEFT JOIN
    recipes_to_categories rtc ON r.id = rtc.recipe_id
LEFT JOIN
    recipe_categories c ON rtc.category_id = c.id
GROUP BY
    r.id, r.recipe_name, r.description;