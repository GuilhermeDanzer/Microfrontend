import faker from "faker"

const mount = el => {
  const cartText = `<div> You have ${faker.random.number()} items`

  el.innerHTML = cartText
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products")
  if (el) {
    mount(el)
  }
}

export { el }
