'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const researchProjects = [
  {
    title: "GRESSON Judges in New Zealand",
    summary: "Research for a book titled 'On Family Ground' by Nicholas Lyon Gresson."
  },
  {
    title: "Jutland and Beyond: Stories My Father Told Me",
    summary: "Exploring personal accounts from the Battle of Jutland, with extensive research visits and a reflective paper from University of Aarhus."
  },
  {
    title: "Politics of Knowledge in Aesthetic Education",
    summary: "Research for a forthcoming book on the politics of knowledge in aesthetic education."
  },
  {
    title: "My Life and Career",
    summary: "An autobiographical book project detailing life and career experiences."
  },
  {
    title: "2015 Cyberspace and Cyberbullying in Australia",
    summary: "An analysis of policy and legal responses to cyberbullying in Australia and New Zealand, with recommendations for legal reform."
  },
  {
    title: "Feminist Jurisprudence",
    summary: "A critique of popular feminism through various feminist jurisprudence approaches, addressing key concerns in law and society."
  },
  {
    title: "From Colonies to TEQSA: Vortices and Thermals of Commonwealth Power",
    summary: "Examining the reach of Commonwealth powers into state governance in Australia, focusing on the TEQSA Act and its implications."
  },
  {
    title: "2013 Urban Laboratory Project",
    summary: "Researching urban safety through art in Melbourne, aiming to mitigate crime through socially engaged works."
  },
  {
    title: "2010-11 The Trust Project",
    summary: "Investigating the role of trust in urban environments through art, with a focus on safer communities and restorative social justice."
  },
  {
    title: "2008-10 Designing Sound for Health and Wellbeing",
    summary: "A project exploring the impact of sound design on health and wellbeing, funded by the Australia Research Council."
  },
  {
    title: "2009 Kaldor Public Art Project",
    summary: "Coordinating a major urban art project in collaboration with John Kaldor Public Art Projects and artist Martin Boyce."
  },
  {
    title: "1996-2000 The Politics of Knowledge",
    summary: "Doctoral research on the politics of knowledge in visual arts education, influenced by poststructuralist theories."
  },
  {
    title: "1990 The Art and Life of Louise Henderson",
    summary: "Master’s research on the life and work of Dame Louise Henderson, examining her influence on modernism in New Zealand art."
  }
];

