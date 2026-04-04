document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const closeModal = document.querySelector(".close-modal");
    const cards = document.querySelectorAll(".design-card");

    cards.forEach(card => {
        card.onclick = function() {
            const img = this.querySelector("img");
            if (modal && modalImg) {
                // 1. Mobile-only vertical centering logic
                if (window.innerWidth <= 768) {
                    modal.style.display = "flex";
                } else {
                    modal.style.display = "block";
                }
                
                modalImg.src = img.src;

                // 2. FREEZE THE BACKGROUND
                document.body.classList.add("no-scroll");
            }
        };
    });

    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = "none";
            
            // 3. UNFREEZE THE BACKGROUND
            document.body.classList.remove("no-scroll");
        };
    }

    // Optional: Close modal if user clicks the dark background
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    };
});