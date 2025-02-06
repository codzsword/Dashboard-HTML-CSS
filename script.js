// Sidebar Toggle
const hamburger = document.querySelector(".toggle-btn");
const toggler = document.querySelector("#icon");
hamburger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
  toggler.classList.toggle("bxs-chevrons-right");
  toggler.classList.toggle("bxs-chevrons-left");
});

// Toggle Sidebar Dropdown

const items = document.querySelectorAll(".has-dropdown");

function toggle() {
  const itemToggle = this.classList.contains("active");

  for (i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }

  if (!itemToggle) {
    this.classList.add("active");
  }
}

items.forEach((item) => item.addEventListener("click", toggle));

// User link dropdown

const userProfile = document.querySelector(".user-link");

userProfile.addEventListener("click", function () {
  document.querySelector(".user-link-dropdown").classList.toggle("show");
});

// Chart.JS

const ctx = document.getElementById("bar-chart-grouped");

new Chart(ctx, {
  type: "doughnut",
  maintainAspectRatio: false,
  onResize: function () {
    alert("red");
  },
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

// Datatable.JS

let table = new DataTable("#main-table", {
  pageLength: 5,
});
