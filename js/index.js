		var buttonnav=document.getElementById("buttonnav");
		var navlist=document.getElementsByClassName("nav-list");
		var onoff=false;
		
		buttonnav.onclick=function(){
			if(window.getComputedStyle(navlist[0]).display=='none'){
				navlist[0].style.display = "block";
			}else{
				navlist[0].style.display = "none";
			}


		}