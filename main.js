Webcam.set({
    width:350,
   height:350,
   png_quality:90,
   image_format: 'png'
})

camera=document.getElementById("camera");
prediction_2="";
prediction_1="";
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TVD5bh_KU/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!!");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is "+ prediction_1;
    speak_data_2-"The second prediction is"+ prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function modelLoaded(){`    `
    console.log("Model Loaded!")
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
    console.log="error in app";
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
        console.log( document.getElementById("result_emotion_name2"));
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    }
    // console.log(results[0].label+   "    "+ results[1].label);
   prediction_1= results[0].label;
   prediction_2= results[1].label;
   speak();
  
    if(results[0].label=="Good Job")
    {
        document.getElementById("update_emoji1").innerHTML="&#128077;";
    }
    if(results[0].label=="Dislike")
        document.getElementById("update_emoji1").innerHTML="&#128078;";
    }
    if(results[0].label=="Yo"){
        document.getElementById("update_emoji1").innerHTML="&#129304;";
    }
    if(results[0].label=="ok"){
        document.getElementById("update_emoji1").innerHTML="&#128076;";
    }
    if(results[0].label=="amazing"){
        document.getElementById("update_emoji1").innerHTML="&#9996;";
    }
    if(results[1].label=="Happy"){ 
        document.getElementById("update_emoji2").innerHTML="&#128522;";
    }
    if(results[1].label=="Sad")
    {console.log("sad1");
        document.getElementById("update_emoji2").innerHTML="&#128532;";
    }
    if(results[1].label=="Angry")
    {console.log("angrey1");
        document.getElementById("update_emoji2").innerHTML="&#128545;";
    }
    if(results[1].label=="Crying")
    {console.log("crying1");
        document.getElementById("update_emoji2").innerHTML="&#128546;";
    }