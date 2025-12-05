import { Timestamp } from "firebase/firestore";

export interface EventItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;

  date: string;       // "Fri, Sep 19"
  dateISO: string;    // "2025-09-19"

  time: string;       // "14:00"
  place: string;      // "Asbury Hall"
  group: string;      // "Chemistry Department"

  imageURL: string;   // Firebase Storage URL or placeholder

  createdBy: string;  // organization ID
  createdAt: Timestamp;
}



export const exampleEvent: EventItem = {
  id: "abc123",
  title: "Fall Student Art Showcase",
  shortDescription: "Featuring over 40 student-led visual art projects.",
  longDescription: `
This annual exhibition highlights the creative work produced by students
across multiple disciplines, including painting, sculpture, digital media,
photography, and mixed-material installation. Visitors are invited to explore
a diverse collection of projects that reflect personal narrative, social
commentary, experimental technique, and interdisciplinary research.

Throughout the event, faculty members from the Art Department will provide short
talks on creative practice and artistic process. Students will be available to
discuss their work, answer questions, and guide visitors through the exhibit.
This showcase is open to all members of the campus community and the public.

Light refreshments will be provided. We encourage guests to take their time,
engage with the artists, and celebrate the creativity present at DePauw University.`,
  date: "Fri, Sep 19",
  dateISO: "2025-09-19",
  time: "17:00",
  place: "Peeler Art Center",
  group: "Art Department",
  imageURL: "",
  createdBy: "org123",
  createdAt: Timestamp.now()
};

import { Timestamp } from "firebase/firestore";

