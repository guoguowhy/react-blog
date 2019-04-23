import 'whatwg-fetch'

export function addArticle(payload) {
  // fetch('http://localhost:3030/article/add', {
  //   method: 'POST',
  //   mode: "cors",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(payload)
  // })
  fetch('http://localhost:3030/article/add')
    .then(response => {
      console.log(response)
    })
}