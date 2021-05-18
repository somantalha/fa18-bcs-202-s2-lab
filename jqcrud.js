$ (function($){
    // loaddata();
    $('.pagination1').hide();
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=" + 1,

        success: function (res) {
            $('.main').html('');
            $('.main').append(' <div class="result"><h3>Current Page:</h3><p class="page">' + res.page + '</p><h3>Total Pages:</h3> <p class="total">' + res.total + '</p> </div>');
            for (var i = 0; i < res.data.length; i++) {
                $('.main').append(' <div class="result"> <p class="avatar"> <img src="' + res.data[i].avatar + '" alt=""> </p> <p class="id">' + res.data[i].id + '</p> <p class="firstname ">' + res.data[i].first_name + '</p> <p class="lastname ">' + res.data[i].last_name + '</p> <p class="email">' + res.data[i].email + '</p> </div>');
            }

        }
    });
    $('.pagination2').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 2,

            success: function (res) {
                $('.main').html('');
                $('.main').append(' <div class="result"><h3>Current Page:</h3><p class="page">' + res.page + '</p><h3>Total Pages:</h3> <p class="total">' + res.total + '</p> </div>');
                for (var i = 0; i < res.data.length; i++) {
                    $('.main').append(' <div class="result"> <p class="avatar"> <img src="' + res.data[i].avatar + '" alt=""> </p> <p class="id">' + res.data[i].id + '</p> <p class="firstname ">' + res.data[i].first_name + '</p> <p class="lastname ">' + res.data[i].last_name + '</p> <p class="email">' + res.data[i].email + '</p> </div>');
                }

            }
        });
        $('.pagination2').hide();
        $('.pagination1').show();
    });
    $('.pagination1').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 1,

            success: function (res) {
                $('.main').html('');
                $('.main').append(' <div class="result"><h3>Current Page:</h3><p class="page">' + res.page + '</p><h3>Total Pages:</h3> <p class="total">' + res.total + '</p> </div>');
                for (var a = 0; a < res.data.length; a++) {
                    $('.main').append(' <div class="result"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });
        $('.pagination1').hide();
        $('.pagination2').show();
    });

    
});

// function loaddata(){
//     $.ajax({
//         url: "https://reqres.in/api/users ",
//         method:"GET",
//         error:function(){
//             var product = $("#productdisp");
//             product.html("An error occured!");
//         },
//         success:function(response){
//             console.log(response);
//             var product = $("#productdisp");
//             product.empty();
//             product.append(`<div class="e1product"><p>Current Page:</p><h3>${response.page}</h3></br><p>Total Pages:</p><p>${response.total}</p></div>`);
//             for(var i = 0; i < 6; i++)
//             {
//                 var pro= response.data[i];
//                 product.append(`<div class="e2product"><h3>${pro.email}</h3><p>${pro.first_name}</p><p>${pro.last_name}</p><p>${pro.avatar}</p></div>`);
//                 // <h3>${pro.email}</h3><p>${pro.first_name}</p><p>${pro.last_name}</p><p>${pro.avatar}</p>
//             }

//         }
//     });
// }
