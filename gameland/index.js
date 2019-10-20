$(window).on("load", ()=>{
    $(".game-card").on("click", function() {
        $(".overlay").css("display", "block");
        let clickedGameCard = $(this);
        let imageSrc = clickedGameCard[0].children[0].attributes[0].value;
        let gameTitle = clickedGameCard[0].children[1].children[0].innerText;
        let gamePrice = clickedGameCard[0].children[1].children[1].innerText;

        let overlayedCardImage = $('#inf-card-image');
        $('#gameName').html(gameTitle);
        $('#gamePrice').html(gamePrice);
        overlayedCardImage[0].attributes[0].value = imageSrc;
    });

    $('#close').on("click", function () {
        console.log('22');
        $(".overlay").css("display", "none");
    });
});
