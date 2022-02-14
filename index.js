function header2() {
    if (confirm("Do you want to Register?")) {
        console.log('Registered')
        localStorage.clear();
        update();
    }
}
