function openModal(name, plus, minus, counter, items) {
  document.getElementById("heroName").textContent = name;
  document.getElementById("heroPlus").textContent = plus;
  document.getElementById("heroMinus").textContent = minus;
  document.getElementById("heroCounter").textContent = counter;

  const itemBox = document.getElementById("heroItem");
  itemBox.innerHTML = "";

  items.forEach(item => {
    const img = document.createElement("img");
    img.src = "png/item/" + item + ".jpg";
    itemBox.appendChild(img);
  });

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* Dark / Light Mode */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

/* Filter Role */
document.getElementById("laneFilter").onchange = function () {
  const value = this.value;
  document.querySelectorAll(".role").forEach(role => {
    role.style.display =
      value === "all" || role.dataset.role === value
      ? "block"
      : "none";
  });
};
const filter = document.getElementById("laneFilter");

filter.onchange = function () {
  const value = this.value;

  document.querySelectorAll(".role").forEach(role => {
    role.style.display =
      value === "all" || role.dataset.role === value
      ? "block"
      : "none";
  });

  // Reset class warna
  filter.className = "";

  // Tambahkan class warna sesuai role
  filter.classList.add("role-" + value);
};

