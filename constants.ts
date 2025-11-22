import { Category, Project } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Voronoi Tower',
    year: '2023',
    category: Category.ARCHITECTURE,
    imageUrl: 'https://picsum.photos/800/1000?random=1',
    description: 'Algorithmic skyscraper design based on cellular structures.'
  },
  {
    id: '2',
    title: 'Cellular Pavilion',
    year: '2022',
    category: Category.ARCHITECTURE,
    imageUrl: 'https://picsum.photos/900/600?random=2',
    description: 'Temporary structure exploring porosity and light.'
  },
  {
    id: '3',
    title: 'Synapse Bridge',
    year: '2024',
    category: Category.ARCHITECTURE,
    imageUrl: 'https://picsum.photos/800/800?random=3',
    description: 'Pedestrian bridge mimicking neural pathways.'
  },
  {
    id: '4',
    title: 'Microlattice 01',
    year: '2023',
    category: Category.MICRO_CONSTRUCTION,
    imageUrl: 'https://picsum.photos/600/800?random=4',
    description: '3D printed microscopic lattice structure.'
  },
  {
    id: '5',
    title: 'Bio-Material Study',
    year: '2023',
    category: Category.MICRO_CONSTRUCTION,
    imageUrl: 'https://picsum.photos/700/700?random=5',
    description: 'Growth patterns of mycelium in controlled environments.'
  },
  {
    id: '6',
    title: 'Adaptive Mesh',
    year: '2021',
    category: Category.MICRO_CONSTRUCTION,
    imageUrl: 'https://picsum.photos/800/600?random=6',
    description: 'Flexible textile structures reacting to humidity.'
  },
  {
    id: '7',
    title: 'Urban Coral',
    year: '2020',
    category: Category.ARCHITECTURE,
    imageUrl: 'https://picsum.photos/800/1200?random=7',
    description: 'Modular housing system inspired by reef growth.'
  },
  {
    id: '8',
    title: 'Nano-Scaffold',
    year: '2024',
    category: Category.MICRO_CONSTRUCTION,
    imageUrl: 'https://picsum.photos/1000/800?random=8',
    description: 'Experimental scaffolding for tissue engineering.'
  }
];
