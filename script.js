document.getElementById('nextButton').addEventListener('click', function() {
    fetch('article.txt')
        .then(response => response.text())
        .then(text => {
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
        let dialogBox = document.getElementById('dialogBox');
        let newParagraph = document.createElement("p");
        newParagraph.innerText = articleParts[currentPart];
        dialogBox.appendChild(newParagraph);

        currentPart++;
    } else {
        document.getElementById('nextButton').innerText = "已结束";
        document.getElementById('nextButton').disabled = true;
    }

    // 更新滚动位置，将其移至对话框的底部
    setTimeout(() => {
        dialogBox.scrollTop = dialogBox.scrollHeight;
    }, 0);
}
