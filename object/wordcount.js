var text="hello hai hello hai hello"


// print word count
//hello:3,hai:2

var words=text.split(" ")

 wc={}

for(let w of words ){

    if (w in wc){

        wc[w]+=1
    }
    else{

        wc[w]=1
    }
}

console.log(wc)

