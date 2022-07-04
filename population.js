class DNA{
    constructor(len){
        this.gene=[];
        while(len>0){
            len--;
            this.gene.push(this.getRandomChar());
        }
        this.fitnessval=0.0;
    }
    len=function(){
        return this.gene.length;
    }
    getRandomChar=function(){
        var geneitem;
        geneitem=random(32,128);
        return String.fromCharCode(geneitem);
    }
    geneString=function(){
        return this.gene.join("");
    }
    fitness=function(target){
        var score=0;
        for(let i=0;i<target.length;i++){
            if(target.charAt(i)==this.gene[i]){
                score++;
            }
        }
        this.fitnessval=score/target.length;
        return this.fitnessval;
    }
    fucked=function(b){
        let child1=new DNA(0);
        let child2=new DNA(0);
        let flag=true; 
        let choiceofcorss=random(0,1);
        switch(true){
            case choiceofcorss<0.5:
                for(let i=0;i<this.len();i++){
                    if(flag){
                        child1.gene[i]=this.gene[i];
                        child2.gene[i]=b.gene[i];
                    }
                    else{    
                        child2.gene[i]=this.gene[i];
                        child1.gene[i]=b.gene[i];
                    }
                    flag=!flag;
                }
            break;
            default:
                for(let i=0;i<this.len();i++){
                    if(i>=this.len()/2){
                        child1.gene[i]=this.gene[i];
                        child2.gene[i]=b.gene[i];
                    }
                    else{    
                        child2.gene[i]=this.gene[i];
                        child1.gene[i]=b.gene[i];
                    }
                }
        }
        let res=[child1,child2]
        return res;
    }

    mutate=function(){
        for(let i=0;i<this.len();i++){
            let chance=random(1);
            if(chance<mutationRate){
                this.gene[i]=this.getRandomChar();
            }
        }
    }
}