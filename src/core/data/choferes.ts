interface IChoferes {
  id: number;
  nombre: string;
  ci: number;
  licencia: number;
  telefono: string;
  experiencia: number;
  foto: string;
}

const choferes: Array<IChoferes> = [
  {
    id: 1,
    nombre: "Juan Pérez",
    ci: 1234567,
    licencia: 987654321,
    telefono: "555-1234",
    experiencia: 5,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    nombre: "Carlos Gómez",
    ci: 2345678,
    licencia: 876543219,
    telefono: "555-2345",
    experiencia: 3,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    nombre: "Luis Martínez",
    ci: 3456789,
    licencia: 765432198,
    telefono: "555-3456",
    experiencia: 7,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    nombre: "Ana López",
    ci: 4567890,
    licencia: 654321987,
    telefono: "555-4567",
    experiencia: 2,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    nombre: "María Rodríguez",
    ci: 5678901,
    licencia: 543219876,
    telefono: "555-5678",
    experiencia: 4,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    nombre: "Pedro Sánchez",
    ci: 6789012,
    licencia: 432198765,
    telefono: "555-6789",
    experiencia: 6,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    nombre: "Sofía García",
    ci: 7890123,
    licencia: 321987654,
    telefono: "555-7890",
    experiencia: 8,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    nombre: "Miguel Torres",
    ci: 8901234,
    licencia: 219876543,
    telefono: "555-8901",
    experiencia: 1,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    nombre: "Lucía Díaz",
    ci: 9012345,
    licencia: 198765432,
    telefono: "555-9012",
    experiencia: 9,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    nombre: "Jorge Ruiz",
    ci: 1234509,
    licencia: 987654321,
    telefono: "555-0123",
    experiencia: 10,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    nombre: "Elena Castro",
    ci: 2345601,
    licencia: 876543219,
    telefono: "555-1230",
    experiencia: 3,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    nombre: "Oscar Morales",
    ci: 3456702,
    licencia: 765432198,
    telefono: "555-2340",
    experiencia: 5,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 13,
    nombre: "Carmen Ortega",
    ci: 4567803,
    licencia: 654321987,
    telefono: "555-3450",
    experiencia: 7,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 14,
    nombre: "Raúl Navarro",
    ci: 5678904,
    licencia: 543219876,
    telefono: "555-4560",
    experiencia: 2,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 15,
    nombre: "Isabel Jiménez",
    ci: 6789015,
    licencia: 432198765,
    telefono: "555-5670",
    experiencia: 4,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 16,
    nombre: "Fernando Vargas",
    ci: 7890126,
    licencia: 321987654,
    telefono: "555-6780",
    experiencia: 6,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 17,
    nombre: "Patricia Herrera",
    ci: 8901237,
    licencia: 219876543,
    telefono: "555-7890",
    experiencia: 8,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 18,
    nombre: "Ricardo Soto",
    ci: 9012348,
    licencia: 198765432,
    telefono: "555-8900",
    experiencia: 1,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 19,
    nombre: "Adriana Flores",
    ci: 1234590,
    licencia: 987654321,
    telefono: "555-9010",
    experiencia: 9,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 20,
    nombre: "Daniel Méndez",
    ci: 2345609,
    licencia: 876543219,
    telefono: "555-0120",
    experiencia: 10,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export type { IChoferes };
export default choferes;
