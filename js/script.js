let info = [
    {name:"Portrait of a Woman, 1638-39 ",artist:"by Guido Reni",about:"The subject may represent Artemisia II of Caria (d.350 BC) wife of Mausolus, the governor of Caria in Asia Minor. After the death of her husband, she mixed his ashes in liquid which she drank, making herself a living tomb. The story was used as a symbol of a widow's devotion to her husband's memory."},
    {name:"A Portrait Submerged: The Silent Depths ",artist:"by Freepik",about:"This image captures a moment of stillness and introspection, symbolizing a retreat from the chaos of life. The water, representing both life and mystery, envelops the man in a silent, peaceful embrace."},
]

var thisTitle,thisArtist,thisText;

$('.carousel-item').click(function(){
    let index = $(this).index();
    console.log(index);

    if(index == 0)
        {
            thisTitle = info[0].name;
            thisArtist = info[0].artist;
            thisText = info[0].about;  
        }
        if(index == 1)
            {
                thisTitle = info[1].name;
                thisArtist = info[1].artist;
                thisText = info[1].about;  
            }

        $(".projectTitle").html(thisTitle);
        $(".projectArtist").html(thisArtist);
        $(".projectText").html(thisText);




})