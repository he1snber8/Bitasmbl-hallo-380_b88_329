interface Human {
  name: string;
  surname: string;
  age: number;
  location: string;
}

interface Employee extends Human {
  company: string;
  position: string;
}

interface Player extends Human {
  team: string;
  position: string;
}