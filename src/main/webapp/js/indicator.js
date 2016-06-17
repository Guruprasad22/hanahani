/*function loadTickers() {
		var selectList = $("#stockDrpDown");
		$.getJSON("http://localhost:8080/tickers", function(data){
		$.each(data, function (index, optionData) {
			var option = new Option(optionData);
			selectList[0].add(option, null);
			});
		});
}*/

$("#btn2").click(function(){
console.log("inside bt2 click");
var selectHtml = $(".indicators").html();
$("#indicatorPanel").html(selectHtml);
});
			
$("#btn6").click(function(){
console.log("btn6 click");
$("#indicatorPanel").empty();
var selectHtml = $(".upload").html();
$("#indicatorPanel").prepend(selectHtml);
});
			
$("#more_files").click(function(){
console.log("add more clicked");
//var file_count = $('input[type="file"]').length;
//alert(file_count);
});
			
