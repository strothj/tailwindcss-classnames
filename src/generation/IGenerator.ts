export interface IGenerator {
  generate: () => string;
}

export interface IClassesGenerator {
  // accessibility: () => string;
  backgrounds: () => string;
  borders: () => string;
  tables: () => string;
  effects: () => string;
  transitions: () => string;
  flexBox: () => string;
  grid: () => string;
  spacing: () => string;
  interactivity: () => string;
  // layout: () => string;
  // sizing: () => string;
  SVG: () => string;
  transforms: () => string;
  typography: () => string;
}
