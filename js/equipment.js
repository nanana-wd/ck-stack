// items（複数）を取得
const items = document.querySelectorAll('.item');

// itemsのそれぞれを取り出すループ
items.forEach( (item) => {
    item.addEventListener('click', (event) => {

        // clickしたitemにクラス付与
        event.target.classList.toggle('hover-text');

        // clickしたitem内の子要素divにクラス付与
        item.children[1].classList.toggle('hover-text');
    });
});