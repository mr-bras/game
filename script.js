let body = document.querySelector("body"); //тело сайта
let player = document.querySelector(".main_player"); //игрок на главной сцене

let main= document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let arena = document.querySelector(".arena"); //картинка школы
let forge = document.querySelector(".mastery");
let time =  document.querySelector(".loc2_timeText");

let location2 = document.querySelector(".location2");
let location3 = document.querySelector(".location3"); 
let location4 = document.querySelector(".location4"); 
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let sword = document.querySelector(".sword");
let shield = document.querySelector(".shield");
let btn = document.querySelector(".btn");
let quest = document.querySelector(".quest");
let boss = document.querySelector(".boss");
let atk = document.querySelector(".atk");
let hb = document.querySelectorAll(".healthbar");
let pk = document.querySelector(".pekka");
let left = 960;
let up = 500;
let winner = 0
let achiev = 0
let pkhp = 100
let bosshp = 100
let pkup = 0


document.addEventListener("keydown", function (event) {		
 	  if(event.code == "KeyA" && left > 0){
        left = left - 20;
        player.style.left = left + "px";
      }
 	  else if(event.code == "KeyS" && up < 820){
        up = up + 20;
        player.style.top = up + "px";
      }
      else if(event.code == "KeyD" && left < 1800){
            left = left + 20;
            player.style.left = left + "px";
      }
      else if(event.code == "KeyW"  && up > 0){
        up = up - 20;
        player.style.top = up + "px";
      }

  

if(up<=400&&up >= 220&&left>=1300&&left<=1500){
school.onclick = function(){
	player.style.top = "32%";
	player.style.left = "70%";

	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	let talk = document.querySelector(".loc2_talk"); //локация 2
	let wrong = document.querySelectorAll(".loc2_variants"); //локация 2
	let right = document.querySelector(".loc2_pravilno")

	function changeLocation2(){
		main.style.display = 'none'
		player.style.display = 'none'
		location2.style.display = 'block'
		body.style.background = "green"
		setTimeout(showtalk, 1000);
		setTimeout(showvar, 2000);
		for (let i = 0; i<5; i=i+1){
			wrong[i].onclick = function (){
				alert("неправильно")
			}
		} 
		right.onclick = function (){
				alert("правильно")
				q2()
			}
		let q2 = function(){
			quest.textContent = 'десятая цифра числа пи?'
			right.style.marginTop ="0px";
			wrong[2].style.marginTop ="140px";
			wrong[0].textContent ="Вариант 1: 1";
			wrong[1].textContent ="Вариант 2: 2";
			wrong[2].textContent ="Вариант 6: 6";
			wrong[3].textContent ="Вариант 4: 4";
			wrong[4].textContent ="Вариант 5: 5";
			right.textContent = 'Вариант 3: 3';
			right.onclick = function (){
				alert("правильно")
				q3()
			}
		}
		let q3 = function(){
			quest.textContent = 'Самый популярный язык програмирования?'
			right.style.marginLeft ="0px";
			wrong[0].style.marginLeft ="300px";
			wrong[0].textContent ="Вариант 3: Java";
			wrong[1].textContent ="Вариант 2: Python";
			wrong[2].textContent ="Вариант 6: C#";
			wrong[3].textContent ="Вариант 4: PHP";
			wrong[4].textContent ="Вариант 5: C++";
			right.textContent = 'Вариант 1: JavaScript';
			right.onclick = function (){
				alert("правильно")
				main.style.display = 'block'
				location2.style.display = 'none'
				body.style.backgroundImage = "url(bg1.png)"
				body.style.backgroundSize = "cover"
				nojniBox.style.display = 'block'
				winner = 1
				achiev = achiev + 1
				player.style.display = 'block'
				
			}
		}
	}

	function showtalk(){
		talk.style.display ="block"
	}
	function showvar(){
		loc2_variants_block.style.display ="block"
	}
	setTimeout(changeLocation2, 1000);
	 let gameStop = function(){
        clearInterval(timer);
        if (winner == 0){
            alert('не успел')
            main.style.display = 'block'
            player.style.display = 'block'
			location2.style.display = 'none'
			body.style.backgroundImage = "url(bg1.png)"
			body.style.backgroundSize = "cover"
			quest.textContent = 'Столица канады?'
			right.style.marginLeft ="300px";
			right.style.marginTop ="140px";
			wrong[2].style.marginTop ="0px";
			wrong[0].style.marginLeft ="0px";
			wrong[0].textContent ="Вариант 1: Ванкувер";
			wrong[1].textContent ="Вариант 2: Монреаль";
			wrong[2].textContent ="Вариант 3: Квебек";
			wrong[3].textContent ="Вариант 4: Миссисауга";
			wrong[4].textContent ="Вариант 5: Флорида";
			right.textContent = 'Вариант 6: Оттава';
			secs = 20;
        }
    }
	let secs = 20;
    let timer = setInterval(tick,1000)
    function tick(){
     time.innerHTML = (--secs)
    }
    setTimeout(gameStop, 20000);
    if (winner == 1){
    	clearInterval(timer);
    	secs = 20;
    	quest.textContent = 'Столица канады?'
			right.style.marginLeft ="300px";
			right.style.marginTop ="140px";
			wrong[0].style.marginLeft ="0px";
			wrong[2].style.marginTop ="0px";
			wrong[0].textContent ="Вариант 1: Ванкувер";
			wrong[1].textContent ="Вариант 2: Монреаль";
			wrong[2].textContent ="Вариант 3: Квебек";
			wrong[3].textContent ="Вариант 4: Миссисауга";
			wrong[4].textContent ="Вариант 5: Флорида";
			right.textContent = 'Вариант 6: Оттава';
			winner = 0
    }
}
}

if(up<=320&&up >= 200&&left>=580&&left<=740){
arena.onclick = function(){
	player.style.top = "32%";
	player.style.left = "35%";

	let talk3 = document.querySelector(".loc3_talk");
	let pktop = document.querySelector(".pekkahb");
	

function back () {
	main.style.display = 'block'
	location3.style.display = 'none'
	body.style.backgroundImage = "url(bg1.png)"
	body.style.backgroundSize = "cover"
	pkup = 0
}
	function changeLocation3(){
		main.style.display = 'none'
		location3.style.display = 'block'
		body.style.background = "green"
		hb[2].style.display = "block"
		hb[3].style.display = "block"
		
		let ptop = setInterval(pup,1000)
	    function pup(){
	     pkup = pkup + 30
	     pktop.style.top = pkup + "px"
	     if(pkup >= 420){
	     	back()
	     	clearInterval(ptop);
	     }
	    }
		pk.onclick = function (){
			pkhp = pkhp - 10
			hb[3].style.width = pkhp + "%"
			if(pkhp<=0){
			talk3.textContent ="Молодец, вот тебе щит"
			pktop.style.display = "none"
			shield.style.display = 'block'
			achiev = achiev + 1
			clearInterval(ptop);
			setTimeout(back, 2000);
			}
		}
	}

	setTimeout(changeLocation3, 1000);

}
}
if(up<=640&&up >= 540&&left>=760&&left<=880){
forge.onclick = function(){
	player.style.top = "62%";
	player.style.left = "45%";

	let wrong3 = document.querySelectorAll(".loc4_variants"); //локация 2
	let right3 = document.querySelectorAll(".loc4_pravilno")

	function changeLocation4(){
		main.style.display = 'none'
		location4.style.display = 'block'
		body.style.background = "white"
				for (let i = 0; i<17; i=i+1){
			wrong3[i].onclick = function (){
				alert("это не одноручный меч")
			}
		} 
		right3[0].onclick = function (){
				location4.style.backgroundImage = "url(Loc4/2.png)"
				btn.style.display = 'block'
		}
		right3[1].onclick = function (){
				location4.style.backgroundImage = "url(Loc4/3.png)"
				btn.style.display = 'block'
		}
		right3[2].onclick = function (){
				location4.style.backgroundImage = "url(Loc4/4.png)"
				btn.style.display = 'block'
		}	
		
	}
	btn.onclick = function(){
			main.style.display = 'block'
			location4.style.display = 'none'
			body.style.backgroundImage = "url(bg1.png)"
			body.style.backgroundSize = "cover"
			sword.style.display = 'block'
			achiev = achiev + 1
		}
	setTimeout(changeLocation4, 1000);
}
}
if (achiev == 3 ) {
	// alert("выиграл")
	achiev = 0
	player.src = "player2.png"
	player.before(boss)
	body.style.backgroundImage = "url(dungeon.jpg)"
	boss.style.display = "block"
	main.style.display = 'none'
	up = 820
	player.style.top = up + "px";
	hb[0].style.display = "block"
	hb[1].style.display = "block"
	atk.style.display = "block"
}
if(up==820&&left>=40&&left<=280){
	atk.onclick = function(){
		bosshp = bosshp - 5
		hb[1].style.width = bosshp + "%"
		if(bosshp<=0){
			alert('you win')
			boss.style.display = "none"
		}
	}
}
})

	
