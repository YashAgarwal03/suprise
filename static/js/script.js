document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("birthdayVideo");
    const playButton = document.getElementById("playButton");

    if (video && playButton) {

        playButton.addEventListener("click", function () {

            if (video.paused) {

                video.play();

                playButton.innerHTML =
                    "⏸ Pause Birthday Video";

            } else {

                video.pause();

                playButton.innerHTML =
                    "▶ Play Birthday Video";
            }

        });

        video.addEventListener("play", function () {
            playButton.innerHTML =
                "⏸ Pause Birthday Video";
        });

        video.addEventListener("pause", function () {
            playButton.innerHTML =
                "▶ Play Birthday Video";
        });
    }

});