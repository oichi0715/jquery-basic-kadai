
// $(function(){
//     const title = $('#title').text();
//     const list = $('.message').text();
//     console.log(title);
//     console.log(list);
// });

// // 3章　jQuery基礎構文を理解しよう
// $(function(){
//     const text = $('li[class^="sample"]').text();
//     console.log(text);
// });

// // ４章　イベント処理を理解しよう
// $(function(){
//     $('button').on('click', function(){
//         console.log('ボタンがクリックされました');
//     })
// });

// $(function(){
//     $('div').on({
//         'click': () => {
//             $('div').css('background-color', 'red');
//             $('div').text('click');
//         },
//         'dblclick' : () => {
//             $('div').css('background-color', 'green');
//             $('div').text('dblclick');
//         },
//         'mouseenter': () => {
//             $('div').css('background-color', 'blue');
//             $('div').text('mouseenter');
//         },
//         'mouseout': () => {
//             $('div').css('background-color', 'gray');
//             $('div').text('mouseout');
//         },
//     });
// });

$(function() {
    $(document).on('click keydown', (e) => {
        if(e.type === 'click'){
            $('div').text('クリックされました');
        }
        if(e.type === 'keydown'){
            $('div').text('キーが押されました');
        }
    });
});