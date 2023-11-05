$(function() {
    $('.menu-trigger').on('click', function(e) {
        $(this).toggleClass('active');　//アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除される
        $('#sp-menu').fadeToggle(); //要素のフェードイン・フェードアウトを切り替える
        event.preventDefault();
    });
});