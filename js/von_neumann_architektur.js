function openPopup() {
    const over =
        document.getElementById(
            "overlay"
        );
    const popDialog =
        document.getElementById(
            "popupDialog"
        );
    over.classList.toggle("hidden");
    popDialog.classList.toggle(
        "hidden"
    );
    popDialog.classList.toggle("visible")
    popDialog.style.opacity =
        popDialog.style.opacity ===
            "1"
            ? "0"
            : "1";
    

};