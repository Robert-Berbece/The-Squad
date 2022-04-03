let data = [
    {
        name: 'Robert',
        age: '22'
    },
    {
        name: 'Flur',
        age: '23'
    },
    {
        name: 'Rares',
        age: '23'
    },
    {
        name: 'Budui',
        age: '24'
    },
    {
        name: 'Zvirid',
        age: '23'
    },
    {
        name: 'Razvi',
        age: '22'
    },
    {
        name: 'Bobo',
        age: '24'
    },
    {
        name: 'Vlad',
        age: '26'
    }
];

const info = document.querySelector('#info')

let details = data.map((item) => {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');