// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.


// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

const gatti = [
    {
        nome : 'tigrato',
        età : 1,
        colore : '#000000',
        sesso : 'maschio'

    },
    {
        nome : 'randagia',
        età : 1.2,
        colore : '#ffff05',
        sesso : 'femmina'

    },
    {
        nome : 'gigi',
        età : 2,
        colore : '#000000',
        sesso : 'maschio'

    },
    {
        nome : 'lala',
        età : 0.5,
        colore : '#ffb8c6',
        sesso : 'femmina'

    },
    {
        nome : 'bobo',
        età : 1,
        colore : '#ff3d06',
        sesso : 'maschio'

    },
];

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.


gatti.forEach((element,index) => {
    let {nome,colore} = element;
    document.getElementById('output').innerHTML += `<i class="fas fa-cat"></i>  ${nome} <br>` ;
    let gatto = document.getElementsByClassName('fas fa-cat');
    gatto[index].style.color = colore;
});


