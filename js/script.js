function showTab(id) {
    for (let i = 1; i <= 2; i++) {
        document.getElementById(`tab${i}`).style.display="none"
    }
    document.getElementById(`tab${id}`).style.display="block"
}

showTab(1)