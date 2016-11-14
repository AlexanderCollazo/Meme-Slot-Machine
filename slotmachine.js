var credit = 50;
function spin() {
    var color = [
          "image/sponge.gif"
        , "image/shark.gif"
        , "image/artist.gif"
        , "image/patrick.gif"
        , "image/neon.gif"
        , "image/pacha.gif"
        , "image/snoop.gif"
        , "image/homer.gif"
        , "image/blues.gif"
        , "image/dance.gif"];
    var i1 = document.getElementById("pic1");
    var i2 = document.getElementById("pic2");
    var i3 = document.getElementById("pic3");

    i1.src = color[Math.floor(Math.random() * 10)];
    i2.src = color[Math.floor(Math.random() * 10)];
    i3.src = color[Math.floor(Math.random() * 10)];

    credit -= 1;

    if (credit < 0) {
        credit = 0;
        i1.src = "image/gameover.png";
        i2.src = "image/gameover.png";
        i3.src = "image/gameover.png";
    }

    else if (i1.src == i2.src && i1.src == i3.src) {
        credit += 15;
        //alert("+25 CREDITS")
    }

    else if (i1.src == i2.src) {
        credit += 5;
        //alert("+5 CREDITS")
    }

    else if (i2.src == i3.src) {
        credit += 5;
        //alert("+5 CREDITS")
    }
    document.getElementById("tokenAmt").innerHTML = credit;

    return false;
}
