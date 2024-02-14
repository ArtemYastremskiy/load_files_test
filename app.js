const fileInput = document.querySelector("#file");
const submit = document.querySelector("#submit");
const image = document.querySelector("#img");

submit.addEventListener('click', () => {
    const pic = fileInput.files && fileInput.files[0];

    var img = new Image();

    img.src = window.URL.createObjectURL(pic);

    img.onload = function() {
        var width = img.naturalWidth,
            heigth = img.naturalHeight;
        console.log(width, heigth);
        window.URL.revokeObjectURL(image.src);

        var c = document.querySelector("canvas");
        c.width = width;
        c.height = heigth;
        var ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var img_link = canvas.toDataUrl('image/jpeg');
        console.log(img_link);
        jpg.src = img_link        
    };
});
