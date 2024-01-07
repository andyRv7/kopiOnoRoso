document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Temanggung",
        img: "1.1.jpg",
        price: 20000,
      },
      {
        id: 2,
        name: "Arabica Sidikalang",
        img: "2.1.jpg",
        price: 35000,
      },
      { id: 3, name: "Robusta Lampung", img: "3.1.jpg", price: 25000 },
      { id: 4, name: "Arabica Toraja", img: "4.1.jpg", price: 45000 },
      { id: 5, name: "Robusta Flores", img: "5.1.jpg", price: 30000 },
    ],
  }));
});
