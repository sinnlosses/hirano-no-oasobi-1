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
    const done = document.createElement('done');
    const admire = document.createElement('admire')
    const button = document.createElement('button');
    
    list.classList.add('list-item');
    done.classList.add('done-text');
    done.textContent = text;
    
    

    button.className = "btn btn-primary";
    button.textContent = '褒め';
    button.type = 'button';
    button.classList.add('admire-button');
    button.addEventListener ('click', e => {
        admire.className = "flex flex2 text-danger";
        admire.classList.add('admire');
        admire.textContent = "褒め"

       
});
    list.appendChild(done);
    list.appendChild(admire);
    list.appendChild(button);

    doneList.appendChild(list);

    textInput.value = '';
 }

/**
 * テキスト出力処理を実行する.
 */
 function ouput(){

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