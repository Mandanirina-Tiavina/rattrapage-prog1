function Echanger(tab, I, J) {
    let exchangedTab = []
    for (i = 0; i < tab.length; i++) {
        if (i.indexOf == I) {
            exchangedTab.push(tab[J])
        }else if (i.indexOf == J) {
            exchangedTab.push(tab[I])
        }
    } return exchangedTab
}

console.log(Echanger([0, 1, 0], 1, 2))
function Ranger(T) {
    sortedTab = []
    for (i = 0; i < T.length; i++) {
        if (T[i] ==0) sortedTab.push(T[i])
    }
    for (i = 0; i < T.length; i++) {
        if (T[i] ==1) sortedTab.push(T[i])
    } return sortedTab
}
