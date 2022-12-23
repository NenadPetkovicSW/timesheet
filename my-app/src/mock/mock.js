export const CARDS_PER_PAGE = 3;

export const CATEGORY_LIST = [
    'Front-End Development',
    'Design'
]

export const LOGED_IN = 2;
 
export const WorkTask_logical = [
    {
        id: 1,
        date: '2022-08-01',
        worker: {
            id: 2,
            username: "mila123",
            email: "mila123@vegait.rs",
            name: "Mila Milic",
            password: "sifra12345",
            role: "Admin",
            hoursPerWeek: 0,
            status: true
        },
        project: {
            id: 0,
            name: "BuzzMonitor",
            description: "BuzzMonitor mila123 worke here...",
            lead: {
                id: 2,
                username: "mila123",
                email: "mila123@vegait.rs",
                name: "Mila Milic",
                password: "sifra12345",
                role: "Admin",
                hoursPerWeek: 0,
                status: true
            },
            customer: {
                id: 3,
                name: "Nina Media",
                zipPostalCode: "201564",
                address: "Paris 35/48",
                country: "France",
                city: "Paris",
            },
            archive: true,
            status: false,
        },
        client: {
            id: 3,
            name: "Nina Media",
            zipPostalCode: "201564",
            address: "Paris 35/48",
            country: "France",
            city: "Paris",
        },
        category: 'Front-End Development',
        description: "Create table..",
        time: 8,
        overTime: 1.0,
    },{
        id: 2,
        date: '2022-07-29',
        worker: {
            id: 2,
            username: "mila123",
            email: "mila123@vegait.rs",
            name: "Mila Milic",
            password: "sifra12345",
            role: "Admin",
            hoursPerWeek: 0,
            status: true
        },
        project: {
            id: 0,
            name: "BuzzMonitor",
            description: "BuzzMonitor mila123 worke here...",
            lead: {
                id: 2,
                username: "mila123",
                email: "mila123@vegait.rs",
                name: "Mila Milic",
                password: "sifra12345",
                role: "Admin",
                hoursPerWeek: 0,
                status: true,
            },
            customer: {
                id: 3,
                name: "Nina Media",
                zipPostalCode: "201564",
                address: "Paris 35/48",
                country: "France",
                city: "Paris",
            },
            archive: true,
            status: false
        },
        client: {
            id: 3,
            name: "Nina Media",
            zipPostalCode: "201564",
            address: "Paris 35/48",
            country: "France",
            city: "Paris",
        },
        category: 'Front-End Development',
        description: "Create table..",
        time: 8,
        overTime: 1.0
    },
    {
        id: 3,
        date: '2022-07-02',
        worker: {
            id: 0,
            username: "ana123",
            email: "ana123@vegait.rs",
            name: "Ana Anic",
            password: "sifra123",
            role: "Worker",
            hoursPerWeek: 15,
            status: false
        },
        project: {
            id: 1,
            name: "PWN",
            description: "Clockwork work here on this...",
            lead: {
                id: 0,
                username: "ana123",
                email: "ana123@vegait.rs",
                name: "Ana Anic",
                password: "sifra123",
                role: "Worker",
                hoursPerWeek: 15,
                status: false
            },
            customer: {
                id: 1,
                name: "Clockwork",
                zipPostalCode: "201564",
                address: "Serbia 35/48",
                country: "Serbia",
                city: "Belgrade",
            },
            archive: false,
            status: true
        },
        client: {
            id: 1,
            name: "Clockwork",
            zipPostalCode: "201564",
            address: "Serbia 35/48",
            country: "Serbia",
            city: "Belgrade",
        },
        category: 'Design',
        description: "Create table..",
        time: 2,
        overTime: 0.0
    },{
        id: 4,
        date: '2022-08-21',
        worker: {
            id: 2,
            username: "mila123",
            email: "mila123@vegait.rs",
            name: "Mila Milic",
            password: "sifra12345",
            role: "Admin",
            hoursPerWeek: 0,
            status: true
        },
        project: {
            id: 0,
            name: "BuzzMonitor",
            description: "BuzzMonitor mila123 worke here...",
            lead: {
                id: 2,
                username: "mila123",
                email: "mila123@vegait.rs",
                name: "Mila Milic",
                password: "sifra12345",
                role: "Admin",
                hoursPerWeek: 0,
                status: true
            },
            customer: {
                id: 3,
                name: "Nina Media",
                zipPostalCode: "201564",
                address: "Paris 35/48",
                country: "France",
                city: "Paris",
            },
            archive: true,
            status: false
        },
        client: {
            id: 3,
            name: "Nina Media",
            zipPostalCode: "201564",
            address: "Paris 35/48",
            country: "France",
            city: "Paris",
        },
        category: 'Front-End Development',
        description: "Create table..",
        time: 3,
        overTime: 1.0
    },
    {
        id: 5,
        date: '2022-08-02',
        worker: {
            id: 2,
            username: "mila123",
            email: "mila123@vegait.rs",
            name: "Mila Milic",
            password: "sifra12345",
            role: "Admin",
            hoursPerWeek: 0,
            status: true
        },
        project: {
            id: 3,
            name: "BBB",
            description: "BBB and GGG are not the same...",
            lead: {
                id: 3,
                username: "123ivana",
                email: "ivanammm@vegait.rs",
                name: "Ivana Milic",
                password: "sifra12345",
                role: "Worker",
                hoursPerWeek: 0,
                status: true
            },
            customer: {
                id: 3,
                name: "Nina Media",
                zipPostalCode: "201564",
                address: "Paris 35/48",
                country: "France",
                city: "Paris",
            },
            archive: false,
            status: true
        },
        client: {
            id: 3,
            name: "Nina Media",
            zipPostalCode: "201564",
            address: "Paris 35/48",
            country: "France",
            city: "Paris",
        },
        category: 'Front-End Development',
        description: "Create table..",
        time: 4.5,
        overTime: 1.0
    },
    {
        id: 6,
        date: '2022-08-01',
        worker: {
            id: 1,
            username: "milan123",
            email: "milan123@vegait.rs",
            name: "Milan Milanic",
            password: "sifra1234",
            role: "Worker",
            hoursPerWeek: 7.5,
            status: true
        },
        project: {
            id: 2,
            name: "B&G",
            description: "Clockwork and Cubeworks are not the same...",
            lead: {
                id: 1,
                username: "milan123",
                email: "milan123@vegait.rs",
                name: "Milan Milanic",
                password: "sifra1234",
                role: "Worker",
                hoursPerWeek: 7,
                status: true
            },
            customer: {
                id: 4,
                name: "Cubeworks",
                zipPostalCode: "201564",
                address: "Croatia 35/48",
                country: "Croatia",
                city: "Split",
            },
            archive: false,
            status: true
        },
        client: {
            id: 4,
            name: "Cubeworks",
            zipPostalCode: "201564",
            address: "Croatia 35/48",
            country: "Croatia",
            city: "Split",
        },
        category: 'Design',
        description: "Create table..",
        time: 1.0,
        overTime: 0.0
    },{
        id: 7,
        date: '2022-08-01',
        worker: {
            id: 2,
            username: "mila123",
            email: "mila123@vegait.rs",
            name: "Mila Milic",
            password: "sifra12345",
            role: "Admin",
            hoursPerWeek: 0,
            status: true
        },
        project: {
            id: 0,
            name: "BuzzMonitor",
            description: "BuzzMonitor mila123 worke here...",
            lead: {
                id: 2,
                username: "mila123",
                email: "mila123@vegait.rs",
                name: "Mila Milic",
                password: "sifra12345",
                role: "Admin",
                hoursPerWeek: 0,
                status: true
            },
            customer: {
                id: 3,
                name: "Nina Media",
                zipPostalCode: "201564",
                address: "Paris 35/48",
                country: "France",
                city: "Paris",
            },
            archive: true,
            status: false
        },
        client: {
            id: 3,
            name: "Nina Media",
            zipPostalCode: "201564",
            address: "Paris 35/48",
            country: "France",
            city: "Paris",
        },
        category: 'Front-End Development',
        description: "Create table..",
        time: 2,
        overTime: 0
    }
]

