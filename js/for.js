for (let i = 0;; i++){
    if(i % 2 === 0){
        console.log(i);
    }else{
        continue;
    }

    if(i >= 100){
        break;
    }
}