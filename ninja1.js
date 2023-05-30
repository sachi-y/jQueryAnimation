// Q01
$('.input1').focusin(function() {
    $(this).attr('placeholder','キーワードを入力');
});
$('.input1').blur(function() {
    $(this).attr('placeholder','ここで検索');
});

//A01
// $(function () {
//     $("input").focusin(function(){
//         $(this).attr("placeholder","キーワードを入力");
//     })
//     $("input").focusout(function () {
//         $(this).attr("placeholder","ここで検索");
//     });
// });

//focusout()とblur()の違い
//focusout()…バブリングする、blur()…バブリングしない

//Q02
$(function () {
    $('select[name="number"]').on('change',function() {
        let op2 = $(this).val();
        if(op2 == '2_1') {
            $('.2_1').css('background-color','#A9A9AB');
            $('.p2').not('.2_1').css('background-color','#dddddd');
        }else if(op2 == '2_2') {
            $('.2_2').css('background-color','#A9A9AB');
            $('.p2').not('.2_2').css('background-color','#dddddd');
        }else if(op2 == '2_3') {
            $('.2_3').css('background-color','#A9A9AB');
            $('.p2').not('.2_3').css('background-color','#dddddd');
        }else if(op2 == '2_4') {
            $('.2_4').css('background-color','#A9A9AB');
            $('.p2').not('.2_4').css('background-color','#dddddd');
        };
    });
});

//A02
// $(function () {
//     $("select").change(function(){
//         var a=$("select option:selected").val(),
//             b="."+a;
//     $(".box2").find(b).css("background-color","#aaaaaa");
//     $(".box2 p").not(b).css("background-color","#dddddd");
//     });
// });
//$(this)と$("select option:selected")は同義。
//$("セレクタ:selected").イベント…:selectedはoptionタグで使用できる擬似クラス。
//対象要素.find("セレクタ(=クラス名など)")もしくは、対象要素.find(jqueryオブジェクト(=定義した変数))で指定できる。
//not()もfind()と同様。
//※※変数であれば、""がなくても大丈夫？

//Q03
$('.box3').find('div').css('background-color','blue');
$('.box3').children().css('background-color','red');

//children()…直下の子要素だけ探索
//find()…全ての子要素を探索（引数を入れて使用する）

//A03
// $(function () {
//     $(".box").find("div").css("background-color","blue");
//     $(".box").children("div").css("background-color","red");
// });
//cssは後から適用された方を優先することを忘れず。

//Q04
$(function(){
    $(".question4").on("click", function() {
    $(this).next().slideToggle();
    });
});
//「.next()」（意味＝次のやつ）
//A04
// $(function () {
//     $(".answer").hide();
//     $(".box .question").click(function () {
//         $(this).next().slideToggle();
//     });
// });

//Q05
$(function() {
    $('.description5').hide();
    $('.box5').hover(
        function(){
            //マウスオーバー処理
            $('.description5').stop().fadeIn(500);
        },
        function(){
            //マウスアウト処理
            $('.description5').stop().fadeOut(500);
        }
    );
});
//hoverの構文「,」で区切り、hover時とhoverOut時のアクションを記述。
//対象要素.hide( ミリ秒, 関数 );
//.hide()メソッド=、対象要素のwidth、height、opacityを同時にアニメーションし、
//全プロパティが0に達すると、 displayスタイルのプロパティはnoneに設定され、その要素はページレイアウトに影響を与えなくなる。
//※stop()…ホバーの回数にアニメーションの回数が追いつかない時、アニメーションを止める。

//A05
// $(function () {
//     $(".description").hide();
//     $(".box").hover(function () {
//         $(".description").fadeToggle();
//     });
// });

//Q06
function compareFunc(a, b) {//比較関数を作る
    return a - b;
};

$('.button6').on('click', function() {
    let show6 = [];//取得したvalueを配列に格納
    $('.input6').each(function(i){
        show6[i] =$(this).val();
    });
    show6.sort(compareFunc);//sort()メソッドでcompareFuncの条件に従って、並べ替えを行う
    $('.p6').text(show6);
});

//A06
// $(function () {
//     $("button").click(function(){
//         var num1 = $("#1").val(),//value値をそれぞれの変数に代入
//             num2 = $("#2").val(),
//             num3 = $("#3").val(),
//             numbers=[num1,num2,num3],//各変数を配列に代入
//             numberLength = $('input[type="number"]').length;
//         for(var i=0;i<numberLength;i++){
//             for(var k=i+1;k<numberLength;k++){
//                 if(numbers[i]>numbers[k]){//※※for文を2個使って総当たりにし、大きいものを後ろに送るようにする！！ちょっとむずい。
//                 var save=numbers[i];//変数saveを使って一時的に数値を保存
//                 numbers[i]=numbers[k];//saveによって保存されていた数値をもう一方の変数に代入し、次の値と同じ処理を繰り返す
//                 numbers[k]=save;
//                 }
//             }
//         }
//         $(".box").text(numbers[0]+","+numbers[1]+","+numbers[2]);
//     });
// });

//Q07
$('.error7').hide();
$('.input7').keypress(function(e) {
    let str = e.target.value;
    if(e.which == 13) {
        if(str.match(/^[^\x01-\x7E\uFF61-\uFF9F]+$/)) {
                $('.error7').show();
        } else {
                $('.error7').hide();
        }
    };
})

//A07
// $(function () {
//     var $error = $(".error");
//     $error.hide();
//     $("input").change(function(){
//         $error.hide();
//         var a=$("input").val().indexOf("@"); //indexOfに@を与えて取得した情報に@が含まれるなら0以上をそうでないなら-1を返す。
//         if(a!=0){
//         $error.show();
//         }
//     });
// });
//indexOf()とほぼ同じ役割を持つメソッド
//→search()…0以上/-1で返す。検索値が存在する時はその検索したい文字の位置番号をS出力する。正規表現(記号で特定の文字を表す)を使用。
//match()…[配列で取得]/nullで返す。(if文を使った場合は、true/false)正規表現(記号で特定の文字を表す)を使用。
//→test()…true/falseで返す。

//Q08
$(function() {
    let order = 0;
    let mark = ["○","×"];
    // $('.content8.empty').on('click', function() {
    //     $(this).text(mark[order]).removeClass("empty");
    //     order = ++order%2;
    // });
    $(document).on('click','.content8.empty',function() {
        $(this).text(mark[order]).removeClass('empty');
        order = ++order%2;//order…0,1の交互になるように設定→0のとき○、1のとき×。
    });
});
//$(".content8,#5")…orまたは
//$(".content8" + "#5")…andかつ
//$(document).on('event','selector',function(){}) …動的に増減したHTML(この場合 .empty)にも作用する。
//$(selector).on('event',function(){}) …その時点のHTMLに対してのみ作用する。

//A08
// $(function () {
//     var count=1;//あらかじめ変数を用意しておいて1を代入。
//     $(".content").click(function () {
//         if($(this).text()==""){//クリックされたcontentに何も記述がないか確かめる。
//             if(count%2!=0){//countが奇数かどうか判別。
//                 $(this).text("○");//それによって当てはめる文字を変える。
//             }else{
//                 $(this).text("×");
//             }
//         count ++;//最後にcountに++で1を足し、再び同じ処理を繰り返していく。
//         }
//     });
// });

//Q09

//A09