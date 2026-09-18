function Echanger(tab, I, J) {
    let exchangedTab = []
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].indexOf === I) {
            exchangedTab.push(tab[J])
        }else if (tab[i].indexOf === J) {
            exchangedTab.push(tab[I])
        } exchangedTab.push(tab[i])
    } return exchangedTab
}

function Ranger(T) {
    let sortedTab = []
    for (let i = 0; i < T.length; i++) {
        if (T[i] ==0) sortedTab.push(T[i])
    }
    for (let i = 0; i < T.length; i++) {
        if (T[i] ==1) sortedTab.push(T[i])
    } return sortedTab
}

function NombreUn(T) {
    let sortedTab = Ranger(T)
    let count = 0
    for (let i = 0; i < sortedTab.length; i++) {
        if (sortedTab[i] == 1) count++
    } return count
}

function triLignes(M, I, J) {
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[i].length; j++) {
            if (NombreUn(M[i]) > NombreUn(M[j])) {
                return Echanger(M[i], I, J)
            }
        }
    }
}

console.log(triLignes([
    [1, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 0]
]))