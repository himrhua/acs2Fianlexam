(function () {
  // new variable
  const aside = document.getElementById('aside')
  const dataPanel = document.getElementById('data-panel')
  const data = []
  const movieclass = {
    "1": "Action",
    "2": "Adventure",
    "3": "Animation",
    "4": "Comedy",
    "5": "Crime",
    "6": "Documentary",
    "7": "Drama",
    "8": "Family",
    "9": "Fantasy",
    "10": "History",
    "11": "Horror",
    "12": "Music",
    "13": "Mystery",
    "14": "Romance",
    "15": "Science Fiction",
    "16": "TV Movie",
    "17": "Thriller",
    "18": "War",
    "19": "Western"
  }
  let movieclass_number = null;//顯示電影類別控制項null全開
  const BASE_URL = 'https://movie-list.alphacamp.io'
  const INDEX_URL = BASE_URL + '/api/v1/movies/'
  const POSTER_URL = BASE_URL + '/posters/'
  displayclass(movieclass)
  axios.get(INDEX_URL).then((response) => {
    data.push(...response.data.results)
    displayDataList(data, movieclass_number)

  }).catch((err) => console.log(err))

  aside.addEventListener("click", function (event) {
    let number = (event.target.id)
    if (document.getElementsByClassName("active").length > 0) {
      document.getElementsByClassName("active")[0].classList.remove("active")
    }
    //console.log(event.target.classList)
    event.target.classList.add("active")
    displayDataList(data, number)
  })
  function displayclass(movieclass) {
    //建立左側
    console.log(movieclass)
    let htmllist = ''
    for (i in movieclass) {//建立電影類別
      //console.log(movieclass[i])
      htmllist += `
       <li class="list-group-item" id='${[i]}'>${movieclass[i]}</li>
      `
    }
    aside.innerHTML = htmllist
  }

  function displayDataList(data, movieclass_number) {
    //建立右側列表
    //console.log(data)
    let htmlContent = ''
    data.forEach(function (item, index) {
      let item_shoow = ''
      showlist = []
      for (i in item.genres) {
        var tag = (movieclass[item.genres[i]])
        item_shoow += `<span class="badge badge-light  m-1 " >${tag}</span>`
        showlist.push(item.genres[i].toString())
      }
      if (showlist.includes(movieclass_number) == false && movieclass_number != null) {
        return
      } else if (movieclass_number == null || showlist.includes(movieclass_number) == true) {
        htmlContent += `
        <div class="col-sm-3">
          <div class="card mb-2">
            <img class="card-img-top " src="${POSTER_URL}${item.image}" alt="Card image cap">
            <div class="card-body movie-item-body" style="padding-bottom: 5px;">
              <h6 class="card-title">${item.title}</h5>
            </div>
            <!-- "More" genres -->
            <div>      
            ${item_shoow}
            </div>
          </div>
        </div>     
      `}
    })
    dataPanel.innerHTML = htmlContent
  }
})()