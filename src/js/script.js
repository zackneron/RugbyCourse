	const closeMenu = document.getElementById('js-closeMenu');
	const mobileMenu = document.getElementById('js-mobileMenu');
	const openMenu = document.getElementById('js-openMenu');

	closeMenu.addEventListener('click', () => {
		mobileMenu.style.width = "0";
	});
	openMenu.addEventListener('click', () => {
		mobileMenu.style.width = "100%";
	});

	let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  return new bootstrap.Tooltip(tooltipTriggerEl)
	});

	let mediaPlayer = document.getElementById('media-video');

	function initialiseMediaPlayer() {
	   mediaPlayer = document.getElementById('media-video');
	   mediaPlayer.controls = false;
	}

	let  playPauseButton = document.getElementById('play-pause-button');

	playPauseButton.addEventListener('click', function(){
		const btn = document.getElementById('media-icon');
		const mainPlayBtn = document.querySelector('.media__play-btn');

	   if (mediaPlayer.paused || mediaPlayer.ended) {
	      btn.className = 'fa fa-pause-video';
	      mainPlayBtn.style.display = 'none';
	      mediaPlayer.play();
	   }
	   else {
	      btn.className = 'fa fa-play-video';
	      mainPlayBtn.style.display = 'block';
	      mediaPlayer.pause();
	   }
	});

	mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
	function updateProgressBar() {
		var diplay = document.getElementById('diplay');
	   var progressBar = document.getElementById('progress-bar');
	   var percentage = Math.floor((100 / mediaPlayer.duration) * mediaPlayer.currentTime);
	   progressBar.value = percentage;
	   diplay.innerHTML = percentage + '% Completed';
	}

	let fullScreenBtn = document.getElementById('fullScreenBtn');
	fullScreenBtn.addEventListener('click', function(){
		if(mediaPlayer.requestFullScreen){
			mediaPlayer.requestFullScreen();
		} else if(mediaPlayer.webkitRequestFullScreen) {
			mediaPlayer.webkitRequestFullScreen();
		} else {
			mediaPlayer.mozRequestFullScreen();
		}
	}, false);

	initialiseMediaPlayer(); 