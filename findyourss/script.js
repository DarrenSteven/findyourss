// Fungsi untuk menangani animasi bergulir
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth" // Menggunakan smooth behavior untuk animasi bergulir
      });
    }
  }
  
  // Event listener untuk setiap tombol di sidebar
  document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah default action dari link
        const targetId = link.getAttribute("href").substring(1); // Mengambil id dari href
        smoothScroll(targetId); // Memanggil fungsi smoothScroll dengan id target
      });
    });
  });
  