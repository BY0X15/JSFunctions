function searchAndReplaceLinks() {

  const key = 'oanopr6h1zc36cgup732zc7m469rrw2m';
  const baseLink = `http://alipromo.com/cashback/view/${key}`;

  $("a.post__title_link").map(function(key, value){

    const origLink = $(value)[0].href;
    const urlEncode = encodeURIComponent(origLink);
    const fakeLink = `${baseLink}/?to=${urlEncode}`;

    $(value)[0].href = fakeLink;
  });
}


$(document).ready(function() {

  if(location.hostname !== 'habrahabr.ru') return;

  searchAndReplaceLinks();
});
