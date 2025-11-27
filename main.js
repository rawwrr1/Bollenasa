document.addEventListener("DOMContentLoaded", function() {
  // Muat header
  fetch("/HTML/header.html")
    .then(response => {
      if (!response.ok) throw new Error("Gagal memuat header");
      return response.text();
    })
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(err => console.error("Error memuat header:", err));

  // Muat footer
  fetch("/HTML/footer.html")
    .then(response => {
      if (!response.ok) throw new Error("Gagal memuat footer");
      return response.text();
    })
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Error memuat footer:", err));
});