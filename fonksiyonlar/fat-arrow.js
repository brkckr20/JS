function hello(name) {
    console.log(`Merhaba ${name}`);
}

hello("Burak");

const hello2 = (firsName) => { /*  */
    console.log(`Merhaba ${firsName} burası fat arrow`);
}
hello2("Mehmet");

const hello3 = tekparametre => { /* tek parametre parantex kullanmaya gerek yoktur */
    console.log(`tek parametre almak ${tekparametre}`);
}

hello3("tek")


const hello4 = (firsName, lastname) => { /*  */
    console.log(`Merhaba ${firsName} burası fat arrow 2`);
}

hello4();