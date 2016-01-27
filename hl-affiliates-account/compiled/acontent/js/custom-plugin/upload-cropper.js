var uploadCropper = {
	init: function() {
		

		if($('.fine-uploader').length<=0){
			return;
		}

		function addFileHiddenInput(target,name,id) {
			var form = target,
				id = id;

			var input = $(document.createElement('input'));

			input.attr({
				name: name+'[]',
				value: id,
				type: 'hidden',
				id: name+id.replace(/[\.\s]/g,"_")
			});

			form.append(input);
		}

		function setupFineUploader(target, inputName, idType) {

			var targetEndForm = $($(target).data('targetForm'));

			var uploaderBlock = $($(target).closest('.file-uploader')),
				dropAreaText = target+' .qq-upload-drop-area-text',
				buttonText = target+' .qq-upload-button-text',
				dropArea = target+' .qq-upload-drop-area';

			var multiple = true;
			
			if($(target).data('singleFile')) {
				multiple = false;
			}

			var extensions = ['jpeg', 'jpg', 'gif', 'png', 'pdf'];

			if($(target).data('allowedExtensions')) {
				extensions = $(target).data('allowedExtensions').split(",");
			}


			$(target).fineUploader({
				template: 'qq-template',
				request: {	
			        endpoint: $(target).data('uploadTo'),
			        inputName: 'file'
			    },
			    multiple: multiple,
	            deleteFile: {
	                enabled: true,
	                endpoint: $(target).data('deleteAt')
	            },
	            validation: {
	                allowedExtensions: extensions,
	                sizeLimit: $(target).data('sizeLimit') || 2097152
	            },
	            autoUpload: !$(target).data('disableAutoUpload'),
	            messages: {
	            	sizeError: $(target).data('sizeErrorMessage') || "File to large",
	            	typeError: $(target).data('typeErrorMessage') || "Wrong file type"
	            },
	            callbacks: {
	            	onSubmit: function(id, fileName) {
	            		console.log(id);
	            		this.setParams({
	            			type: idType
	            		});
	            	}
	            }
			}).on('error', function (event, id, name, errorReason, xhrOrXdr) {
				   
				console.log("Fine uploader Error: "+errorReason+" - "+xhrOrXdr);
				console.log(xhrOrXdr);

			}).on('allComplete', function(event, succeeded, failed){

				if(failed.length<=0) {
					$(dropAreaText).html(multiple?appStrings.uploadForm.successMultiple:appStrings.uploadForm.successSingle);
				} else {
					$(dropAreaText).html(multiple?appStrings.uploadForm.failedMultiple:appStrings.uploadForm.failedSingle);
				}

				$(buttonText).html(appStrings.uploadForm.addMore);

				$(dropArea).removeClass('uploading');
				uploaderBlock.addClass('uploaded');
				$(target).trigger('uploaded');

			}).on('complete', function (event, id, name, responseJSON) {

				var progressBar = $(target+' .qq-file-id-'+id+' .qq-progress-bar-container-selector'),
					fileSize = $(target+' .qq-file-id-'+id+' .qq-size-progress'),
					animationDuration = 125;

				if(responseJSON.success) {
					progressBar.animate({
						opacity: 0,
						top: -30
					},animationDuration);

					fileSize.animate({
						opacity: 0,
						top: -30
					},animationDuration,function(){
						progressBar.css({
							display: 'none'
						});
						fileSize.css({
							display: 'none'
						});
					});

					// add a hidden input with file id

					var serverfilename = responseJSON.filename || '20150220.abcded.jpg';
					addFileHiddenInput(targetEndForm, inputName, serverfilename+'_'+id);
					
					$(target).fineUploader('setDeleteFileParams',{
		    			"fileName": ""+serverfilename
		    		},id);

					$(target+' .qq-file-id-'+id+' .qq-upload-delete').data('hiddenTarget','#'+inputName+(serverfilename+'_'+id).replace(/[\.\s]/g,"_"));

				}
			}).on("delete", function(event, id) {

			}).on("submit",function(event, id, name) {		

				var item = $(target+' .qq-file-id-'+id+' '),
				fileNameDisplay = $(target+' .qq-file-id-'+id+' .qq-upload-file');

				console.log(name);

				if(name.length > 21) {
					fileNameDisplay.html(name.substring(0, 10)+"&hellip;"+name.substring(name.length-11,name.length));
				}
			}).on("submitted",function(event, id, name) {		

				var item = $(target+' .qq-file-id-'+id),
				fileNameDisplay = $(target+' .qq-file-id-'+id+' .qq-upload-file');

				$(dropAreaText).html(appStrings.uploadForm.uploading);

				item.css({
					opacity: 0,
					position: 'relative',
					top: -10
				});

				var currentIndex = $(target).data('newlyDroppedFileIndex');

				setTimeout(function(){

					item.animate({
						opacity: 1,
						top: 0
					},250);

				},currentIndex*250+250);
			

				$(target).data('newlyDroppedFileIndex', currentIndex+1);

				
				item.addClass('in-queue');

				console.log(name);

				if(name.length > 17) {
					fileNameDisplay.html(name.substring(0, 8)+"&hellip;"+name.substring(name.length-9,name.length));
				}

				uploaderBlock.addClass('has-files');


			}).on("upload",function(event, id, name) {

				var item = $(target+' .qq-file-id-'+id),
				fileNameDisplay = $(target+' .qq-file-id-'+id+' .qq-upload-file');


				item.removeClass('in-queue');

				console.log("upload: "+name);

				if(name.length > 17) {
					fileNameDisplay.html(name.substring(0, 8)+"&hellip;"+name.substring(name.length-9,name.length));
				}

			}).on("progress",function(event, id, name, uploaded, total){

				var item = $(target+' .qq-file-id-'+id),
					progressBar = $(target+' .qq-file-id-'+id+' .qq-progress-bar'),
					progressRead = $(target+' .qq-file-id-'+id+' .qq-current-uploaded'),
					percentage = (uploaded/total*100);

				progressBar.css({
					width: percentage+'%'
				});

				$(dropArea).addClass('uploading');
				uploaderBlock.removeClass('uploaded');
				progressBar.attr('aria-valuenow',percentage);

			}).on("validateBatch",function(event,files,btn){
				$(target).data('newlyDroppedFileIndex', 0);
			}).on("reset",function(){
				uploaderBlock.removeClass('uploaded');
				uploaderBlock.removeClass('has-files');
			});


			$(target).on("click",".qq-upload-delete",function(){
				var self = $(this);

				$(self.data('hiddenTarget')).remove();

				if($('[name="'+inputName+'[]"]').length<=0) {
					uploaderBlock.removeClass('has-files');
					uploaderBlock.removeClass('uploaded');
					$(dropAreaText).html(appStrings.uploadForm.uploadingInstruction);
					$(buttonText).html(appStrings.uploadForm.uploadButtonText);
				}
			});

			uploaderBlock.on('click','.file-uploader-header .toggle',function(){
				if(uploaderBlock.hasClass('has-files')) {
					uploaderBlock.removeClass('has-files');
				} else {
					uploaderBlock.addClass('has-files');
				}
			});

		}

		$('.fine-uploader').each(function(){
			var self = $(this),
				inputPrefix = self.data('inputPrefix'),
				type = self.data('idType');

			console.log("Type");
			console.log(type);

			setupFineUploader('#'+self.attr('id'),inputPrefix, type);
		});


		// setup cropper


		var domSelector = '#update-avatar-form';

		if($(domSelector).length<=0){
			return;
		}

		$('#custom-avatar-uploader').on('submitted',function(){
			var self = $(this);
			setTimeout(function(){
				$('#custom-avatar-uploader .cropping-area > img').cropper({
					aspectRatio: 1/1,
					strict: false,
					guides: false,
					highlight: false,
					dragCrop: false,
					movable: false,
					resizable: false,
					minCropBoxWidth: 162,
					minCropBoxHeight: 162
				});;
			},250);
		});


		$('.cropper-uploader').each(function(){
			var $self = $(this),
				$uploader = $($self.find('.fine-uploader'));

			$self.on('click','.re-upload-photo',function(){
				$uploader.fineUploader('reset');
				$self.removeClass('has-files');
			});	
		});
	

		$('#update-avatar-modal').on('click','.cropping-area-controls-zoom-in',function(){
			$('#custom-avatar-uploader .cropping-area > img').cropper('zoom',0.1);
		});

		$('#update-avatar-modal').on('click','.cropping-area-controls-zoom-out',function(){
			$('#custom-avatar-uploader .cropping-area > img').cropper('zoom',-0.1);
		});


		$(domSelector).each(function(){
			var self = $(this);
			self.submit(function(event){

				console.log("YOU SHOULD BE SUBMITTING THIS FORM VIA AJAX HERE");

				//For demo, I jsut set a brief delay before 
				//triggering the custom event 'submitComplete' to indicate form submission has completed

				setTimeout(function(){

					// this is how you get the data url of the user uploaded avatar (cropped and resized to 192x192):

					console.log($('#custom-avatar-uploader .cropping-area > img').cropper('getCroppedCanvas',{
						width: 192,
						height: 192
					}).toDataURL());


					self.trigger('submitComplete'); 

				},750);

			}).on('submitComplete',function(){
				$('#custom-avatar-uploader').fineUploader('reset');
				$('#custom-avatar-uploader').trigger('reset');
				$('#update-avatar-modal').modal('hide');
			});
		});

	}
}