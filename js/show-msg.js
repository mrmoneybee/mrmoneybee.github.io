function copyAddress() {
    const address = document.getElementById("btc-address").textContent;
    navigator.clipboard.writeText(address);
    alert("Bitcoin address copied to clipboard!");
}