$(document).ready(function () {
  // About
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  //Slider
  if (window.location.href.indexOf("index") > -1) {
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
    });
  }

  //POST
  if (window.location.href.indexOf("index") > -1) {
    var post = [
      {
        title: "prueba de titulo 1",
        date: moment().endOf("day").fromNow(),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusvehicula libero sagittis mi dignissim imperdiet. Curabitur variusvulputate metus, nec dignissim felis gravida non. Morbi faucibusest in condimentum feugiat. Nulla et nisl consequat, porta tortorquis, sagittis tellus. Curabitur porta mi risus, id congue orcialiquet et. Nullam eget scelerisque du",
      },
      {
        title: "prueba de titulo 2",
        date:
          "Trabajado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusvehicula libero sagittis mi dignissim imperdiet. Curabitur variusvulputate metus, nec dignissim felis gravida non. Morbi faucibusest in condimentum feugiat. Nulla et nisl consequat, porta tortorquis, sagittis tellus. Curabitur porta mi risus, id congue orcialiquet et. Nullam eget scelerisque du",
      },
      {
        title: "prueba de titulo 3",
        date:
          "Trabajado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusvehicula libero sagittis mi dignissim imperdiet. Curabitur variusvulputate metus, nec dignissim felis gravida non. Morbi faucibusest in condimentum feugiat. Nulla et nisl consequat, porta tortorquis, sagittis tellus. Curabitur porta mi risus, id congue orcialiquet et. Nullam eget scelerisque du",
      },
      {
        title: "prueba de titulo 4",
        date:
          "Trabajado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusvehicula libero sagittis mi dignissim imperdiet. Curabitur variusvulputate metus, nec dignissim felis gravida non. Morbi faucibusest in condimentum feugiat. Nulla et nisl consequat, porta tortorquis, sagittis tellus. Curabitur porta mi risus, id congue orcialiquet et. Nullam eget scelerisque du",
      },
      {
        title: "prueba de titulo 5",
        date: moment().startOf("hour").fromNow(),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusvehicula libero sagittis mi dignissim imperdiet. Curabitur variusvulputate metus, nec dignissim felis gravida non. Morbi faucibusest in condimentum feugiat. Nulla et nisl consequat, porta tortorquis, sagittis tellus. Curabitur porta mi risus, id congue orcialiquet et. Nullam eget scelerisque du",
      },
    ];
    post.forEach((item, index) => {
      var post = `
    <article class="post">
            <h2>${item.title}</h2>
            <span class="fecha">${item.date}</span>
            <p>
             ${item.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
          </article>
    `;
      $("#posts").append(post);
    });
  }
  //Cargar tema
  var loadtheme = $("#theme");

  var load = localStorage.getItem("color");
  //Si no existe color que cargar
  if (load == null) {
    load = "css/green.css";
  }

  loadtheme.attr("href", load);

  //Selector de tema

  $("#to-green").click(function () {
    var green = "css/green.css";
    loadtheme.attr("href", green);
    localStorage.setItem("color", green);
  });
  $("#to-red").click(function () {
    var red = "css/red.css";
    loadtheme.attr("href", red);
    localStorage.setItem("color", red);
  });
  $("#to-blue").click(function () {
    var blue = "css/blue.css";
    loadtheme.attr("href", blue);
    localStorage.setItem("color", blue);
  });

  //Scroll
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  //Login falso
  $("#login form").submit(function () {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });
  var for_name = localStorage.getItem("form_name");
  if (for_name != null && for_name != "undefined") {
    var about_p = $("#about p");
    about_p.html(
      "<br><strong>Bienvenido, " +
        for_name +
        " este es un Login falso; es solo una muestra de como funciona el LocalStorage.<strong/>"
    );
    about_p.append('<br><a href="#" id="logout"> Cerrar sesion <a/>');

    $("#login").hide();
    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }
  //Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function () {
      var reloj = moment().format("LTS");
      $("#reloj").html(reloj);
    }, 1000);
  }
  //Validacion
  if (window.location.href.indexOf("contacto") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });
    $.validate({
      lang: "es",
      errorMessagePosition:'top',
      scrollToTopOnError:true
    });
  }
});
