
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let animeContainer=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (anime_name,author_name,year_of_publish) {
    let nft={
        "anime_name":anime_name,
        "author_name":author_name,
        "year_of_publish":year_of_publish
    }
    animeContainer.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<animeContainer.length;i++)
        {
            console.log("\n\n_________ANIME_________\n\n" );
            console.log("anime_name : "+animeContainer[i].anime_name);
            console.log("author_name : "+animeContainer[i].author_name);
            console.log("year_of_publish : "+animeContainer[i].year_of_publish+"\n");
        }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted " + animeContainer.length +"\n");
}

// call your functions below this line
mintNFT("jujutsu Kaisen","Gege Akutami","5 Mar 2018");
mintNFT("Solo Leveling","Chugong","25 July 2016");
mintNFT("Attack on Titan","Yasuko Kobayashi","7 April 2016");
mintNFT("Naruto","Masashi Kishimoto","21 September 1999");
listNFTs();
getTotalSupply();
