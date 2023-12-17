document.getElementById("nextButton").addEventListener("click", () => {
  fetch("article.txt") // 假设文章内容存储在服务器上的 article.txt 文件中
    .then((response) => response.text())
    .then((text) => {
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
    const chatBox = document.getElementById("chatBox");
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");

    const messageContent = document.createElement("div");
    messageContent.classList.add("message-content");

    const nickname = document.createElement("div");
    nickname.classList.add("nickname");
    nickname.innerText = "宁晨"; // 昵称文本

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = articleParts[currentPart];

    messageContent.appendChild(nickname);
    messageContent.appendChild(message);
    chatMessage.appendChild(avatar);
    chatMessage.appendChild(messageContent);
    chatBox.appendChild(chatMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    currentPart++;
  }

  if (currentPart >= articleParts.length) {
    document.getElementById("nextButton").disabled = true;
    document.getElementById("nextButton").innerText = "已结束";
  }
}
