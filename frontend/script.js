const listContainer = document.getElementById("medicinesList");
const countElement = document.getElementById("medicineCount");
const avgElement = document.getElementById("averagePrice");

function loadMedicines() {
  listContainer.innerHTML = "";

  fetch("http://localhost:8000/medicines")
    .then((response) => response.json())
    .then((data) => {
      countElement.textContent = data.medicines.length;

      data.medicines.forEach((medicine) => {
        let name = medicine.name;
        if (!name || name.trim() === "") {
          name = "Unnamed Medicine";
        }

        let price = "N/A";
        if (medicine.price !== null && medicine.price !== undefined) {
          price = "$" + medicine.price.toFixed(2);
        }

        const card = `
          <div class="medicineCard">
            <h3>${name}</h3>
            <p>Price: ${price}</p>
          </div>
        `;

        listContainer.innerHTML += card;
      });

      loadAveragePrice();
    })
    .catch((error) => {
      console.log("Error loading medicines:", error);
      listContainer.innerHTML = "<p>Could not load medicines.</p>";
    });
}

function loadAveragePrice() {
  fetch("http://localhost:8000/average_price")
    .then((response) => response.json())
    .then((data) => {
      avgElement.textContent = "$" + data.average_price.toFixed(2);
    })
    .catch((error) => {
      console.log("Error loading average:", error);
      avgElement.textContent = "N/A";
    });
}

document
  .getElementById("addMedicineForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("medicineName").value;
    const price = document.getElementById("medicinePrice").value;
    const messageElement = document.getElementById("formMessage");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);

    fetch("http://localhost:8000/create", { method: "POST", body: formData })
      .then((response) => response.json())
      .then((data) => {
        messageElement.textContent = "Medicine added!";
        messageElement.style.color = "green";

        document.getElementById("addMedicineForm").reset();

        loadMedicines();
      })
      .catch((error) => {
        messageElement.textContent = "Error adding medicine";
        messageElement.style.color = "red";
        console.log("Error:", error);
      });
  });

loadMedicines();
