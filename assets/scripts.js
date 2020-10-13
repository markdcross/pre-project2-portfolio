$(document).ready(function () {
    //* ---------------------
    //* Index.html
    //* ---------------------
    setTimeout(introduce, 2000);
    setTimeout(getToKnow, 4000);
    // Check for click events on the navbar burger icon
    // $('.navbar-burger').click(function () {
    //     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //     $('.navbar-burger').toggleClass('is-active');
    //     $('.navbar-menu').toggleClass('is-active');
    // });

    // $('#contactBtn').click(function () {
    //     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //     $('.modal').toggleClass('is-active');
    // });

    // $('.close-modal').click(function () {
    //     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //     $('.modal').toggleClass('is-active');
    // });

    $('#introBtn').click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $('#heroDiv').addClass('hide');
        $('#stackDiv').addClass('hide');
        $('#brewDiv').addClass('hide');
        $('#introDiv').removeClass('hide');
    });

    $('#stackBtn').click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $('#heroDiv').addClass('hide');
        $('#introDiv').addClass('hide');
        $('#brewDiv').addClass('hide');
        $('#stackDiv').removeClass('hide');
    });

    $('#brewBtn').click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $('#heroDiv').addClass('hide');
        $('#introDiv').addClass('hide');
        $('#stackDiv').addClass('hide');
        $('#brewDiv').removeClass('hide');
    });

    function introduce() {
        $('#imMark').animate({ fontSize: '4rem' }, 1000);
        $('#subHeading').animate({ opacity: 1 }, 1000);
        $('.heroIndex').animate({ opacity: 1 }, 1000);
    }

    function getToKnow() {
        $('#getToKnowMe').animate({ opacity: 1 }, 1000);
    }

    //* ---------------------
    //* Portfolio
    //* ---------------------

    // function initCards() {
    // for (var i = 0; i < projects.length; i++) {
    //     var projectCard =
    //         `<div class="column is-one-third">` +
    //         `<div class="card box projBox has-background-white-ter" data-desc="${projects[i].description}">` +
    //         `<div class="card-image is-flex is-horizontal-center">` +
    //         `<figure class="portfolioImg image 3by2" >` +
    //         `<img src="${projects[i].img}" alt="${projects[i].alt}"/>` +
    //         `</figure>` +
    //         `<div class="hover-content"><p>${projects[i].description}</p></div>` +
    //         `</div>` +
    //         `<footer class="card-footer">` +
    //         `<p class="card-footer-item proj-card-footer">` +
    //         `<a href="${projects[i].app}" target="_blank">${projects[i].name}</a>` +
    //         `</p>` +
    //         `<p class="card-footer-item proj-card-footer">` +
    //         `<a href="${projects[i].repo}" target="_blank">Repo</a>` +
    //         `</p>` +
    //         `<p class="card-footer-item proj-card-footer">` +
    //         `<a href="${projects[i].repo}" target="_blank">ReadMe</a>` +
    //         `</p>` +
    //         `</footer>` +
    //         `</div>`;
    //     $('#card-container').append(projectCard);
    // }
    // for (var j = 0; j < homework.length; j++) {
    //     var homeworkCard =
    //         `<div class="col-sm-4 card-style container">` +
    //         `<img src="${homework[j].img}" class="card-img-top" alt="${homework[j].alt}"/>` +
    //         `<div class="card-body">` +
    //         `<h5 class="card-title">${homework[j].name}</h5>` +
    //         `<div class="card-footer">` +
    //         `<small class="text-muted"><a href="${homework[j].repo}" target="_blank">Repo</a></small>` +
    //         `</div>` +
    //         `</div>`;
    // `<a href="${homework[j].app}" target="_blank">${homework[j].name}</a>` +
    // `</div>` +
    // `<p class="card-footer-item">` +
    // `<a href="${homework[j].repo}" target="_blank">Repo</a>` +
    // `</p>` +
    // `</footer>` +
    // `</div>`;
    // $('#hw-container').append(homeworkCard);
    // }
    // }
    // initCards();

    // $('.portfolioImg').hover(
    //     function () {
    //         $('.portfolioImg').css('opacity', '.25');
    //         $('.hover-content').fadeIn('slow');
    //     },
    //     function () {
    //         $('.hover-content').fadeOut('fast');
    //         $('.portfolioImg').css('opacity', '1');
    //     }
    // );

    //* ---------------------
    //* Brewing
    //* ---------------------
});
