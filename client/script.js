const url = "http://localhost:3000/cars";

window.addEventListener("load", fetchData);

function fetchData() {
  fetch(url)
    .then((result) => result.json())
    .then((cars) => {
      if (cars.length > 0) {
        let html = `<ul class="w-3/4 my-2 mx-auto flex flex-wrap gap-2 justify-center">`;
        cars.forEach((car) => {
          html += `
        <li
          class="bg-${car.color}-200 basis-1/4 text-${car.color}-900 p-2 rounded-md border-2 border-${car.color}-400 flex-col justify-between">
          <h3 class="text-xl font-mono">${car.regnr}</h3>
          <p class="text-sm font-bold">${car.marke} ${car.model}</p>
          <div>
            <button
              class="border border-${car.color}-300 hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2" onclick="setCurrentCar(${car.id})">
              Edit
            </button>
            <button class="border border-${car.color}-300 hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2" onclick="deleteCar(${car.id})">
              Delete
            </button>
          </div>
        </li>`;
        });
        html += `</ul>`;

        const listContainer = document.getElementById("listContainer");
        listContainer.innerHTML = "";
        listContainer.insertAdjacentHTML("beforeend", html);
      }
    });
}

function setCurrentCar(id) {
  fetch(`${url}/${id}`)
    .then((result) => result.json())
    .then((car) => {
      carForm.regnr.value = car.regnr;
      carForm.marke.value = car.marke;
      carForm.model.value = car.model;
      carForm.color.value = car.color;

      localStorage.setItem("currentId", car.id);
    });
}
function showMessage(text) {
  document.getElementById("messageText").textContent = text;

  const modal = new bootstrap.Modal(document.getElementById("messageModal"));

  modal.show();
}

function deleteCar(id) {
  fetch(`${url}/${id}`, { method: "DELETE" }).then(() => {
    showMessage("Car deleted successfully");
    fetchData();
  });
}

carForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const serverCarObject = {
    regnr: "",
    marke: "",
    model: "",
    color: "",
  };
  serverCarObject.regnr = carForm.regnr.value;
  serverCarObject.marke = carForm.marke.value;
  serverCarObject.model = carForm.model.value;
  serverCarObject.color = carForm.color.value;

  const id = localStorage.getItem("currentId");
  if (id) {
    serverCarObject.id = id;
  }

  const request = new Request(url, {
    method: serverCarObject.id ? "PUT" : "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(serverCarObject),
  });

  fetch(request).then(() => {
    showMessage(
      serverCarObject.id
        ? "Car updated successfully"
        : "Car created successfully"
    );

    fetchData();
    localStorage.removeItem("currentId");
    carForm.reset();
  });
}
