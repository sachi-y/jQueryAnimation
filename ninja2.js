//A09 //Q1
$(function () {
    var num=20;
    for(var i=0;i<num;i++){//粒の数
        $(".box9").append("<span></span>");//spanタグを一つ増やす。
        //Math.PI=π…Mathオブジェクトのうち、πを呼び出す静的プロバティ
        //2πラジアン…弧度法[θ](円弧の長さを基準とした角度単位）2πθ…360°
        var angle=Math.PI*(2/num)*i,//n/num…n個目が円のどの角度に位置するか。
            //spanタグ自身がどれだけ回転するか。
            rotateAngle=360*i/num,
            //sin(θ)…右辺/斜辺 sin(θ)*半径(斜辺)=y座業 この場合、θが頂点からの角度になるためx座業が求まる。
            moveX=50*Math.sin(angle)+"px",
            //1-cos(θ)…半径を1としたとき、底辺/半径=cos(θ)/1 つまり、1-cos(θ)は半径-底辺(差)。
            moveY=50*(1-Math.cos(angle))+"px",
            //moveを変数として定義
            move="translate("+moveX+","+moveY+") "+" rotate("+rotateAngle+"deg)";
            //eq()…HTML要素の順番（インデックス番号）を指定する
            $(".box9 span").eq(i).css({
            "transform":move,
        });
    }
    // $(function () {
    //     for(var i=0;i<num;i++){
    //         $(".box9 span").eq(i).css({ //各子要素で相違のある部分をjqueryで追加。
    //         "animation-duration":num/20+"s", //1回のアニメーション周期が完了するまでの所要時間
    //         "animation-delay":i/20+"s" //(n/20)s遅らせる。
    //     });
    //     };
    // });
});
//Q2
let container = $(".box2");
$(function() {
    $(document).on('keypress', '.input2', function(e) {
        if(e.keyCode == 13) {
            str=$('.input2').val();
            let newStr = $.trim(str);//"空白を除去したい文字列".trim()…前後の空白を削除
            let newHtml = "";
            newStr.split("").forEach(function(v) {//str.split(区切る基準となる文字を指定, 分割数);
                newHtml += '<span>' +v+ '<span>';
            });
            container.html(newHtml);
            let txtNum = 0;
            container.css({opacity:1});
            setInterval(function() {
                container.find('span').eq(txtNum).css({opacity:1});
                txtNum++
            },150);
            return false;
        }
    });
});

//A02
// $(function () {
//     $("input").change(function(){ //inputの内容が変化した時をトリガーにする。
//         $(".box").empty(); //.empty()…指定した要素の中にある子要素を削除
//         var text=$("input").val(); //入力した文字を取得
//         var textNum=text.length;
//         for(var i=0;i<textNum;i++){
//         $(".box").append("<span>"+text.substr(i,1)+"</span>"); //for文の中で文字列を分割してそれぞれspanの中に入れる。
//         $(".box span").eq(i).delay(i*500).fadeIn(1000); //一つずつdelayを使い遅らせてfadeI
//     }
//     });
// });

//03
$('#width').on('input', function () { //input要素
    let val = $(this).val(); //
    document.getElementById('box3').style.width = val +'px' //サイズを変更される要素
});
$('#height').on('input', function () { //input要素
    let val = $(this).val(); //
    document.getElementById('box3').style.height = val +'px' //サイズを変更される要素
});

//A03
// $(function () {
//     $("input").change(function(){
//         var width=$("#width").val()+"px";
//         var height=$("#height").val()+"px";
//         $(".box").css({
//         "width":width,
//         "height":height
//         });
//     });
// });


//Q04
$('.button4').on('click', function() {
    $('.box4').animate({
        fontSize: 30
    }, 3000,"swing");
});

//A04
//animateは({cssのプロパティ:値},アニメーションの時間,動きの種類)
// $(function () {
//     $("button").click(function(){
//         $(".box").animate({fontSize:"2em"},3000,"swing"); 初期値：linear
//     });
// });

//Q05
$('.input5').change(function(e) {
    let angle = $('.input5').val();
    let radian = Math.sin(angle*(Math.PI/180));
    $('.p5 span:nth-child(1)').text(angle+"°");
    $('.p5 span:nth-child(2)').text(radian+"°");
});

