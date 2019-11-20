document.addEventListener("DOMContentLoaded", function (event) {
    var images = [].slice.call(document.querySelectorAll('.grid-item'), 0).reverse();
    var indexImage = 1;

    var zoomValor = 1;
    var rotate = 0;

    if (images.length > 0) {

        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener('click', function (elem) {
                document.querySelector('.img').src = elem.target.src;
                indexImage = Math.abs(images[images.length - 1].dataset.index - elem.target.dataset.index);
                onClickImage();
            });
        }

    }

    document.querySelector('.toolbar-btn__zoomin').addEventListener('click', function () {
        zoomValor += 0.5;
        document.querySelector('.img-wrapper').style.transform = "translate(-50%, -50%) scale(" + zoomValor + ") rotate(" + rotate + "deg)";
    });

    document.querySelector('.toolbar-btn__zoomout').addEventListener('click', function () {
        zoomValor -= 0.5;
        document.querySelector('.img-wrapper').style.transform = "translate(-50%, -50%) scale(" + zoomValor + ") rotate(" + rotate + "deg)";
    });

    document.querySelector('.toolbar-btn__rotate').addEventListener('click', function () {

        rotate = (rotate > 360) ? 0 : rotate + 90;

        document.querySelector('.img-wrapper').style.transform = "translate(-50%, -50%) scale(" + zoomValor + ") rotate(" + rotate + "deg)";
    });

    document.querySelector('.btn-next').addEventListener('click', function () {

        indexImage = (indexImage < 0) ? 0 : indexImage;

        if (indexImage < (images.length - 1)) {
            document.querySelector('.btn-next').classList.remove("disable")
            document.querySelector('.img').src = window.location.protocol + '//' + window.location.host + images[(images.length - 1) - indexImage].attributes.src.nodeValue;
            indexImage++;
        } else {
            document.querySelector('.btn-next').classList.add("disable")
            document.querySelector('.btn-prev').classList.remove("disable")
        }

    });

    document.querySelector('.btn-prev').addEventListener('click', function () {

        indexImage = (indexImage < 0) ? 0 : indexImage;

        if (indexImage >= 0) {
            document.querySelector('.btn-prev').classList.remove("disable")
            document.querySelector('.img').src = window.location.protocol + '//' + window.location.host + images[(images.length - 1) - indexImage].attributes.src.nodeValue;
            indexImage--;
        } else {
            document.querySelector('.btn-prev').classList.add("disable")
            document.querySelector('.btn-next').classList.remove("disable")
        }

    });

    function realodTextPagination() {
        return document.querySelector('.pagination-total').innerText = indexImage + "/" + images.length;
    }

    function onClickImage() {
        realodTextPagination();
        return document.querySelector('.img-swiper').style.display = "block";
    }

    // Função para fecha a model
    document.querySelector('.btn-close').addEventListener('click', function (elem) {
        document.querySelector('.img-swiper').style.display = "none"
    });

});