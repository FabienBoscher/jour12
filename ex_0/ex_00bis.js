function check_route(url){
    fetch(url).then((response) => {
        if (response.ok){
            response.json()
            return console.log("all is good")
        }
    }).catch((error) =>{
        console.log("shit happens")
    })

}


check_route("https://images.dog.ceo/breeds/tervuren/shadow_and_frisbee.jpg")