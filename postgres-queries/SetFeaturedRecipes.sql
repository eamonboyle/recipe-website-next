UPDATE recipes
SET featured = true
WHERE id IN (
    SELECT id
    FROM recipes
    WHERE featured = false  -- Select recipes that are not already featured
    ORDER BY RANDOM()  -- Randomly order the results
    LIMIT 3  -- Limit the number of updated recipes to three
);