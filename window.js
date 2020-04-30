var num = '';
var res = 0;
var opkey = '';
var s = ''; 
var opkeys = ['+','-','*','/','='];
var clicking  = document.querySelector(".panel");
clicking.addEventListener('click',function(e)
{   if(e.target.innerHTML=='clear')
         {
             num='';
             res = 0;
             opkey = '';
             s = '';
             document.querySelector("#displayexp").innerHTML = '';
             document.querySelector("#displayres").innerHTML = '';

             return;
         }
    if(opkeys.indexOf(s)!=-1&&s!='='){
     if(opkeys.indexOf(e.target.innerHTML)!=-1){
         s = e.target.innerHTML;
         return; 
             }
    
}
    s=e.target.innerHTML;
    if(opkeys.indexOf(s)!=-1)
    {  
      num  = parseFloat(num);
      if(s==='=')
      {    
          operate(opkey);
          document.querySelector("#displayres").innerHTML = res;
          document.querySelector("#displayexp").innerHTML = res;
          
          opkey= '';
          num = res.toString();
               
      }
      else{
       
        if(opkey!=''){
          operate(opkey);
          
        } 
        else{
            res = num;
        }
        console.log(typeof(num));
        console.log(res);
        console.log(typeof(res));
        console.log(opkey);
        opkey = s;
        num = '';
    } 
    }
    if(opkeys.indexOf(s)==-1)
    num+=s;
    if(s!='=')
    document.querySelector("#displayexp").innerHTML+=s;
    document.querySelector("#displayres").innerHTML = num;
    
    console.log(num);
    
    
});
function operate(op)
{
    if(op==='+')
      res+=num;
    else if(op === '-')
      res-=num;
    else if(op === '*')
      res*=num;
    else if(op === '/')
      res/=num;
   
    
}