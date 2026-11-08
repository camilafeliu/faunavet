import { useEffect, useMemo, useState } from 'react';

type SpeciesCategory = 'Todos' | 'Aves' | 'Mamíferos' | 'Reptiles';

type Species = {
  name: string;
  scientificName: string;
  category: Exclude<SpeciesCategory, 'Todos'>;
  classification: string;
  habitat: string;
  diet: string;
  characteristics: string;
  ecologicalImportance: string;
  conservationStatus: string;
  image: string;
};

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Fauna silvestre', href: '#fauna' },
  { label: 'Conservación', href: '#conservacion' },
  { label: 'Educación ambiental', href: '#educacion' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

const pillars = [
  {
    icon: '🩺',
    title: 'Atención veterinaria',
    description:
      'Evaluación clínica y seguimiento sanitario para animales silvestres en riesgo, con enfoque en salud, bienestar y manejo integral.',
  },
  {
    icon: '🌿',
    title: 'Rehabilitación de fauna',
    description:
      'Recuperación física y conductual considerando las necesidades biológicas y la reintegración posible a su hábitat.',
  },
  {
    icon: '🦉',
    title: 'Conservación de especies',
    description:
      'Educación, prevención y protección para contribuir a la conservación de la biodiversidad y la calidad de los ecosistemas.',
  },
];

const values = [
  'Respeto por la vida',
  'Responsabilidad',
  'Ética profesional',
  'Compromiso ambiental',
  'Solidaridad',
  'Protección animal',
  'Honestidad',
  'Trabajo en equipo',
];

const services = [
  {
    title: 'Atención médico-veterinaria',
    description:
      'La evaluación clínica permite identificar enfermedades, controlar signos de estrés y establecer criterios de manejo adecuados para cada especie.',
  },
  {
    title: 'Rescate de fauna silvestre',
    description:
      'Se orienta a la intervención responsable ante animales heridos, desplazados o vulnerables, siempre bajo coordinación con personal capacitado y autoridades competentes.',
  },
  {
    title: 'Rehabilitación animal',
    description:
      'Los animales requieren una recuperación gradual y un entorno apropiado para recuperar salud, comportamiento y habilidades esenciales.',
  },
  {
    title: 'Medicina preventiva',
    description:
      'Se promueven medidas sanitarias, bioseguridad, vigilancia epidemiológica y control de agentes patógenos en fauna silvestre.',
  },
  {
    title: 'Evaluación nutricional',
    description:
      'Cada especie demanda condiciones alimentarias específicas según su edad, estado fisiológico, actividad y hábitat natural.',
  },
  {
    title: 'Educación y asesoramiento ambiental',
    description:
      'Se desarrollan actividades de sensibilización para generar conciencia, respeto y convivencia responsable con la fauna silvestre.',
  },
];

const species: Species[] = [
  {
    name: 'Guacamaya',
    scientificName: 'Ara macao',
    category: 'Aves',
    classification: 'Ave – Psitácida',
    habitat: 'Selvas tropicales y bosques húmedos',
    diet: 'Frutas, semillas y nueces',
    characteristics: 'Plumaje vistoso y gran capacidad de vocalización.',
    ecologicalImportance: 'Dispersa semillas y ayuda a mantener la regeneración del bosque.',
    conservationStatus: 'Vulnerable',
    image:
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Loro',
    scientificName: 'Amazona spp.',
    category: 'Aves',
    classification: 'Ave – Psitácida',
    habitat: 'Bosques secos y tropicales',
    diet: 'Frutas, flores y brotes',
    characteristics: 'Alta sociabilidad y gran capacidad de imitación.',
    ecologicalImportance: 'Participa en la polinización y dispersión de semillas.',
    conservationStatus: 'Vulnerable o en declive regional',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tucán',
    scientificName: 'Ramphastos spp.',
    category: 'Aves',
    classification: 'Ave – Ramphastidae',
    habitat: 'Bosques húmedos y zonas ribereñas',
    diet: 'Frutos, insectos y pequeñas aves',
    characteristics: 'Pico grande y colorido, gran desplazamiento entre árboles.',
    ecologicalImportance: 'Favorece la dispersión de semillas grandes.',
    conservationStatus: 'Bajo presión por pérdida de hábitat',
    image:
      'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Águila',
    scientificName: 'Buteo spp.',
    category: 'Aves',
    classification: 'Ave – Accipitriformes',
    habitat: 'Montañas, sabanas y bosques abiertos',
    diet: 'Pequeños mamíferos, reptiles y aves',
    characteristics: 'Excelente visión y gran capacidad de vuelo.',
    ecologicalImportance: 'Regula poblaciones de pequeños vertebrados.',
    conservationStatus: 'Variable según la especie',
    image:
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Búho',
    scientificName: 'Strigiformes',
    category: 'Aves',
    classification: 'Ave – Strigiformes',
    habitat: 'Bosques, montañas y zonas rurales',
    diet: 'Roedores, insectos y pequeñas aves',
    characteristics: 'Actividad nocturna y visión excepcional.',
    ecologicalImportance: 'Controla plagas y mantiene equilibrio trófico.',
    conservationStatus: 'Peligro local por disturbios del hábitat',
    image:
      'https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Oso hormiguero',
    scientificName: 'Tamandua mexicana',
    category: 'Mamíferos',
    classification: 'Mamífero – Pilosa',
    habitat: 'Bosques tropicales y zonas aledañas',
    diet: 'Hormigas, termitas y otros insectos sociales',
    characteristics: 'Pelo largo y fuerte instinto de alimentación.',
    ecologicalImportance: 'Ayuda a controlar poblaciones de insectos.',
    conservationStatus: 'Vulnerable en varios sectores',
    image:
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Perezoso',
    scientificName: 'Bradypus variegatus',
    category: 'Mamíferos',
    classification: 'Mamífero – Pilosa',
    habitat: 'Bosques húmedos y canopies tropicales',
    diet: 'Hojas, brotes y flores',
    characteristics: 'Movimiento lento y adaptación especial a la vida arbórea.',
    ecologicalImportance: 'Contribuye a la dinámica de la vegetación y los ciclos forestales.',
    conservationStatus: 'Vulnerable por pérdida de hábitat',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mono',
    scientificName: 'Cebus spp.',
    category: 'Mamíferos',
    classification: 'Mamífero – Primates',
    habitat: 'Bosques tropicales y sabanas arboladas',
    diet: 'Frutas, semillas, hojas e insectos',
    characteristics: 'Alta inteligencia y gran capacidad de adaptación.',
    ecologicalImportance: 'Dispersiona semillas y favorece la diversidad vegetal.',
    conservationStatus: 'Variable según la especie y región',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Venado',
    scientificName: 'Odocoileus virginianus',
    category: 'Mamíferos',
    classification: 'Mamífero – Artiodáctilo',
    habitat: 'Bosques tropicales, sabanas y bordes de humedal',
    diet: 'Hoja, frutos y brotes',
    characteristics: 'Excelente sentido del olfato y adaptación al movimiento rápido.',
    ecologicalImportance: 'Participa en la dispersión de semillas y en la estructura del ecosistema.',
    conservationStatus: 'No actualmente amenazado a nivel general',
    image:
      'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cunaguaro',
    scientificName: 'Hydrochaeris hydrochaeris',
    category: 'Mamíferos',
    classification: 'Mamífero – Rodentia',
    habitat: 'Humedales, ríos y zonas de vegetación acuática',
    diet: 'Hierbas y vegetación acuática',
    characteristics: 'Buen adaptado a ambientes con abundante agua.',
    ecologicalImportance: 'Contribuye a la dinámica de humedales y mantiene la estructura vegetal.',
    conservationStatus: 'Poca información consistente para algunas poblaciones',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tortuga',
    scientificName: 'Chelonia mydas',
    category: 'Reptiles',
    classification: 'Reptil – Testudines',
    habitat: 'Playas, mares y zonas costeras',
    diet: 'Algas, plantas y pequeños invertebrados',
    characteristics: 'Caparazón resistente y gran longevidad.',
    ecologicalImportance: 'Mantiene el equilibrio de hábitats costeros y marinos.',
    conservationStatus: 'En peligro en muchas regiones',
    image:
      'https://images.unsplash.com/photo-1533302016374-ae7fb7f6e4af?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Iguana',
    scientificName: 'Iguana iguana',
    category: 'Reptiles',
    classification: 'Reptil – Squamata',
    habitat: 'Bosques, riberas y zonas húmedas',
    diet: 'Hojas, flores y frutos',
    characteristics: 'Excelente capacidad de trepar y regular temperatura corporal.',
    ecologicalImportance: 'Participa en la dispersión de semillas y en redes tróficas locales.',
    conservationStatus: 'Variable según depredación y hábitat',
    image:
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Boa',
    scientificName: 'Boa constrictor',
    category: 'Reptiles',
    classification: 'Reptil – Squamata',
    habitat: 'Bosques, vegetación densa y áreas selváticas',
    diet: 'Mammals, birds and reptiles',
    characteristics: 'Constricción defensiva y gran capacidad de camuflaje.',
    ecologicalImportance: 'Regula poblaciones de pequeños vertebrados en su ecosistema.',
    conservationStatus: 'Conservación variable según región',
    image:
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Caimán',
    scientificName: 'Crocodylus intermedius',
    category: 'Reptiles',
    classification: 'Reptil – Crocodylia',
    habitat: 'Ríos, humedales y zonas de agua dulce',
    diet: 'Peces, aves y pequeños mamíferos',
    characteristics: 'Gran capacidad de adaptación a ecosistemas acuáticos.',
    ecologicalImportance: 'Mantiene equilibrio de hábitats y redes tróficas.',
    conservationStatus: 'En riesgo por pérdida de hábitat y presión humana',
    image:
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Serpiente',
    scientificName: 'Bothrops spp.',
    category: 'Reptiles',
    classification: 'Reptil – Squamata',
    habitat: 'Bosques, zonas de transición y terrenos abiertos',
    diet: 'Roedores, aves y otros pequeños animales',
    characteristics: 'Ejemplo de adaptación y equilibrio ecológico.',
    ecologicalImportance: 'Controla especies pequeñas y mantiene redes tróficas.',
    conservationStatus: 'Amenaza por degradación del hábitat',
    image:
      'https://images.unsplash.com/photo-1533302016374-ae7fb7f6e4af?auto=format&fit=crop&w=900&q=80',
  },
];

const conservationTopics = [
  '¿Qué es la biodiversidad?',
  'Importancia de la fauna silvestre',
  'Conservación de los ecosistemas',
  'Especies amenazadas',
  'Pérdida y fragmentación de hábitats',
  'Deforestación',
  'Contaminación ambiental',
  'Tráfico ilegal de animales',
  'Cambio climático',
  'Protección de especies autóctonas',
];

const rehabilitationStages = [
  {
    title: 'Recepción y evaluación inicial',
    description:
      'Se registra la especie, el estado general del animal y las condiciones en las que fue encontrado para definir el manejo inmediato.',
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Valoración médico-veterinaria',
    description:
      'Se revisan lesiones, signos clínicos, hidratación y condición corporal para establecer necesidades de tratamiento.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Atención y recuperación',
    description:
      'Se establecen medidas de estabilidad, alimentación, bioseguridad y seguimiento para favorecer la recuperación del individuo.',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Rehabilitación física y conductual',
    description:
      'El proceso incluye manejo del comportamiento, ejercicio y adaptación a las condiciones que requeriría en la naturaleza.',
    image:
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Evaluación para liberación',
    description:
      'Se estudian la salud, el comportamiento, el peso y las condiciones necesarias para considerar una posible reintegración.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Reintegración al hábitat',
    description:
      'La liberación se realiza solo cuando es viable, está autorizada y se respetan las condiciones ambientales y legales.',
    image:
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80',
  },
];

const educationArticles = [
  {
    title: 'Cómo proteger la fauna silvestre',
    summary: 'Reducir disturbios, respetar espacios naturales y apoyar acciones responsables de conservación ambiental.',
  },
  {
    title: 'Qué hacer al encontrar un animal silvestre',
    summary: 'No manipularlo sin precaución, evitar contacto cercano y consultar a autoridades o personal capacitado.',
  },
  {
    title: 'Por qué no debemos mantener animales silvestres como mascotas',
    summary: 'La permanencia en cautiverio puede comprometer su salud, comportamiento y su capacidad de desenvolverse en la naturaleza.',
  },
  {
    title: 'Importancia de los corredores biológicos',
    summary: 'Conectan ecosistemas y permiten desplazamiento, reproducción y supervivencia de especies.',
  },
  {
    title: 'Cómo evitar el tráfico ilegal de especies',
    summary: 'No adquirir animales silvestres, denunciar prácticas sospechosas y promover la educación.',
  },
  {
    title: 'Responsabilidad ciudadana en la conservación ambiental',
    summary: 'La participación colectiva es clave para mantener ecosistemas sanos y proteger especies amenazadas.',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1533302016374-ae7fb7f6e4af?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1545239351-1141bd82e6a6?auto=format&fit=crop&w=900&q=80',
];

const faqs = [
  {
    question: '¿Qué se considera fauna silvestre?',
    answer:
      'Se refiere a las especies animales que viven en libertad en ecosistemas naturales, sin depender del cuidado humano directo. Su preservación es esencial para la salud ambiental y la biodiversidad.',
  },
  {
    question: '¿Por qué es importante proteger a los animales silvestres?',
    answer:
      'Los animales silvestres cumplen funciones ecológicas fundamentales en las cadenas tróficas, la polinización, la dispersión de semillas y el equilibrio de los ecosistemas.',
  },
  {
    question: '¿Qué debo hacer si encuentro un animal herido?',
    answer:
      'Lo recomendable es informar a una autoridad competente, un centro de atención o a profesionales capacitados para evaluar la situación y evitar el contacto innecesario.',
  },
  {
    question: '¿Por qué no debo alimentar a cualquier animal silvestre?',
    answer:
      'La alimentación inadecuada puede alterar su comportamiento, provocar pérdida de habilidades naturales y aumentar el riesgo de transmisión de enfermedades.',
  },
  {
    question: '¿Qué significa rehabilitar un animal?',
    answer:
      'Es un proceso de recuperación que busca restablecer su salud física, comportamiento y condiciones necesarias para una posible reintegración al hábitat cuando sea viable.',
  },
  {
    question: '¿Por qué es importante conservar los hábitats naturales?',
    answer:
      'Los hábitats proporcionan alimento, refugio, reproducción y desplazamiento. Su degradación puede poner en riesgo la supervivencia de especies completas.',
  },
  {
    question: '¿Qué es el tráfico ilegal de fauna?',
    answer:
      'Es la captura, transporte o comercialización ilegal de especies silvestres. Afecta la salud de los animales, reduce poblaciones naturales y favorece la pérdida de biodiversidad.',
  },
];

const team = [
  {
    name: 'Dra. Lilian Vásquez',
    role: 'Médica Veterinaria',
    phone: '04227623588',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dr. Ignacio Spagnolo',
    role: 'Médico Veterinario',
    phone: '04122530474',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<SpeciesCategory>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredSpecies = useMemo(() => {
    return species.filter((item) => {
      const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
      const query = searchTerm.trim().toLowerCase();
      const matchesSearch =
        query.length === 0 ||
        item.name.toLowerCase().includes(query) ||
        item.scientificName.toLowerCase().includes(query) ||
        item.habitat.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof ContactForm, string>> = {};

    if (!formData.name.trim()) nextErrors.name = 'Ingrese su nombre.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Ingrese un correo electrónico.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Ingrese un correo válido.';
    }
    if (!formData.subject.trim()) nextErrors.subject = 'Ingrese un asunto.';
    if (!formData.message.trim()) {
      nextErrors.message = 'Escriba su mensaje.';
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = 'El mensaje debe tener al menos 20 caracteres.';
    }

    return nextErrors;
  };

  const handleInput = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="bg-cream text-charcoal">
      <header className="sticky top-0 z-50 border-b border-jungle/10 bg-[#FAFAF6]/90 backdrop-blur-md">
        <div className="section-shell flex items-center justify-between py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-jungle text-lg font-bold text-white shadow-soft">
              F
            </div>
            <div>
              <p className="text-xl font-bold text-jungle">FAUNAVET</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-charcoal/60">Fauna silvestre</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#contacto" className="primary-button">
              Contacto
            </a>
          </div>

          <button
            type="button"
            className="rounded-full border border-jungle/20 p-2 text-jungle lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileOpen && (
          <div className="section-shell pb-4 lg:hidden">
            <div className="soft-card flex flex-col gap-3 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-hero-pattern">
          <div className="section-shell grid gap-12 py-20 md:grid-cols-2 md:items-center">
            <div className="reveal">
              <span className="inline-flex rounded-full border border-jungle/15 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-jungle">
                Medicina veterinaria al servicio de la vida silvestre
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-jungle md:text-6xl">
                FAUNAVET
              </h1>
              <p className="mt-4 max-w-xl text-lg text-charcoal/80">
                En FAUNAVET creemos que cada especie cumple una función fundamental en el equilibrio de la naturaleza. Nuestro compromiso es promover la atención veterinaria responsable, la recuperación de animales silvestres y la conservación de la biodiversidad.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#nosotros" className="primary-button">
                  Conoce nuestra organización
                </a>
                <a href="#servicios" className="secondary-button">
                  Explora nuestros servicios
                </a>
                <a href="#fauna" className="secondary-button">
                  Descubre la fauna
                </a>
              </div>
            </div>

            <div className="relative reveal">
              <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-sage/30 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-52 w-52 rounded-full bg-earth/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-jungle/10 bg-white shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
                  alt="Veterinario atendiendo un animal silvestre"
                  className="h-[620px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="soft-card reveal p-7">
                <div className="icon-badge mb-5">{pillar.icon}</div>
                <h3 className="mb-3 text-2xl font-bold text-jungle">{pillar.title}</h3>
                <p className="text-charcoal/75">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="nosotros" className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Nosotros</p>
              <h2 className="section-title">Quiénes somos</h2>
              <p className="section-subtitle">
                FAUNAVET es una organización veterinaria ficticia creada con el propósito de promover la protección de la fauna silvestre mediante conocimientos científicos, atención veterinaria, educación ambiental y acciones orientadas a la conservación de los ecosistemas.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="soft-card p-8 reveal">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-jungle">Misión</h3>
                    <p className="text-charcoal/75">
                      Contribuir a la protección y conservación de la fauna silvestre mediante la atención veterinaria responsable, la rehabilitación de animales, la educación ambiental y la promoción del respeto hacia todas las formas de vida.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-jungle">Visión</h3>
                    <p className="text-charcoal/75">
                      Ser una organización reconocida por su compromiso con el bienestar animal y la conservación de la biodiversidad, promoviendo una sociedad consciente, responsable y comprometida con la protección de las especies silvestres.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-jungle">Objetivo general</h3>
                    <p className="text-charcoal/75">
                      Promover la protección, recuperación y conservación de la fauna silvestre mediante acciones veterinarias, educativas y ambientales que contribuyan al bienestar animal y al equilibrio de los ecosistemas.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-jungle">Objetivos específicos</h3>
                    <ul className="list-disc space-y-2 pl-5 text-charcoal/75">
                      <li>Fomentar la atención veterinaria especializada.</li>
                      <li>Promover rescate y rehabilitación responsables.</li>
                      <li>Prevenir el tráfico y comercio ilegal de fauna.</li>
                      <li>Desarrollar educación y concientización ambiental.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {values.map((value, index) => (
                  <div key={value} className="soft-card reveal flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/20 text-sm font-bold text-jungle">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-jungle">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Servicios</p>
              <h2 className="section-title">Áreas de trabajo del proyecto académico</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="soft-card reveal p-6">
                  <div className="icon-badge mb-5">✦</div>
                  <h3 className="mb-4 text-xl font-bold text-jungle">{service.title}</h3>
                  <p className="text-charcoal/75">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fauna" className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Fauna silvestre</p>
                <h2 className="section-title">Especies representativas</h2>
              </div>

              <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative">
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar especie"
                    className="w-full rounded-full border border-jungle/20 bg-cream px-4 py-3 text-sm text-charcoal outline-none ring-0 md:w-64"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {(['Todos', 'Aves', 'Mamíferos', 'Reptiles'] as SpeciesCategory[]).map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        activeCategory === category
                          ? 'bg-jungle text-white'
                          : 'border border-jungle/20 bg-white text-jungle hover:bg-sage/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredSpecies.map((item) => (
                <article key={item.name} className="soft-card reveal overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-60 w-full object-cover" />
                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-jungle">{item.name}</h3>
                      <span className="rounded-full bg-sage/20 px-2 py-1 text-xs font-medium text-jungle">
                        {item.category}
                      </span>
                    </div>
                    <p className="mb-4 italic text-charcoal/60">{item.scientificName}</p>
                    <ul className="space-y-2 text-sm text-charcoal/75">
                      <li><strong>Clasificación:</strong> {item.classification}</li>
                      <li><strong>Hábitat:</strong> {item.habitat}</li>
                      <li><strong>Alimentación:</strong> {item.diet}</li>
                      <li><strong>Características:</strong> {item.characteristics}</li>
                      <li><strong>Importancia ecológica:</strong> {item.ecologicalImportance}</li>
                      <li><strong>Estado:</strong> {item.conservationStatus}</li>
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="conservacion" className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Conservación</p>
              <h2 className="section-title">La biodiversidad y su protección</h2>
              <p className="mb-6 text-charcoal/75">
                La biodiversidad comprende la variedad de especies, ecosistemas y procesos ecológicos que sostienen la vida en el planeta. La fauna silvestre cumple un papel clave en la regulación climática, la fertilidad del suelo, la dispersión de semillas y la estabilidad de los ecosistemas.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {conservationTopics.map((topic) => (
                  <div key={topic} className="soft-card flex items-center gap-3 p-3">
                    <span className="text-jungle">•</span>
                    <span className="text-sm font-medium text-charcoal">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-card reveal overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                alt="Paisaje natural"
                className="h-72 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-bold text-jungle">Biodiversidad de Venezuela</h3>
                <p className="text-charcoal/75">
                  Venezuela concentra una gran riqueza de ecosistemas, desde selvas tropicales y bosques nublados hasta sabanas, manglares y áreas de montaña. Esta diversidad favorece la presencia de numerosas especies endémicas y de alto valor ecológico.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Rehabilitación</p>
              <h2 className="section-title">Proceso general de rehabilitación y liberación</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {rehabilitationStages.map((stage) => (
                <article key={stage.title} className="soft-card reveal overflow-hidden">
                  <img src={stage.image} alt={stage.title} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="mb-3 text-xl font-bold text-jungle">{stage.title}</h3>
                    <p className="text-charcoal/75">{stage.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="educacion" className="py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Educación ambiental</p>
              <h2 className="section-title">Artículos de sensibilización</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {educationArticles.map((article) => (
                <article key={article.title} className="soft-card reveal p-6">
                  <div className="icon-badge mb-5">🌱</div>
                  <h3 className="mb-3 text-xl font-bold text-jungle">{article.title}</h3>
                  <p className="text-charcoal/75">{article.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Galería</p>
              <h2 className="section-title">Momentos de fauna, rehabilitación y naturaleza</h2>
            </div>

            <div className="gallery-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image + index}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="overflow-hidden rounded-3xl border border-jungle/10 bg-white shadow-soft"
                >
                  <img src={image} alt={`Galería FAUNAVET ${index + 1}`} className="h-64 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Equipo</p>
              <h2 className="section-title">Nuestro equipo veterinario</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {team.map((member) => (
                <div key={member.name} className="soft-card reveal overflow-hidden">
                  <img src={member.image} alt={member.name} className="h-80 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-jungle">{member.name}</h3>
                    <p className="mt-2 text-lg text-charcoal/80">{member.role}</p>
                    <a href={`tel:${member.phone}`} className="mt-5 inline-flex rounded-full bg-jungle px-4 py-2 text-sm font-semibold text-white hover:bg-forest">
                      Llamar: {member.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Contacto</p>
              <h2 className="section-title">Hablemos sobre fauna silvestre y conservación</h2>
              <p className="mb-6 text-charcoal/75">
                FAUNAVET – Medicina veterinaria al servicio de la vida silvestre.
              </p>

              <div className="space-y-4">
                <div className="soft-card p-4">
                  <p className="font-semibold text-jungle">Médicos veterinarios responsables</p>
                  <ul className="mt-2 space-y-2 text-charcoal/75">
                    <li>Lilian Vásquez – <a href="tel:04227623588" className="text-jungle underline">04227623588</a></li>
                    <li>Ignacio Spagnolo – <a href="tel:04122530474" className="text-jungle underline">04122530474</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="soft-card reveal p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-jungle">Nombre</label>
                  <input
                    value={formData.name}
                    onChange={(e) => handleInput('name', e.target.value)}
                    className="w-full rounded-2xl border border-jungle/20 bg-cream px-4 py-3 text-charcoal outline-none focus:border-jungle"
                    placeholder="Nombre completo"
                  />
                  {formErrors.name && <span className="mt-2 block text-sm text-red-600">{formErrors.name}</span>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-jungle">Correo electrónico</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInput('email', e.target.value)}
                    className="w-full rounded-2xl border border-jungle/20 bg-cream px-4 py-3 text-charcoal outline-none focus:border-jungle"
                    placeholder="correo@ejemplo.com"
                  />
                  {formErrors.email && <span className="mt-2 block text-sm text-red-600">{formErrors.email}</span>}
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-jungle">Asunto</label>
                <input
                  value={formData.subject}
                  onChange={(e) => handleInput('subject', e.target.value)}
                  className="w-full rounded-2xl border border-jungle/20 bg-cream px-4 py-3 text-charcoal outline-none focus:border-jungle"
                  placeholder="Asunto del mensaje"
                />
                {formErrors.subject && <span className="mt-2 block text-sm text-red-600">{formErrors.subject}</span>}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-jungle">Mensaje</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInput('message', e.target.value)}
                  rows={6}
                  className="w-full rounded-2xl border border-jungle/20 bg-cream px-4 py-3 text-charcoal outline-none focus:border-jungle"
                  placeholder="Escriba su consulta..."
                />
                {formErrors.message && <span className="mt-2 block text-sm text-red-600">{formErrors.message}</span>}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" className="primary-button">
                  Enviar mensaje
                </button>
                {submitted && (
                  <span className="text-sm font-medium text-forest">
                    Mensaje listo para ser enviado por el responsable del formulario.
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-jungle">Preguntas frecuentes</p>
              <h2 className="section-title">Respuestas a inquietudes frecuentes</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div key={item.question} className="soft-card reveal overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-jungle">{item.question}</span>
                    <span className="text-2xl text-jungle">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  {activeFaq === index && <p className="px-5 pb-5 text-charcoal/75">{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-jungle py-12 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-jungle">
                F
              </div>
              <div>
                <p className="text-xl font-bold">FAUNAVET</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/75">Fauna silvestre</p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-white/75">
              FAUNAVET – Medicina veterinaria al servicio de la vida silvestre.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Navegación</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="tel:04227623588">Lilian Vásquez – 04227623588</a></li>
              <li><a href="tel:04122530474">Ignacio Spagnolo – 04122530474</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Descripción institucional</h3>
            <p className="text-sm text-white/80">
              Organización veterinaria ficticia orientada a la protección y conservación de la fauna silvestre, con enfoque en salud, rehabilitación, educación ambiental y respeto por la vida animal.
            </p>
          </div>
        </div>

        <div className="section-shell mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          © 2026 FAUNAVET. Todos los derechos reservados. FAUNAVET – Medicina veterinaria al servicio de la vida silvestre.
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-jungle p-3 text-xl text-white shadow-soft transition hover:bg-forest"
          aria-label="Volver al inicio"
        >
          ↑
        </button>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-5xl rounded-3xl bg-white p-3 shadow-soft" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Vista ampliada de fauna silvestre" className="max-h-[80vh] w-full rounded-2xl object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}
