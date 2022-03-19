var task=window.prompt("please enter the number of the task between 1-25, 0 for exsiting.");

while(task !=0)
{
    if(task==1){
        for( var i=1;i<=1000;i++)
         alert(i);
    }
    if(task==2){
        for( var i=1;i<=1000;i++)
         if ((i%2)==0) alert(i);
    }
    if(task==3){
        for( var i=1;i<=1000;i++)
         if ((i%2)==1) alert(i);
    }
    if(task==4){
        for( var i=1000;i>=1;i--)
         alert(i);
    }
    if(task==5){
        for( var i=1000;i>=1;i--)
         if ((i%2)==0) alert(i);
    }
    if(task==6){
        for( var i=1000;i>=1;i--)
         if ((i%2)==1) alert(i);
    }
    if(task==7){
    var    n=+prompt("Enter number n:");
        for(var i=1;i<n;i++)
        if(i%3==0) alert(i);
    }
    if(task==8){
      var  n=+prompt("Enter number n:");
        for(var i=1;i<n;i++)
        alert(i);
        for(var i=n;i>1;i--)
        alert(i);
    }
    if(task==9){
     var   num1=+prompt("Enter number num1:");
      var  num2=+prompt("Enter number num2:");
      for(var i=num1;i<num2;i++)
        alert(i);

    }
    if(task==10){
        var   num1=+prompt("Enter number num1:");
        var  num2=+prompt("Enter number num2:");
        if(num1<num2){
        for(var i=num1+1;i<num2;i++)
        alert(i);
        }
        if(num1>num2){
            for(var i=num2+1;i<num1;i++)
            alert(i);
            }
            if(num1==num2) alert("equal");
        }
    if(task==11){
        var   num1=+prompt("Enter number num1:");
        var  num2=+prompt("Enter number num2:");
        for(var i=(num2-1);i>num1;i--)
        alert(i);
    }
    if(task==12){
        var   num1=+prompt("Enter number num1:");
        var  num2=+prompt("Enter number num2:");
        if(num1<num2){
        for(var i=(num2-1);i>num1;i--)
        alert(i);
        }
        if(num1>num2){
            for(var i=(num1-1);i>num2;i--)
            alert(i);
            }
       if(num1==num2) alert("equal");
    }
    if(task==13){
        var   fisrt=+prompt("Enter number first:");
        var  last=+prompt("Enter number last:");
        var  num=+prompt("Enter number num:");
        for(var i=fisrt+1;i<last;i++)
        if(i%num==0)alert(i);
    }
    if(task==14){
        var   fisrt=+prompt("Enter number first:");
        var  last=+prompt("Enter number last:");
        var  num=+prompt("Enter number num:");
        if(fisrt<last){
            for(var i=fisrt+1;i<last;i++)
            if(i%num==0)alert(i);
        }
       if(fisrt>last){
                for(var i=last+1;i<fisrt;i++)
                if(i%num==0)alert(i);
            }
            if(fisrt==last) alert("equal");
        
    }
    if(task==15){
        var  num;
       do
       {
        num=+prompt("Enter new number num:");
         if(num%7==0) alert("it can be divided by 7");
        else alert("it can not be divided by 7");
     }  while(num!=0)
    }
    if(task==16){
        var  num=+prompt("Enter number num:");
        while(num!=0)
       {
           if(num%7==0) alert("it can be divided by 7");
        else alert("it can not be divided by 7");
        num=+prompt("Enter new number num:");
     } 
    }
    if(task==17){
        var  num;
       do
       {
        num=+prompt("Enter new number num:");
       alert( Math.pow(num,3));
     }  while(num>=0)
    }
    if(task==18){
        var  num=+prompt("Enter number num:");
        while(num>=0)
       {
        alert( Math.pow(num,3));
        num=+prompt("Enter new number num:");
     } 
    }
    if(task==19){
        var grade,sum=0;
        for(var i=1;i<=100;i++)
        {
            grade=+prompt("enter garde:");
            sum=sum+grade;
        }
        var avg=sum/100;

        alert("the total is "+sum+" and the avarege is "+avg);
    }
    if(task==20){
        max=+prompt("enter number");
        for(i=1;i<=100;i++)
        {
            num=+prompt("enter number");
            if(num> max) max=num;
        }
        alert(max);

    }
    if(task==21){
        var count=0;
        var  num=+prompt("Enter number num:");
        while(num>=0) 
        {
            if(num%2==0) count++;
            num=+prompt("Enter number num:");
        }
        alert(count);


    }
    if(task==22){
        var  num=+prompt("Enter number num:");
        var count=0,sum=0;
        
        while (num%10!=0)
        {
            sum=sum+ (num%10);
            num=parseInt(num/10);
        }    
        alert(sum) ;

    }
    if(task==23){
        num=+prompt("Enter number num:");
        while(num>0)
        {
            for(i=1;i<=num;i++)
            alert(i);
         num=+prompt("Enter number num:");

        }

    }
    if(task==24){
        var    n=+prompt("Enter number n:");
        const arr=new Array();
        for(var i=1;i<=n;i++)
       { 
           for(var j=1;j<=n;j++) 
         {
              arr.push('*');
         }
        arr.push("\n");
       }
        alert(arr);

    }
    if(task==25){
        var    height=+prompt("Enter number height:");
        var    width=+prompt("Enter number width:");
        const arr=new Array();
        for(var i=1;i<=height;i++)
       { 
           for(var j=1;j<=width;j++) 
         {
              arr.push('*');
         }
        arr.push("\n");
       }
        alert(arr);

    }

    task=window.prompt("please enter valid number for task between 1-25 , 0 for exiting .")

}
