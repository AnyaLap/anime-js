const mainData = () => {
    fetch('https://anime-6f18c-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.anime);
        })
}

mainData()