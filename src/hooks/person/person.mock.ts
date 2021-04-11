import { Person, Response } from './person'

export const mockPerson: Person = {
  gender: 'male',
  name: { title: 'Mr', first: 'Lucas', last: 'Cox' },
  location: {
    street: { number: 5366, name: 'Royal Ln' },
    city: 'Desoto',
    state: 'Utah',
    country: 'United States',
    postcode: 47479,
    coordinates: { latitude: '81.6395', longitude: '-54.7006' },
    timezone: {
      offset: '0:00',
      description: 'Western Europe Time, London, Lisbon, Casablanca',
    },
  },
  email: 'lucas.cox@example.com',
  login: {
    uuid: 'a278b3d6-e1d8-41b9-a201-459ed08f5896',
    username: 'beautifulbutterfly372',
    password: 'benfica',
    salt: '3f3IeRKy',
    md5: '907ac486e3c35d79f808d600c1c24381',
    sha1: '65b103a0fbf91f83a75b2dd6d796e6689aebeb83',
    sha256: 'e39171446d181a25e816dcc895292d85abcab412cb6d2e69ce78e20c4c15471a',
  },
  dob: { date: new Date('1962-07-28T10:27:41.636Z'), age: 59 },
  registered: { date: new Date('2012-06-03T22:04:09.287Z'), age: 9 },
  phone: '(805)-935-6437',
  cell: '(246)-428-3919',
  id: { name: 'SSN', value: '832-98-0849' },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/90.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/90.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/90.jpg',
  },
  nat: 'US',
}

export const mockResponse: Response = {
  results: [mockPerson],
  info: { seed: 'bedf751ad87cf706', results: 1, page: 1, version: '1.3' },
}
