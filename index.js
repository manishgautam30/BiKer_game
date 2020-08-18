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

var lerp = (a, b, t) => a + (b - a) * t;
var noise = x => {
    return lerp(perm[Math.floor(x), Math.ceil(x)], x - Math.floor(x));
}