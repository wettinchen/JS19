## JavaScript Chapter 19
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 19
   Quick Concept outline
   中文摘要說明與重點提問

###  1. JSON === JavaScript Object Notation
        
###  2. What is JSON and what is it used for?

###  3. Starting with a JavaScript Object
        指派 myObj，回傳 myObj；回傳 Dave；回傳 Hello!；回傳 myObj 的資料型態為 object

###  4. Convert a Javascript Object to JSON: JSON.stringify()
        宣告 sendJSON 將 myObj 的 key 和 value 回傳，

###  5. Comparing the object to the stringified JSON
        比較結果

###  6. Where's the method? It's gone!
        value 為函數，JSON 不回傳 

###  7. JSON is definitely string data
        sendJSON 的資料型態為 string字串，沒有 key，sendJSON.name 會回傳 undefined

###  8. Convert JSON to a Javascript Object: JSON.parse()
        宣告 receiveJSON 使用 JSON.parse() 將 sendJSON 轉換為 object

###  9. It is an object again!

### 10. Our parsed object does not contain the method
        前面移除掉的方法 hello: function () {...}，不包含在使用 JSON.parse 還原的 object

### 11. A summary of the process: From object to JSON string to parsing JSON to create a new object