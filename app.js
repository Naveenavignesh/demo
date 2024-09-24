fetchData();
    async function fetchData(){
        try{
            const catsName =document.getElementById("catsName").value;
            const response = await fetch("https://www.pexels.com/search/cat/");
            if(!response.ok){
                throw new error("could not fetch resource");
            }
            const data = await response.json();
            const catssprite = data.sprites.front_default;
            const imgElement = document.getElementById("catssprite");
            imgElement.src = catssprite;
            imgElement.style.display = "block";
            
        }
        catch(error){
            console.error(error);
        }
    }