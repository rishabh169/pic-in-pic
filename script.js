const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// promp to slect medida streamm pass to video elementm then play
async function selectedMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch(error){
        console.log("whoop, error here : ", error);
    }
}

button.addEventListener('click', async () =>{
    //Diable the button 
    button.disabled = true;
    //start picture in picutre
    await videoElement.requestPictureInPicture();
    // reset button 
    button.disabled = false;
});

// onLoad
selectedMediaStream();