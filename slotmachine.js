function spin() {
var color = ["image/suhdude.jpeg"
            , "image/arthur.jpeg"
            , "image/forever.png"
            , "image/overhere.png"
            , "image/wtf.jpg"
            , "image/well.jpg"
            , "image/harambe.jpeg"
            , "image/fuuu.png"
            , "image/cereal.png"
            , "image/troll.png"];
    var i1 = document.getElementById("pic1");
    var i2 = document.getElementById("pic2");
    var i3 = document.getElementById("pic3");
//alert(i1.src);
    i1.src = color[Math.floor(Math.random() * 10)];
    i2.src = color[Math.floor(Math.random() * 10)];
    i3.src = color[Math.floor(Math.random() * 10)];


//document.write(color[Math.floor(Math.random() * 9)]);
    return false;
}