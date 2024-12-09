import * as _ from 'lodash';

// Definizione delle interfacce
interface Epoca {
  id: number;
  nome: string;
}

export interface Cornice {
  id: number;
  nome: string;
  epocaId: number;
  immagine: string;
  descrizione: string;
}

export interface ExportedCornice {
  id: number;
  nome: string;
  epoca: Epoca;
  immagine: string;
  descrizione: string;
}

export interface GroupedCornice {
  epoca: Epoca;
  cornici: Cornice[];
}

// Liste di esempio per epoche, macrotipi e sottotipi
const epoche: Epoca[] = [
  { id: 1, nome: '500' },
  { id: 2, nome: '600' },
  { id: 3, nome: '700' },
  { id: 4, nome: '800' },
  { id: 5, nome: '900' },
  { id: 6, nome: 'Moderno' },
];

// Lista di 20 cornici di esempio
const cornici: Cornice[] = [
  {
    id: 1,
    nome: 'Cornice',
    epocaId: 4,
    immagine: 'assets/cornici/cornici_1.jpg',
    descrizione: '',
  },
  {
    id: 2,
    nome: 'Cornice',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_2.jpg',
    descrizione: '',
  },
  {
    id: 3,
    nome: 'Cornice',
    epocaId: 2,
    immagine: 'assets/cornici/cornici_3.jpg',
    descrizione: '',
  },
  {
    id: 4,
    nome: 'Cornice',
    epocaId: 4,
    immagine: 'assets/cornici/cornici_4.jpg',
    descrizione: '',
  },
  {
    id: 5,
    nome: 'Cornice',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_5.jpg',
    descrizione: '',
  },
  {
    id: 6,
    nome: 'Cornice',
    epocaId: 3,
    immagine: 'assets/cornici/cornici_6.jpg',
    descrizione: '',
  },
  {
    id: 7,
    nome: 'Cornice',
    epocaId: 6,
    immagine: 'assets/cornici/cornici_7.jpg',
    descrizione: '',
  },
  {
    id: 8,
    nome: 'Cornice',
    epocaId: 2,
    immagine: 'assets/cornici/cornici_8.jpg',
    descrizione: '',
  },
  {
    id: 9,
    nome: 'Cornice',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_9.jpg',
    descrizione: '',
  },
  {
    id: 10,
    nome: 'Cornice',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_10.jpg',
    descrizione: '',
  },
  {
    id: 11,
    nome: 'Cornice',
    epocaId: 4,
    immagine: 'assets/cornici/cornici_11.jpg',
    descrizione: '',
  },
  {
    id: 12,
    nome: 'Cornice',
    epocaId: 3,
    immagine: 'assets/cornici/cornici_12.jpg',
    descrizione: '',
  },
  {
    id: 13,
    nome: 'Cornice',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_13.jpg',
    descrizione: '',
  },
  {
    id: 14,
    nome: 'Cornice',
    epocaId: 6,
    immagine: 'assets/cornici/cornici_14.jpg',
    descrizione: '',
  },
  {
    id: 15,
    nome: 'Cornice',
    epocaId: 2,
    immagine: 'assets/cornici/cornici_15.jpg',
    descrizione: '',
  },
];


export const getCorniciData = () => {
  let corniciExport: ExportedCornice[] = cornici.map((cornice) => {
    return {
      ...cornice,
      epoca: epoche[cornice.epocaId - 1],
    };
  });
  return corniciExport;
};

export const groupCorniciByEpoca = (): GroupedCornice[] => {
  // Raggruppa le cornici per epocaId usando _.groupBy
  const grouped = _.groupBy(cornici, 'epocaId');

  const risultato: GroupedCornice[] = _.map(grouped, (corniciGruppo, epocaId) => {
    const epoca = _.find(epoche, { id: Number(epocaId) });
    if (!epoca) {
      throw new Error(`Epoca con id ${epocaId} non trovata`);
    }
    return { epoca, cornici: corniciGruppo };
  });

  // Inverte l'ordine dell'array per cominciare con "Moderne" e finire con "500"
  return _.reverse(risultato);
};
