export type RecipeCardType={
    results: RecipeResultsType,
    offset:number,
    number:number,
    totalResults:number,
}

export type RecipeResultsType = {
    [x: string]: any
    id:number,
    title:string,
    image:string,
    imageType:string,
}