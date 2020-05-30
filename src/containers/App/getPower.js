import { getStat } from './getStat';

export const getPower = (array) => {

    const totalSpeed = getStat(`speed`, array);
      const totalSpecDef = getStat(`special-defense`, array);
      const totalSpecAttack = getStat(`special-attack`, array);
      const totalDefense = getStat(`defense`, array);
      const totalAttack = getStat(`attack`, array);
      const totalHp = getStat(`hp`, array);

      const totalPower = (totalSpeed + totalSpecDef + totalSpecAttack + totalDefense + totalAttack + totalHp);
      return totalPower;
    
}