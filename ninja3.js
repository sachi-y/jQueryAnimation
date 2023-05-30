//Q01
$(function(){
    //変数
    let push_num = [],   //仮の配列…押された数字を1桁ずつ配列として一時的に記憶する
    num_1 = '',          //計算の基準となる値
    num_2 = '',          //計算で変化させる値
    cal = '',            //使用する演算子
    answer = '',         //.resultを押した際の計算結果
    calculation = false; //演算子が入力されたら true になり、num_2 へ入力可能となる

    //数字キーを押したときの処理
    $('.switch1').on('click',function(){
        push_num.push($(this).text());     //配列push_numにクリックしたボタンに表示されている数値を追加する
        if(calculation == true){           //変数calculationがfalseなら変数num_1に、trueなら変数num_2へ配列push_numの数値を結合(.join())して挿入
        num_2 = push_num.join('')
        $('.display1').text(num_2);        //.displayに数値を表示する
        }else{
        num_1 = push_num.join('');
        $('.display1').text(num_1);
        }
    })

    //演算子キーを押したときの処理
    $('.calculation1').on('click',function(){   //.calculationをクリックするとイベントが起動
        cal = $(this).attr('id');               //変数calに押された演算子キーのidを取得
        calculation = true;                     //変数calculationをtrueにする。これにより次に入力する数値は変数num_2に保存される
        push_num = [];                          //配列push_numに一時的に記憶していた数値をリセット
        $('.display1').text('');                //.displayに表示されている数値をリセット
    })

    //=キーを押したときの処理
    $('.result1').on('click',function(){   //.resultをクリックするとイベントが起動
        switch(cal){                       //変数calに入っている値によって処理を変更する
        case 'plus':                       //calに入っている値によってbreakまでの処理を行う。
        let sum_1 = parseInt(num_1);       //値がplusの場合のみ文字列型の結合(例:1+1=11)を防ぐため、sum_1とsum_2という変数にpareseInt()で数字型に変換している
        let sum_2 = parseInt(num_2);
        answer = sum_1 + sum_2;
        break;
        case 'minus':
        answer = num_1 - num_2;
        break;
        case 'multiply':
        answer = num_1 * num_2;
        break;
        case 'divide':
        answer = num_1 / num_2;
        break;
        }
        $('.display1').text(answer);
        num_1 = answer;
    })

    //ACキーを押したときの処理
    $('.reset1').on('click',function(){    //.resetをクリックするとイベントが起動
        num_1 = '';                        //全ての変数と配列を元の状態へ戻し、.displayの表示も消す
        num_2 = '';
        cal = '';
        answer = '';
        calculation = false;
        push_num = [];
        $('.display1').text('');
    })
});
//A01
// var saveNum;
// $(function () {
//     $(".switch").click(function(){
//         var num=$(this).attr("id");
//         $(".display").append(num);
//     });
//     $(".calculation").click(function(){
//         saveNum=$(".display").text();
//         $(".display").text('');
//         $(".active").removeClass("active");
//         $(this).addClass("active");
//     });
//     $(".reset").click(function(){
//         saveNum=0;
//         $(".display").text('');
//     });
//     $(".result").click(function(){
//         var calculation=$(".active").attr("id");
//         switch (calculation) {
//             case "plus":plus();
//             break;
//             case "minus":minus();
//             break;
//             case "multiply":multiply();
//             break;
//             case "divide":divide();
//             break;
//         }
//     });
//   //ここからプラスが押された時の処理
//     function plus(){
//         var result = parseFloat(saveNum) + parseFloat($(".display").text());
//         $(".display").text(result);
//     }
//   //ここからマイナスが押された時の処理
//     function minus(){
//         var result = parseFloat(saveNum)-parseFloat($(".display").text());
//         $(".display").text(result);
//     }
//   //ここから掛るが押された時の処理
//     function multiply() {
//         var result = parseFloat(saveNum) * parseFloat($(".display").text());
//         $(".display").text(result);
//     }
//   //ここから割るが押された時の処理
//     function divide() {
//         var result = parseFloat(saveNum) / parseFloat($(".display").text());
//         $(".display").text(result);
//     }
// });

