$('#recordBtn').addClass("notRec");

$('#recordBtn').click(function(){
	if($('#recordBtn').hasClass('notRec')){
		$('#recordBtn').removeClass("notRec");
		$('#recordBtn').addClass("Rec");
	}
	else{
		$('#recordBtn').removeClass("Rec");
		$('#recordBtn').addClass("notRec");
	}
});	