const conferencePapers = [
  {
    title: "Restorative Justice: From adversarialism and blame to responsibility and reparation",
    year: 2015,
    summary: "Paper presented at the 4th International Therapeutic Jurisprudence Conference, Weaving Strands: Ngā Whenu Rāranga, University of Auckland, NZ."
  },
  {
    title: "From Colonies to TEQSA: Vortices and Thermals of Legislative Change",
    year: 2013,
    summary: "Refereed paper presented at Safe, Successful and Sustainable Education – Is the Law a Sword or a Shield?, 22nd Annual ANZELA Conference, Hobart, Tasmania."
  },
  {
    title: "TEQSA as Regulator of Value meets Nietzsche as Legislator of the Same",
    year: 2013,
    summary: "Paper presented at Measuring Up in Education, 43rd Annual PESA Conference, Melbourne."
  },
  {
    title: "Cyberspace, Cyberbullying, Cyberstalking: New challenges in law and education",
    year: 2012,
    summary: "Refereed paper presented at Woteva Nxt? Legal and Social Challenges in Education, 21st Annual ANZELA Conference, Rotorua, NZ."
  },
  {
    title: "Freedom, Individualism and Law of Contract: Future Proofing Education",
    year: 2011,
    summary: "Paper presented at Educational Futures, 41st Annual PESA Conference, AUT Auckland."
  },
  {
    title: "The Social Body",
    year: 2009,
    summary: "Refereed paper presented at Dialogue and Difference, PESA 38th Annual Conference, University of Hawaii, USA."
  },
  {
    title: "Designing Sound for Health and Well-Being",
    year: 2009,
    summary: "Paper presented with K. Macarow & P. Samartzis at ACUADS Conference, Griffith University, Brisbane."
  },
  {
    title: "Double Edges of Knowing",
    year: 2009,
    summary: "Panel speaker at Double//Edges: Rhetorics, Rhizomes, Regions, IAPL International Conference, Brunel University, London."
  },
  {
    title: "Mobilising Education Globally",
    year: 2009,
    summary: "Paper presented at UNESCO, WAAE, InSEA, Mahi toi: te hökai o te matäraka toi äwhatu Conference, Dunedin, NZ."
  },
  {
    title: "Creativity and the Return of a Political Will",
    year: 2007,
    summary: "Paper presented at Creativity, Enterprise, Policy – New Directions in Education, PESA 36th Annual Conference, Te Papa Museum of New Zealand."
  },
  {
    title: "Ways of Researching",
    year: 2007,
    summary: "Paper at InSEA Asian Regional Research Conference, HongIk University, Seoul, South Korea."
  },
  {
    title: "UNESCO Road Map",
    year: 2006,
    summary: "Forum paper at Thinking the Future, ACUADS Conference, Monash University, Melbourne."
  },
  {
    title: "Artist as Global Cosmopolitan in Time and Space",
    year: 2005,
    summary: "Paper presented at 34th Annual PESA Conference, Hong Kong Institute of Education."
  },
  {
    title: "Elements of an Image-Text Analysis of Tourism Brochures for Mainland China",
    year: 2005,
    summary: "Paper presented with J. Bitchener at Language and Global Communication Conference, University of Cardiff, Wales."
  },
  {
    title: "Culture and Identity in the South Pacific",
    year: 2004,
    summary: "Paper presented at Southern Voices and Global Order, Annual Conference of Global Studies Association, University of Warwick, UK."
  },
  {
    title: "Excellere: Seeking What?",
    year: 2004,
    summary: "Refereed paper presented at Seeking Educational Excellence, Murdoch University, Perth, Australia."
  },
  {
    title: "Difference and the Arts",
    year: 2003,
    summary: "Paper at Education and Difference, PESA Conference, University of Auckland."
  },
  {
    title: "Methodology and Interpretive Procedures in Education: Risk, imagination, reflexivity",
    year: 2003,
    summary: "Refereed paper presented at Educational Risks and Dilemmas, NZARE AARE Conference, University of Auckland."
  },
  {
    title: "Scaffolds of Subjectivity: Coming to Terms with Subjectivity in the Act of Learning",
    year: 2003,
    summary: "Refereed paper at 10th International Literacy and Educational Research Network Learning Conference, University of London, UK."
  },
  {
    title: "Transitions, Translations & Transformations",
    year: 2003,
    summary: "Refereed paper presented at International Conference on New Directions in the Humanities, University of the Aegean, Island of Rhodes."
  },
  {
    title: "Globalisation, Cultural Nation & Truth Claims",
    year: 2003,
    summary: "Refereed paper at Between Empires: Communication, Globalisation & Identity, Centre for Communication Research Conference, Auckland University of Technology, NZ."
  },
  {
    title: "The Arts and Creative Industries",
    year: 2003,
    summary: "Refereed paper at Hawaii International Conference on Art and Humanities, University of Hawaii, USA."
  },
  {
    title: "Humanising Globalisation",
    year: 2002,
    summary: "Paper presented at Global Ethics and Civil Society, 2nd Annual Conference of Global Studies Association, University of Surrey, Roehampton, UK."
  },
  {
    title: "Re-imagining the Nation in a Globalised Knowledge Society: Cultural Landscapes from Aotearoa New Zealand",
    year: 2001,
    summary: "Paper presented at Networks and Transformations, Third International Conference of the Global Studies Association, Manchester Metropolitan University, UK."
  },
  {
    title: "From Cemeteries to Cyberspace: Identity in a Globally Technologised Age",
    year: 2001,
    summary: "Paper presented at Digitisation and Knowledge: Perspectives from Aotearoa New Zealand, New Media Research Centre Conference, Auckland University of Technology, NZ."
  },
  {
    title: "Cultural Identity and Global Flows",
    year: 1999,
    summary: "Paper presented at Cultures and Transition, 30th World Congress of InSEA and AIAE, Brisbane, Australia."
  },
  {
    title: "Poststructuralism: A Useable Tool",
    year: 1996,
    summary: "Paper presented at Eduvision, Australasian Conference of ANZAAE and AAAE, Otago Polytechnic, Dunedin, NZ."
  }
];

 
const invitedSpeakerEngagements = [
  {
    title: "Restorative Justice",
    year: 2016,
    summary: "Invited Speaker at University of 3rd Age [U3A] Devonport, Auckland NZ."
  },
  {
    title: "What Laws am I Transgressing? Constructing a discourse of art, language and the human subject",
    year: 2014,
    summary: "Invited Speaker at the Symposium The Sociolinguistics of Art, The University of Hong Kong."
  },
  {
    title: "Cyberspace, Cyberbullying, Cyberstalking: New challenges in law and education",
    year: 2013,
    summary: "Invited Speaker at ANZELA Seminar, Law Week, Melbourne, Victoria."
  },
  {
    title: "TEQSA Legislation in higher education in Australia",
    year: 2013,
    summary: "Panel Contributor at ANZELA Conference, Hobart, Tasmania."
  },
  {
    title: "New Maps for New Spaces: The Poetics of Creative Knowledge",
    year: 2012,
    summary: "Invited Keynote and panel member at International Conference on Research Creativity – Praxis, Baptist University Hong Kong."
  },
  {
    title: "Designing Sound for Health and Wellbeing",
    year: 2012,
    summary: "Invited Speaker at Wilf Malcolm Institute of Educational Research, University of Waikato, NZ."
  },
  {
    title: "Critical Response",
    year: 2012,
    summary: "Invited Plenary Panel speaker at University of Arts London."
  },
  {
    title: "Footnote",
    year: 2012,
    summary: "Invited Speaker at RMIT Bachelor of Arts (Fine Art) Graduate Exhibition, Hong Kong Arts Centre."
  },
  {
    title: "Shatzkammer – Australien, Treasure Room – Australia",
    year: 2010,
    summary: "Invited Speaker at Galerie Handwerk, Munich, Germany."
  },
  {
    title: "Working Drawings/Private Concerns",
    year: 2010,
    summary: "Invited Speaker at Exchange Exhibition of works on paper from RMIT BA (Fine Art) Painting students, Draakon Gallery, Tallinn, Estonia."
  },
  {
    title: "Art as Research",
    year: 2010,
    summary: "Invited Speaker at Thinking through Practice: Art and Design as Research, LaSalle College of the Arts, Singapore."
  },
  {
    title: "Chair of Conference",
    year: 2010,
    summary: "Chair of Keynotes and Plenary session at Drawing Out Conference, RMIT University Melbourne."
  },
  {
    title: "UNESCO Second World Conference on Arts Education",
    year: 2010,
    summary: "Invited Presenter at UNESCO Second World Conference on Arts Education, Seoul, South Korea."
  },
  {
    title: "Magnetic Islands Exhibition",
    year: 2010,
    summary: "Opening speech at Project Space, Cardigan Street, Melbourne."
  },
  {
    title: "This Way Up",
    year: 2010,
    summary: "Invited Speaker at RMIT Bachelor of Arts (Fine Art) Graduate Exhibition, Hong Kong Arts Centre."
  },
  {
    title: "Discourses of Creativity and Creative Arts in Global Knowledge Economies",
    year: 2009,
    summary: "Invited Research Focus Group Leader at World Creativity Summit, Newcastle, UK."
  },
  {
    title: "Museum of Art Exhibits",
    year: 2009,
    summary: "Invited Speaker at Museum of Art, Seoul National University, South Korea."
  },
  {
    title: "Design Research Institute panel, Double Edges of Knowing",
    year: 2008,
    summary: "Invited Chair and Speaker at IAPL International Philosophy and Literature Association Conference, Brunel University, London."
  },
  {
    title: "Mobilising Art Education Globally",
    year: 2008,
    summary: "Invited featured Speaker at Mahi Toi, hosted by Otago Polytechnic with Kai Tahu ki Arai-Te-Uru, Dunedin, NZ."
  },
  {
    title: "Urban Futures and Aesthetic Relations Symposium",
    year: 2008,
    summary: "Respondent and closing address at RMIT Global Cities Research Institute, RMIT University, Melbourne."
  },
  {
    title: "Drawing of the World, World of Drawing Exhibition",
    year: 2008,
    summary: "Invited speaker at Museum of Art, Seoul National University, South Korea."
  },
  {
    title: "Katarina Frank International Artist in Residence Exhibition",
    year: 2008,
    summary: "Invited speaker at Project Space, Cardigan Street, Melbourne."
  },
  {
    title: "Michael Wegerer International Artist in Residence: Translab (Distant Divergences)",
    year: 2008,
    summary: "Invited Speaker at Project Space, Melbourne."
  },
  {
    title: "Art and Globalization: Urban Futures and Aesthetic Relations Symposium",
    year: 2008,
    summary: "Respondent and closing address at RMIT Global Cities Research Institute and the School of Art, RMIT, Melbourne."
  },
  {
    title: "Re-Imagining the Urban Habitus Symposium",
    year: 2008,
    summary: "Chair and Speaker at RMIT University, Melbourne."
  },
  {
    title: "Creativity, Design Heritage: Ways of Minding, Mediating and Mobilizing through Art as an Interventionist Strategy",
    year: 2008,
    summary: "Invited Keynote panel speaker at Mind+ Media + Heritage, 32nd InSEA World Congress, Osaka, Japan."
  },
  {
    title: "Interaction, Exhibition of RMIT Alumni and staff of Hong Kong Art School",
    year: 2008,
    summary: "Invited speaker at RMIT Gallery, RMIT, Melbourne."
  },
  {
    title: "Footprints of Creativity and Innovation: Designing Our Futures",
    year: 2008,
    summary: "Invited Panel Speaker at World Creativity Summit, Taipei Museum of Fine Art, Taiwan."
  },
  {
    title: "Global Arts / Local Knowledge",
    year: 2008,
    summary: "Plenary paper at IAPL 32nd International Association of Philosophy and Literature conference, RMIT University, Melbourne."
  },
  {
    title: "Walker and Hall Art Award",
    year: 2008,
    summary: "Invited Speaker and Judge at Waiheke Community Art Gallery, Waiheke, NZ."
  },
  {
    title: "What Makes a Great Art School?",
    year: 2008,
    summary: "Invited Panel Speaker at College of Fine Arts, University of New South Wales, Sydney."
  },
  {
    title: "New Zealand Painting and Printmaking Award",
    year: 2007,
    summary: "Invited Speaker and Judge at WSA, Hamilton, NZ."
  },
  {
    title: "Dame Louise Henderson: Early Career from Paris to New Zealand",
    year: 2006,
    summary: "Invited Speaker at Dame Louise Henderson Symposium, University of Canterbury, NZ."
  },
  {
    title: "Creativity and Culture: The redefining of knowledge through the arts in education for the local in a globalised world",
    year: 2006,
    summary: "Invited Keynote Speaker at Postgraduate Residential School, Charles Sturt University, NSW, Australia."
  },
  {
    title: "Forum Panel at Metronome Think-Tank",
    year: 2006,
    summary: "Invited Speaker in collaboration with Documenta 12 Magazines, Mori Art Centre, Tokyo, Japan."
  },
  {
    title: "Capacity Building in Art Education: UNESCO Roadmap and Responses",
    year: 2006,
    summary: "Plenary Panel Speaker at Art: Setting the Standard(s), AEA Conference, Monash University, Melbourne."
  },
  {
    title: "Partnerships: Arts Management, Cultural Policy and Globalisation",
    year: 2006,
    summary: "Invited Speaker at East China Normal University (ECNU), Shanghai, China."
  },
  {
    title: "Interdisciplinary Dialogues in Arts Education",
    year: 2006,
    summary: "Invited Keynote Speaker at InSEA World Congress 2006, Viseu, Portugal."
  },
  {
    title: "Creativity at InSEA World Congress 2006",
    year: 2006,
    summary: "Invited Panel Speaker with Dr Gary Mcpherson, Dr John Steers, and Ashfaq M. Ishaq at Viseu, Portugal."
  },
  {
    title: "UNESCO World Summit for the Arts in Education",
    year: 2006,
    summary: "Invited Presenter at Lisbon, Portugal."
  },
  {
    title: "Languaging the Local in the Global: Across the Pacific and Beneath Southern Skies",
    year: 2005,
    summary: "Invited Speaker at Between Sky and Earth, South 2: The South Project, at Te Papa Tongarewa, NZ."
  },
  {
    title: "Excellere: Seeking Excellence in a Globalised Age",
    year: 2005,
    summary: "Invited"
  }]

  const books = [
    {
      title: "Activating Aesthetics",
      year: 2017,
      editors: "Elizabeth M. Grierson",
      publisher: "Routledge, London",
      summary: "Activating Aesthetics addresses questions of aesthetics in education, exploring aesthetic ways of thinking through philosophies of education. It engages works of diverse theorists and philosophers, aiming to activate education via aesthetic encounters.",
      link: "https://www.routledge.com/Activating-Aesthetics/Grierson/p/book/9781138096226"
    },
    {
      title: "Transformations: Art and the City",
      year: 2017,
      editors: "Elizabeth M. Grierson",
      publisher: "Intellect Books, Bristol",
      summary: "Transformations explores the interactions between people and urban surroundings through site-specific art and creative practices. The book investigates the politics and democratization of space, examining art, education, justice, and the role of the citizen in the city.",
      link: "http://press.uchicago.edu/ucp/books/book/distributed/T/bo26237951.html"
    },
    {
      title: "De-Signing Design: Cartographies of Theory and Practice",
      year: 2015,
      editors: "Elizabeth Grierson, Harriet Edquist, Hélène Frichot",
      publisher: "Lexington Books, Rowman & Littlefield",
      summary: "De-Signing Design explores the terrain between theory and practice in design and art. The book presents diverse approaches from leading scholars, establishing navigational directions for reconsidering design through practical, theoretical, and philosophical lenses.",
      link: "https://rowman.com/ISBN/9780739179123/De-signing-Design-Cartographies-of-Theory-and-Practice"
    },
    {
      title: "A Gathering",
      year: 2015,
      author: "Nicholas Lyon Gresson",
      publisher: "Australian Scholarly Publishing, Melbourne",
      summary: "This collection brings together 15 of Gresson's most recent poems, four vignettes, and two short reflections on the poetic after more than 55 years of writing.",
      link: "http://www.scholarly.info/book/442/"
    },
    {
      title: "Re-Imagining the City: Art, Globalization and Urban Spaces",
      year: 2013,
      editors: "Elizabeth Grierson, Kristen Sharp",
      publisher: "Intellect UK",
      summary: "Re-Imagining the City examines how contemporary globalization transforms cultural experience and production in urban spaces. It explores how cultural productions contribute to the reimagining of place and identity through events, artifacts, and attitudes.",
      link: "http://www.intellectbooks.co.uk/books/view-Book,id=4983/"
    },
    {
      title: "Cyberbullying, Creativity and Duty of Care in Educational Contexts",
      year: 2016,
      author: "E.M. Grierson",
      publisher: "ANZELA Australia NZ Education & Law Association",
      summary: "Paper at Compliance Creativity and Culture: Balancing regulatory demands and regulatory values, 25th Annual Conference of ANZELA, Auckland, NZ.",
      link: "http://www.lawyerseducation.co.nz/site/nzlaw/files/ANZELA%202016%20Conference%20papers/4.%20Grierson.pdf"
    },
    {
      title: "Evidence Seen and Unseen: A Question of Balance",
      year: 2016,
      authors: "E.M. Grierson, N.L. Gresson",
      publisher: "ANZELA Australia NZ Education & Law Association",
      summary: "Paper at Compliance Creativity and Culture: Balancing regulatory demands and regulatory values, 25th Annual Conference ANZELA, Auckland, NZ.",
      link: "http://www.lawyerseducation.co.nz/site/nzlaw/files/ANZELA%202016%20Conference%20papers/16.%20Grierson%20and%20Gresson.pdf"
    }
  ];
  
  const articles = [
    {
      title: "Calling for Change: A Feminist Approach to Women in Art, Politics, Philosophy and Education",
      year: 2018,
      author: "Elizabeth Mary Grierson",
      journal: "Educational Philosophy and Theory",
      publishedOnline: "25 Jun 2018",
      summary: "This article provides a revisionist analysis of female cultural production, examining textual and political strategies in the recording of history and the 'othering' of women through dominant cultural discourses. It explores feminist politics of interrogation on cultural change for women and the challenges in the context of neoliberalism.",
      link: "https://www.tandfonline.com/doi/full/10.1080/00131857.2018.1451234"
    },
    {
      title: "Is Peer Review in Academic Publishing Still Working?",
      year: 2018,
      authors: ["Liz Jackson, Michael A. Peters, Leon Benade, Nesta Devine, Sonja Arndt, Daniella Forster, Andrew Gibbons, Elizabeth Grierson, Petar Jandrić, George Lazaroiu, Kirsten Locke, Ramona Mihaila, Georgina Stewart, Marek Tesar, Peter Roberts, Jānis (John) Ozoliņš"],
      journal: "Open Review of Educational Research",
      volume: 5,
      issue: 1,
      publishedOnline: "31 May 2018",
      summary: "This paper examines the past and future of peer review in academic publishing, exploring major historical and contemporary issues around identity, diversity, anonymity, and the review process, and the related power of editors versus reviewers.",
      link: "https://www.tandfonline.com/doi/full/10.1080/23265507.2018.1451234"
    },
    {
      title: "Ten Theses on the Shift from (Static) Text to (Moving) Image",
      year: 2018,
      authors: ["Michael A. Peters, E. Jayne White, Elizabeth Grierson, Georgina Stewart, Georgina Stewart, Nesta Devine, Janita Craw, Andrew Gibbons, Petar Jandrić, Michael A. Peters, Rene Novak, E. Jayne White, Richard Heraud & K. Locke"],
      journal: "Open Review of Educational Research",
      volume: 5,
      issue: 1,
      publishedOnline: "08 May 2018",
      summary: "This paper examines the capacity of the image to 'move' in an educational sense and the additional insights brought forth by moving technologies, such as video and virtual reality, in social media.",
      link: "https://www.tandfonline.com/doi/full/10.1080/23265507.2018.1451234"
    },
    {
      title: "Refusal of Othering in the Life of Images",
      year: 2018,
      author: "Elizabeth Grierson",
      summary: "This reflection on the image articulates a theory of the image in light of the politics of the image in cyberspace networks and social media sites.",
      link: "https://www.tandfonline.com/doi/full/10.1080/23265507.2018.1451234"
    },
    {
      title: "Antipodean Theory for Educational Research",
      year: 2017,
      authors: ["Georgina Stewart, Sonja Arndt, Tina Besley, Nesta Devine, Daniella J Forster, Andrew Gibbons, Elizabeth Grierson, Liz Jackson, Peter Jandric, Kirsten Locke, Michael A Peters, Marek Tesar"],
      journal: "Open Review of Educational Research",
      volume: 4,
      issue: 1,
      publishedOnline: "2017",
      summary: "This collaborative article examines educational research from an Antipodean perspective.",
      link: "https://www.tandfonline.com/doi/full/10.1080/23265507.2017.1337555"
    },
    {
      title: "Re-imagining Learning through Art as Experience: An Aesthetic Approach to Education for Life",
      year: 2017,
      author: "Elizabeth M. Grierson",
      journal: "Educational Philosophy and Theory",
      publishedOnline: "2 Feb 2017",
      summary: "This paper investigates re-imagining learning through aesthetic experience with reference to John Dewey’s Art as Experience (1934).",
      link: "https://www.tandfonline.com/eprint/vg3Ff82xGAUjxcBy9yCt/full"
    },
    {
      title: "Modern Learning Environments: Introducing Guest Editors",
      year: 2017,
      author: "Elizabeth M. Grierson",
      journal: "Educational Philosophy and Theory",
      publishedOnline: "18 Apr 2017",
      summary: "This editorial introduces guest editors for the issue on modern learning environments.",
      link: "https://www.tandfonline.com/doi/full/10.1080/00131857.2017.1337555"
    },
    {
      title: "Editorial: Of Incalculable Worth",
      year: 2017,
      author: "Elizabeth M. Grierson",
      journal: "Educational Philosophy and Theory",
      publishedOnline: "07 Dec 2017",
      summary: "This editorial discusses the value of educational philosophy and theory.",
      link: "https://www.tandfonline.com/doi/full/10.1080/00131857.2017.1337555"
    },
    {
      title: "Towards a Philosophy of Academic Publishing",
      year: 2016,
      authors: ["Michael A. Peters, Petar Jandric, Ruth Irwin, Kirsten Locke, Nesta Devine, Richard Heraud, Andrew Gibbons, Tina Besley, Jayne White, Daniella Forster, Liz Jackson, Elizabeth Grierson, Carl Mika, Georgina Stewart, Marek Tesar, Susanne Brighouse, Sonja Arndt, George Lazariou, Ramona Mihaila, Leon Bernade, Catherine Legg, John Ozolins, Peter Roberts"],
      journal: "Educational Philosophy and Theory",
      summary: "This article develops a philosophical approach to significant changes in academic publishing, focusing on the global journal knowledge system and new digital technologies.",
      link: "https://www.tandfonline.com/doi/full/10.1080/00131857.2016.1240987"
    },
    {
      title: "Activating the Creative Arts and Technology for a Global Digital Economy",
      year: 2016,
      author: "Elizabeth M. Grierson",
      journal: "Educational Philosophy and Theory",
      publishedOnline: "2016",
      summary: "This article explores the provocations and challenges for a new philosophy in activating the creative arts and technology for a global digital economy.",
      link: "https://www.tandfonline.com/eprint/rARetg9asgQXtRsQtWD7/full"
    },
  ]
  
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function Publications() {
  const [activeTab, setActiveTab] = useState('articles');

  // Render function for articles
  const renderArticles = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 gap-8"
    >
      {articles.map((article, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-garamond text-navy mb-3">{article.title}</h3>
          <p className="text-navy/60 mb-4">{article.year}</p>
          <p className="text-navy/80 mb-4">{article.summary}</p>
          {article.link && (
            <a 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark transition-colors"
            >
              Read More →
            </a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );

  // Render function for conference papers
  const renderConferences = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 gap-8"
    >
      {conferencePapers.map((paper, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-garamond text-navy mb-3">{paper.title}</h3>
          <p className="text-navy/60 mb-4">{paper.year}</p>
          <p className="text-navy/80">{paper.summary}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render function for research projects
  const renderResearch = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 gap-8"
    >
      {researchProjects.map((project, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-garamond text-navy mb-3">{project.title}</h3>
          <p className="text-navy/80">{project.summary}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render function for invited speaker engagements
  const renderInvitedSpeaker = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 gap-8"
    >
      {invitedSpeakerEngagements.map((engagement, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-garamond text-navy mb-3">{engagement.title}</h3>
          <p className="text-navy/60 mb-4">{engagement.year}</p>
          <p className="text-navy/80">{engagement.summary}</p>
        </motion.div>
      ))}
    </motion.div>
  );
  
  
  const renderBooks = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8"
    >
      {books.map((book, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-garamond text-navy mb-3">{book.title}</h3>
          <p className="text-navy/60 mb-4">{book.year}</p>
          <p className="text-navy/80">{book.summary}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-garamond mb-6"
          >
            Publications & Research
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Legal research, opinions, submissions, articles, publications, and conference papers across various fields of law and education.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 justify-center">
            {['articles', 'conferences', 'research', 'books', 'invited'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors duration-300 text-sm md:text-base
                  ${activeTab === tab 
                    ? 'bg-navy text-gold' 
                    : 'bg-slate-100 text-navy hover:bg-slate-200'}`}
              >
                {tab === 'conferences' ? 'Conference Papers' : 
                 tab === 'invited' ? 'Invited Speaker' : 
                 tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === 'articles' && renderArticles()}
          {activeTab === 'conferences' && renderConferences()}
          {activeTab === 'research' && renderResearch()}
          {activeTab === 'books' && renderBooks()}
          {activeTab === 'invited' && renderInvitedSpeaker()}
        </div>
      </section>
    </main>
  );
}
