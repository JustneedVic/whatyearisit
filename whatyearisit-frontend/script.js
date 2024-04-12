fetch("https://whatyearisit-six.vercel.app/year")
    .then(resp => resp.json())
    .then(data => {
        console.log(data.year)
    })