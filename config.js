var config = {
  logo: "https://github.com/mauebrm/silencio/blob/main/ELSILENCIO_25VERDE.png?raw=true",
  style: 'mapbox://styles/mauberm/cmdaz9kbb00s301sa9fp379s6',
  accessToken: "pk.eyJ1IjoibWF1YmVybSIsImEiOiJjbDkwandiMXAwdDJkM3ZvNjhyNGtyYmtvIn0.f8f_PAURro1hU-sh_xnAuA",
  showMarkers: false,
  theme: "ama",
  alignment: "left",
  title: "-",
  subtitle: "",
  byline: "",
  footer: 'WEBMAP - Developed by <div style="text-align:center; margin-top:10px;"><img src="https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/rect4-6-0-1.png?v=1750090350355" alt="Logo AMA" style="height:30px;"></div>',

  chapters: [
    {
      id: "chap-1",
      title: "MEXICO",
      image: "https://github.com/mauebrm/silencio/blob/main/observation-tower.jpg?raw=true",
      description: "El Silencio Village exists to demonstrate that true luxury lies in presence, not excess.",
      location: {
        center: [-87.45838, 19.94489],
        zoom: 2.3,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "van", opacity: 0 },
        { layer: "yuc", opacity: 0 },
        { layer: "sian", opacity: 0 },
        { layer: "panga", opacity: 0 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-2",
      title: "YUCATAN PENINSULA",
      image: "https://github.com/mauebrm/silencio/blob/main/Screenshot%202025-07-22%20104413.png?raw=true",
      description: "The Yucatán Peninsula is a vast limestone shelf that stretches into the Caribbean, rich in biodiversity and ancient history...",
      location: {
        center: [-87.45838, 19.94489],
        zoom: 4.4,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "yuc", opacity: 0.8 }
      ],
      onChapterExit: [
        { layer: "yuc", opacity: 0 }
      ]
    },
    {
      id: "chap-3",
      title: "SIAN KAAN BIOSHPERE RESERVE",
      image: "https://github.com/mauebrm/silencio/blob/main/sian-kaan-14%20(1).jpg?raw=true",
      description: "Today, it hosts vital ecosystems like the Sian Ka’an Biosphere Reserve...",
      location: {
        center: [-88.15659, 19.01830],
        zoom: 7.60,
        pitch: 14.92,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "sian", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "sian", opacity: 0.2 }
      ]
    },
    {
      id: "chap-4",
      title: "TULUM",
      image: "https://raw.githubusercontent.com/mauebrm/silencio/refs/heads/main/Zona-arqueologica-Tulum-1.webp",
      description: "Tulum marks the edge of the modern world before the wild beauty of the Sian Ka’an Reserve begins...",
      location: {
        center: [-87.52371, 20.18709],
        zoom: 9.49,
        pitch: 14.92,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "tul", opacity: 0.6 }
      ],
      onChapterExit: [
        { layer: "tul", opacity: 0 }
      ]
    },
    {
      id: "chap-5",
      title: "Arrivals: Airport & Train",
      image: "https://raw.githubusercontent.com/mauebrm/silencio/refs/heads/main/tulum-airport.webp",
      description: "The journey into the Yucatán often begins far from the jungle...",
      location: {
        center: [-87.57150, 20.18888],
        zoom: 11.03,
        pitch: 62.42,
        bearing: 78.40,
        duration: 6000
      },
      onChapterEnter: [
        
        { layer: "aero", opacity: 1 }
      ],
      onChapterExit: [
      
        { layer: "aero", opacity: 0 }
      ]
    },
    {
      id: "chap-6.1",
      title: "The Road to the Lagoon",
      image: "https://github.com/mauebrm/silencio/blob/main/caption.jpg?raw=true",
      description: "From the airport, a 20-minute van ride takes you past the edge of Tulum to a system of lagoons...",
      location: {
        center: [-87.62406, 20.13660],
        zoom: 12.10,
        pitch: 62.92,
        bearing: 61.96,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "van", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "van", opacity: 0 }
      ]
    },
    {
      id: "chap-6",
      title: "Crossing the Lagoons",
      image: "https://github.com/mauebrm/silencio/blob/main/Screenshot%202025-07-22%20105127.png?raw=true",
      description: "A small boat waits to take you across a maze of mirror-like lagoons...",
      location: {
        center: [-87.58000, 20.05647],
        zoom: 12.80,
        pitch: 54.92,
        bearing: 23.56,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "panga", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "panga", opacity: 0 }
      ]
    },
    {
      id: "chap-7",
      title: "Arrival by Sea – Over the Reefs to El Silencio",
      image: "https://github.com/mauebrm/silencio/blob/main/Screenshot%202025-07-20%20210748.png?raw=true",
      description: "",
      location: {
        center: [-87.50174, 19.97349],
        zoom: 12.56,
        pitch: 74.43,
        bearing: -72.53,
        duration: 8000
      },
      onChapterEnter: [
        { layer: "o", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "o", opacity: 0 }
      ]
    },
    {
      id: "chap-8",
      title: "EL SILENCIO",
      image: "https://github.com/mauebrm/silencio/blob/main/Screenshot%202025-07-19%20194051.png?raw=true",
      description: "Where experiences converge.",
      location: {
        center: [-87.45838, 19.94489],
        zoom: 16,
        pitch: 44,
        bearing: -76.20,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "EXP", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "EXP", opacity: 0 }
      ]
    },
    {
      id: "chap-9",
      title: "",
      image: "https://github.com/mauebrm/silencio/blob/main/Screenshot%202025-07-19%20164333.png?raw=true",

      description: "",
      location: {
        center: [-87.45838, 19.94489],
        zoom: 17,
        pitch: 50,
        bearing: 120,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-10",
      title: "",
      image: "",
      description: "",
      location: {
        center: [-87.45838, 19.94489],
        zoom: 17.56,
        pitch: 69.50,
        bearing: 102.14,
        duration: 8000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "R1", opacity: 0 }
      ]
    },
    {
      id: "chap-11",
      title: "",
      image: "https://github.com/mauebrm/silencio/blob/main/Screenshot%202025-07-19%20164128.png?raw=true",
      description: "",
      location: {
        center: [-87.45838, 19.94489],
        zoom: 17.71,
        pitch: 63.5,
        bearing: 99.6,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-12",
      title: "",
      image: "https://github.com/mauebrm/silencio/blob/main/Screenshot%202025-07-19%20164432.png?raw=true",
      description: ".",
      location: {
        center: [-87.45838, 19.94489],
        zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-13",
      title: "",
      image: "https://github.com/mauebrm/silencio/blob/main/Screenshot%202025-07-19%20164438.png?raw=true",
      description: "",
      location: {
        center: [-87.45838, 19.94489],
        zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    }
  ]
};
