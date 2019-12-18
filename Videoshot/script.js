(() => {
    /**
     * 1. Select video and canvas
     * 2. Get canvas context
     */
    const canvas = document.querySelector('canvas');
    const video = document.querySelector('video');
    const ctx = canvas.getContext('2d');

    /**
     * Set canvas dimensions
     */
    video.addEventListener('loadedmetadata',()=>{
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
    });

    /**
     * 1. Start drawing on play
     * 2. Redraw
     */
    const frameRate = 24;

    video.addEventListener('play', ()=>{
        const drawImage = () => {
            ctx.drawImage(video, 0, 0);
            if(!video.paused){
                setTimeout(drawImage, 1000/ frameRate);
            }
        }
        setTimeout(drawImage, 1000/ frameRate);
    })

})();