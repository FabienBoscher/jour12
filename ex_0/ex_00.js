async function my_fetch(url){
    const reponse = await fetch(url)
    let reponseJSON =await reponse.json()
    console.log(reponseJSON)
}

my_fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528")
