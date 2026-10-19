function loadList() {
    let lines
    fetch("/posts/ratings.csv")
    .then(r=>r.text())
    .then(text=> {
        lines = text.split("\n")
        lines.forEach(line => {
        const columns = line.split(',');
        let rating = columns[2];
        console.log(rating)
        rating = rating.replace(/\s+/g, '').toLowerCase();
        const song = columns[1];
        const artistname = columns[0];

        const targetList = document.getElementById(rating);
        if (targetList) {
            const li = document.createElement('li');
            li.textContent = artistname + " - " + song;
            targetList.appendChild(li)
        }
    })
    })
}
loadList()