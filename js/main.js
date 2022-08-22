// Start Class ...
class Player {
    constructor() {
        // var to get items ... from html file ...
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        // Start if Statement ...
        if (screen.width < 500) 
        {
            heightMain.style.width = screen.width + "px";
            
        }
        // End if Statement ...
        // var to get items ...
        var cont = document.getElementById("content");
        cont.style.height = screen.height-300 + "px";



    }
}

// Start Event 
window.onload = new Player();
// End Event 

// End Class ...

// class buttons 
// Start Class
class Audio_Player {
    constructor() 
    {
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_button = document.getElementById("play");
        this.stop_button = document.getElementById("stop");
        this.isPlay;
        this.play_button.addEventListener("click",  ()=> {
            this.play_pause();
        });

        this.names_radio =[];
        this.names_radio[0] = "Jil FM";
        this.names_radio[1] = "Radioa Coran";
        this.names_radio[2] = "Radioalgerie";

        
 
        this.source_audio = [];
        this.source_audio[0] = "https://podcast.radioalgerie.dz/sources/coran/mp3/cd31f081-b4b9-40ce-af92-02dde25712a2.MP3";
        this.source_audio[1] = "https://podcast.radioalgerie.dz/sources/coran/mp3/4dfa6d64-2fe3-4f8f-8071-8a75d3e3faee.MP3";
        this.source_audio[2] = "http://my.radioalgerie.dz/sites/default/files/2022-07/amel_hijra.mp3";
  
        // you can add more
        this.server = 0;

        this.setResource();

        document.getElementById("next").addEventListener("click", () => {
                if (this.server < this.source_audio.length-1)
                {
                    ++this.server;
                    this.isPlay = false;

                }else
                {
                    this.server = 0;
                }

                localStorage.setItem("saveposition",this.server);
                this.setResource();
            
        });

        document.getElementById("previous").addEventListener("click", () => {

            if (this.server > 0)
            {
                --this.server;
                this.isPlay = false;

            }else
            {
                this.server = this.source_audio.length-1;
            }

            localStorage.setItem("saveposition",this.server);
            this.setResource();

        });

    }

    setResource () {
        if (localStorage.getItem("saveposition") != null) 
        {
            this.server = localStorage.getItem("saveposition");
        }

        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.play_pause();
        
    }

    play_pause() {
        if (this.isPlay ==  false)
        {
            this.play_button.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlay = true;
            
            
        }else
        {
            
            
            this.play_button.src = "./img/play-button.png";
            this.audio_file.pause();
            this.isPlay = false;

        }
    }
}



// End  Class

// =====================================
// =====================================

// Start Event..

// call class ...
window.onload = new Audio_Player();



// End  Event...

