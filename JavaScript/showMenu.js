var picArr = new Array();
picArr[0] = new Array("images/Summer14/DSCN2483.JPG");
picArr[1] = new Array("images/Summer14/DSCN2399.JPG");

var pPic = new Image();
var gIndex = 0;
function SlidePic(index)
{
	gIndex = index;
	if('Microsoft Internet Explorer' == navigator.appName)
	{
		document.images["slidePic"].filters.item(0).Apply();
	}
document.images["slidePic"].src = picArr[index][0];
if('Microsoft Internet Explorer' == navigator.appName)
	{
		document.images["slidePic"].filters.item(0).play();
	}
}

function NextPic(slidePic)
{
	gIndex = ((gIndex+1)>=picArr.length?0:(gIndex+1));
	SlidePic(gIndex);
}

function PrevPic(slidePic)
{
	gIndex = ((gIndex-1)<0?(picArr.length-1):(gIndex-1));
	SlidePic(gIndex);
}

function changeTo14()
{
	picArr = new Array();
	picArr[0] = new Array("images/Summer14/DSCN2483.JPG");
	picArr[1] = new Array("images/Summer14/DSCN2399.JPG");
}

function changeTo15()
{
	picArr = new Array();
	picArr[0] = new Array("images/Summer15/heye.jpg");
	picArr[1] = new Array("images/Summer15/qiao.jpg");
	picArr[2] = new Array("images/Summer15/xihu.jpg");
}

function show_div(menu)
{
var ImgName;
if(document.all.item(menu).style.display == "none")
{document.all.item(menu).style.display = "block";
ImgName = "images/Img"+menu+"step3.png";
document.all.item("Img"+menu).src = ImgName;
}
else
{document.all.item(menu).style.display = "none";
ImgName = "images/Img"+menu+"step3.png";
document.all.item("Img"+menu).src = ImgName;
}
}

function show_img(id, act)
{
if (act == 'show')
{document.getElementById(id).style.visibility = 'visible';
}
else
{
	if(document.getElementById(id).style.visibility != 'visible')
	{
		document.getElementById(id).style.visibility = 'hidden';
	}	
}
}