export const PROJECTS_DATA = [
    {
        id: 0,
        name: "BuzzMonitor",
        description: "BuzzMonitor mila123 worke here...",
        lead: {
            id: 2,
            username: "mila123",
            email: "mila123@vegait.rs",
            name: "Mila Milic",
            password: "sifra12345",
            role: "Admin",
            hoursPerWeek: 0,
            status: true
        },
        customer: {
            id: 3,
            name: "Nina Media",
            zipPostalCode: "201564",
            address: "Paris 35/48",
            country: "France",
            city: "Paris",
        },
        archive: true,
        status: false
    },
    {
        id: 1,
        name: "PWN",
        description: "Clockwork work here on this...",
        lead: {
            id: 0,
            username: "ana123",
            email: "ana123@vegait.rs",
            name: "Ana Anic",
            password: "sifra123",
            role: "Worker",
            hoursPerWeek: 15,
            status: false
        },
        customer: {
            id: 1,
            name: "Clockwork",
            zipPostalCode: "201564",
            address: "Serbia 35/48",
            country: "Serbia",
            city: "Belgrade",
        },
        archive: false,
        status: true
    },
    {
        id: 2,
        name: "B&G",
        description: "Clockwork and Cubeworks are not the same...",
        lead: {
            id: 1,
            username: "milan123",
            email: "milan123@vegait.rs",
            name: "Milan Milanic",
            password: "sifra1234",
            role: "Worker",
            hoursPerWeek: 7,
            status: true
        },
        customer: {
            id: 4,
            name: "Cubeworks",
            zipPostalCode: "201564",
            address: "Croatia 35/48",
            country: "Croatia",
            city: "Split",
        },
        archive: false,
        status: true
    }, {
        id: 3,
        name: "BBB",
        description: "BBB and GGG are not the same...",
        lead: {
            id: 3,
            username: "123ivana",
            email: "ivanammm@vegait.rs",
            name: "Ivana Milic",
            password: "sifra12345",
            role: "Worker",
            hoursPerWeek: 0,
            status: true
        },
        customer: {
            id: 3,
            name: "Nina Media",
            zipPostalCode: "201564",
            address: "Paris 35/48",
            country: "France",
            city: "Paris",
        },
        archive: false,
        status: true
    }];

