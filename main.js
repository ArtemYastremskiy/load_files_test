const fileInput = document.querySelector("#file");
const submit = document.querySelector("#submit");
const img = document.querySelector("#img");

submit.addEventListener("click", () => {
    const pic = fileInput.files && fileInput.files[0];

    var img = new Image();

    img.src = window.URL.createObjectURL(pic);

    img.onload = function () {
        var width = img.naturalWidth,
            height = img.naturalHeight;
        console.log(width, height);
        window.URL.revokeObjectURL(img.src);

        var c = document.getElementById("canvas");
        c.width = width;
        c.height = height;
        var ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var img_link = canvas.toDataURL("image/jpeg");
        console.log(img_link)
        jpg.src = img_link;
    };
});
