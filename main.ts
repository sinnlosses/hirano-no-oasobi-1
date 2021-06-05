/**
 * 登録処理を実行する.
 */
 function execute(){
    const textInput:HTMLInputElement = getHtmlInputElementById("input_pluralBox");
    const doneList:HTMLInputElement= getHtmlInputElementById("doneList");
    const text:string = textInput.value.trim()

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
    button.addEventListener ('click', e => {
        if (e.target == null){
            throw TypeError;
        }
        const target = e.target as HTMLElement;
        doneList.removeChild(target.closest('li'));
    });

    list.appendChild(span);
    list.appendChild(button);
    doneList.appendChild(list);

    textInput.value = '';
 }




/**
 * テキスト出力処理を実行する.
 */
 function ouput():void{

 }



/**
 * 指定したIDを持つエレメントを返す.
 * @param id エレメントID
 */
function getHtmlInputElementById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function identifySplitCharacter(inputRow:string):string[]{
    if (inputRow.split("\t").length >= 2){
        return inputRow.split("\t");
    } else {
        return inputRow.split(" ");
    }
}