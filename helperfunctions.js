

function createPopulation(){
    for(i=0;i<sample;i++){
      population.push(new DNA(len));
    }
  }

function createMatingpool(){
    let maxfit=0;
    let bestfit=0;
    for(let i=0;i<population.length;i++){
      let fitness=population[i].fitness(target);
      let possiblity=Array(int(fitness*100)).fill(i);
      matingpool=matingpool.concat(possiblity);
      if(fitness>maxfit){
        maxfit=fitness;
        bestfit=i;
      }
    }
    return bestfit;
}

function pickparents(){
    let a=int(random(matingpool.length));
    let b=int(random(matingpool.length));
    while(population[matingpool[a]]==population[matingpool[b]]){
      b=int(random(matingpool.length));
    }
    let res=[a,b];
    return res;
  }