// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


    const role = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        Image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        Image: 'angela-caroll-chied-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        Image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        Image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Enstrada',
        role: 'Developer',
        Image: 'scott-enstrata-developer.jpg'
    },
     {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        Image: 'barbara-ramos-graphic-designer.jpg'
    },
]



console.log(role);



const mainContainer = document.querySelector('#list');
for(let i = 0; i < role.length; i++){
    const thisrole = role[i];
    console.log(thisrole);

    const newLi = `
    <li>
        <h3> ${thisrole.name} ${thisrole.role} ${thisrole.Image} </h3>
    </li>
    `;

    mainContainer.innerHTML += newLi;
}