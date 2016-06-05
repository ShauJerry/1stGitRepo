function add(){
	sum = 5 + 6;
	alert(sum);
}
function winfirm(){
	var firmMsg = null;
	firmMsg = confirm("new window open?");
	if(firmMsg = true){
		window.open('http://www.imooc.com','_blank');
	}
}