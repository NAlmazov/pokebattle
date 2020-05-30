export const getStat = (stat, array) => {
    let statistic = 0;
        array.forEach((pokemon, i) => {
            let statArray = array[i].stats;
            statArray.forEach((statfield, i) => {
                if (statArray[i].stat.name === stat) {
                    statistic = statistic + statArray[i].base_stat;
                }
            }
            )
         }
        )
    return statistic;
  }