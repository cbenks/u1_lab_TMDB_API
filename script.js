const API_KEY = 'd5cd03bc0077024eb108b836091293b4'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const search = document.querySelector('button')
const input = document.querySelector('input')
let movie = input.value
let newArr = []
const list = document.querySelector('.movie-list')
const ul = document.createElement('ul')
list.appendChild(ul)

search.addEventListener('click', async () => {
  movie = input.value
  let returns = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
  )
  let movies = returns.data.results
  console.log(returns)
  renderList(movies)
})

const renderList = (newArr) => {
  for (let i = 0; i < newArr.length; i++) {
    let title = document.createElement('li')
    title.innerHTML = newArr[i].title
    ul.appendChild(title)
  }
}
