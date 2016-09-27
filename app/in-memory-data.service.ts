import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Inugo Montoya' },
            { id: 12, name: 'Ugetsu' },
            { id: 13, name: 'Agharta' },
            { id: 14, name: 'Orishi' },
            { id: 15, name: 'Ogun' },
            { id: 16, name: 'Shango' },
            { id: 17, name: 'Yemaja' },
            { id: 18, name: 'Olokun' },
            { id: 19, name: 'Oshu' },
            { id: 20, name: 'Agayu' },
        ];
        return { heroes };
    }
}
