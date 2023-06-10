var index = 0;

function changeColors() {
    var colors = ["red", "blue", "orange", "yellow", "green", "purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    document.getElementsByTagName("body")[0].style.transition = "all .3s ease";

    if(index > colors.length - 1)
        index = 0;
};