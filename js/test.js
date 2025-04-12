function test(次数) {
    // 插入p标签
    for (var i = 0; i < 次数; i++) {
        var p = document.createElement("p");
        p.innerHTML = a.章节[i].章节链接;
        document.body.appendChild(p);
    }
}