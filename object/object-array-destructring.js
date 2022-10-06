let settings = {
    username: "loremipsum",
    password: "badpassword",
    isActive: false,
    ip: "127.0.0.1",
    server: "hosting.net"
}


// obje içindeki bilgilerin tek seferde çıkarılması

// let username = settings.username;
// console.log(username)

let { username: user, password, isActive, ip, server } = settings; //username yeniden isimlendirildi
console.log(user, password, isActive, ip, server);


// obje içindeki bazı bilgilerin çıkarılması

let { username, password: password2, ...newSettings } = settings; // seçilen değerler haricinde kalan değerler ...newSettings değişkenine atandı
console.log(newSettings);



// objenin destructring ile kopyalanması

// Hatalıııı
//let settings2 = settings;
// settings.username = "Değişen bilgi";
// console.log("settings", settings);
// console.log("settings2", settings2);



// doğrusu !!!!
let settings2 = { ...settings }
settings2.username = "Değişen bilgi";
console.log("settings", settings);
console.log("settings2", settings2);







// ARRAY DESTRUCTRING

let score = [100, 200, 300, 400];
let [score1, score2, ...OTHER] = score;
console.log(score1)
console.log(OTHER);

// kopyalamak
let copyScore = [...score];
copyScore[1] = 900;
console.log(copyScore)