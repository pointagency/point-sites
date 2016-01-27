

window.appStrings = {
	init : function() {

		var ja = $('.ja').length>0;

		this.uploadForm = {
			successMultiple : ja?"<span class='touch-only'>アップロード済みファイル</span><span class='non-touch-only'>アップロード済みファイル</span>":"<span class='touch-only'>Uploaded!</span><span class='non-touch-only'>Success! Drag your files here to upload more.</span>",
			successSingle : ja?"アップロード済みファイル":"Uploaded!",
			failedMultiple : ja?"failedMultiple - needs trans":"Some files has failed! Drag a file here to try again",
			successSingle : ja?"failedSingle - needs trans":"Upload failed! Drag a file here to try again",
			uploading: ja?"ファイルアップロード中":"Uploading",
			uploadInstruction: ja?"ファイルをドラッグ&amp;ドロップして下さい":"Drag and drop an image here",
			uploadButtonText: ja?"<span class='touch-only'><span class='hidden-xs'><span class='word'>こちらをクリックしてファイルを</span><span class='word'>選択して下さい</span></span><span class='visible-xs'>ファイルを使用端末から選択</span></span><span class='non-touch-only'><span class='hidden-xs'><span class='word'>もしくはこちらをクリックしてファイル</span><span class='word'>を選択して下さい</span><span class='visible-xs'>ファイルを使用端末から選択</span></span>":"<span class='touch-only'>Select from your device</span><span class='non-touch-only'>or select from your computer/device</span>",
			addMore: ja?"<span class='word'>追加で書類</span><span class='word'>をアップロードする</span>	":"click to add more files"
		};

	}
};