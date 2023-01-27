

function start()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gazcRJFHj/model.json", modelReady)
}

function modelReady()
{
    classifier.classify(gotResult)
}

function gotResult(error,result){

    if (error) {
        console.error(error)
        
    }
    else{
        console.log(result)




        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;





        document.getElementById("result_label").innerHTML = "I can here a "+result[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy ="+(result[0].confidence*100).toFixed(2)+'%';


        document.getElementById("result_label").style.color = "rgb("+r+", "+g+", "+b+")"
        document.getElementById("result_confidence").style.color = "rgb("+r+", "+g+", "+b+")"


        img1 = document.getElementById("ailen1")
        img2 = document.getElementById("ailen2")
        img3 = document.getElementById("ailen3")
        img4 = document.getElementById("ailen4")


        if (result[0].label == "Clap") {
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        

        else if (result[0].label == "Snap") {
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }


        else if (result[0].label == "Click") {
            img1.src="aliens-01.png";
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }


        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }



    }





}