//A05
// $(function () {
//     $("input").change(function () {
//         var angle= $(this).val(),
//             rad=angle*(Math.PI/180),
//             sin=Math.sin(rad),
//             cos=Math.cos(rad);
//         $("p").eq(0).find("span").eq(0).text(angle+"°"); //find("タグ").eq()順番検索
//         $("p").eq(1).find("span").eq(0).text(angle+"°");
//         $("p").eq(0).find("span").eq(1).text(sin);
//         $("p").eq(1).find("span").eq(1).text(cos);
//     });
// });

//Q06
function omikuji() {
    const cont = Math.ceil(Math.random()*5); //Math.ceilの中に入れると小数点以下を切り上げる
    if(cont == 1){
        $(".result6").html("大吉");
    }
    if(cont == 2){
        $(".result6").html("中吉");
    }
    if(cont == 3){
        $(".result6").html("小吉");
    }
    if(cont == 4){
        $(".result6").html("凶");
    }
    if(cont == 5){
        $(".result6").html("大凶");
    }
};
$(".button6").on("click",function () {
    omikuji();
});

//A06
// $(function () {
//     $("button").click(function(){
//         var num=Math.round(Math.random()*2); //Math.randomで作られる数は０以上１未満の数=3倍すると０以上３未満の数を作る
//                         //Math.roundの中に入れると四捨五入される
//         switch (num) { //switchにその得られた数を与える
//             case 0: //caseで場合分する
//             $(".result").text("大吉");
//             break;
//             case 1:
//             $(".result").text("吉");
//             break;
//             case 2:
//             $(".result").text("大凶");
//             break;
//         }
//     });
// });
                //switch()条件分岐式≒if文
                // let pref = 'A';
                // switch (pref){
                //     case 'A':
                //     console.log('A');
                //     break;
                //     case 'B':
                //     console.log('B');
                //     break;
                //     default:
                //     console.log('C');
                // }

//Q07
$(".content7").on("click",function() {
    var num = $(this).text();
    $(".result7").text(num+'がクリックされました');
});

//A07
// $(function () {
//     for (var i = 0; i < 3; i++) { //それぞれのcontent7に適切な処理を与える
//         $(".content").eq(i).on("click", { num: i + 1 }, clicked); //クリック時にnum＝i+1というデータを保存
//     }                                                 //clickedという関数を定義
//     function clicked(e) { //関数clickedの引数としてeを与える
//         $(".result").text(e.data.num + "がクリックされました" );  //e.data.numでnumのデータを取得
//     }
// });

// Q08
$(".add8").on("click",function(){
    $(".parent8").append("<button class='button8'>ボタン</button>");
});
//JSは該当タグが読み込まれたタイミングで実行される為、追加時点では実行されてない。
//$(document).onとすることで現時点でのHTMLを読み込み、動的に追加されたHTMLに対してもイベントを処理できる
$(document).on("click", ".button8",function(){
    $(this).css("color","red");
});

// A08
// $(function () {
//     $(".parent").on("click","button",function(){
//         $(this).css("color","red");
//     });
//     $(".add").click(function(){
//         $(".parent").append("<button>ボタン</button>");
//     });
// });

//$(親要素).on("イベント","子要素",function())：デリゲート…クリックされた親要素の中にある同じ要素（今回の場合button)に対して処理を実行してくれる→追加要素に対しても有効
//$(親要素).on("イベント",function())：バインド…いつも使うやつ

// Q09
$(function(){
    //カーソル要素の指定
    var cursor=$(".cursor9");
    //mousemoveイベントでカーソル要素を移動させる
    $(document).on("mousemove",".html9",function(e){
      //カーソルの座標位置を取得
        var x=e.clientX;
        var y=e.clientY;
      //カーソル要素のcssを書き換える用
        cursor.css({
            "opacity":"1",
            "top":y+"px",
            "left":x+"px"
        });
    });
});

// A09
// $(function () {
//     $(document).on("mousemove", function (e) { //mousemoveをトリガーとする
//         var x = e.clientX; //e.clientX、e.clientYでそれぞれX軸方向、Y軸方向の距離を得られる
//         var y = e.clientY;
//         $(".cursor").css({　//cursorのcssに与える
//             "top": y + "px",
//             "left": x + "px"
//         });
//     });
// });

