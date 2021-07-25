/**
 * 登録処理を実行する.
 */
 function execute(){
    const textInput:HTMLInputElement = getHtmlInputElementById("input_pluralBox");
    var doneList:HTMLInputElement= getHtmlInputElementById("doneList");
    const text:string = textInput.value.trim();
    const output:HTMLInputElement = getHtmlInputElementById("output");
    var doneLists:string = '';


    // 何も入力されていない場合、処理しない
    if (text == '') {
        return;
    }
    else{
        doneLists = addList(text,doneList,textInput);
        output.addEventListener ('click', e => {
            outputFile(doneLists);
    
        });
    }

 }

/**
 * テキスト出力処理を実行する.
 */

 function outputFile(doneLists:string){
    const doneList:HTMLInputElement= getHtmlInputElementById("doneList");
    const content:string = doneLists

    const title:string = 'TEST.txt';
    const blobType:string = 'text/plain';

    const linkTagId:string = 'output';
    const linkTag:HTMLInputElement = <HTMLInputElement>document.getElementById(linkTagId);
    const linkTagAttr:Array<string> =  ['href','download'];
    
    var msSave = window.navigator;
   
    var stringObject = new Blob([content], { type: blobType });
    var objectURL = window.URL.createObjectURL(stringObject);  
   
    var UA = window.navigator.userAgent.toLowerCase();

    if(UA.indexOf('msie') != -1 || UA.indexOf('trident') != -1) {
    // IEの時はmsSaveOrOpenBlobかmsSaveBlobを利用します。
    window.navigator.msSaveOrOpenBlob(stringObject, title); 
    }
    else {  
    linkTag.setAttribute(linkTagAttr[0],objectURL);
    linkTag.setAttribute(linkTagAttr[1],title); 
    }
 }

/**
 * 指定したIDを持つエレメントを返す.
 * @param id エレメントID
 */
function getHtmlInputElementById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

/**
 * 入力がある場合、リストに追加して画面に出力して入力値を空にする.
 * @param text 入力された文字列
 */
function addList(text:string,doneList:HTMLInputElement,textInput:HTMLInputElement){
    // 要素作成
    const list = document.createElement('li');
    const done = document.createElement('done');
    const admire = document.createElement('admire')
    const button = document.createElement('button');
    
    list.classList.add('list-item');
    done.classList.add('done-text');
    done.textContent = text;
    
    // ボタン作成
    button.className = "btn btn-primary";
    button.textContent = '褒め';
    button.type = 'button';
    button.classList.add('admire-button');

    // リスト追加
    list.appendChild(done);
    list.appendChild(button);
    doneList.appendChild(list);

    // ボタン押下時の処理
    button.addEventListener ('click', e => {
        admire.className = "alert alertalert-primary";
        admire.classList.add('admire');
        admire.textContent = "褒め"
        list.removeChild(button);
        list.appendChild(admire); 
    });
    textInput.value = '';
    const doneLists:string = doneList.value;
    return doneLists;
}

/**
 * リストの中身をファイル出力の形式にする.
 * @param doneLists リストの中身
 */
 function makeContent(doneLists:string):string{
    var content:string = 'TEST'
    content = content + '\t'+ doneLists;
    
     
    return content;
 }

