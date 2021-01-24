学习笔记学习笔记

## Browser

URL -HTTP-> HTML -parse-> DOM -CSS computing-> DOM with CSS -layout-> DOM with position -render-> Bitmap


## Finite State Machine(FSM)

- Moore: 每个机器都有确定的下一个状态
- Mealy: 每个机器根据输入决定下一个状态


## IOS-OSI 七层网络模型

- 应用    - HTTP
- 表示    - HTTP
- 会话    - HTTP: require("http")
- 传输    - TCP/IP: require("net")
- 网络    - Internet
- 数据链路 - 4G/5G/WIFI
- 物理层   - 4G/5G/WIFI


## HTTP Request

POST / HTTP/1.1  (Request Line: Method Path Protocol)<br>
Host: 127.0.0.1  (Headers: multiple lines end with an empty line.)<br>
Content-Type: application/x-www-form-urlencoded<br>

field1=aaa&code=x%3D1 (Body: write in the format of Content-Type)<br>


## HTTP Response

HTTP/1.1 200 OK          (Status Line: Protocol StatusCode StatusText)<br>
Content-Type: text/html  (Headers: multiple lines end with an empty line.)<br>
Date: Mon, 23 Dec 2019 06:46:19 GMT<br>
Connection: keep-alive<br>
Transfer-Encoding: chunked<br>

26<br>                   (Body: chunked body start with a number and end with 0.)
&#60html>&#60body>&#60/body>&#60/html><br>
0<br>


## Toy Browser

- Request
  根据上文 HTTP Request 结构设计API，并实现 Request 类。<br>
  在 Request 构造器里收集必要信息，用 send 函数将收集到信息构建出的请求发送到服务器（server.js）。<br>
  send 函数是异步的，所以使用 Promise 实现。<br>

- Response
  编写 send 函数，由于 Response 会逐步接收信息再构建，所以我们需要一个 ResponseParser。<br>
  支持已有的 connection 或 自己新建 connection<br>
  收到数据传给 parser<br>
  根据 parser 返回的状态来判断完成时刻<br>
  特别注意！！！toSring的每一行前面不能有多余的空格，会影响报文格式，导致解析错误！<br>

- Response Parser
  用状态机来分析文本结构，根据 HTTP Response 的结构来实现 parser 的状态机。

- Body Parser 
  Response body 会因为 Content-Type 的不同有不同的结构，因此我们需要用子parser的结构来解决问题。<br>
  以 ThunkedBodyParser 为例，用状态机实现 Body Parser。<br>
