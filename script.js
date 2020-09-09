const input = document.querySelector("#input")
const h1 = document.getElementsByTagName("h1")
const button = document.getElementsByTagName("button")


input.addEventListener("click", (e) => {

  for (let i = 1; i < h1.length; i++) {

    if (i == 1 && input.checked) {
      h1[i].innerHTML = "&dollar;199.99"

    } else if (i == 2 && input.checked) {
      h1[i].innerHTML = "&dollar;249.99"

    } else if (i == 3 && input.checked) {
      h1[i].innerHTML = "&dollar;399.99"
    } else {
      h1[1].innerHTML = "&dollar;19.99"
      h1[2].innerHTML = "&dollar;24.99"
      h1[3].innerHTML = "&dollar;39.99"
    }

  }
})