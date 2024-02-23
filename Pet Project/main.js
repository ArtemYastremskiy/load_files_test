const fileInput = document.querySelector("#file");
const submit = document.querySelector("#submit");
const displayImg = document.querySelector("#img"); // Змінена назва змінної для уникнення конфліктів

submit.addEventListener("click", () => {
    const pic = fileInput.files && fileInput.files[0];

    if (!pic) {
        console.log("Файл не вибрано");
        return;
    }

    var img = new Image(); // Це локальна змінна і не конфліктує з displayImg

    img.src = window.URL.createObjectURL(pic);

    img.onload = function () {
        var width = img.naturalWidth,
            height = img.naturalHeight;
        console.log(width, height);
        window.URL.revokeObjectURL(img.src);

        var canvas = document.createElement('canvas');
        document.body.appendChild(canvas); // Додаємо canvas до сторінки

        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var imgLink = canvas.toDataURL("image/jpeg");
        console.log(imgLink);

        displayImg.src = imgLink; // Використовуємо displayImg тут
    };
});
