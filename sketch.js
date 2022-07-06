
var population=[];
var sample=500;
var target="Souvik Loves You";
var mutationRate=0.01;
var len=target.length;
var matingpool=[];
var ansNotfound=true;
var smallTestHight=20;
var bigTestHight=30;
var best=".";
var generation=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  createPopulation();
  background(220);
  smallTestHight=windowWidth<800? 15:24;
  bigTestHight=windowWidth<800? 20:34;
}

function draw() {
  background(220);
  if(ansNotfound){
    generation++;
      let bestfit=createMatingpool();
      best=population[bestfit];
      console.log(bestfit);
      console.log("best= ",best.gene,best.fitnessval);
      if(best.fitnessval==1){
        ansNotfound=false;
      }
      for(let i=0;i<population.length;i++){
        let parents=pickparents();
        let parent1=population[matingpool[parents[0]]];
        let parent2=population[matingpool[parents[1]]];
        let child=parent1.fucked(parent2);
        
        child[0].mutate();
        child[1].mutate();
        if(child[0].fitness(target)>child[1].fitness(target)){
          population[i]=child[0];
        }
        else{
          population[i]=child[1];
        }        
      }        
  }
  textSize(smallTestHight);
  for(i=0;i<50 && i<min(population.length,50);i++){
    text(population[i].geneString(),2*width/3,i*(smallTestHight+10)+50);
  }
  text("Target: "+target,30,2*height/5+60);
  text("Population Size: "+population.length,30,2*height/5+100);
  text("Mutation Rate: "+mutationRate*100+"%",30,2*height/5+140);
  text("Generatin: "+generation,30,2*height/5+180);
  textSize(bigTestHight);
  text("Best: "+best.geneString(),30,2*height/5);
  
}
