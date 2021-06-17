// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.


// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

const gatti = [
    {
        nome : 'tigrato',
        eta : 4,
        colore : '#000000',
        sesso : 'maschio'

    },
    {
        nome : 'randagia',
        eta : 1.2,
        colore : '#ffff05',
        sesso : 'femmina'

    },
    {
        nome : 'gigi',
        eta : 2,
        colore : '#005500',
        sesso : 'maschio'

    },
    {
        nome : 'lala',
        eta : 1,
        colore : '#ffb8c6',
        sesso : 'femmina'

    },
    {
        nome : 'bobo',
        eta : 8,
        colore : '#ff3d06',
        sesso : 'maschio'

    },
];

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// const gatto = document.getElementsByClassName('fas fa-cat');
// const ribbonFont = document.getElementsByClassName('fas fa-ribbon');


gatti.forEach((element,index) => {
    const {nome,colore} = element;
    document.getElementById('output').innerHTML += 
    `
    <i class="fas fa-cat" style ="color : ${colore}"></i> <span class = "name">${nome}</span> <br>
    ` ;
    // ad ogni gatto assegno il proprio colore 
});

// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

const pink = '#ffb8c6';
const blue ='#3535ec';
// aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
const newGatti = gatti.map((element) => {
    const {nome,eta,colore,sesso} = element;

    let ribbonColor = (sesso == 'maschio')? blue : pink;
    const opacità = eta / 8;
    return {
        nome,
        eta,
        colore,
        sesso,
        ribbon : {
            color : ribbonColor,
            opacity : opacità
        }
    }

});
console.log(newGatti);

const pusha = (array) => {
    array.forEach((element,index) => {
        const {nome,colore,ribbon} = element;
        document.getElementById('output').innerHTML += 
        `
        <i class="fas fa-cat" style ="color : ${colore}"></i> <i class="fas fa-ribbon" style = "color : ${ribbon.color}; opacity :${ribbon.opacity};"></i> <span class = "name">${nome}</span> <br>
        ` ;
        // ad ogni gatto assegno il proprio colore 
    });
}


// Dividere i gatti in due contenitori distinti in base al sesso

const gattiMaschi = newGatti.filter((element) => {
    return element.sesso == 'maschio';
});
const gattiFemmine = newGatti.filter((element) => {
    return element.sesso == 'femmina';
});

pusha(gattiMaschi);
pusha(gattiFemmine);





