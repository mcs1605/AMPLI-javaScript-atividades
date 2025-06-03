for(i = 0, i < 6, i = i + 1){
    console.log(i);
}

for(i = 0, i < 5, i = i + 1){
    if(i == 2){
        break;
    }
    console.log(i);
}

for(i = 0, i < 4, i = i + 1){
    if(i == 2){
        continue;
    }
    console.log(i);
}
