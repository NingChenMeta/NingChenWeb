document.getElementById('nextButton').addEventListener('click', () => {
    fetch('article.txt')
        .then(response => response.text())
        .then(text => {
            displayNextPart(text);
        });
});

let currentPart = 0;
let isArticleLoaded = false;
let articleParts = [];

function displayNextPart(text) {
    if (!isArticleLoaded) {
        articleParts = text.split("\n\n"); // 假设每个段落由两个换行符分隔
        isArticleLoaded = true;
    }

    if (currentPart < articleParts.length) {
        const chatBox = document.getElementById('chatBox');
        const newMessage = document.createElement("div");
        newMessage.classList.add("chat-message");

        const avatar = document.createElement("div");
        avatar.classList.add("avatar");

        const nickname = document.createElement("span");
        nickname.classList.add("nickname");
        nickname.innerText = "昵称"; // 替换为实际昵称

        const message = document.createElement("span");
        message.classList.add("message");
        message.innerText = articleParts[currentPart];

        newMessage.appendChild(avatar);
        newMessage.appendChild(nickname);
        newMessage.appendChild(message);
        chatBox.insertBefore(newMessage, chatBox.firstChild);

        currentPart++;
    }

    if (currentPart >= articleParts.length) {
        document.getElementById('nextButton').disabled = true;
        document.getElementById('nextButton').innerText = "已结束";
    }
}
