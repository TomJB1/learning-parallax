const parallax = document.getElementById("parallax1");
const block1 = document.getElementById("effect2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    let offsetVh = (offset / window. innerHeight) * 100
    console.log(offsetVh)
    parallax1.style.backgroundPositionY = offset * 0.6 +"px";
    
    text1.style.top = ((offsetVh * 0.6) + 300) +"px";
    text2.style.color = "hsl(213, 48%, 20%, " + 0 + ((offsetVh - 150) / 100) + ")";

    if(offsetVh < 80)
    {
        effect2.style.backgroundColor = "hsl(213, 48%, " + offsetVh * 0.7 + "%)";
    }else
    {
        effect2.style.backgroundColor = "rgb(89, 137, 197)";
    }
    

    if(offsetVh > 80)
    {
        text1.style.top = "-100px";
    }

})