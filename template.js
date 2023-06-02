/*
Project Name: Blog Page
-Name: SPA
-Author: Hamit Mızrak
-Version: v.1
-Description: This is project blog Business, my project
*/

// ### SEARCH AUTOCOMPLETE JS ###
//ready: sen hazırsan bende hazırım
$(document).ready(function () {
    const searchData = ['Adana', "Ankara", "Balıkesir", "Diyarbakır", "Elazığ", "Hatay", "İstanbul", "Malatya"];
    $("#tags").autocomplete({
        source: searchData
    });
});

// ### DARK MODE ###
let darkMode = () => {
    //alert("çalıştı");
    window.document.body.classList.toggle("dark_mode");
  let performance=  window.document.getElementById("performance");
  // CSS Dom
  performance.style.backgroundColor="black";
  performance.style.color="white";
}

// Html5 CSs3 JS jQuery Responsive React -+ES5
// ### Login Validation
$(function(event){
    // Browser sen dur ben biliyorum ne yapacağımı.
    //event.preventDefault();
    $("#loginSubmit").click(function(){
        let email,passwd;
        // $.trim() 
        email=jQuery.trim($("#email_data").val());
        passwd=jQuery.trim($("#passwd_data").val());
        // alert("email: "+email+" şifre: "+passwd);
        // interpolation
        // alert(`email: ${email} şifre: ${passwd}`);

        const storageEmail=localStorage.setItem("email",email);
        const storagePassword=localStorage.setItem("password",passwd);
        console.log(localStorage)

        const getEmail=localStorage.getItem("email");
        console.log(getEmail)

        if(email==""){
            $("#email_data_validation").html("Email Boş geçilemez...");
        }

        if(passwd==""){
            $("#passwd_data_validation").html("Şifre Boş geçilemez...");
        }
    }); //end click

}); // end login function

// ### LocalStorage Login

// ### COUNTER JS ###
// Counter JS
// $(document).ready(function() {
//     var counters = $(".count");
//     var countersQuantity = counters.length;
//     var counter = [];
//     for (i = 0; i < countersQuantity; i++) {
//       counter[i] = parseInt(counters[i].innerHTML);
//     }
//     var count = function(start, value, id) {
//       var localStart = start;
//       setInterval(function() {
//         if (localStart < value) {
//           localStart++;
//           counters[id].innerHTML = localStart;
//         }
//       }, 40);
//     }

//     for (j = 0; j < countersQuantity; j++) {
//       count(0, counter[j], j);
//     }
//   });

// ### COUNTER JQUERY ###
//  <span class="counter" data-counter="250"></span>
// each: döngü için this:bu, objeyi işaretleme prop:objeye nesne ekleme
// scroll:200 olduğunda saymaya başlasın
$(window).scroll(function(){
    ($(this).scrollTop()>200) ? $('.counter').each(function () {
        $(this).prop('counter', 0).animate({
            counter: $(this).data('counter')
        }, {
            duration: 4000,
            easing: 'swing',
            step: (step) => {
                $(this).text(Math.ceil(step));
            }
        }); //end animate
    }) : "";
}); //end window

// ### FOOTER JQUERY ###
//date
let nowDate = () => {
    // JS DOM
    let dateSpan = window.document.getElementById("footer_date");
    dateSpan.innerHTML = new Date().getFullYear();
}
nowDate()

// şimdiki zamana 2 kere tıkladığımda şimdiki zamanı göstermesin jQuery yapalım.
// jQuery DOM
// Hide()
// 1.YOL
let footer_date_hide = () => {
    // setInterval : Sonsuz Döngüde çalışır. (Süreklilik yapılarında kullanmak. özellikle services yapılarında)
    // setTimeout  : Tek bir döngüde çalışır.
    setTimeout(()=>{
        $("#footer_date").hide();
    },2000)
    //window.alert("Tarih Kayboldu")
}
// Hemen Kaybolmasın 2 saniye sonra kayboldun (setInterval(callBackFnc,timer))
//setInterval(footer_date_hide,2000)

// Hemen Kaybolmasın 2 saniye sonra kayboldun (setInterval(callBackFnc,timer))

// 2.YOL
// $("#footer_date").on("dblclick",function(){
//     $("#footer_date").hide();
// })

// BackTop
// jQuery scroll
// 1.YOL
/*
$(window).scroll(function(){
    if($(this).scrollTop()>80){
        $('#back_top').fadeIn('slow');
    }else{
        $('#back_top').fadeOut('slow');
    }
}); //end window
*/

// 2.YOL
$(window).scroll(function(){
    ($(this).scrollTop()>80) ? $('#back_top').fadeIn('slow') : $('#back_top').fadeOut('slow');
}); //end window

// CSS MediaQuery yazalım


