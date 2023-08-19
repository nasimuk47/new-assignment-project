document.addEventListener("DOMContentLoaded", function () {
    const cardElements = document.querySelectorAll(".card");

    const addingCardName = document.getElementById("adding-card-name");

    const itemTotalPrice = document.getElementById("item-total-price");

    let totalPrice = 0;

    cardElements.forEach((card) => {
        card.addEventListener("click", function () {
            const cardTitle = card.querySelector(".card-title").textContent;
            const cardPrice = parseFloat(
                card.querySelector("#item-element-price").textContent
            );

            const cardNameParagraph = document.createElement("p");
            cardNameParagraph.textContent = cardTitle;

            addingCardName.appendChild(cardNameParagraph);

            totalPrice += cardPrice;

            itemTotalPrice.textContent = `Total price: ${totalPrice.toFixed(
                2
            )}`;
        });
    });
});
