const tabs = ["直播", "黑料", "约炮", "暗网", "游戏", "萝莉", "乱伦", "女神", "换妻", "动漫"];

const container = document.getElementById('tab-list');

tabs.forEach((text, index) => {
    const button = document.createElement("button");
    button.className = "list-btn" + (index === 0 ? " active" : "");
    button.textContent = text;
    container.appendChild(button);
});