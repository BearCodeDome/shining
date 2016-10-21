var wrap_img=document.getElementsByClassName("wrap_img")[0];
var oUl=wrap_img.getElementsByTagName("ul")[0];
var spans=document.getElementsByTagName("span");


var index=0;

 setInterval(function(){
	
	changeMoveFn();
	index++;
		
},2000);

function changeMoveFn(){
	if(index>2){
		index=0;
	}
	for(var i=0;i<spans.length;i++){
		spans[i].className="";
	}
		spans[index].className="active";
		oUl.style.marginLeft=index*-100+"%";
		
}


for(var i=0;i<spans.length;i++){
	spans[i].index=i;
	spans[i].onclick=function(){
		index=this.index;
		changeMoveFn();
	}
}
