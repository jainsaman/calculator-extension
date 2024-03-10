chrome.runtime.onMessage.addListener((message, sender, response) => {
  if (message.type === "AMAZON") {
    if (document.readyState === "complete") {
      fetchProductDetails();
    } else {
      document.addEventListener("DOMContentLoaded", fetchProductDetails);
    }
  }
});

const fetchProductDetails = async () => {
  const productPrice =
    document.querySelector(".apexPriceToPay").firstElementChild;

  const productDetails = document.querySelectorAll(".prodDetTable tr th");

  if (productPrice && productDetails) {
    const price = productPrice.innerText.trim();
    const dimensions = getValueFromTable(
      productDetails,
      "Product Dimensions"
    ).innerText.trim();
    const weight = getValueFromTable(
      productDetails,
      "Item Weight"
    ).innerText.trim();
    const firstDate = getValueFromTable(
      productDetails,
      "Date First Available"
    ).innerText.trim();
    console.log(productPrice);
    console.log("Price:", price);
    console.log(productDetails);
    console.log("Dimensions:", dimensions);
    console.log("Weight:", weight);
    console.log("First Date:", firstDate);

    chrome.runtime.sendMessage({
      type: "PRODUCT",
      data: {
        price,
        dimensions,
        weight,
        firstDate,
      },
    });
  } else {
    console.log("Price element not found");
  }
};

function getValueFromTable(elements, innerText) {
  for (let element of elements) {
    if (element.innerText.trim() === innerText.trim()) {
      return element.nextElementSibling;
    }
  }
}
