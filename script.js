var friends = ['Sunil','Nita','Bhuwan','Bhakta','Radhi'];
var button = document.createElement('button');
    button.innerHTML = "Sing";
document.body.appendChild(button); 

button.addEventListener("click", function() {
for (var i = 0; i < friends.length; i++) {
    var l = friends[i];
    var friend = document.createElement("div");
    var myH= document.createElement("h3");
    myH.innerHTML = l;
    friend.appendChild(myH);
    document.body.appendChild(friend);
        
    console.log(l.toUpperCase(), ':');
    for (var j = 99; j > 0; j--)  {
    var k = j-1;


    if (j > 1){
            var para = document.createElement("p");
            var t = document.createTextNode( j + " lines of code in the file, "+ j +" lines of code; "+ l + " strikes one out, clears it all out, "+ k + " lines of code in the file ");
    } else {

            var para = document.createElement("p");
            var t = document.createTextNode( j + " lines of code in the file, "+ j +" lines of code; "+ l + " strikes one out, clears it all out, "+ "no more lines of code in the file ");
    }
    para.appendChild(t);
    friend.appendChild(para);
}
}
});