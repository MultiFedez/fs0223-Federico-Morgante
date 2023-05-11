let apiKey = "fo8jXn3LWNGMKaBZoe5tE2JsnkzycP7d1N8FTL43oZNk3clzPqbJ5P6x";
fetch("https://api.pexels.com/v1/search?query=cities", {
  headers: {
    Authorization: ["apiKey"],
  },
})
  .then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nell'esecuzione della richiesta");
    }
  })
  .then((data) => {
    console.log(data);
  });
