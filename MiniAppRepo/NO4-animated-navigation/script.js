// script.js
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

// ボタン(toggle)がクリックされたら、ナビ(nav)のクラスリストに 'active' を付け外しする
toggle.addEventListener('click', () => nav.classList.toggle('active'));