# Normal the name at downloading file (music, video, etc)
1. In background[js] insert file with: 
<br>
    <pre>chrome.runtime.onMessage.addListener(function(b,a,c){<br>
      document.body.innerHTML=b.html;<br>
      document.getElementsByTagName("a")[0].click();<br>
      document.body.removeChild(document.getElementsByTagName("a")[0])<br>
    });</pre>
2. And in need part insert: <br>
   <pre>var q = document.createElement("a");<br>
    q.setAttribute("download", <b>name</b> + ".mp3");<br>
    q.setAttribute("title", <b>name</b> + ".mp3");<br>
    q.setAttribute("class", <b>className</b>);<br>
    q.setAttribute("href", <b>link</b> + "?/" + <b>name</b> + ".mp3");<br>
    <b>$(q).click(function(w) {<br>
        w.cancelBubble = true;<br>
        w.stopPropagation();<br>
        chrome.runtime.sendMessage({<br>
            html: this.outerHTML<br>
        }, function(x) {});<br>
        return false<br>
   });</b>
   </pre>


# Get URL YouTube
Get meta (url, preview, ...) video with youtube <br>
http://www.youtube.com/get_video_info?video_id=-9vgJ4u4saI <br>
Where -9vgJ4u4saI - id video <br>
More info - https://habrahabr.ru/post/137496/
