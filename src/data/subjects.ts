// Datos de itinerarios y asignaturas para el buscador

export interface Subject {
  id: string;
  name: string;
  category: string;
  description: string;
  weight?: {
    [key: string]: number; // Ponderación para diferentes grados (id del grado: ponderación)
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  subjects: string[]; // IDs de las asignaturas en esta categoría
}

// Categorías principales
export const categories: Category[] = [
  {
    id: "comunes",
    name: "Comunes",
    icon: "📚",
    color: "bg-yellow-300",
    subjects: ["historia-filosofia", "angles", "llengua-catalana", "historia", "llengua-castellana"]
  },
  {
    id: "tecnologic",
    name: "Tecnològic i Científic",
    icon: "√x",
    color: "bg-green-200",
    subjects: ["ciencies-generals", "biologia", "ciencies-terra", "dibuix-tecnic", "fisica", "matematiques", "electrotecnia", "quimica", "tecnologia-industrial"]
  },
  {
    id: "artistic",
    name: "Artístic",
    icon: "🎨",
    color: "bg-blue-200",
    subjects: ["analisi-musical", "arts-esceniques", "cultura-audiovisual", "dibuix-artistic", "disseny", "fonaments-arts", "historia-musica-dansa"]
  },
  {
    id: "llengues",
    name: "Llengües",
    icon: "abc",
    color: "bg-purple-200",
    subjects: ["llati", "italia", "frances", "grec", "alemany"]
  },
  {
    id: "social",
    name: "Social",
    icon: "👥",
    color: "bg-red-200",
    subjects: ["geografia", "economia-empresa", "historia-art", "literatura-castellana", "literatura-catalana", "matematiques-ccss"]
  }
];

// Asignaturas
export const subjects: Subject[] = [
  // Comunes
  {
    id: "historia-filosofia",
    name: "Història de la filosofia",
    category: "comunes",
    description: "Estudi del pensament filosòfic al llarg de la història",
    weight: {
      "1": 0.2, // Ejemplo: pondera 0.2 para Filosofía
    }
  },
  {
    id: "angles",
    name: "Anglès",
    category: "comunes",
    description: "Llengua estrangera: anglès",
    weight: {
      "2": 0.2, // Ejemplo: pondera 0.2 para Traducción e Interpretación
    }
  },
  {
    id: "llengua-catalana",
    name: "Llengua catalana",
    category: "comunes",
    description: "Llengua i literatura catalana",
    weight: {
      "3": 0.2, // Ejemplo: pondera 0.2 para Filología Catalana
    }
  },
  {
    id: "historia",
    name: "Història",
    category: "comunes",
    description: "Història d'Espanya i Catalunya",
    weight: {
      "4": 0.2, // Ejemplo: pondera 0.2 para Historia
    }
  },
  {
    id: "llengua-castellana",
    name: "Llengua castellana",
    category: "comunes",
    description: "Llengua i literatura castellana",
    weight: {
      "5": 0.2, // Ejemplo: pondera 0.2 para Filología Hispánica
    }
  },
  
  // Tecnológico y Científico
  {
    id: "ciencies-generals",
    name: "Ciències Generals",
    category: "tecnologic",
    description: "Introducció a les ciències experimentals",
    weight: {
      "6": 0.1, // Ejemplo: pondera 0.1 para Ciencias Ambientales
    }
  },
  {
    id: "biologia",
    name: "Biologia",
    category: "tecnologic",
    description: "Estudi dels éssers vius i els seus processos vitals",
    weight: {
      "7": 0.2, // Ejemplo: pondera 0.2 para Medicina
    }
  },
  {
    id: "ciencies-terra",
    name: "Ciències de la terra",
    category: "tecnologic",
    description: "Estudi de la Terra i els seus processos",
    weight: {
      "8": 0.2, // Ejemplo: pondera 0.2 para Geología
    }
  },
  {
    id: "dibuix-tecnic",
    name: "Dibuix tècnic",
    category: "tecnologic",
    description: "Representació gràfica tècnica",
    weight: {
      "9": 0.2, // Ejemplo: pondera 0.2 para Arquitectura
    }
  },
  {
    id: "fisica",
    name: "Física",
    category: "tecnologic",
    description: "Estudi de la matèria, l'energia i les seves interaccions",
    weight: {
      "10": 0.2, // Ejemplo: pondera 0.2 para Física
    }
  },
  {
    id: "matematiques",
    name: "Matemàtiques",
    category: "tecnologic",
    description: "Estudi de nombres, estructures, espai i canvi",
    weight: {
      "11": 0.2, // Ejemplo: pondera 0.2 para Matemáticas
    }
  },
  {
    id: "electrotecnia",
    name: "Electrotècnia",
    category: "tecnologic",
    description: "Estudi de l'electricitat i les seves aplicacions",
    weight: {
      "12": 0.2, // Ejemplo: pondera 0.2 para Ingeniería Eléctrica
    }
  },
  {
    id: "quimica",
    name: "Química",
    category: "tecnologic",
    description: "Estudi de la composició, estructura i propietats de la matèria",
    weight: {
      "13": 0.2, // Ejemplo: pondera 0.2 para Química
    }
  },
  {
    id: "tecnologia-industrial",
    name: "Tecnologia Industrial",
    category: "tecnologic",
    description: "Estudi dels processos industrials i tecnològics",
    weight: {
      "14": 0.2, // Ejemplo: pondera 0.2 para Ingeniería Industrial
    }
  },
  
  // Artístico
  {
    id: "analisi-musical",
    name: "Anàlisi musical",
    category: "artistic",
    description: "Estudi i anàlisi de les obres musicals",
    weight: {
      "15": 0.2, // Ejemplo: pondera 0.2 para Musicología
    }
  },
  {
    id: "arts-esceniques",
    name: "Arts Escèniques",
    category: "artistic",
    description: "Estudi del teatre i les arts escèniques",
    weight: {
      "16": 0.2, // Ejemplo: pondera 0.2 para Arte Dramático
    }
  },
  {
    id: "cultura-audiovisual",
    name: "Cultura Audiovisual",
    category: "artistic",
    description: "Estudi dels mitjans audiovisuals i la seva influència",
    weight: {
      "17": 0.2, // Ejemplo: pondera 0.2 para Comunicación Audiovisual
    }
  },
  {
    id: "dibuix-artistic",
    name: "Dibuix artístic",
    category: "artistic",
    description: "Expressió artística mitjançant el dibuix",
    weight: {
      "18": 0.2, // Ejemplo: pondera 0.2 para Bellas Artes
    }
  },
  {
    id: "disseny",
    name: "Disseny",
    category: "artistic",
    description: "Creació i desenvolupament de projectes de disseny",
    weight: {
      "19": 0.2, // Ejemplo: pondera 0.2 para Diseño
    }
  },
  {
    id: "fonaments-arts",
    name: "Fonaments de les arts",
    category: "artistic",
    description: "Estudi dels fonaments teòrics i pràctics de les arts",
    weight: {
      "20": 0.2, // Ejemplo: pondera 0.2 para Historia del Arte
    }
  },
  {
    id: "historia-musica-dansa",
    name: "Història de la Música i de la Dansa",
    category: "artistic",
    description: "Evolució històrica de la música i la dansa",
    weight: {
      "21": 0.2, // Ejemplo: pondera 0.2 para Danza
    }
  },
  
  // Lenguas
  {
    id: "llati",
    name: "Llatí",
    category: "llengues",
    description: "Estudi de la llengua i cultura llatina",
    weight: {
      "22": 0.2, // Ejemplo: pondera 0.2 para Filología Clásica
    }
  },
  {
    id: "italia",
    name: "Italià",
    category: "llengues",
    description: "Llengua estrangera: italià",
    weight: {
      "23": 0.2, // Ejemplo: pondera 0.2 para Filología Italiana
    }
  },
  {
    id: "frances",
    name: "Francès",
    category: "llengues",
    description: "Llengua estrangera: francès",
    weight: {
      "24": 0.2, // Ejemplo: pondera 0.2 para Filología Francesa
    }
  },
  {
    id: "grec",
    name: "Grec",
    category: "llengues",
    description: "Estudi de la llengua i cultura grega",
    weight: {
      "25": 0.2, // Ejemplo: pondera 0.2 para Filología Clásica
    }
  },
  {
    id: "alemany",
    name: "Alemany",
    category: "llengues",
    description: "Llengua estrangera: alemany",
    weight: {
      "26": 0.2, // Ejemplo: pondera 0.2 para Filología Alemana
    }
  },
  
  // Social
  {
    id: "geografia",
    name: "Geografia",
    category: "social",
    description: "Estudi de la Terra i la seva influència en la societat",
    weight: {
      "27": 0.2, // Ejemplo: pondera 0.2 para Geografía
    }
  },
  {
    id: "economia-empresa",
    name: "Economia de l'empresa",
    category: "social",
    description: "Estudi de l'economia i la gestió empresarial",
    weight: {
      "28": 0.2, // Ejemplo: pondera 0.2 para Administración y Dirección de Empresas
    }
  },
  {
    id: "historia-art",
    name: "Història de l'art",
    category: "social",
    description: "Estudi de les manifestacions artístiques al llarg de la història",
    weight: {
      "29": 0.2, // Ejemplo: pondera 0.2 para Historia del Arte
    }
  },
  {
    id: "literatura-castellana",
    name: "Literatura castellana",
    category: "social",
    description: "Estudi de la literatura en llengua castellana",
    weight: {
      "30": 0.2, // Ejemplo: pondera 0.2 para Filología Hispánica
    }
  },
  {
    id: "literatura-catalana",
    name: "Literatura catalana",
    category: "social",
    description: "Estudi de la literatura en llengua catalana",
    weight: {
      "31": 0.2, // Ejemplo: pondera 0.2 para Filología Catalana
    }
  },
  {
    id: "matematiques-ccss",
    name: "Matemàtiques CCSS",
    category: "social",
    description: "Matemàtiques aplicades a les ciències socials",
    weight: {
      "32": 0.2, // Ejemplo: pondera 0.2 para Economía
    }
  }
];

// Función para buscar asignaturas por nombre o categoría
export function searchSubjects(searchTerm: string, categoryFilter?: string): Subject[] {
  if (!searchTerm && !categoryFilter) return subjects;
  
  const term = searchTerm.toLowerCase();
  
  return subjects.filter(subject => {
    const matchesSearch = !searchTerm || 
      subject.name.toLowerCase().includes(term) || 
      subject.description.toLowerCase().includes(term);
    
    const matchesCategory = !categoryFilter || subject.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
}

// Función para obtener todas las asignaturas de una categoría
export function getSubjectsByCategory(categoryId: string): Subject[] {
  return subjects.filter(subject => subject.category === categoryId);
}

// Función para obtener una categoría por su ID
export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(category => category.id === categoryId);
}

// Función para obtener una asignatura por su ID
export function getSubjectById(subjectId: string): Subject | undefined {
  return subjects.find(subject => subject.id === subjectId);
} 