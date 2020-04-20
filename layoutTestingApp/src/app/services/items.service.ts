import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems() {
    const dataDummie = [
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/1.webp',
        image: 'https://images.kavak.services/assets/images/home/1.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/2.webp',
        image: 'https://images.kavak.services/assets/images/home/2.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/3.webp',
        image: 'https://images.kavak.services/assets/images/home/3.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/4.webp',
        image: 'https://images.kavak.services/assets/images/home/6.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/5.webp',
        image: 'https://images.kavak.services/assets/images/home/4.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Constituyentes.jpg',
        image: 'https://images.kavak.services/assets/images/home/5.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Mixcoac.jpg',
        image: 'https://images.kavak.services/assets/images/home/1.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Vallejo.jpg',
        image: 'https://images.kavak.services/assets/images/home/2.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Fortuna.jpg',
        image: 'https://images.kavak.services/assets/images/home/3.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Xola.jpg',
        image: 'https://images.kavak.services/assets/images/home/6.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Santafe.jpg',
        image: 'https://images.kavak.services/assets/images/home/4.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Tlalpan.jpg',
        image: 'https://images.kavak.services/assets/images/home/5.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Lerma.jpg',
        image: 'https://images.kavak.services/assets/images/home/5.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/1.webp',
        image: 'https://images.kavak.services/assets/images/home/1.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/2.webp',
        image: 'https://images.kavak.services/assets/images/home/2.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/3.webp',
        image: 'https://images.kavak.services/assets/images/home/3.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/4.webp',
        image: 'https://images.kavak.services/assets/images/home/6.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/benefits/5.webp',
        image: 'https://images.kavak.services/assets/images/home/4.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Constituyentes.jpg',
        image: 'https://images.kavak.services/assets/images/home/5.jpg?d=120x120',
      },
      {
        thumnbail: 'https://images.kavak.services/assets/images/home/Mixcoac.jpg',
        image: 'https://images.kavak.services/assets/images/home/1.jpg?d=120x120',
      },
    ]

    // A pesar de ser dataDummie, se retorna como promesa para "simular" la obtención por recurso de una API
    return Promise.resolve(dataDummie);
  }
}