//Q02
$(function () {
    $(".btn2").mouseenter(function (e) {
        $(this).find("span").css({width:0,height:0}); //2回目以降も同じようにアニメーションが動くように処理の最初にwidthとheightを0にして初期化
        var position = $(this).offset(), //offset()…画面上（document内（画面の端から））に配置したHTML要素の表示位置を座標で取得できるメソッド
        //position…親要素からの位置
        //e.pageX/Y…ページの左上(絶対位置)が常に (0, 0) の座標となる
        x = e.pageX - position.left, //子要素の絶対位置-親要素の絶対位置=ボタン内左上からの距離を得られる.
        y = e.pageY - position.top;
        $(this).find("span").css({ "top": y, "left": x }).animate({width:"400px",   height:"400px"});
    }); //find("対象子要素のタグ")…対象となる要素から下にある階層をすべて辿って目的の「子要素」を取得することができるメソッド === $(".btn10 span")と同じ
    $(".btn2").mouseleave(function (e) {
        // $(this).find("span").css({width:0,height:0});
        var position = $(this).offset(),
        x = e.pageX - position.left,
        y = e.pageY - position.top;
        $(this).find("span").css({ "top": y, "left": x }).animate({width:"0",   height:"0"});
    });
});

//A02
// $(function () {
//     $(".btn").on("mouseenter",function (e) {
//         var position = $(this).offset(),
//         x = e.pageX - position.left,
//         y = e.pageY - position.top;
//         $(this).find("span").css({ "top": y, "left": x }).animate({ width: "400px",   height:   "400px" });
//     }).on("mouseleave",function(e){
//         var position = $(this).offset(),
//         x = e.pageX - position.left,
//         y = e.pageY - position.top;
//         $(this).find("span").css({ "top": y, "left": x }).animate({ width: "0px", height:   "0px" });
//     });
// });

//Q03
// $(window).on('load', function () {
//     $(function ($) {
//       // 追従させたい要素のクラス名を宣言
//         var menu = $('.menu3');
//         offset = menu.offset();
//         $(window).scroll(function () {
//             if ($(window).scrollTop() > offset.top) {
//             // 追従させたい要素の位置までスクロールしたらクラス付与
//             menu.addClass('menu3_fixed');
//             } else {
//             // それ以外はクラスを外す
//             hoge.removeClass('menu3_fixed');
//             }
//         });
//     });
// });

// $(window).on('load', function () {
//     var adjust = 0; //スクロール時のトップ位置調整用（問題なければ0）
//     var sidebar = $('.menu3'); //サイドバーを指定
//     var wrap = $('body'); //ラッパーを指定
//     var adjustTop = 0;
//     var sidebarTop = parseInt(sidebar.css('top'));
//     var sidebarMax = wrap.height() + adjust - sidebar.height();
//     $(window).on('scroll', function () {
//         var h = sidebarTop + $(window).scrollTop();
//         if (h < sidebarMax) {
//             if($(window).scrollTop() < adjust) {
//                 adjustTop = 0;
//             } else {
//                 adjustTop = adjust;
//             }
//             var offset = sidebarTop-adjustTop + $(window).scrollTop() + 'px';
//             sidebar.animate({top: offset},{duration:500, queue: false});
//         }
//     });
// });

$(window).on('load', function () {
    var sidebar = $('.menu3'); //サイドバーを指定
    var wrap = $('body'); //ラッパーを指定
    var sidebarTop = parseInt(sidebar.css('top'));
    var sidebarMax = wrap.height() - sidebar.height();
    $(window).on('scroll', function () {
        var h = sidebarTop + $(window).scrollTop();
        if (h < sidebarMax) {
        var offset = sidebarTop + $(window).scrollTop() + 'px';
        sidebar.animate({top: offset},{duration:500, queue: false});
        }
    });
});

//A03
// $(function () {
//     $(window).scroll(function(){ //window…表示されている部分。scrollTopでwindowの高さを取得
//         var y=$(this).scrollTop();
//         $(".menu3").animate({top:y+50},10); //top:y(animateのcssは数字だけ与えられるとpxを自動でつけてくれる）
//     });
// });

//Q04
$('.btn4').on('click', function() {
    $('.explode4').toggle('explode',500);
})
//A04
// $(function () {
//     $(".btn").click(function(){
//         $(".explode").toggle("explode");
//     });
// });

//Q05
// $('.btn5').hover(
//     function (){
//      // 要素にマウスを載せたときの処理
//         $('.btn5::before').animate({width:"200px", });
//     },
//     function () {
//      // 要素からマウスをはなした
//     }
// );
//A05
$(function () {
    $(".btn5").hover(function(){
        $(this).removeClass("mouseleave").addClass("mouseenter");
    },function(){
        $(this).removeClass("mouseenter").addClass("mouseleave");
    });
});

