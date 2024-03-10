let productDetails = {};

chrome.runtime.onMessage.addListener((message, sender, response) => {
  if (message.type === "PRODUCT") {
    productDetails = message.data;
    console.log(productDetails);
    if (document.readyState === "complete") {
      updateProductDetails(productDetails);
    } else {
      document.addEventListener(
        "DOMContentLoaded",
        updateProductDetails(productDetails)
      );
    }
  }
});

function updateProductDetails(data) {
  const priceElement = document.getElementById("ProductPrice");
  const weightElement = document.getElementById("ProductWeight");
  const firstDateElement = document.getElementById("FirstDate");
  const sizeElement = document.getElementById("ProductSize");

  const imperialSystem = document.getElementById("imperialBtn");
  const metricSystem = document.getElementById("metricBtn");

  const productSize = formatDimensions(data.dimensions);

  priceElement.setAttribute("value", data.price.split("$")[1]);
  weightElement.innerText = data.weight.split(" ")[0];
  firstDateElement.innerText = data.firstDate;
  sizeElement.innerText = productSize;

  imperialSystem.addEventListener("click", () => {
    console.log("hello");
    const weight = weightElement.innerText;
    const convertedWeight = metricToImperial("weight", weight);
    weightElement.innerText = convertedWeight;
  });

  metricSystem.addEventListener("click", () => {
    console.log("hi");
    const weight = weightElement.innerText;
    const convertedWeight = imperialToMetric("weight", weight);
    weightElement.innerText = convertedWeight;
  });

  const value = priceElement.getAttribute("value");
  console.log(value);
}

function formatDimensions(dimensions) {
  const formattedDimensions = dimensions.replace(/[^\dx.]+/g, " ").trim();
  return formattedDimensions;
}

function imperialToMetric(type, value) {
  if (type === "weight") {
    return (value * 0.453592).toFixed(2);
  } else if (type === "dimensions") {
    return value
      .split(" x ")
      .map((val) => (val * 2.54).toFixed(2))
      .join(" x ");
  }
}

function metricToImperial(type, value) {
  if (type === "weight") {
    return (value * 2.20462).toFixed(2);
  } else if (type === "dimensions") {
    return value1
      .split(" x ")
      .map((val) => (val / 2.54).toFixed(2))
      .join(" x ");
  }
}