export const CLIENTS_DATA = [
    {
        id: 0,
        name: "ADAM Software NV",
        zipPostalCode: "201564",
        address: "London 35/48",
        country: "United Kingdom",
        city: "London",
    },
    {
        id: 1,
        name: "Clockwork",
        zipPostalCode: "201564",
        address: "Serbia 35/48",
        country: "Serbia",
        city: "Belgrade",
    },
    {
        id: 2,
        name: "Emperor Design",
        zipPostalCode: "201564",
        address: "Paris 35/48",
        country: "France",
        city: "Paris",
    },
    {
        id: 3,
        name: "Nina Media",
        zipPostalCode: "201564",
        address: "Paris 35/48",
        country: "France",
        city: "Paris",
    },
    {
        id: 4,
        name: "Cubeworks",
        zipPostalCode: "201564",
        address: "Croatia 35/48",
        country: "Croatia",
        city: "Split",
    }
];


export const USERS_DATA = [
    {
        id: 0,
        username: "ana123",
        email: "ana123@vegait.rs",
        name: "Ana Anic",
        password: "sifra123",
        role: "Worker",
        hoursPerWeek: 15,
        status: false
    },
    {
        id: 1,
        username: "milan123",
        email: "milan123@vegait.rs",
        name: "Milan Milanic",
        password: "sifra1234",
        role: "Worker",
        hoursPerWeek: 7,
        status: true
    },
    {
        id: 2,
        username: "mila123",
        email: "mila123@vegait.rs",
        name: "Mila Milic",
        password: "sifra12345",
        role: "Admin",
        hoursPerWeek: 0,
        status: true
    },
    {
        id: 3,
        username: "123ivana",
        email: "ivanammm@vegait.rs",
        name: "Ivana Milic",
        password: "sifra12345",
        role: "Worker",
        hoursPerWeek: 0,
        status: true
    }];