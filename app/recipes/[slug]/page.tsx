import RecipeComments from '@/components/recipe/recipe-comments';
import RecipeContent from '@/components/recipe/recipe-content';
import RecipeDescription from '@/components/recipe/recipe-description';
import RecipeHeader from '@/components/recipe/recipe-header';
import RecipeImage from '@/components/recipe/recipe-image';
import RecipeMetaData from '@/components/recipe/recipe-metadata';
import { Recipe_Full } from '@/types/recipe';

async function fetchRecipeData(endpoint: string) {
    const res = await fetch(`http://localhost:3000/api/recipes/bySlug/${endpoint}`);
    const data = await res.json();
    return data;
}

export default async function Page({ params }: { params: { slug: string } }) {

    const recipe: Recipe_Full = await fetchRecipeData(params.slug);

    return (
        <>
            <RecipeHeader recipe={recipe} />
            <RecipeDescription recipe={recipe} />
            <RecipeImage recipe={recipe} />
            <RecipeMetaData recipe={recipe} />
            <RecipeContent recipe={recipe} />
            <RecipeComments recipe={recipe} />
        </>
    )
}