export const getStat = (stat, array) => {
    let statistic = 0;
        array.forEach((pokemon, i) => {
            let pokeEnergy = array[i].energy / 100;
            let statArray = array[i].stats;
            statArray.forEach((statfield, i) => {
                if (statArray[i].stat.name === stat) {
                    statistic = Math.round(statistic + (statArray[i].base_stat * pokeEnergy));
                }
            }
            )
         }
        )
    return statistic;
  }