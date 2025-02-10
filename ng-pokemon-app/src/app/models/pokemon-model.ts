export class Pokemon {

    id: number | undefined;
    hp: number | undefined;
    cp: number | undefined;
    name: string | undefined;
    picture: string | undefined;
    types: string[] | undefined;
    created: Date | undefined;

    constructor(
      name = 'Entrer un nom...',
      hp = 100,
      cp = 10,
      picture = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
      types: string[] = ['Normal'],
      created: Date = new Date()
  ) {
      this.name = name;
      this.hp = hp;
      this.cp = cp;
      this.picture = picture;
      this.types = types;
      this.created = created;
  }  }