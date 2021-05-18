$ (function(){
    // loaddata();
    $('.pagination1').hide();
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=" + 1,
        success: function (res) {
            $('.products').empty();
            $('.products').append(' <div class="result"><h2>Current Page:</h2><p class="page">' + res.page + '</p><h2>Total Records:</h2> <p class="total">' + res.total + '</p> </div>');
            $('.products').append(' <div><h2>Data:</h2></div>');
            for (var i = 0; i < res.data.length; i++) {
                $('.products').append(' <div class="result"><h3>Image:</h3> <p class="avatar"> <img src="' + res.data[i].avatar + '" alt=""> </p><h3>ID:</h3> <p class="id">' + res.data[i].id + '</p><h3>First name:</h3> <p class="firstname ">' + res.data[i].first_name + '</p><h3>Last name:</h3> <p class="lastname ">' + res.data[i].last_name + '</p><h3>Email:</h3> <p class="email">' + res.data[i].email + '</p> </div>');
            }
        }
    });
    $('.pagination2').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 2,
            success: function (res) {
                $('.products').empty();
                $('.products').append(' <div class="result"><h2>Current Page:</h2><p class="page">' + res.page + '</p><h2>Total Records:</h2> <p class="total">' + res.total + '</p> </div>');
                for (var i = 0; i < res.data.length; i++) {
                    $('.products').append(' <div class="result"><h3>Image:</h3> <p class="avatar"> <img src="' + res.data[i].avatar + '" alt=""> </p><h3>ID:</h3> <p class="id">' + res.data[i].id + '</p><h3>First name:</h3> <p class="firstname ">' + res.data[i].first_name + '</p><h3>Last name:</h3> <p class="lastname ">' + res.data[i].last_name + '</p><h3>Email:</h3> <p class="email">' + res.data[i].email + '</p> </div>');
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
                $('.products').empty();
                $('.products').append(' <div class="result"><h2>Current Page:</h2><p class="page">' + res.page + '</p><h2>Total Records:</h2> <p class="total">' + res.total + '</p> </div>');
                for (var i = 0; i < res.data.length; i++) {
                    $('.products').append(' <div class="result"><h3>Image:</h3> <p class="avatar"> <img src="' + res.data[i].avatar + '" alt=""> </p><h3>ID:</h3> <p class="id">' + res.data[i].id + '</p><h3>First name:</h3> <p class="firstname ">' + res.data[i].first_name + '</p><h3>Last name:</h3> <p class="lastname ">' + res.data[i].last_name + '</p><h3>Email:</h3> <p class="email">' + res.data[i].email + '</p> </div>');
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
//             product.append(`<div class="e1product"><p>Current Page:</p><h2>${response.page}</h2></br><p>Total Records:</p><p>${response.total}</p></div>`);
//             for(var i = 0; i < 6; i++)
//             {
//                 var pro= response.data[i];
//                 product.append(`<div class="e2product"><h2>${pro.email}</h2><p>${pro.first_name}</p><p>${pro.last_name}</p><p>${pro.avatar}</p></div>`);
//                 // <h2>${pro.email}</h2><p>${pro.first_name}</p><p>${pro.last_name}</p><p>${pro.avatar}</p>
//             }

//         }
//     });
// }
