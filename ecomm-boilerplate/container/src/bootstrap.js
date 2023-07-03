import { mount } from "products/ProductsIndex"
import { mount as mountCart } from "cart/CartShow"
console.log("hi there")
mount(document.querySelector("#devproducts"))
mountCart(document.querySelector("cartdiv"))
