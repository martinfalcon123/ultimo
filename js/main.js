$(document).ready(function(){
    //slider
    $('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: 1200  

    });

    //posts

    var posts = [
        {
            title: 'prueba de titulo 1',
            date:'Publicado el dia '  + moment().day() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet rhoncus ,euismod parturient mi cursus urna sodales vel porttitor, fringilla nisi fermentum feugiat natoque senectus etiam rutrum. Sociosqu nisi nam fames dui magna penatibus facilisis netus, viverra ligula id laoreet liberosenectus nullam posuere pharetra, tincidunt sodales fusce pulvinar facilisi in accumsan. Purus nibh nisl arcu diam luctus praesent ridiculus, molestie facilisi feugiat sem curae viverra mollis, eleifend vehicula ac nec vitae pulvinar.'
        },
        {
            title: 'prueba de titulo 2',
            date:'Publicado el dia '  + moment().day() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet rhoncus ,euismod parturient mi cursus urna sodales vel porttitor, fringilla nisi fermentum feugiat natoque senectus etiam rutrum. Sociosqu nisi nam fames dui magna penatibus facilisis netus, viverra ligula id laoreet liberosenectus nullam posuere pharetra, tincidunt sodales fusce pulvinar facilisi in accumsan. Purus nibh nisl arcu diam luctus praesent ridiculus, molestie facilisi feugiat sem curae viverra mollis, eleifend vehicula ac nec vitae pulvinar.'
        },
        {
            title: 'prueba de titulo 3',
            date:'Publicado el dia '  + moment().day() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet rhoncus ,euismod parturient mi cursus urna sodales vel porttitor, fringilla nisi fermentum feugiat natoque senectus etiam rutrum. Sociosqu nisi nam fames dui magna penatibus facilisis netus, viverra ligula id laoreet liberosenectus nullam posuere pharetra, tincidunt sodales fusce pulvinar facilisi in accumsan. Purus nibh nisl arcu diam luctus praesent ridiculus, molestie facilisi feugiat sem curae viverra mollis, eleifend vehicula ac nec vitae pulvinar.'
        },
     
    ];


    posts.forEach((item, index)=>{
        var post = `
        <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                    
                        </p>
                        <a href="#" class="button-more">Leer mas</a>
                  
                </div>
                </section>
                
                
                </article>

        
        
        `;
            $("#posts").append(post);            

    });
    //selector de temas

    var theme= $("#theme");

    $("#to-green").click(function(){
        console.log("click");

        theme.attr("href","css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");

    });  $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });


});