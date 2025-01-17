
document.addEventListener('DOMContentLoaded', function() {
   
    let over=document.querySelector(".overlay");
    let slid=document.querySelector(".slider");
    let im=document.querySelector(".i1");
    let col=document.querySelector(".checks");
    let log_but=document.querySelector("#butt");
    let lec_but=document.querySelector(".butt_1");
    
    let bttn=document.querySelector("#drop");
    let appear_1=document.querySelector("#appear_1");
    let appear_2=document.querySelectorAll("#appear_2");
    let out_2=document.querySelector(".out_2");
    let block=document.querySelectorAll("#block_1");
    let h_3=document.querySelectorAll("h3");
    let h_4=document.querySelectorAll("#arrow");
    let contain=document.querySelector(".container");
    let vido= document.createElement('video');
    let menu=document.querySelector("#img_menu")
   
   
    const vidz=async()=>{
        return "/video/The_happening.mp4"
    }
    vidz().then((res)=>{
        console.log(res)
        vido.classList.add('vids');
        vido.src= res;
        vido.setAttribute('loop',true);
        vido.setAttribute('autoplay',true);
        contain.append(vido);
       // let vid=document.querySelector(".vids");
       

        setTimeout(()=>{
            //trigger events
                    window.addEventListener('load',()=>{
                        vido.play();})
                    vido.addEventListener('mouseover',()=>{
                        vido.play();})
                    over.addEventListener('mouseover',()=>{
                            vido.play();})
                    bttn.addEventListener('mouseover',()=>{
                        vido.play();})
                    menu.addEventListener('scroll',()=>{
                        vido.play();})
                    document.addEventListener('mouseover',()=>{
                        vido.play();})
                    log_but.addEventListener('mouseover',()=>{
                        vido.play();})
                    log_but.addEventListener('click',()=>{
                            vido.play();})
                    lec_but.addEventListener('click',()=>{
                        vido.play();})
                    lec_but.addEventListener('mouseover',()=>{
                            vido.play();})
                            
          
                //vido.addEventListener('mouseover', () => { 
               // vido.play(); })

                
            /*    
            window.addEventListener('scroll', () => { 
                setTimeout(()=>{vid.play(); },100)

                });*/
        },100);
    })
    .catch(()=>{
        console.log("cant load video!!")
    })
   
    
    
   // let over1=document.querySelector("#drop:hover")
   //hover effect for overlay
    bttn.addEventListener("mouseover",()=>{
        over.classList.add('diehard');
        })
    bttn.addEventListener("mouseout",()=>{ 
        over.addEventListener("mouseover",()=>{
            over.classList.add('diehard');
        })
        over.addEventListener("mouseout",()=>{
           
            over.classList.remove('diehard');
           
        })
    })
    menu.addEventListener("mouseover",()=>{
        over.classList.add('diehard');
    })
    menu.addEventListener("mouseout",()=>{ 
        
        menu.addEventListener("mouseout",()=>{ 
            over.classList.remove('diehard');
        })
        over.addEventListener("mouseover",()=>{
            over.classList.add('diehard');
        })
       
        document.addEventListener("mouseout",(event)=>{
            if (over.contains(event.target)) { return; }
        
           
            over.classList.remove('diehard');
           
        })
    })

    //image appear reappear
    var i=0;
    setInterval(()=>{
        if(i==0){
            let im2=document.createElement('img');
            let im3=document.createElement('img')
            im2.src="/image/Designer.png";
            im3.src="/image/Designer (3).png";
            im2.classList.add('i1');
            im3.classList.add('i1');
            im2.style.display="none";
            im3.style.display="none";
            slid.append(im2);
            slid.append(im3);
            i++;

        }
        else if(i==1){
            let ims=document.querySelectorAll('.i1');
            for(let j=1;j>=0;j=j-0.00001){
                setTimeout(()=>{
                    if(j==0){
                        im.style.display="none";
                        
                        ims[1].style.opacity=`${1-j}`;
                        
                        

                    }
                    
                    else if(j==1){
                        im.style.opacity=`${j}`;
                        ims[1].style.display="block";
                        ims[1].style.opacity=`${1-j}`;
                        
                        


                    }
                    else{
                        im.style.opacity=`${j}`;
                    
                        ims[1].style.opacity=`${1-j}`;
                    }

            },300);}
            /*
            for(let j=1;j>=0;j=j-0.00001){
                setTimeout(()=>{
                    if(j==1){
                        ims[1].style.display="block";
                        ims[1].style.opacity=`${1-j}`;
                        
                       
                        
                        

                        
                        
                       // ims[1].style.opacity=`${1-j}`;
                        

                    }
                    
                    else{
                        ims[1].style.opacity=`${1-j}`;
                        
                        
                        


                    }
                    
    
                
                    
                    


            },300);}*/


            
    
            i=2;


        }
        else if(i==2){
            let ims=document.querySelectorAll('.i1');
            for(let j=1;j>=0;j=j-0.00001){

                


                setTimeout(()=>{
                    if(j==0){
                        ims[1].style.display="none";
                        
                        ims[2].style.opacity=`${1-j}`;
                        
                        

                    }
                    
                    else if(j==1){
                        ims[1].style.opacity=`${j}`;
                        ims[2].style.display="block";
                        ims[2].style.opacity=`${1-j}`;
                        
                        


                    }
                    else{
                        ims[1].style.opacity=`${j}`;
                    
                        ims[2].style.opacity=`${1-j}`;
                    }
            },300);}

            i=3;

        }
        else if(i==3){
            let ims=document.querySelectorAll('.i1');
            for(let j=1;j>=0;j=j-0.00001){
                setTimeout(()=>{
                    if(j==0){
                        ims[2].style.display="none";
                        
                        im.style.opacity=`${1-j}`;
                        
                        

                    }
                    
                    else if(j==1){
                        ims[2].style.opacity=`${j}`;
                        im.style.display="block";
                        im.style.opacity=`${1-j}`;
                        
                    }
                    else{
                        ims[2].style.opacity=`${j}`;
                    
                        im.style.opacity=`${1-j}`;
                    }

            },300);}
            
            
            i=1;

        }
        else{
            console.log("dontworry!!!")
        }


        },5000);
    
    //slid_appear for course<section id="block_1" class="null">
          //      <h3 id="exam" class="hatt">Engineering Exams</h3><h4 id="arrow" class="hatna">></h4>
          //      </h3>       </section>
          
          //margin_left=1.5px;
  
    block[0].addEventListener("mouseover",(e)=>{

           // console.log("hmmmm")
         
            appear_1.innerText="JEE Mains";
        
            appear_2[0].innerText="JEE advanced";
            appear_2[1].innerText="State Exams";

            appear_1.style.transform="translateX(291px)";
            appear_2[0].style.transform="translateX(291px)";
            appear_2[1].style.transform="translateX(291px)";
            
    })
    
    block[0].addEventListener("mouseout",(e)=>{
        
            appear_2[1].style.transform="translateX(0px)";
            appear_2[0].style.transform="translateX(0px)";
            appear_1.style.transform="translateX(0px)";
            appear_1.innerText="";
            appear_2[0].innerText="";
            appear_2[1].innerText="";
            
    })

   
    block[1].addEventListener("mouseover",()=>{
        appear_1.innerText="NEET";
        appear_1.style.transform="translateX(291px)";})
        
    block[1].addEventListener("mouseout",()=>{

        appear_1.style.transform="translateX(0px)";
        appear_1.innerText="";
        })
      
    block[2].addEventListener("mouseover",()=>{
    
            appear_1.innerText="NTSE";
            
            appear_2[0].innerText="KVPY";
            appear_2[1].innerText="NSO";
            appear_2[2].innerText="Other Exams";
            appear_1.style.transform="translateX(291px)";
            appear_2[0].style.transform="translateX(291px)";
            appear_2[1].style.transform="translateX(291px)";
            appear_2[2].style.transform="translateX(291px)";

});  
    block[2].addEventListener("mouseout",()=>{
        appear_2[2].style.transform="translateX(0px)";
        appear_2[1].style.transform="translateX(0px)";
        appear_2[0].style.transform="translateX(0px)";
        appear_1.style.transform="translateX(0px)";
        appear_1.innerText="";
        appear_2[0].innerText="";
        appear_2[1].innerText="";
        appear_2[2].innerText="";

    });
   
    block[3].addEventListener("mouseover",()=>{
            appear_1.innerText="Python";
    
            appear_2[0].innerText="JavaScript";
            appear_2[1].innerText="C/C++";
            appear_2[2].innerText="Other Fundamentals";
            appear_1.style.transform="translateX(291px)";
            appear_2[0].style.transform="translateX(291px)";
            appear_2[1].style.transform="translateX(291px)";
            appear_2[2].style.transform="translateX(291px)";
   

    });
    block[3].addEventListener("mouseout",()=>{
        appear_2[2].style.transform="translateX(0px)";
        appear_2[1].style.transform="translateX(0px)";
        appear_2[0].style.transform="translateX(0px)";
        appear_1.style.transform="translateX(0px)";
        appear_2[0].innerText="";
        appear_2[1].innerText="";
        appear_2[2].innerText="";

    });
      
// Show the form overlay
 
});