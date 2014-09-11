---
layout: home
---

<div class="index-content blog">
    <div class="section">
        <ul class="artical-cate"> 
            <li  style="text-align:left" class="on"><a href="/"><span>Notes</span></a></li>
            <li style="text-align:left"><a href="/mood"><span>Mood</span></a></li>
            <li style="text-align:left"><a href="/relays"><span>Relays</span></a></li>
            <li style="text-align:left"><a href="/tags.html"><span>Tags</span></a></li>
            <li style="text-align:left"><a href="/about.html"><span>About</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.notes %}
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
