function urldecode (str) {
  return decodeURIComponent((str + '')
    .replace(/%(?![\da-f]{2})/gi, function () {
      // PHP tolerates poorly formed escape sequences
      return '%25'
    })
    .replace(/\+/g, '%20'))
}

function parseQS(varName, qs) {
  'use strict';
  var qStr = qs + '&';
  var regex = new RegExp('.*?[&\\?]' + varName + '=(.*?)&.*');
  var val = qStr.replace(regex, "$1");

  return val === qStr ? false : val;

}

$(document).ready(() => {

  if (location.hostname !== 'www.youtube.com' || location.pathname !== '/watch') return;

  const id = location.search.split('=')[1];

  console.log(id);

  $.ajax({
    url: "https://www.youtube.com/get_video_info?&video_id=" + id
  }).done(function(ev) {

    const q = ev.split('fmt_url_map')[0];

    const u = urldecode(q).split('url_encoded_fmt_stream_map=')[1].split(',')/*.split('&')*/;

    const l_q = {22: '720p', 43: '360p'};

    const tq = [];

    for (let u0 of u) {

      const tq0 = [];

      const t = u0.indexOf('itag=');

      if (t < 1) continue;

      const t0 = u0.split('&');

      for (let t1 of t0) {

        setTimeout(() => {

          if (t1.indexOf('itag=') >= 0) tq0.push(t1.split('=')[1]);
        }, 1);

        setTimeout(() => {

          if (t1.indexOf('type=') >= 0 && t1.indexOf('codecs') >= 0) {

            const tq1 = [];

            tq1.push(urldecode(t1.split('=')[1]).split(';')[0].split('/')[0])
            tq1.push(urldecode(t1.split('=')[1]).split(';')[0].split('/')[1]);

            tq0.push(tq1);
          }
        }, 2);

        setTimeout(() => {

          if (t1.indexOf('url=') >= 0 && t1.indexOf('googlevideo.com') > 0) tq0.push(urldecode(t1.split('=')[1]));
        }, 4);
      }

      tq.push(tq0);
    }

    setTimeout(() => {

        console.log(tq);
    }, 500);

  });
});
