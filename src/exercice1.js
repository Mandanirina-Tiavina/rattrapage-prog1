function NegatifsPositif(tab) {
    let sortedTab = []
    for (i = 0; i < tab.length; i++) {
        if (tab[i] <=0) sortedTab.push(tab[i])
    }
    for (i = 0; i < tab.length; i++) {
        if (tab[i] >0) sortedTab.push(tab[i])
    }
    return sortedTab
}

console.log(NegatifsPositif([3, -1, 0, 4, -2, 5, -3]))