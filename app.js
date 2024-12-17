const products = [
  {
    id: 1,
    name: "RGB gaming mouse ",
    price: "$200",
    description: "RGB gaming mouse :: enjoy your journey with our products",
  },
  {
    id: 2,
    name: "RGB gaming keyboard ",
    price: "$250",
    description: "RGB gaming keyboard :: enjoy your journey with our products",
  },
  {
    id: 3,
    name: "Anime mouse glass pad",
    price: "$20",
    description:
      "Anime mouse glass pad :: enjoy your journey with our products",
  },
  {
    id: 4,
    name: "bootable USB 128 GB",
    price: "$50",
    description: "bootable USB 128 GB :: enjoy your journey with our products",
  },
  {
    id: 5,
    name: "Gaming headset for PC",
    price: "$100",
    description:
      "Gaming headset for PC :: enjoy your journey with our products",
  },
  {
    id: 6,
    name: "comfortable chair ",
    price: "$1,110",
    description: "comfortable chair :: enjoy your journey with our products",
  },
  {
    id: 7,
    name: "UV rays protection glasses",
    price: "$20",
    description:
      "UV rays protection glasses :: enjoy your journey with our products",
  },
];
console.log(products)

let renderproducts = () => {
  let productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  products.map((product) => {
    const card = document.createElement("div");
    card.setAttribute("class", "products-card");

    card.innerHTML = `
        <h1>Id : ${product.id}</h1>
        <h3>${product.name}<h3/>
        <p>${product.price}</p>
        <p>${product.description}</p>
        <button class="delete-btn" data-id="${product.id}">Delete</button>
        `;
console.log(card)
    card.querySelector(".delete-btn").addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      const filteredProducts = products.filter(
        (product) => product.id !== productId
      );

      products.length = 0;
      products.push(...filteredProducts);
      renderproducts();
    });

    productContainer.appendChild(card);
  });

};
renderproducts();
