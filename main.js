function start() 
{ 
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-N6O_KkFh/model.json', modelReady);
}
function modelReady() 
{ 
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error) {
        console.log(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("NameOfAudio").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("numberOfAudioAnimal").innerHTML = 'Accuracy  - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("NameOfAudio").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("numberOfAudioAnimal").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById('imgOfAnimals')

        if (results[0].label == "Barking") { 
            img.src = 'Barking.jpeg';
        } else if(results[0].label == "Meowing") { 
            img.src = 'Meowing.jpeg';
        } else if (results[0].label == "Mooing") { 
            img.src = 'Mooing.jpeg';
        } else if (results[0].label == "Roaring"){
            img.src = 'Roaring.jpeg';
        }
        else{
            img.src = 'Default.png';
        }
    }
}