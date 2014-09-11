---
layout: home
---

<div class="index-content mood">
    <div class="section">
        <ul class="artical-cate">
            <li  style="text-align:left"><a href="/"><span>Notes</span></a></li>
            <li style="text-align:left" class="on"><a href="/mood"><span>Mood</span></a></li>
            <li style="text-align:left"><a href="/relays"><span>Relays</span></a></li>
            <li style="text-align:left"><a href="/tags.html"><span>Tags</span></a></li>
            <li style="text-align:left"><a href="/about.html"><span>About</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.mood %}
            <li>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
    </div>
    <div class="aside">
    </div>
</div>
