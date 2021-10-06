//All the variabels
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var guessBox = document.getElementById("guessBox");
var theNum = document.getElementById("theNum");
var gl = document.getElementById("gl");
var guessButton = document.getElementById("guessButton");
var d1 = document.getElementById("d1");
var d2 =  document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var alert = document.getElementById("AlertYou");
var cn = 2;

//Making the canvas full screen
var ch = c.height = window.innerHeight;
var cw = c.width = window.innerWidth;
//Japanese charecters (a sushi resepie like in the movie 'Matrix')
var english = "-巻き取りを開始する前に、寿司のローリングマットをラップフィルムで包んでみてください。これにより、使用後のマットの掃除が簡単になるだけでなく、もち米がマットに詰まるのを防ぎます。-巻き寿司を作るときは、ご飯が指につかないように指を濡らしておくことが重要ですので、隣に水を入れておくことをお勧めします。ナイフを切るときは、ナイフを濡れた状態に保ち、きれいに切れるようにすることをお勧めします。-裏巻きロール、または裏返しロールと呼ばれるものを作ることができます。これは、内側に海苔、外側にご飯を入れて作ります。うらまきには白ごまのローストがふりかけられています。-巻き寿司には、ふとまきと細巻きの2種類があります。太巻きは、上の写真で作っているような厚手のロールで、中にはさまざまな材料が入っています。細巻はより薄いバージョンで、通常、マグロ、サーモン、キュウリなどの材料が1つだけ含まれています。-寿司ロールにはあらゆる種類の材料を使用できます。カリフォルニアロール（カニスティック、アボカド＆キュウリ）やフィラデルフィアロール（スモークサーモン、クリームチーズ＆キュウリ）のような人気のあるものの多くは、日本国外で発明されました。";
//Converting the string into an array of single characters
english = english.split("");
var font_size = 15;
var columns = c.width/font_size; //Number of columns for the rain
//An array of drops - one per column
var drops = [];
//X below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 
//Drawing the characters


//Change colors
d1.addEventListener("click", function red() {
	cn = 1;
	document.body.className = "red";
});

d2.addEventListener("click", function green() {
	cn = 2;
	document.body.className = "green";
});

d3.addEventListener("click", function blue() {
	cn = 3;
	document.body.className = "blue";
});

d4.addEventListener("click", function white() {
	cn = 4;
	document.body.className = "white";
});


function draw()
{

	window.onresize = () => {
		ch = c.height = window.innerHeight;
		cw = c.width = window.innerWidth;
		columns = c.width/font_size;
		for(var x = 0; x < columns; x++)
		drops[x] = 1;
	}

	//Black BG for the canvas
	//Translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
	ctx.fillRect(0, 0, c.width, c.height);

	//The colors
	if (cn == 1) {
		ctx.fillStyle = "#ff0000";
	}
	
	if (cn == 2) {
		ctx.fillStyle = "#0f0";
	}
	
	if (cn == 3) {
		ctx.fillStyle = "#0039ff";
	}
	
	if (cn == 4) {
		ctx.fillStyle = "#fff";
	}
	
	ctx.font = font_size + "px arial";
	//Looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//Select a random Japanese character to print
		var text = english[Math.floor(Math.random()*english.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		//Sending the drop back to the top randomly after it has crossed the screen
		//Adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//Incrementing Y coordinate
		drops[i]++;
	}
}
setInterval(draw, 35);
