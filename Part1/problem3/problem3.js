function dragonOfLoowater(dragonHead, knightHeight) {
  if (dragonHead.length > knightHeight.length) {
    return "knight fall";
  } else {
    dragonHead.sort((a, b) => {
      return a - b;
    });
    knightHeight.sort((a, b) => {
      return a - b;
    });

    let successfulKnightHeight = 0, SUCCESS = -Infinity;
    for (let dragon of dragonHead) {
      for (let k = 0; k < knightHeight.length; k++) {
        if (dragon <= knightHeight[k]) {
          successfulKnightHeight += knightHeight[k];
          knightHeight[k] = SUCCESS;
          break;
        }
      }
    }
    if (dragonHead.length == knightHeight.filter(element => element == SUCCESS).length) {
      return successfulKnightHeight;
    }
  return "knight fall";
  }
}
// console.log(dragonOfLoowater([5,4],[7,8,4]));
// console.log(dragonOfLoowater([5,10],[5]));
// console.log(dragonOfLoowater([7,2],[4,3,1,2]));
// console.log(dragonOfLoowater([7,2],[2,1,8,5]));
module.exports = dragonOfLoowater;