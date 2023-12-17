document.getElementById("nextButton").addEventListener("click", function () {
  fetch("article.txt")
    .then((response) => response.text())
    .then((text) => {
      let articleParts = text.split("\n\n"); // 假设每个段落由两个换行符分隔
      displayNextPart(articleParts);
    });
});

let currentPart = 0;
let isArticleLoaded = false;
let articleParts = [];

function displayNextPart(parts) {
  if (!isArticleLoaded) {
    articleParts = parts;
    isArticleLoaded = true;
  }

  if (currentPart < articleParts.length) {
    let currentText = document.getElementById("dialogText").innerHTML;
    document.getElementById("dialogText").innerHTML =
      currentText + "<p>" + articleParts[currentPart] + "</p>";
    currentPart++;
  } else {
    document.getElementById("nextButton").innerText = "已结束";
    document.getElementById("nextButton").disabled = true;
  }
}
