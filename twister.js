trialz=async()=>{

    
    throw "someerroz"
    return "something"
} 


async function trialz2(){
    try{
        k=await trialz()
        return "non async function returned from async"+" "+ k

      

    }catch(error){
        console.log(error)
        throw "another error"
       // return "boringzz"


    }

    
    //console.log(k)
    
    

}

trialz2().then((val)=>{
    console.log(val)
}).catch((error)=>{
    console.log(error)
})
//console.log(newday)
//m=trialz2()
//console.log(m)