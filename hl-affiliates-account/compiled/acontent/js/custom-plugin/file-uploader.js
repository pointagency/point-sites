(function( $ ){
  $.fn.fileUploaderize = function(o) {
  



  	/*
  	*
  	*	Setup table for each matching dom element
	*
  	*/


  	$(this).each(function(){

      var $self = $(this),
          targetEndForm = $($self.data('targetForm'))
          target = '#'+$self.attr('id'),
          inputName = $self.data('inputName'),
          dropAreaText = $(target+' .qq-upload-drop-area-text'),
          buttonText =  $(target+' .qq-upload-button-text'),
          dropArea =  $(target+' .qq-upload-drop-area'),
          uploaderBlock = $self;


      /** process template **/

      var options = {
        template: $self.data('templateId') || 'qq-template',
        request: {  
          endpoint: $self.data('uploadTo'),
          inputName: 'file'
        },
        multiple: $self.data('multiple') === undefined?false:$self.data('multiple'),
        deleteFile: {
          enabled: true,
          endpoint: $self.data('deleteAt')
        },
        validation: {
          allowedExtensions: $self.data('allowedExtensions') === undefined?['jpeg', 'jpg', 'gif', 'png', 'pdf']:($self.data('allowedExtensions').split(","))
        },
        autoUpload: $self.data('autoUpload'),
        messages: {
          sizeError: $self.data('sizeErrorMessage') || "File to large",
          typeError: $self.data('typeErrorMessage') || "Wrong file type"
        }
      };

      jQuery.extend(options, o);


      console.log('Initializing a file uploader #'+$self.attr('id')+' with the following perameters:' );
      console.log(options);


      $self.fineUploader(options).on('error', function (event, id, name, errorReason, xhrOrXdr) {
           
        console.log("Fine uploader Error: "+errorReason+" - "+xhrOrXdr);
        console.log(xhrOrXdr);

      }).on('allComplete', function(event, succeeded, failed){

        if(failed.length<=0) {
          $(dropAreaText).html($self.data('uploadSuccessMessage'));
        } else {
          $(dropAreaText).html($self.data('uploadFailedMessage'));
        }

        $(buttonText).html($self.data('addMoreMessage'));

        $(dropArea).removeClass('uploading');

        $self.addClass('uploaded');

        $self.trigger('uploaded');

      }).on('complete', function (event, id, name, responseJSON) {

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

        o.onCompleteCallback();

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


  	});

  }
})(jQuery);