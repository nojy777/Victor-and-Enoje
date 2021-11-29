/* 
    Challenge #1 Cats and Mouse
    https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
    Solved by Enoje
*/

 function catAndMouse(x, y, z) {
    let distCatA = Math.abs(x - z);
    let distCatB = Math.abs(y - z);
    if( distCatA == distCatB) return "Mouse C";
    if(distCatA < distCatB) return "Cat A";
    else return "Cat B"; 
 } 
/*
 * Challenge #2 Minimum Distances
 * https://www.hackerrank.com/challenges/minimum-distances/problem
 *   Solved by Victor 
 * Parameters
 * a    Array of integers
 * Return minimum distance between pair indexes or -1 if there is not any pair
 */
function minimumDistances(a) {
    let minimumDistance=100000000;
    for(let i=0; i<a.length; i++){
        let element=a[i];
        let pair=a.indexOf(element,i+1);
        if(pair!=-1){
            if((pair-i)<minimumDistance)minimumDistance=pair-i;
        }
    }
    if(minimumDistance==100000000) return -1;
    else return minimumDistance;
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
console.log(minimumDistances([3,2,1,2,3]));
console.log(minimumDistances([1,2,3]));