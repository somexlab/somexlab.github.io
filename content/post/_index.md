---
title: Latest News

# Listing view
view: compact

# Optional banner image (relative to `assets/media/` folder).
banner:
  caption: ''
  image: ''
---

<style>
.news-search { margin: 0.5rem 0 1.5rem 0; max-width: 520px; }
.news-search-input {
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  color: #333;
}
.news-search-input:focus { outline: none; border-color: #0098a6; box-shadow: 0 0 0 2px rgba(0,152,166,0.2); }
.news-search-count { font-size: 0.82rem; color: #666; margin-top: 0.4rem; min-height: 1.1em; }
.news-search-empty { display: none; color: #666; padding: 1rem 0; }
body.dark .news-search-input { background: #282a36; border-color: #44475a; color: #f8f8f2; }
body.dark .news-search-count, body.dark .news-search-empty { color: #c7c9d1; }
</style>
<div class="news-search">
<input type="search" id="news-search-input" class="news-search-input" placeholder="Search news by keyword..." aria-label="Search news" autocomplete="off">
<div class="news-search-count" id="news-search-count"></div>
</div>
<script>
(function(){
  function init(){
    var input = document.getElementById('news-search-input');
    var count = document.getElementById('news-search-count');
    var first = document.querySelector('.stream-item');
    if (!input || !first) return;
    var container = first.parentNode;
    var pager = container.querySelector('nav.mt-1, ul.pagination');
    if (pager && pager.tagName === 'UL') pager = pager.parentNode;
    var items = Array.prototype.slice.call(container.querySelectorAll('.stream-item'));
    var texts = items.map(norm);
    var empty = document.createElement('div');
    empty.className = 'news-search-empty';
    empty.textContent = 'No news match your search.';
    container.insertBefore(empty, pager || null);
    var loading = null;
    function norm(el){ return el.textContent.toLowerCase().replace(/\s+/g, ' '); }
    function nextHref(doc){
      var links = doc.querySelectorAll('ul.pagination a.page-link');
      for (var i = 0; i < links.length; i++) {
        if (links[i].textContent.indexOf('\u00bb') > -1) return links[i].getAttribute('href');
      }
      return null;
    }
    function loadAll(){
      if (loading) return loading;
      var href = nextHref(document);
      var seen = {};
      function step(){
        if (!href || seen[href]) return Promise.resolve();
        seen[href] = true;
        return fetch(href).then(function(r){ return r.text(); }).then(function(html){
          var doc = new DOMParser().parseFromString(html, 'text/html');
          Array.prototype.forEach.call(doc.querySelectorAll('.stream-item'), function(el){
            var node = document.importNode(el, true);
            node.style.display = 'none';
            container.insertBefore(node, pager || null);
            items.push(node);
            texts.push(norm(node));
          });
          href = nextHref(doc);
          return step();
        });
      }
      loading = step().catch(function(){});
      return loading;
    }
    function run(){
      var terms = input.value.toLowerCase().split(/\s+/).filter(Boolean);
      var searching = terms.length > 0;
      var shown = 0;
      items.forEach(function(el, i){
        var ok = terms.every(function(t){ return texts[i].indexOf(t) > -1; });
        var isFirstPage = i < firstCount;
        el.style.display = (searching ? ok : isFirstPage) ? '' : 'none';
        if (ok) shown++;
      });
      if (pager) pager.style.display = searching ? 'none' : '';
      empty.style.display = (searching && shown === 0) ? 'block' : 'none';
      count.textContent = searching ? (shown + ' of ' + items.length + ' posts') : '';
    }
    var firstCount = items.length;
    input.addEventListener('focus', loadAll);
    input.addEventListener('input', function(){
      run();
      loadAll().then(run);
    });
  }
  if (document.readyState !== 'loading') { init(); } else { document.addEventListener('DOMContentLoaded', init); }
})();
</script>
