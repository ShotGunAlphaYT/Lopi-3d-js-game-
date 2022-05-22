function load_saved_game() {}
function new_game() {
    window.location="./game/game.html";
}
function quit() {
    window.close();
}
function main() {
    if (window.onload) {
        window.reload();
    }
}