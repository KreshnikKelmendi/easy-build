import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: {
          //Navbar
          "Home": "Startseite",
          "About": "Über uns",
          "Services": "Service",
          "Projects": "Projekte",
          "Contact": "Kontakt",
          "firstBanner": "Wo Innovation auf Einfachheit trifft",
          "secondBanner": "Wir spezialisieren uns auf leichte Bauweise-Lösungen, die den Bauprozess neu definieren. Unser innovativer Ansatz konzentriert sich auf vorgefertigte Konstruktionen und nutzt fortschrittliche Holzstrukturen und Fertigelemente. Mit unserer Expertise gewährleisten wir Effizienz, Nachhaltigkeit und Qualität in jedem Projekt, das wir durchführen.",
          "firstButton": "Projekte ansehen",
          "secondButton": "Kontaktieren Sie uns",
          "quality.innovation_and_quality": "Innovation und Qualität",
          "quality.efficiency_and_sustainability": "Effizienz und Nachhaltigkeit",
          "quality.highly_professional_staff": "Hochprofessionelles Personal",
          "firstCount": "Jahre Erfahrung",
          "secondCount": "Abgeschlossene Projekte",
          "services": "DIENSTLEISTUNGEN",
          "our_services": "Unsere Dienstleistungen",
          "serviceDescription": "Wir bieten eine Reihe von Dienstleistungen an, die auf die unterschiedlichen Bedürfnisse unserer Kunden zugeschnitten sind:",
          "title_wooden_frame_construction": "Holzrahmenbau",
          "title_cross_laminated_timber": "Kreuzlagenholz (CLT)",
          "title_modular_construction": "Modularer Bau",

          "aboutUs": "ÜBER UNS",
          "aboutUsDescription": "Entdecken Sie die Zukunft des Bauens mit uns",
          "firstDescription": "Wir sind engagiert, die Bauindustrie mit unserem einzigartigen Fokus auf leichte Bauweisen zu revolutionieren. Unser Name spiegelt unsere Mission wider: den Bau durch innovative Vorfertigungstechniken zu vereinfachen.",
          "secondDescription": "Wir verwenden Holz als Hauptbaumaterial und bieten nachhaltige und umweltfreundliche Lösungen an",
          "readMore": "Mehr erfahren",

          "ourProject": "Unsere Projekte",
          "materials_that_we_use": "Materialien, die wir verwenden",
          "second_materials_that_we_use": "Als Monogramm der Initialen des Unternehmens gestaltet, fügt es sich nahtlos in die Struktur ein",
          "wood_kvh": "Kvh Holz",
          "wood_clt": "CLT",
          "wood_laminated_beams": "Laminierte Balken",
          "wood_rockwool": "Steinwolle",
          "wood_fiber_wood": "Holzfaserplatten",
          "wood_osb": "OSB",
          "wood_plywood": "Sperrholz",

          "step_by_step": "Schritt für Schritt",
          "step_by_step_description": "Von Wohnhäusern über Gewerbegebäude bis hin zu Großprojekten zeigen unsere Projekte die Vielseitigkeit und Effizienz des leichten Bauens.",
          "contactBanner": "Bereit, loszulegen?",
          "second_contactBanner": "Sprechen Sie noch heute mit uns",
          "get_started": "Loslegen",


          // about us page
          "secondBannerAbout": "Wir sind bestrebt, die Bauindustrie mit unserem einzigartigen Fokus auf leichte Baumethoden zu revolutionieren. Unser Name spiegelt unsere Mission wider: den Bau durch innovative Vorfertigungstechniken zu vereinfachen. Wir sind Pioniere in der Verwendung von Holz als Hauptbaumaterial und bieten nachhaltige und umweltfreundliche Lösungen an.",
          "mission_firstDescription": "Unsere Mission ist es, die Bauindustrie durch Förderung nachhaltiger und innovativer Praktiken zu transformieren. Durch kontinuierliche Verbesserung unserer Technologien und Dienstleistungen streben wir danach, Bauprojekte zu liefern, die nicht nur die Erwartungen unserer Kunden erfüllen, sondern übertreffen.",
          "our_factory_operates": "Unsere Fabrik arbeitet",
          "three_core_elements": "mit drei Kernelementen",
          "wooden_frame_construction_desc": "Durch die Verwendung vorgefertigter Paneele optimieren wir den Bauprozess, reduzieren Zeit und Abfall und gewährleisten gleichzeitig hochwertige Strukturen.",
          "clt_construction_desc": "Diese Methode bietet überlegene Stärke und Haltbarkeit, ideal für die Schaffung robuster Gebäude mit einer natürlichen Ästhetik.",
          "large_wooden_beams_preparation_desc": "Perfekt für den Bau großer Spannweiten wie Hallen, Turnhallen und andere weitläufige Strukturen bieten unsere speziell vorbereiteten Balken unvergleichliche Vielseitigkeit und Unterstützung.",
          "ourTeam": "Unser Team",
          "firstDescriptionTeam": "Unser Team bei EasyBuild wird von einer Leidenschaft für Innovation angetrieben und sucht ständig nach neuen Wegen, um die Bauweise von Strukturen zu verbessern und zu verfeinern.",
          "secondDescriptionTeam": "Durch unser Engagement für fortschrittliche Vorfertigungstechniken vereinfachen wir nicht nur den Bauprozess, sondern heben auch die Standards in Bezug auf Qualität und Umweltverantwortung an.",

          "second_services_banner": "Wir spezialisieren uns auf Leichtbau-Lösungen, die den Bauprozess neu definieren. Unser innovativer Ansatz konzentriert sich auf vorgefertigte Konstruktionen, bei denen fortschrittliche Holzstrukturen und fertige Elemente zum Einsatz kommen.",

          //services page
          "second_services_banner2": "Wir bieten ein breites Spektrum an Baudienstleistungen, die auf die unterschiedlichen Bedürfnisse unserer Kunden zugeschnitten sind. Jedes Angebot ist darauf ausgelegt, die höchsten Standards in Bezug auf Nachhaltigkeit und Leistung zu erfüllen und zuverlässige sowie langlebige Lösungen für den modernen Bau anzubieten.",
          "wooden_frame_construction": "Holzrahmenbau (Paneelsystem)",
          "wooden_frame_construction_desc_1": "Unser Holzrahmenbausystem nutzt die Effizienz und Präzision vorgefertigter Paneele. Der Einsatz von Holzrahmenbau verkürzt nicht nur die Bauzeit, sondern minimiert auch Materialabfall, was es zu einer umweltfreundlichen Option macht.",
          "wooden_frame_construction_desc_2": "Darüber hinaus bietet dieses System Flexibilität im Design, sodass verschiedene architektonische Stile möglich sind, während die strukturelle Integrität und thermische Effizienz erhalten bleiben.",
          "view_more": "Mehr anzeigen",
          "view_less": "Weniger anzeigen",
          "how_we_build": "Wie wir bauen",
          "step_by_step_desc": "Wir wissen, dass der Bau eines Hauses eine der wichtigsten Entscheidungen in Ihrem Leben sein kann. Um das Gesamtbild der Zusammenarbeit mit Unity am besten zu verstehen, lesen Sie den Prozess „Schritt für Schritt“ durch.",
          "planning": "1. Planung",
          "construction": "2. Bau",
          "completion": "3. Fertigstellung",
          "Kreuzverleimter Holzbau (CLT)": "Kreuzverleimter Holzbau (CLT)",
          "Kreuzverleimter Holzbau_desc1": "Für Projekte, die zusätzliche Stärke und Haltbarkeit erfordern, sind unsere CLT-Lösungen ideal. CLT eignet sich besonders gut für mehrstöckige Gebäude und bietet eine nachhaltige Alternative zu traditionellen Materialien wie Stahl und Beton.",
          "Kreuzverleimter Holzbau_desc2": "CLT-Bau ist äußerst vielseitig und ermöglicht Architekten, kreative Designs zu erkunden, während die Robustheit für leistungsstarke Gebäude erhalten bleibt.",
          "modular_construction": "Modularbau",
          "modular_construction_desc1": "Die Zukunft des schnellen Bauens! Unsere innovative Rundum-Lösung kann ein voll funktionsfähiges Zuhause in nur einem Tag errichten. Verabschieden Sie sich von langen Bauprozessen und begrüßen Sie sofort nutzbare Wohnräume. Erleben Sie den Komfort und die Effizienz der Lösungen von Aster Domo – wo Geschwindigkeit und Qualität im Wohnbau aufeinandertreffen.",
          "modular_construction_desc2": "Nachhaltiges und erschwingliches Wohnen. Entdecken Sie großzügige Wohnräume mit Grundrissen von ein bis vier Schlafzimmern. Unsere Häuser werden mit Paneelen gebaut, die zu 60 % fertiggestellt sind, oder mit Modulen, die zu 98 % fertiggestellt sind, ganz nach Ihren Wünschen. Wählen Sie aus drei einzigartigen Fassaden, die alle den umweltfreundlichen KfW 40 Energiestandard erfüllen. Es ist Zeit, Ihren Traumwohnraum mit unserem Modulsystem zu schaffen – Ihre Vision, Ihr Zuhause, Ihr Lebensstil.",

          "projects_desc1": "Von Wohnhäusern über Gewerbegebäude bis hin zu großflächigen Anlagen zeigen unsere Projekte die Vielseitigkeit und Effizienz der leichten Bauweise. Wir sind stolz darauf, herausragende Ergebnisse in verschiedenen Bereichen zu liefern, darunter Wohn-, Gewerbe- und institutionelle Projekte. Jedes Projekt unterstreicht unser Engagement für Qualität, Nachhaltigkeit und Innovation. Bleiben Sie dran, während wir diesen Abschnitt mit unseren neuesten Errungenschaften und laufenden Projekten aktualisieren.",
          "get_in_touch": "Kontaktieren",
          "contact_desc1": "Wir würden uns freuen, von Ihnen zu hören! Egal, ob Sie eine Frage haben, weitere Informationen benötigen oder bereit sind, Ihr nächstes Bauprojekt zu starten – unser Team steht Ihnen zur Verfügung, um zu helfen."

        }
      },
      en: {
        //Navbar
        translation: {
         "Home": "Home",
         "About": "About",
         "Services": "Services",
         "Projects": "Projects",
         "Contact": "Contact",
         "firstBanner": "Where Innovation Meets Simplicity",
         "secondBanner": "We specialize in lightweight construction solutions that redefine the building process. Our innovative approach focuses on prefabricated constructions, making use of advanced wood structures and ready-made elements. With our expertise, we ensure efficiency, sustainability, and quality in every project we undertake.",
         "firstButton": "View Projects",
         "secondButton": "Contact Us",
         "quality.innovation_and_quality": "Innovation and Quality",
         "quality.efficiency_and_sustainability": "Efficiency and Sustainability",
         "quality.highly_professional_staff": "Highly professional Staff",
         "firstCount": " Years of Experience",
         "secondCount": "Project Completed",
         "services": "SERVICES",
         "our_services": "Our Services",
         "serviceDescription": "We offer a range of services tailored to meet the diverse needs of our clients:",
         "title_wooden_frame_construction": "Wooden Frame Construction",
         "title_cross_laminated_timber": "Cross-Laminated Timber (CLT)",
         "title_modular_construction": "Modular Construction",

         "aboutUs": "About Us",
         "aboutUsDescription": "Discover the future of construction with us",
         "firstDescription": "We are dedicated to revolutionizing the construction industry with our unique focus on lightweight building methods. Our name reflects our mission: to simplify construction through innovative prefabrication techniques.",
         "secondDescription": "We use wood as the primary construction material, offering sustainable and eco-friendly solutions.",
         "readMore": "Read More",

         "ourProject": "Our Project",
         "materials_that_we_use": "Materials that we use",
         "second_materials_that_we_use": "Crafted as a monogram of the company's initials, it seamlessly integrates into the structure",
         "wood_kvh": "Kvh wood",
         "wood_clt": "CLT",
         "wood_laminated_beams": "Laminated Beams",
         "wood_rockwool": "Rockwool",
         "wood_fiber_wood": "Fiber wood",
         "wood_osb": "OSB",
         "wood_plywood": "Plywood",

         "step_by_step": "Step by step",
         "step_by_step_description": "From residential homes to commercial buildings and large-scale facilities, our projects showcase the versatility and efficiency of lightweight construction.",
         "contactBanner": "Ready to get started?",
         "second_contactBanner": "Talk to us today",
         "get_started": "Get Started",

         "secondBannerAbout": "We are dedicated to revolutionizing the construction industry with our unique focus on lightweight building methods. Our name reflects our mission: to simplify construction through innovative prefabrication techniques. We are pioneers in using wood as the primary construction material, offering sustainable and eco-friendly solutions.",
         "mission_firstDescription": "Our mission is to transform the construction industry by promoting sustainable and innovative practices. Through continuous improvement of our technologies and services, we aim to deliver constructions that not only meet but exceed our clients' expectations.",
         "our_factory_operates": "Our factory operates",
         "three_core_elements": "with three core elements",
         "wooden_frame_construction_desc": "Utilizing pre-built panels, we streamline the building process, reducing time and waste while ensuring high-quality structures.",
         "clt_construction_desc": "This method provides superior strength and durability, ideal for creating robust buildings with a natural aesthetic.",
         "large_wooden_beams_preparation_desc": "Perfect for constructing large spans such as halls, gyms, and other expansive structures, our specially prepared beams offer unmatched versatility and support.",
         "ourTeam": "Our Team",
         "firstDescriptionTeam": "Our team at EasyBuild is driven by a passion for innovation, constantly seeking new ways to improve and refine how structures are built.",
         "secondDescriptionTeam": "Through our commitment to advanced prefabrication techniques, we not only simplify the construction process but also elevate standards in quality and environmental responsibility.",

         "second_services_banner": "We specialize in lightweight construction solutions that redefine the building process. Our innovative approach focuses on prefabricated constructions, making use of advanced wood structures and ready-made elements.",

         //services page
         "second_services_banner2": "We provide a broad range of construction services designed to meet diverse client needs.Each service is designed to meet the highest standards of sustainability and performance, providing reliable and durable solutions for modern construction.",
         "wooden_frame_construction": "Wooden Frame Construction (Panel System)",
         "wooden_frame_construction_desc_1": "Our Wooden Frame Construction system leverages the efficiency and precision of pre-built panels. The use of wooden frame construction not only speeds up construction time but also minimizes material waste, making it an environmentally friendly option.",
         "wooden_frame_construction_desc_2": "Additionally, this system offers flexibility in design, allowing for various architectural styles while maintaining structural integrity and thermal efficiency.",
         "view_more": "View More",
         "view_less": "View Less",
         "how_we_build": "How we build",
         "step_by_step_desc": "We know building a home can be one of the most important decisions you make. To best understand the full picture of working with Unity, read through the process “step by step”.",
         "planning": "1. Planning",
         "construction": "2. Construction",
         "completion": "3. Completion",
         "Kreuzverleimter Holzbau (CLT)": "Cross-Laminated Timber (CLT) Construction",
         "Kreuzverleimter Holzbau_desc1": "For projects requiring extra strength and durability, our CLT solutions are ideal. CLT is particularly suited for multi-story buildings, offering a sustainable alternative to traditional materials like steel and concrete.",
         "Kreuzverleimter Holzbau_desc2": "CLT construction is highly versatile, enabling architects to explore creative designs while maintaining the robustness required for high-performance buildings",
         "modular_construction": "Modular Construction",
         "modular_construction_desc1": "The Future of Fast Construction! Our innovative turnkey solution can build a fully functional home in just one day. Say goodbye to lengthy construction processes and hello to instant living spaces. Experience the comfort and efficiency of Aster Domo's solutions—where speed and quality meet in housing.",
         "modular_construction_desc2": "Sustainable and Affordable Living. Explore spacious living with floor plans ranging from one to four bedrooms. Our homes are constructed with panels that are 60% complete or modules that are 98% complete, tailored to your preferences. Choose from three unique facades, all meeting the eco-friendly KfW 40 energy standard. It's time to create your dream living space with our modular system—your vision, your home, your lifestyle.",

         "projects_desc1": "From residential homes to commercial buildings and large-scale facilities, our projects showcase the versatility and efficiency of lightweight construction. We take pride in delivering exceptional results across various sectors, including residential, commercial, and institutional projects. Each project highlights our commitment to quality, sustainability, and innovation. Stay tuned as we update this section with our latest achievements and ongoing projects.",
         "get_in_touch": "Get in touch",
         "contact_desc1": "We'd love to hear from you! Whether you have a question, need more information, or are ready to start your next construction project, our team is here to assist."


         
        }
      },
      al: {
        translation: {
        //Navbar
          "Home": "Ballina",
          "About": "Rreth Nesh",
          "Services": "Shërbimet",
          "Projects": "Projektet",
          "Contact": "Kontakti",
          "firstBanner": "Ku inovacioni takohet me thjeshtësinë",
          "secondBanner": "Ne specializohemi në zgjidhje ndërtimore të lehta që riformulojnë procesin e ndërtimit. Qasja jonë inovative përqendrohet në ndërtimet e parafabrikuara, duke përdorur struktura të avancuara druri dhe elemente të gatshme. Me ekspertizën tonë, ne sigurojmë efikasitet, qëndrueshmëri dhe cilësi në çdo projekt që ndërmarrim",
          "firstButton": "Shiko Projektet",
          "secondButton": "Na kontaktoni",
          "quality.innovation_and_quality": "Inovacion dhe Cilësi",
          "quality.efficiency_and_sustainability": "Efikasitet dhe Qëndrueshmëri",
          "quality.highly_professional_staff": "Staf Jashtëzakonisht Profesional",
          "firstCount": "Vite eksperiencë",
          "secondCount": "Projekte të Përfunduara",
          "services": "SHËRBIMET",
          "our_services": "Shërbimet tona",
          "serviceDescription": "Ne ofrojmë një gamë shërbimesh të përshtatura për të përmbushur nevojat e ndryshme të klientëve tanë",
          "title_wooden_frame_construction": "Ndërtimi me Kornizë Druri",
          "title_cross_laminated_timber": "Ndërtimi me Dru të Laminuar (CLT)",
          "title_modular_construction": "Ndërtimi Modular",

          "aboutUs": "RRETH NESH",
          "aboutUsDescription": "Zbuloni të ardhmen e ndërtimit me ne",
          "firstDescription": "Ne jemi të përkushtuar për të revolucionarizuar industrinë e ndërtimit me fokusin tonë unik në metodat e ndërtimit të lehta. Emri ynë pasqyron misionin tonë: të thjeshtojmë ndërtimin përmes teknikave inovative të parafabrikimit.",
          "secondDescription": "Ne përdorim drurin si materialin kryesor të ndërtimit, duke ofruar zgjidhje të qëndrueshme dhe miqësore për mjedisin.",
          "readMore": "Lexoni më shumë",

          "ourProject": "Projektet tona",

          "materials_that_we_use": "Materialet të cilat i përdorim",
          "second_materials_that_we_use": "Të ndërtuara si një monogram i inicialeve të kompanisë, këto integrohen në mënyrë të natyrshme në strukturë.",
          "wood_kvh": "Druri KVH",
          "wood_clt": "CLT",
          "wood_laminated_beams": "Dru i laminuar",
          "wood_rockwool": "Lesh guri",
          "wood_fiber_wood": "Fiber Druri",
          "wood_osb": "OSB",
          "wood_plywood": "Plywood",
          "step_by_step": "Hap pas Hapi",
          "step_by_step_description": "Nga shtëpitë rezidenciale te ndërtesat komerciale dhe objektet me përmasa të mëdha, projektet tona tregojnë shumëllojshmërinë dhe efikasitetin e ndërtimit të lehtë.",
          "contactBanner": "Gati për të filluar?",
          "second_contactBanner": "Na kontaktoni",
          "get_started": "Filloni",

          "secondBannerAbout": "Ne jemi të përkushtuar për të revolucionarizuar industrinë e ndërtimit me fokusin tonë unik në metodat e ndërtimit të lehta. Emri ynë pasqyron misionin tonë: të thjeshtojmë ndërtimin përmes teknikave inovative të parafabrikimit.",
          "mission_firstDescription": "Misioni ynë është të transformojmë industrinë e ndërtimit duke promovuar praktika të qëndrueshme dhe inovative. Përmes përmirësimit të vazhdueshëm të teknologjive dhe shërbimeve tona, synojmë të ofrojmë ndërtime që jo vetëm përmbushin, por edhe tejkalojnë pritjet e klientëve tanë.",
          "our_factory_operates": "Fabrika jonë operon",
          "three_core_elements": "me tre elementët kryesorë",
          "wooden_frame_construction_desc": "Duke përdorur panele të parafabrikuara, ne e thjeshtojmë procesin e ndërtimit, duke reduktuar kohën dhe mbetjet, ndërsa sigurojmë struktura të cilësisë së lartë.",
          "clt_construction_desc": "Kjo metodë ofron forcë dhe qëndrueshmëri të jashtëzakonshme, ideale për krijimin e ndërtesave të fuqishme me një estetikë natyrale.",
          "large_wooden_beams_preparation_desc": "E përsosur për ndërtimin e hapësirave të mëdha si sallat, palestrat, dhe struktura të tjera të gjera,  trarët tona të përgatitura veçanërisht ofrojnë shkathtësi dhe mbështetje të pa krahasueshme.",
          "ourTeam": "Ekipi ynë",
          "firstDescriptionTeam": "Ekipi ynë në EasyBuild udhëhiqet nga një pasion për inovacionin, duke kërkuar vazhdimisht mënyra të reja për të përmirësuar dhe rafinuar mënyrën se si ndërtohen strukturat.",
          "secondDescriptionTeam": "Përmes angazhimit tonë ndaj teknikave të avancuara të parafabrikimit, ne jo vetëm që thjeshtojmë procesin e ndërtimit, por gjithashtu ngrisim standardet e cilësisë dhe përgjegjësisë mjedisore.",
          "second_services_banner2": "Ne ofrojmë një gamë të gjerë shërbimesh ndërtimi të dizajnuara për të përmbushur nevojat e ndryshme të klientëve. Çdo shërbim është krijuar për të përmbushur standardet më të larta të qëndrueshmërisë dhe performancës, duke ofruar zgjidhje të besueshme dhe të qëndrueshme për ndërtimin modern.",
          "wooden_frame_construction": "Ndërtimi me Kornizë Druri (Sistemi i Paneleve)",
          "wooden_frame_construction_desc_1": "Sistemi ynë i ndërtimit me kornizë druri shfrytëzon efikasitetin dhe saktësinë e paneleve të parafabrikuara. Përdorimi i kornizës së drurit jo vetëm që shpejton kohën e ndërtimit, por gjithashtu minimizon mbetjet e materialeve, duke e bërë atë një opsion të pershtatshëm për mjedisin.",
          "wooden_frame_construction_desc_2": "Përveç kësaj, ky sistem ofron fleksibilitet në dizajn, duke lejuar stile të ndryshme arkitekturore, ndërsa ruan integritetin strukturor dhe efikasitetin termik.",
          "view_more": "Shfaq më shumë",
          "view_less": "Shfaq më pak",
          "how_we_build": "Si ndërtojmë",
          "step_by_step_desc": "Ne e dimë që ndërtimi i një shtëpie mund të jetë një nga vendimet më të rëndësishme që merrni. Për të kuptuar më mirë tërësinë e bashkëpunimit me ne, lexoni procesin “hapi pas hapi”.",
          "planning": "1. Planifikimi",
          "construction": "2. Ndërtimi",
          "completion": "3. Përfundimi",
          "Kreuzverleimter Holzbau (CLT)": "Ndërtimi me Dru (CLT)",
          "Kreuzverleimter Holzbau_desc1": "Për projekte që kërkojnë forcë dhe qëndrueshmëri të lartë, zgjidhjet tona CLT janë ideale. CLT është veçanërisht i përshtatshëm për ndërtesa me shumë kate, duke ofruar një alternativë të qëndrueshme ndaj materialeve tradicionale si çeliku dhe betoni.",
          "Kreuzverleimter Holzbau_desc2": "Ndërtimi me CLT është jashtëzakonisht i gjithanshëm, duke u mundësuar arkitektëve të eksplorojnë dizajne kreative ndërsa ruajnë fuqinë dhe qëndrueshmërinë e nevojshme për ndërtesa me performancë të lartë.",
          "modular_construction": "Ndërtimi Modular",
          "modular_construction_desc1": "E Ardhmja e Ndërtimit të Shpejtë! Zgjidhja jonë inovative `turnkey` mund të ndërtojë një shtëpi plotësisht funksionale brenda vetëm një dite. Thuaj lamtumirë proceseve të gjata ndërtimi dhe fillo me hapësirat e banimit të menjëhershme. Përjetoni komoditetin dhe efikasitetin e zgjidhjeve të Aster Domo—ku shpejtësia dhe cilësia bashkohen në ndërtimin e shtëpive.",
          "modular_construction_desc2": "Jetë e Qëndrueshme dhe e Përballueshme. Eksploroni hapësira të bollshme banimi me plane kati që variojnë nga një deri në katër dhoma gjumi. Shtëpitë tona janë ndërtuar me panele që janë 60% të përfunduara ose me module që janë 98% të përfunduara, të përshtatura sipas preferencave tuaja. Zgjidhni nga tre fasada unike, të gjitha duke përmbushur standardin eko-miqësor të energjisë KfW 40. Është koha të krijoni hapësirën tuaj të ëndrrave me sistemin tonë modular—vizioni juaj, shtëpia juaj, stili juaj i jetesës.",
          "projects_desc1": "Nga shtëpitë rezidenciale te ndërtimet komerciale dhe objektet e mëdha, projektet tona tregojnë versatilitetin dhe efikasitetin e ndërtimit të lehtë. Jemi krenarë që ofrojmë rezultate të jashtëzakonshme në sektore të ndryshme, duke përfshirë projektet rezidenciale, komerciale dhe institucionale. Çdo projekt thekson angazhimin tonë ndaj cilësisë, qëndrueshmërisë dhe inovacionit. Qëndroni të informuar ndërsa përditësojmë këtë seksion me arritjet tona më të fundit dhe projektet në zhvillim.",
          "get_in_touch": "Na kontaktoni",
          "contact_desc1": "Na pëlqen të dëgjojmë nga ju! Nëse keni ndonjë pyetje, keni nevojë për më shumë informacion, ose jeni gati të filloni projektin tuaj të ardhshëm të ndërtimit, ekipi ynë është këtu për t'ju ndihmuar."








        }
      }
    },
    lng: 'de', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
