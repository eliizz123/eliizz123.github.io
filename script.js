function showSection(sectionId) {
    // Sembunyikan semua section
    let sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add("active");
}
