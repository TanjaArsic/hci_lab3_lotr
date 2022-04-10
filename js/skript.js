$(document).ready(function() {
					
    $("#edit").click(function(){
			$('.summernote').summernote();
			$("#edit").hide();
			$("#save").show();
			$("#cancel").show();
			$('.summernote').summernote('code', $("#opis").html());
	});
		
	$("#save").click(function(){
		bootbox.confirm({
			size: "small",
			message: "Da li ste sigurni?",
			callback: function(result) { 
				if(result)
				{
					var markupStr = $('.summernote').summernote('code');
					$("#opis").html(markupStr);
				}
				$("#edit").show();
				$("#save").hide();
				$("#cancel").hide();
				$('.summernote').summernote('destroy');
				$('.summernote').hide();
			}
		})
	});
	
	$("#save").hide();

	$("#cancel").click(function(){
		$("#edit").show();
		$("#save").hide();
		$("#cancel").hide();
		$('.summernote').summernote('destroy');
		$('.summernote').hide();
		
		
	});
	
	$("#cancel").hide();
});
