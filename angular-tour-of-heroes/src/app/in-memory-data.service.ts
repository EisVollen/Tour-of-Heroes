import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Nacro'},
      {id: 13, name: 'Bpmbasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Astoria'},
      {id: 16, name: 'Iliya'},
      {id: 17, name: 'Walter'},
      {id: 18, name: 'Sher'},
      {id: 19, name: 'Maddyson'},
      {id: 20, name: 'Greengrass'}
     ];
    return {heroes};
    }
  }
