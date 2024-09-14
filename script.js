function suprise_box2(){
    var s = prompt("Enter your name: ");
    if (s == null || s == "") {
        alert("Enter your name...");
        suprise_box2();
    } else if (s != null && s != "") {
        document.write(
            '<div style="text-align:center; ' +
            'background-color: #FFFDD0; ' + 
            'height: 100vh; ' +  
                'width: 100vw; ' + 
                'display: flex; ' + 
                'flex-direction: column; ' +  
                'justify-content: center; ' + 
                'align-items: center;>' + 
            'padding: 20px;">' +  
            '<h1 style="color: purple;">Surprise!</h1>' +
            '<br>' +
            '<img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/clown-face.png" alt="Clown Face">' +
            '<h1>' + s + ' you are a joker !</h1>' +
            '<h3>This is just for fun...</h3>' +
            '<audio autoplay>' +
            '<source src="laugh.mp3.mp3">' +  
            'Your browser does not support the audio element.' +
            '</audio>' +
            '<p>Created by K.Mohammed Kaif &copy; 2024</p>' +
            '</div>');
        }
    }