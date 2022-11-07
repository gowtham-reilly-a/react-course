// fetch("https://api.unsplash.com/photos", {
//   method: "GET",
//   headers: {
//     Authorization: "Client-ID RUFqDG7V1i-I5rLtJ_oeMKwXFI9kifcqxwNRYm427h4",
//   },
// })
//   .then((data) => {
//     console.log(data);
//     return data.json();
//   })
//   .then((photos) => {
//     console.log(photos);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async/await
const fetchPhotos = async () => {
  const data = await fetch("https://api.unsplash.com/photos", {
    method: "GET",
    headers: {
      Authorization: "Client-ID YOUR_ACCESS_KEY",
    },
  });

  console.log(data);

  const photos = await data.json();

  console.log(photos);
};

fetchPhotos();

// async function addMe() {
//   await fetch();

//   console.log("add me");
// }

// const findMe = async function () {
//   await fetch();
//   console.log("Find me");
// };

// axios.get("https://api.unsplash.com/photos", {
//   headers: {
//     Authorization: "Client-ID RUFqDG7V1i-I5rLtJ_oeMKwXFI9kifcqxwNRYm427h4",
//   },
// });

// Promise

// Make a request to api
// Client device to Server

// console.log(data);

// Optional chaining

const hotel = {
  name: "Cockraco",
};

console.log(hotel?.hours?.close);
