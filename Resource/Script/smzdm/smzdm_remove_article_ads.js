/*
脚本引用https://raw.githubusercontent.com/linuszlx/JS/main/Smzdm/smzdm-sq.js
移除文章广告
*/
//2023-06-18

let body = JSON.parse($response.body);
 if (body.data.hasOwnProperty("rows") == true) {body['data']['rows']['0'] = [];};
$done({body: JSON.stringify(body)});
