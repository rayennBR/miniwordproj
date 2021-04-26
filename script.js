const Select_color = document.querySelector("#color");
const Select_par = document.querySelector("#par");
const Select_size = document.querySelector("#size");
const Select_font = document.querySelector("#font");
const font_list= [
    'Arial',
    'Gill Sans',
    'Cursive',
    'Times',
    'Courier New'
    ];
        for (var i =0;i <font_list.length; i++) {
            Select_font.add(new Option(font_list[i]));
        }
      Select_color.addEventListener('change',function(){
          Select_par.style.color=color.value;
      })  


      font.addEventListener('change',function(){
          Select_par.style.fontFamily=font.value;
      })

      size.addEventListener('change',function(){
          Select_par.style.fontSize=size.value+'px';
      })