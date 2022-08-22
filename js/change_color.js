// Start class 
class Color {
    constructor () 
    {

            this.color_one = document.getElementById("color_1");
            this.color_one.addEventListener("click" , () => {
                this.select_Color("color_one");
            });


            this.color_two = document.getElementById("color_2");
            this.color_two.addEventListener("click" , () => {
                this.select_Color("color_two");
            });


            this.color_three = document.getElementById("color_3");
            this.color_three.addEventListener("click" , () => {
                this.select_Color("color_three");
            });


            this.color_four = document.getElementById("color_4");
            this.color_four.addEventListener("click" , () => {
                this.select_Color("color_four");
            });

            if (localStorage.getItem("COLOR") == null)
            {
                document.body.style.background = "#ff6d3a";
                
            }

            this.select_Color(localStorage.getItem("COLOR"));


    }

    // Start method
    select_Color (color)
    {
        if (color == "color_one") 
        {
           
            document.body.style.background = "#0c5177";
        }
        else if (color == "color_two") 
        {
           
            document.body.style.background = "#e1effb";
        }
        else if (color == "color_three") 
        {
           
            document.body.style.background = "#ff6d3a";
        }
        else if (color == "color_four") 
        {
           
            document.body.style.background = "#000";
        }

        localStorage.setItem("COLOR",color);
    }
    // End method
}

// Start Event 
window.onload = new Color();
// End Event 
// End class 