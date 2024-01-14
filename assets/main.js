'use strict';

const addButton = document.getElementById("add_button");
const deliteClick = (e) => {
    e.target.parentNode.parentNode.remove();
    //　TODO　削除ボタンのクリック処理を実装
}

const addClick = () => {
    if (document.getElementById("add_date").value === "") {
        alert("日付が設定されていません");
        return;
    };

    if (document.getElementById("add_text").value === "") {
        alert("内容が設定されていません")
        return;
    };


    //行のTR
    const newRow = document.createElement("tr");
    //日付の列
    const dateTd = document.createElement("td");
    //内容の列
    const contentTd = document.createElement("td");
    //削除の列
    const deliteTd = document.createElement("td");
    //削除ボタン
    const deliteBtn = document.createElement("input");
    deliteBtn.setAttribute("type", "button"); //要素に新しい属性を追加　type="button"
    deliteBtn.value = "remove";
    deliteBtn.onclick = deliteClick;

    //tdの中身を設定
    dateTd.innerText = document.getElementById("add_date").value;
    contentTd.innerText = document.getElementById("add_text").value;
    deliteTd.appendChild(deliteBtn);

    //TRへTDを追加
    newRow.appendChild(dateTd);
    newRow.appendChild(contentTd);
    newRow.appendChild(deliteTd);

    document.getElementById("table_body").appendChild(newRow);

}
window.onload = () => {
    addButton.onclick = addClick;
};