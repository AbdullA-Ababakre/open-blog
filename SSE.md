
# What is SSE ? 

# Several pushing technology

There is always one question remained when we are developing real-time projects , "how to send messages/updates from server to client" . There are three ways to perform server-to-client updates: **Client polling** , **Web socket** , **Server-sent events**. 

## client polling

The client sends request to the server at regular intervals for new updates. Requests are sent and managed by the client side . Requests are sent by client even if there is no updates on the server . 


## Web socket

Websockets provides bi-directional data transfer for client and server communication on real-time applications . It is widely used in IM applications . 

## Server-Sent Events

SSE represents for "Server-Sent Events" . SSE is a simple and efficient way to send real-time updates from a server to a client over an HTTP connection . SSE based on a unidirectional data flow , where the server sends messages to the client , but the client cannot send messages back to the server.(has similarities and differences with websocket) 

There is a simple example of what is SSE. When you get answer from ChatGpt , the answer comes with one single letter at a time , not waiting for a while then get the whole answer , this is SSE . 


And much more uses cases : Facebook/Twitter updates, stock price updates, news feeds, sport results, etc.




## References

- https://medium.com/deliveryherotechhub/what-is-server-sent-events-sse-and-how-to-implement-it-904938bffd73#:~:text=Server%20sent%20events(SSE)%20is,(s)%20via%20HTTP%20connection.

- 