//Q06
// $('#open6').on('click', function() {
//     $(this).toggleClass('active');
//     return false;
// })
//A06
$(function () {
    $("body").on("click","#open6",function(){ //idを変更する為、親要素を指定
        $(".top6").animate({top:"48%"},300),
        $(".bottom6").animate({top:"48%"},300,function(){ //animate({cssの設定},アニメーションの時間,アニメーション終了後の処理)と設定できる
            $(".middle6").animate({opacity:0},0); //まず真ん中のバーを消し、barにtransitionで変化にかかる秒数を指定
            $(".bar6").css("transition",".3s"); //barにtransitionで変化にかかる秒数を指定
            $("#open6").attr("id","close6"); //idを変更
    }); //animateはtransformに対応していないため、cssで指定
    });
    $("body").on("click","#close6",function(){
        $("#close6").attr("id","open6"); //attr：変更
        $(".middle6").animate({opacity:1},300,function(){
            $(".bar6").css("transition","none");
            $(".top6").animate({ top: "28%" }, 300);
            $(".bottom6").animate({ top: "68%" }, 300);
        });
    });
});

//Q07
// $(function () {
//     $("body").on("click","#open7",function(){ //idを変更する為、親要素を指定
//         $(".top7").animate({top:"48%"},300),
//         $('.menus7').animate({left:"0"},300);
//         $(".bottom7").animate({top:"48%"},300,function(){ //animate({cssの設定},アニメーションの時間,アニメーション終了後の処理)と設定できる
//             $(".middle7").animate({opacity:0},0); //まず真ん中のバーを消し、barにtransitionで変化にかかる秒数を指定
//             $(".bar7").css("transition",".3s"); //barにtransitionで変化にかかる秒数を指定
//             $("#open7").attr("id","close7"); //idを変更
//     }); //animateはtransformに対応していないため、cssで指定
//     });
//     $("body").on("click","#close7",function(){
//         $("#close7").attr("id","open7"); //attr：変更
//         $('.menus7').animate({left:"-300px"},300),
//         $(".middle7").animate({opacity:1},300,function(){
//             $(".bar7").css("transition","none");
//             $(".top7").animate({ top: "28%" }, 300);
//             $(".bottom7").animate({ top: "68%" }, 300);
//         });
//     });
// });
// //A07
// $(function () {
//     var iconHeight=$(".icon7").innerHeight(); //アイコンの縦幅をinnerHeightで取得
//     var menuWidth=$(".menus7").innerWidth(); //メニュの横幅をinnerWidthで取得
//     $(".menus7").css({
//         "padding-top":iconHeight, //menuにpadding-topを用いてアイコン分を開ける
//         "left":-menuWidth //初期状態ではメニューは隠れるのでleftで画面外左にメニュの横幅分移動
//     });
//     //ここからメニューアイコン
//     $("body").on("click", "#open7", function () {
//         $(".menus7").animate({left:0},300); //クリックされた時、メニュを画面左からの距離を０にしフェードイン
//         $("#open7").attr("id","close7");
//     });
//     $("body").on("click", "#close7", function () {
//         $("#close7").attr("id","open7");
//         $(".menus7").animate({left:-menuWidth},300);
//     });
// });
//Q08
$(function () {
    console.log("処理1");
    console.log("処理2");
    // deferredの宣言
    var defer = $.Deferred();
    setTimeout(function(){
        console.log("処理3");
        defer.resolve(); //deferredオブジェクトを「正常終了」させる
    }, 300);
    // 宣言したdeferredからpromiseを取得
    var promise = defer.promise();
        promise.then(function() { //promiseを取得するために使ったときのdeferredが実行された後に実行したい処理
        console.log("処理4");
        console.log("処理5");
    });
});
//A08
// $(function () {
//     d=$.Deferred();
//     console.log("処理1");
//     console.log("処理2");
//     setTimeout(function(){
//         console.log("処理3");
//         d.resolve();
//     }, 300);
//     d.promise().then(function(){
//         console.log("処理4");
//         console.log("処理5");
//     });
// });

//Q09
$(function () {
    $('.btn9').on('click', function() {
        var tr_form =
        "<tr>" +
        "<td>" + $('#name').val() + "</td>" + //valを用いて取得
        "<td>" + $('#price').val() + "円" +  "</td>" +
        "</tr>";
        $("table").append(tr_form); //appendでtableに付け加える処理
        $("#name").val(""); //ボタンをクリックした時にinputの内容は削除
        $("#price").val("");
    });
});

//A09
// $(function () {
//     $("button").click(function(){
//         addList();
//         $("#name").val("");
//         $("#price").val("");
//     });
//     function addList(){
//         var name=$("#name").val();
//         var price=$("#price").val()+"円";
//         $("table").append("<tr><td>"+name+"</td><td>"+price+"</td></tr>");
//     }
// });