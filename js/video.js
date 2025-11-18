var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");

	
	video.autoplay = false;
	video.loop = false;
	video.load();

	
	var volumeSpan = document.querySelector("#volume");
	var slider = document.querySelector("#slider");

	
	if (slider) {
		video.volume = slider.value / 100;
	}
	if (volumeSpan) {
		volumeSpan.textContent = Math.round(video.volume * 100) + "%";
	}

	
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		if (volumeSpan) {
			volumeSpan.textContent = Math.round(video.volume * 100) + "%";
		}
	});

	
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});


	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate = video.playbackRate * 0.9;
		console.log("New speed is " + video.playbackRate);
	});

	
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate = video.playbackRate / 0.9;
		console.log("New speed is " + video.playbackRate);
	});

	
	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime = video.currentTime + 10;
		}
		console.log("Current location: " + video.currentTime);
	});

	
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
			console.log("Unmuted");
		} else {
			video.muted = true;
			this.textContent = "Unmute";
			console.log("Muted");
		}
	});

	
	if (slider) {
		slider.addEventListener("input", function() {
			video.volume = this.value / 100;
			if (volumeSpan) {
				volumeSpan.textContent = this.value + "%";
			}
			console.log("Volume is " + video.volume);
		});
	}

	
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Styled (oldSchool) class added");
	});

	
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("oldSchool class removed");
	});
});

