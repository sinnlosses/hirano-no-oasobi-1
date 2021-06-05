"use strict";
/**
 * 登録処理を実行する.
 */
function execute() {
    const textInput = getHtmlInputElementById("input_pluralBox");
    const doneList = getHtmlInputElementById("doneList");
    const text = textInput.value.trim();
    // 何も入力されていない場合、処理しない
    if (text == '') {
        return;
    }
    // 入力がある場合、リストに追加して画面に出力して入力値を空にする.
    const list = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    list.classList.add('list-item');
    span.textContent = text;
    span.classList.add('done-text');
    button.textContent = '削除';
    button.type = 'button';
    button.classList.add('delete-button');
    button.addEventListener('click', e => {
        const parentElem = e.target.closest("li");
        doneList.removeChild(parentElem);
    });
    list.appendChild(span);
    list.appendChild(button);
    doneList.appendChild(list);
    textInput.value = '';
}
/**
 * テキスト出力処理を実行する.
 */
function ouput() {
}
/**
 * 指定したIDを持つエレメントを返す.
 * @param id エレメントID
 */
function getHtmlInputElementById(id) {
    return document.getElementById(id);
}
function identifySplitCharacter(inputRow) {
    if (inputRow.split("\t").length >= 2) {
        return inputRow.split("\t");
    }
    else {
        return inputRow.split(" ");
    }
}
