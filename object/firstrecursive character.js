// find text="ABCBDDE"

//findfirst recurssive character

var text="ABCBDDE"

var wc={}

for(let ch of text){

    if(ch in wc){

        console.log(ch,"is the first recursive charactr")
        break
    }

    else{

        wc[ch]=1

    }
}