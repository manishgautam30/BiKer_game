var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.width = 500;
c.height = 300;
document.body.appendChild(c);

var perm = [];
while (perm.length < 255) {
    while (perm.includes(val = Math.floor(Math.random() * 255)));
    perm.push(val);
}