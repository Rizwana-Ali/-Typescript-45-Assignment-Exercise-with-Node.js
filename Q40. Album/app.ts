function make_album (artist: string, title: string, tracks?:number)  {

    const album :{artist: string, title: string, tracks?:number} =  {

        artist : artist,
        title : title
        
    }

    if(tracks !== undefined){
    album.tracks = tracks;
    }
    
    return album;
    
    }
    
    const album1 = make_album("Artist 1 Ali","Album Title 1 light");
    console.log(album1);
    
    const album2 = make_album("Artist 2 bilal","Album Title 2 red wave");
    console.log(album2);
    
    const album3 = make_album("Artist 3 humza","Album Title 3 seenbreez",12);
    console.log(album3);
    
    


    

    