//Q10
// $(function(){
//     //カーソル要素の指定
//     // var btn10=$(".btn10");
//     var span10=$('.btn10 span');
//     $(document).on("click",function(e){
//       //カーソルの座標位置を取得
//         var x=e.clientX; //e.clientX/Y…ブラウザウィンドウ内でのカーソル座標を取得．可視ウィンドウの左上が常に (0, 0) の座標となる
//         var y=e.clientY;
//       //カーソル要素のcssを書き換える用
//         span10.animate({
//             "opacity":"1",
//             "width":"100%",
//             "height":"100%",
//             "top":y+"px",
//             "left":x+"px",
//         },500);
//     });
// });

// A10
$(function () {
    $(".btn10").click(function (e) {
        $(this).find("span").css({width:0,height:0}); //2回目以降も同じようにアニメーションが動くように処理の最初にwidthとheightを0にして初期化
        var position = $(this).offset(), //offset()…画面上（document内（画面の端から））に配置したHTML要素の表示位置を座標で取得できるメソッド
        //position…親要素からの位置
        //e.pageX/Y…ページの左上(絶対位置)が常に (0, 0) の座標となる
        x = e.pageX - position.left, //子要素の絶対位置-親要素の絶対位置=ボタン内左上からの距離を得られる.
        y = e.pageY - position.top;
        $(this).find("span").css({ "top": y, "left": x }).animate({width:"400px",   height:"400px"});
    }); //find("対象子要素のタグ")…対象となる要素から下にある階層をすべて辿って目的の「子要素」を取得することができるメソッド === $(".btn10 span")と同じ
});


// Q11
$('.slider11').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
// A11
// $(function () {
//     $(".slider").slick({
//         autoplay: true,
//         autoplaySpeed: 5000,
//         dots: true,
//     });
// });

// Q12
//inputの数nを取得
//for文でn回だけcloneを繰り返す
//作ったcloneにfadeInを設定

// let star = '★☆';
// let count = 5;
// let stars = star.repeat(count);
// console.log(stars);
// // ★☆★☆★☆★☆★☆

// $(function() {
//     $(document).on('click', '#button', function() {
//         $('#sample li').clone().appendTo($('#sample'));
//     });
// });

// $(function() {
//     $('.button12').on('click', function() {
//         var input12 = $('.input12').val();
//         // var li12 = '<li class="li12 fadein">ふわっと出現</li>';
//         $('.li12 li').clone().appendTo($('.ul12'));
//     });
//     var fadeIn = $('.fade-in');
//     $(window).on('scroll', function() {
//         $(fadeIn).each(function() {
//             var offset = $(this).offset().top;
//             var scroll = $(window).scrollTop();
//             var windowHeight = $(window).height();
//             if (scroll > offset - windowHeight + 150) {
//             $(this).addClass("scroll-in");
//             }
//         });
//     });
// });

// jQuery(function ($) {
//     var fadeIn = $('.fade-in');
//     $(window).on('scroll', function () {
//         $(fadeIn).each(function () {
//             var offset = $(this).offset().top;
//             var scroll = $(window).scrollTop();
//             var windowHeight = $(window).height();
//             if (scroll > offset - windowHeight + 150) {
//             $(this).addClass("scroll-in");
//             }
//         });
//     });
// });

// A12
$(function () {
    $(".button12").click(function(){
        var howMany=Number($(".input12").val());        //var input12 = $('.input12').val();同じ
        for(var i=1;i<howMany;i++){                     //for文
        $(".li12").eq(0).clone(true).appendTo(".ul12"); //.clone(なくても良い).appendTo("親要素");
        $(".li12").eq(i).css({ opacity:0 });            //あらかじめopacity:0を設定
        }
    });
    $(window).scroll(function() {
        $(".li12").each(function () {                   //each文…各要素に付与
        var position=$(this).offset().top;
        var scroll=$(window).scrollTop();
        var windowHeight=$(window).height();
        if (scroll> position -  windowHeight + 200) {   //if文の条件をつけて、アニメーション付与
            $(this).animate({
            opacity:1,
            },1000)
            }
        });
    });
});

