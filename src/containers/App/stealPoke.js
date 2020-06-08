export const stealPoke = (arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy) => {
    

    let indexEnemy = -1;
    let indexPlayer = -1;

    let arrIndexPlayer = [];
    let arrIndexEnemy = [];

    for (let i = 0; i<arrayPlayer.length; i++) {
        arrIndexPlayer.push(arrayPlayer[i].id)
    }

    for (let i = 0; i<arrayEnemy.length; i++) {
        arrIndexEnemy.push(arrayEnemy[i].id)
    }



    if((arrIndexPlayer.indexOf(Number(changeNumPlayer)) === -1) || (arrIndexEnemy.indexOf(Number(changeNumEnemy)) === -1)) {
        return arrayPlayer
    } else {
       
            for (let i = 0; i<arrayEnemy.length; i++){
                if(Number(arrayEnemy[i].id) === Number(changeNumEnemy)){
                    indexEnemy = i;
                    console.log(indexEnemy)
                    break
                }
            }
        
            for (let i = 0; i<arrayPlayer.length; i++){
                if(arrayPlayer[i].id === Number(changeNumPlayer)){
                    indexPlayer = i;
                    console.log(indexPlayer)
                    break
                } 
            }
    
        let arr = arrayEnemy[indexEnemy];
        let arr1 = arrayPlayer;
        //Works, but not sure how....
        let arr2 = arr1.splice(indexPlayer, 1, arr);

        return arr1;
    }
}
