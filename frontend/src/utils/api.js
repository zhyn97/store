class Api {
  constructor({ adres }) {
    this.adres = adres;
  }

  getProducts() {
    return fetch(`${this.adres}/items`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(`Error : ${err.status}`);
      });
  }

  addProdustc(title, img, desc, category, price) {
    return fetch(`${this.adres}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        img: img,
        desc: desc,
        category: category,
        price: price,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(`Error : ${err.status}`);
      });
  }
}

const api = new Api({
  adres: "http://localhost:3000",
});

export default api;
