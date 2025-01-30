function init() {
  console.log("INIT");
  Fancybox.bind("[data-fancybox]");

  toggleHeaderSubmenu();
  shrinkSidebar();

  $(window).on("scroll", function () {
    shrinkSidebar();
  });

  openSidebarLayer();
  openSidebarPiecesLayer();
  closeSidebarLayer();
  goDown();
  handlePhoneMask();
  formValidation();
  sendForm();

  mobileHamburger();
  mobileSearchToggle();
}

function goDown() {
  $(".js-down").on("click", function (e) {
    e.preventDefault();
    const target = $(this).closest("section").children(":nth-child(2)");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
    }
  });
}

function toggleHeaderSubmenu() {
  const header = $(".header");

  const headerInitiallyWhite = header.hasClass("white");

  $(".js-open-submenu").on("click", function (e) {
    e.preventDefault();

    const submenu = $(this).next();
    $(this).toggleClass("active");
    submenu.toggleClass("active");

    $(".js-open-submenu").next().not(submenu).removeClass("active");
    $(".js-open-submenu").not($(this)).removeClass("active");

    const anySubmenuOpen = $(".js-open-submenu").next().hasClass("active");

    if (anySubmenuOpen && !headerInitiallyWhite) {
      header.addClass("white");
    } else if (!anySubmenuOpen && !headerInitiallyWhite) {
      header.removeClass("white");
    }
  });
}

function shrinkSidebar() {
  if ($(window).scrollTop() > 100) {
    $(".js-sidebar").addClass("scrolling");
  } else {
    $(".js-sidebar").removeClass("scrolling");
  }
}

function openSidebarLayer() {
  var sidebar = $(".js-sidebar");
  const sidebarInitiallyWhite = sidebar.hasClass("white");

  $(".js-open-layer").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var currentCat = $this.data("cat");
    var layer = $(".js-sidebar-layer");

    if (layer.hasClass("active") && layer.data("lastCat") === currentCat) {
      layer.removeClass("active");
      if (!sidebarInitiallyWhite) {
        sidebar.removeClass("white");
      }
      $this.removeClass("active");
    } else {
      sidebar.addClass("white");
      layer.addClass("active");
      layer.data("lastCat", currentCat);
      $this.addClass("active");
      $(".js-open-layer").not($this).removeClass("active");
      $(".js-open-pieces-layer").removeClass("active");
      $(".js-subline-list").find(".js-cat-item").parent().removeClass("show");
      $(".js-subline-list").find(`[data-cat='${currentCat}']`).addClass("show");
      $(".js-sidebar-pieces-layer").removeClass("active");
    }
  });
}

function openSidebarPiecesLayer() {
  var sidebar = $(".js-sidebar");
  const sidebarInitiallyWhite = sidebar.hasClass("white");
  var layer = $(".js-sidebar-pieces-layer");
  $(".js-open-pieces-layer").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (layer.hasClass("active")) {
      layer.removeClass("active");
      if (!sidebarInitiallyWhite) {
        sidebar.removeClass("white");
      }
      $this.removeClass("active");
    } else {
      sidebar.addClass("white");
      layer.addClass("active");
      $this.addClass("active");
      $(".js-open-layer").removeClass("active");
      $(".js-sidebar-layer").removeClass("active");
    }
  });
}

function closeSidebarLayer() {
  var sidebar = $(".js-sidebar");
  const sidebarInitiallyWhite = sidebar.hasClass("white");
  $(".js-close-layer").on("click", function () {
    $(".js-sidebar-layer").removeClass("active");
    $(".js-sidebar-pieces-layer").removeClass("active");
    if (!sidebarInitiallyWhite) {
      sidebar.removeClass("white");
    }
    $(".js-open-layer").removeClass("active");
    $(".js-open-pieces-layer").removeClass("active");
  });
}


function handlePhoneMask() {
    var phoneInput = document.querySelectorAll(".js-phone");
    phoneInput.forEach((input) => {
      input.addEventListener("input", () => {
        input.value = phoneMaskValidation(input.value);
      });
      function phoneMaskValidation(phone) {
        return phone
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4})(\d)/, "$1-$2")
          .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
          .replace(/(-\d{4})\d+?$/, "$1");
      }
    });
  }

function formValidation() {
  var contactForm = document.querySelectorAll(".js-validate-form");
  contactForm.forEach((form) => {
    var fields = form.querySelectorAll("[required]");
    function ValidateField(field) {
      function verifyErrors() {
        var foundError = false;
        for (var error in field.validity) {
          if (field.validity[error] && !field.validity.valid) {
            foundError = error;
          }
        }
        return foundError;
      }
      function customMessage(typeError) {
        var messages = {
          text: {
            valueMissing: "Por favor, preencha este campo",
          },
          textarea: {
            valueMissing: "Por favor, preencha este campo",
          },
          email: {
            valueMissing: "Email é obrigatório",
            typeMismatch: "Por favor, preencha um email válido",
          },
          checkbox: {
            valueMissing: "É necessário aceitar os termos",
          },
          "select-one": {
            valueMissing: "Por favor, selecione um item",
          },
          file: {
            valueMissing: "Por favor, insira o anexo!",
          },
        };
        return messages[field.type][typeError];
      }
      function setCustomMessage(message) {
        var spanError = field.parentNode.querySelector("span.error");
        if (message) {
          spanError.innerHTML = message;
        } else {
          spanError.innerHTML = "";
        }
      }
      return function () {
        var error = verifyErrors();
        if (error) {
          var message = customMessage(error);
          setCustomMessage(message);
        } else {
          setCustomMessage();
        }
      };
    }
    function customValidation(event) {
      var field = event.target;
      var validation = ValidateField(field);
      validation();
    }

    for (var field of fields) {
      field.addEventListener("invalid", (event) => {
        event.preventDefault();
        customValidation(event);
      });
      field.addEventListener("blur", customValidation);
    }
  });
}

function sendForm() {
    $(".js-send-contact").on("submit", function (event) {
        event.preventDefault();

        const form = $(this);
        var btnSend = form.find(".js-send-btn");

        if (form.find("span.error").html() == "") {
            btnSend.addClass("disabled");
            fetch(form.attr('action'), {
                method: form.attr('method'),
                body: new FormData(form[0]),
            })
            .then((res) => res.json())
            .then((data) => {
                btnSend.removeClass("disabled");
                if (data == "1") {
                    $(".js-response-success").show();
                    setTimeout(() => {
                        $(".js-response-success").hide();
                    }, 5000);
                    form[0].reset();
                } else if(data == "2"){
                    $(".js-response-recaptcha").show();
                    setTimeout(() => {
                        $(".js-response-recaptcha").hide();
                    }, 5000);
                }else {
                    $(".js-response-fail").show();
                    setTimeout(() => {
                        $(".js-response-fail").hide();
                    }, 5000);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                btnSend.removeClass("disabled");
            });
        }
    });
}

function mobileHamburger(){
    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        $(".js-mobile-mobile").slideToggle();
    })
}

function mobileSearchToggle(){
    $(".js-toggle-mobile-search").on("click", function(e){
        e.preventDefault();
        $(".js-mobile-search").slideToggle();
    })
}



$(function () {
  init();
});