export const sampleEvents = [

  {
    id: "event001",
    title: "Intro to Studio Lighting Workshop",
    shortDescription: "Hands-on training session for studio and portrait lighting.",
    longDescription: `
This interactive workshop introduces students to the fundamentals of studio
lighting, including three-point lighting, diffusion techniques, and how to modify
light using reflectors and softboxes. Participants will rotate through lighting
stations, practice positioning equipment, and learn how lighting dramatically
changes mood and depth in photography. No prior experience is required, and all
gear will be provided. Ideal for students pursuing media studies, art, or
creative storytelling.`,
    date: "Mon, Feb 10",
    dateISO: "2025-02-10",
    time: "15:00",
    place: "Peeler Art Center",
    group: "Media Studies",
    imageURL: "",
    createdBy: "org_media01",
    createdAt: Timestamp.now()
  },

  {
    id: "event002",
    title: "Chemistry Research Symposium",
    shortDescription: "Poster presentations by chemistry majors.",
    longDescription: `
Join us for the annual Chemistry Research Symposium featuring student
presentations on topics ranging from green catalysis and atmospheric chemistry
to biochemical reaction pathways. Attendees will engage with students conducting
original research, view poster displays, and participate in Q&A sessions.
Faculty mentors will provide guidance on academic research pathways and
laboratory opportunities for interested majors.`,
    date: "Wed, Mar 5",
    dateISO: "2025-03-05",
    time: "16:00",
    place: "Olin",
    group: "Chemistry Department",
    imageURL: "",
    createdBy: "org_chem01",
    createdAt: Timestamp.now()
  },

  {
    id: "event003",
    title: "Environmental Justice Film Screening",
    shortDescription: "Documentary screening followed by critical discussion.",
    longDescription: `
This event features a screening of an acclaimed documentary exploring the
intersection of climate change, labor inequality, and community resilience. After
the screening, faculty members from Environmental Studies and Anthropology will
lead a guided discussion focusing on ethical storytelling, global responsibility,
and everyday activism. Students from all majors are encouraged to participate.`,
    date: "Fri, Apr 11",
    dateISO: "2025-04-11",
    time: "18:30",
    place: "GCPA",
    group: "Environmental Studies",
    imageURL: "",
    createdBy: "org_env01",
    createdAt: Timestamp.now()
  },

  {
    id: "event004",
    title: "Music Technology Lab Open House",
    shortDescription: "Explore synthesizers, audio mixing, and digital composition.",
    longDescription: `
The open house invites students to experiment with a range of digital audio tools
including MIDI keyboards, analog synthesizers, and multi-track recording
software. Student assistants and faculty will give demos on beat production,
signal processing, and live sound setup. Whether you're a beginner or an
experienced musician, this is a chance to discover new technology that supports
creative expression.`,
    date: "Thu, Feb 27",
    dateISO: "2025-02-27",
    time: "14:00",
    place: "GCPA",
    group: "School of Music",
    imageURL: "",
    createdBy: "org_music01",
    createdAt: Timestamp.now()
  },

  {
    id: "event005",
    title: "Data Visualization Showcase",
    shortDescription: "Projects from students exploring health, policy, and sport analytics.",
    longDescription: `
Students from multiple data science and analytics courses will present dynamic
visualizations examining real-world datasets. Topics include healthcare
affordability, predictive sports metrics, demographic change, and international
development indicators. Guests can interact with dashboards, provide feedback,
and learn how effective visual communication shapes decision-making.`,
    date: "Tue, Apr 1",
    dateISO: "2025-04-01",
    time: "17:30",
    place: "Julian Science Center",
    group: "Data Science Program",
    imageURL: "",
    createdBy: "org_data01",
    createdAt: Timestamp.now()
  },

  {
    id: "event006",
    title: "Campus Sustainability Fair",
    shortDescription: "Hands-on stations, eco-demonstrations, and community engagement.",
    longDescription: `
The Sustainability Fair features booths hosted by student organizations,
environmental partners, and local community groups. Visitors can explore
renewable energy models, waste-reduction strategies, native plant displays,
and DIY sustainability hacks. Interactive demonstrations encourage students
to make small but meaningful lifestyle changes that reduce environmental impact.`,
    date: "Sat, Apr 12",
    dateISO: "2025-04-12",
    time: "12:00",
    place: "UB Hall",
    group: "Sustainability Leadership Program",
    imageURL: "",
    createdBy: "org_sustain01",
    createdAt: Timestamp.now()
  },

  {
    id: "event007",
    title: "Career Pathways in Tech Panel",
    shortDescription: "Alumni share insights on software engineering, UX, and AI.",
    longDescription: `
This panel discussion features DePauw alumni working across the technology
sector—from full-stack developers and UX designers to AI researchers and
product managers. Panelists will share insights on internships, recruitment
timelines, technical interviews, and navigating workplace culture. A networking
session with refreshments will follow.`,
    date: "Thu, Mar 20",
    dateISO: "2025-03-20",
    time: "19:00",
    place: "Julian Science Center",
    group: "Computer Science",
    imageURL: "",
    createdBy: "org_cs01",
    createdAt: Timestamp.now()
  },

  {
    id: "event008",
    title: "Spring Choral Concert",
    shortDescription: "An evening of classical, contemporary, and world choral pieces.",
    longDescription: `
The Spring Choral Concert highlights the vocal talents of DePauw’s choral
ensembles through a selection of musical works spanning classical repertoire,
folk arrangements, and contemporary compositions. This event is open to the
public and celebrates artistic collaboration and musical excellence. Family and
community members are warmly invited.`,
    date: "Sun, Apr 6",
    dateISO: "2025-04-06",
    time: "15:00",
    place: "Kresge Auditorium",
    group: "School of Music",
    imageURL: "",
    createdBy: "org_music02",
    createdAt: Timestamp.now()
  },

  {
    id: "event009",
    title: "Philosophy Roundtable: Ethics of AI",
    shortDescription: "A guided debate on accountability, bias, and automation.",
    longDescription: `
This roundtable brings together students and faculty to explore the ethical
questions posed by artificial intelligence. Topics include data privacy,
algorithmic bias, responsibility in autonomous systems, and the impact of AI on
labor markets. Participants will engage in structured debate and collaborative
problem-solving activities.`,
    date: "Mon, Mar 3",
    dateISO: "2025-03-03",
    time: "16:30",
    place: "Asbury Hall",
    group: "Philosophy Department",
    imageURL: "",
    createdBy: "org_philo01",
    createdAt: Timestamp.now()
  },

  {
    id: "event010",
    title: "Historical Costume Exhibition",
    shortDescription: "Rare artifacts and student-created textile reconstructions.",
    longDescription: `
This curated exhibition explores fashion traditions across historical periods,
featuring authenticated garments, replicas, and student research on textile
production. Visitors will learn how clothing styles reflect cultural identity,
social hierarchy, and technological innovation. Interactive stations allow guests
to examine weaving techniques and fabric dyes.`,
    date: "Fri, Apr 18",
    dateISO: "2025-04-18",
    time: "10:00",
    place: "Peeler Art Center",
    group: "History Department",
    imageURL: "",
    createdBy: "org_history01",
    createdAt: Timestamp.now()
  },

  {
    id: "event011",
    title: "Math & Puzzle Night",
    shortDescription: "Collaborative problem solving with prizes and snacks.",
    longDescription: `
Students, faculty, and staff are invited to an evening of brain-teasing
mathematical puzzles, logic games, and collaborative challenges. Both competitive
and casual participants are welcome. Math faculty will offer hints and provide
insight into problem-solving strategies. Light refreshments will be available.`,
    date: "Tue, Feb 18",
    dateISO: "2025-02-18",
    time: "18:00",
    place: "Julian Science Center",
    group: "Mathematics Department",
    imageURL: "",
    createdBy: "org_math01",
    createdAt: Timestamp.now()
  },

  {
    id: "event012",
    title: "Student Entrepreneurship Pitch Night",
    shortDescription: "Pitch your startup idea to alumni judges.",
    longDescription: `
Pitch Night gives students the opportunity to present entrepreneurial concepts to
a panel of alumni judges with experience in venture capital, product design, and
business leadership. Participants receive constructive feedback, mentorship
connections, and opportunities for further incubation support. Audience members
can vote for a People’s Choice Award.`,
    date: "Thu, Apr 10",
    dateISO: "2025-04-10",
    time: "18:00",
    place: "UB Hall",
    group: "Management Fellows",
    imageURL: "",
    createdBy: "org_mgmt01",
    createdAt: Timestamp.now()
  },

  {
    id: "event013",
    title: "Wellness Workshop: Stress & Sleep",
    shortDescription: "Learn strategies to improve rest and reduce anxiety.",
    longDescription: `
This wellness workshop focuses on building sustainable routines that promote
mental clarity, restorative sleep, and emotional balance. Students will explore
mindfulness exercises, guided breathing practices, and cognitive strategies for
managing academic stress. The session concludes with a Q&A led by wellness
professionals.`,
    date: "Wed, Mar 26",
    dateISO: "2025-03-26",
    time: "14:00",
    place: "UB Hall",
    group: "Wellness Center",
    imageURL: "",
    createdBy: "org_well01",
    createdAt: Timestamp.now()
  },

  {
    id: "event014",
    title: "Modern Dance Performance",
    shortDescription: "A student-choreographed show exploring movement and identity.",
    longDescription: `
Featuring original choreography by DePauw dance students, this performance blends
modern technique, narrative storytelling, and improvisation. The show highlights
themes of identity, connection, and emotional resilience. Audience members are
invited to stay afterward for a discussion with the performers about their
creative process and artistic influences.`,
    date: "Sat, Apr 19",
    dateISO: "2025-04-19",
    time: "19:30",
    place: "GCPA",
    group: "Dance Program",
    imageURL: "",
    createdBy: "org_dance01",
    createdAt: Timestamp.now()
  }

];
