var config = {
    style: 'mapbox://styles/ctrnslv/ckria6f6s5ema17nhpcra8rss',
    accessToken: 'pk.eyJ1IjoiY3RybnNsdiIsImEiOiJja3Jpd2tkeHgzN3pyMnVwOGpjcHJ1ODhoIn0.JucVmRdpKDMRmSbHVA9wtg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    title: 'SENTINELLE',
    subtitle: 'In viaggio tra le tappe dell\'inchiesta',
    byline: 'By Anna Berti Suman',
    footer: 'August 2021.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Ascolta l\'audio',
            description: '<audio controls> <source src="Video apertura inchiesta con song.mp3" type="audio/mpeg"></audio>',
            location: {
                center: [16.42301,40.60267],
                zoom: 7.99,
                pitch: 45.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
      {
            id: 'first-style-id',
            alignment: 'left',
            hidden: true,
            title: 'Bari',
            image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
            description: 'Cominicia l inchiesta, diretta verso le terre lucane, con lentezza...',
            location: {
                center: [16.86650, 41.12933],
                zoom: 11.29,
                pitch: 45,
                bearing: -0.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
      id: 'second-style-id',
      alignment: 'left',
      hidden: true,
      title: 'Bitetto',
      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
      description: 'Nello zaino, lo stretto indispensabile e un ispirazione, il libro di Alliegro Totem Nero',
      location: {
          center: [16.748832, 41.039937],
          zoom: 13.34,
          pitch: 45,
          bearing: -0.78
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
},
{
      id: 'third-style-id',
      alignment: 'left',
      hidden: true,
      title: 'Cassano delle Murge',
      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
      description: 'Nello zaino, lo stretto indispensabile e un ispirazione, il libro di Alliegro Totem Nero',
      location: {
          center: [16.77018, 40.89033],
          zoom: 13.34,
          pitch: 45,
          bearing: -0.36
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
          id: 'fourth-style-id',
          alignment: 'left',
          hidden: true,
          title: 'Santeramo in Colle',
          image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
          description: 'Durante il cammino, ascolto la canzone composta da un cantautore per l inchiesta, al suon di musica avanzo nella murgia afosa',
          location: {
              center: [16.754282, 40.79573],
              zoom: 13.34,
              pitch: 45,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [],
          onChapterExit: []
        },
        {
              id: 'fifth-style-id',
              alignment: 'left',
              hidden: true,
              title: 'Altamura',
              image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
              description: 'Stridenti contrasti tra un cammino curato e ben segnato, e cumuli di rifiuti che marciscono accanto agli ulivi mi fanno presagire il sapore dell inchiesta',
              location: {
                  center: [16.55238, 40.82762],
                  zoom: 13.34,
                  pitch: 45,
                  bearing: 0
              },
              mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [],
              onChapterExit: []
            },
            {
                  id: 'sixth-style-id',
                  alignment: 'left',
                  hidden: true,
                  title: 'Gravina di Puglia',
                  image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                  description: 'Incontro Mimmo, sentinella lucana che mi accompagnerà nel percorso dell inchiesta',
                  location: {
                      center: [16.417704, 40.816847],
                      zoom: 13.34,
                      pitch: 45,
                      bearing: 0
                  },
                  mapAnimation: 'flyTo',
                  rotateAnimation: false,
                  callback: '',
                  onChapterEnter: [],
                  onChapterExit: []
                },
                {
                      id: 'seventh-style-id',
                      alignment: 'left',
                      hidden: true,
                      title: 'Pisticci-dirupo',
                      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                      description: 'Incontro Nico, insegnante a scuola e sentinella, che mi racconta delle battaglie del Movimento Tutela Val Basento',
                      location: {
                          center: [16.55015, 40.39003],
                          zoom: 18,
                          pitch: 45,
                          bearing: 0
                      },
                      mapAnimation: 'flyTo',
                      rotateAnimation: false,
                      callback: '',
                      onChapterEnter: [],
                      onChapterExit: []
                    },
                    {
                          id: 'seventh-style-id',
                          alignment: 'left',
                          hidden: true,
                          title: 'Pisticci-studio legale',
                          image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                          description: 'Intervisto l Avvocato Di Pisa, che difende le parti civili nel processo Petrolgate',
                          location: {
                              center: [16.55619, 40.39067],
                              zoom: 18,
                              pitch: 45,
                              bearing: 0
                          },
                          mapAnimation: 'flyTo',
                          rotateAnimation: false,
                          callback: '',
                          onChapterEnter: [],
                          onChapterExit: []
                        },
                        {
                              id: 'aa-style-id',
                              alignment: 'left',
                              hidden: true,
                              title: 'Pisticci-chiesa',
                              image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                              description: 'Mi presento alla comunità di Pisticci nella loro Chiesa e ascolto le loro voci e denunce',
                              location: {
                                  center: [16.55847,40.39042],
                                  zoom: 18,
                                  pitch: 45,
                                  bearing: 0
                              },
                              mapAnimation: 'flyTo',
                              rotateAnimation: false,
                              callback: '',
                              onChapterEnter: [],
                              onChapterExit: []
                            },
                            {
                                  id: 'bb-style-id',
                                  alignment: 'left',
                                  hidden: true,
                                  title: 'Viggiano - Direttivo Eni Distretto Meridionale',
                                  image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                  description: 'Intervisto l ing. Lopomo, Responsabile del Distretto Meridionale Eni, insieme al responsabile HSE del sito',
                                  location: {
                                      center: [15.89994, 40.33656],
                                      zoom: 16,
                                      pitch: 45,
                                      bearing: 0
                                  },
                                  mapAnimation: 'flyTo',
                                  rotateAnimation: false,
                                  callback: '',
                                  onChapterEnter: [],
                                  onChapterExit: []
                                },
                                {
                                      id: 'cc-style-id',
                                      alignment: 'left',
                                      hidden: true,
                                      title: 'Viggiano - piazza',
                                      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                      description: 'Mimmo racconta dei contrasti di Viggiano, terra dell arpa e della Madonna Nera, una oasi nel deserto arricchita dalle royalties',
                                      location: {
                                          center: [15.90067,40.342239],
                                          zoom: 15.17,
                                          pitch: 45,
                                          bearing: 0
                                      },
                                      mapAnimation: 'flyTo',
                                      rotateAnimation: false,
                                      callback: '',
                                      onChapterEnter: [],
                                      onChapterExit: []
                                    },
                                    {
                                          id: 'dd-style-id',
                                          alignment: 'left',
                                          hidden: true,
                                          title: 'Viggiano - studio medico',
                                          image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                          description: 'Un dottore sentinella, il Dottor Mele, ci racconta del perchè in Basilicata di petrolio si muore…',
                                          location: {
                                              center: [15.90501,40.33897],
                                              zoom: 15.17,
                                              pitch: 45,
                                              bearing: 0
                                          },
                                          mapAnimation: 'flyTo',
                                          rotateAnimation: false,
                                          callback: '',
                                          onChapterEnter: [],
                                          onChapterExit: []
                                        },
                                        {
                                              id: 'ee-style-id',
                                              alignment: 'left',
                                              hidden: true,
                                              title: 'Viggiano - Santuario della Madonna Nera',
                                              image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                              description: 'La storia del petrolio in Basilicata raccontata in un monologo',
                                              location: {
                                                  center: [15.903673,40.340554],
                                                  zoom: 15.17,
                                                  pitch: 45,
                                                  bearing: 0
                                              },
                                              mapAnimation: 'flyTo',
                                              rotateAnimation: false,
                                              callback: '',
                                              onChapterEnter: [],
                                              onChapterExit: []
                                            },
                                            {
                                                  id: 'ff-style-id',
                                                  alignment: 'left',
                                                  hidden: true,
                                                  title: 'Viggiano - cantro Oli,Eni',
                                                  image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                  description: 'Mimmo racconta dei contrasti di Viggiano, terra dell arpa e della Madonna Nera, una oasi nel deserto arricchita dalle royalties',
                                                  location: {
                                                      center: [15.89819,40.314245],
                                                      zoom: 15.17,
                                                      pitch: 45,
                                                      bearing: 0
                                                  },
                                                  mapAnimation: 'flyTo',
                                                  rotateAnimation: false,
                                                  callback: '',
                                                  onChapterEnter: [],
                                                  onChapterExit: []
                                                },
                                                {
                                                      id: 'gg-style-id',
                                                      alignment: 'left',
                                                      hidden: true,
                                                      title: 'Lago del Pertusillo',
                                                      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                      description: 'Seguo Mimmo sulle sponde del lago del Pertusillo e ascolto il suo racconto sulle morie di pesci',
                                                      location: {
                                                          center: [15.980585, 40.279434],
                                                          zoom: 14.08,
                                                          pitch: 45,
                                                          bearing: 0
                                                      },
                                                      mapAnimation: 'flyTo',
                                                      rotateAnimation: false,
                                                      callback: '',
                                                      onChapterEnter: [],
                                                      onChapterExit: []
                                                    },
                                                    {
                                                          id: 'hh-style-id',
                                                          alignment: 'left',
                                                          hidden: true,
                                                          title: 'Grumento Nova - Località Campestrini',
                                                          image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                          description: 'Intervisto l\' allevatore Signor Miranda e sua madre, che mi raccontano delle conseguenze del petrolio sui loro animali',
                                                          location: {
                                                              center: [15.889972,40.308029],
                                                              zoom: 15.17,
                                                              pitch: 45,
                                                              bearing: 0
                                                          },
                                                          mapAnimation: 'flyTo',
                                                          rotateAnimation: false,
                                                          callback: '',
                                                          onChapterEnter: [],
                                                          onChapterExit: []
                                                        },
                                                        {
                                                              id: 'ii-style-id',
                                                              alignment: 'left',
                                                              hidden: true,
                                                              title: 'Policoro - studio legale',
                                                              image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                              description: 'Intervisto l\' Avvocato Bellizzi e il Dottor Mele, due professionisti sentinella che guidano i cittadini nel dimostrare gli impatti del petrolio',
                                                              location: {
                                                                  center: [16.66295,40.19894],
                                                                  zoom: 15.17,
                                                                  pitch: 45,
                                                                  bearing: 0
                                                              },
                                                              mapAnimation: 'flyTo',
                                                              rotateAnimation: false,
                                                              callback: '',
                                                              onChapterEnter: [],
                                                              onChapterExit: []
                                                            },
                                                            {
                                                                  id: 'll-style-id',
                                                                  alignment: 'left',
                                                                  hidden: true,
                                                                  title: 'Pisticci Scalo - Tecnoparco',
                                                                  image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                  description: 'Visito con Mimmo il Tecnoparco di Pisticci Scalo, una delle fonti dei tormenti degli abitanti della zona',
                                                                  location: {
                                                                      center: [16.557009,40.422888],
                                                                      zoom: 15.17,
                                                                      pitch: 45,
                                                                      bearing: 0
                                                                  },
                                                                  mapAnimation: 'flyTo',
                                                                  rotateAnimation: false,
                                                                  callback: '',
                                                                  onChapterEnter: [],
                                                                  onChapterExit: []
                                                                },
                                                                {
                                                                      id: 'mm-style-id',
                                                                      alignment: 'left',
                                                                      hidden: true,
                                                                      title: 'Pisticci Scalo - chiesa',
                                                                      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                      description: 'Mi accoglie un illuminato parroco sentinella che mi racconta dell\' impegno della sua comunità per l\' ambiente',
                                                                      location: {
                                                                          center: [16.548939,40.420474],
                                                                          zoom: 15.17,
                                                                          pitch: 45,
                                                                          bearing: 0
                                                                      },
                                                                      mapAnimation: 'flyTo',
                                                                      rotateAnimation: false,
                                                                      callback: '',
                                                                      onChapterEnter: [],
                                                                      onChapterExit: []
                                                                    },
                                                                    {
                                                                          id: 'nn-style-id',
                                                                          alignment: 'left',
                                                                          hidden: true,
                                                                          title: 'Corleto Perticara - Tempa Rossa, Total ',
                                                                          image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                          description: 'Ci avviciniamo al sito estrattivo della Total ',
                                                                          location: {
                                                                              center: [16.085372,40.409225],
                                                                              zoom: 15.17,
                                                                              pitch: 45,
                                                                              bearing: 0
                                                                          },
                                                                          mapAnimation: 'flyTo',
                                                                          rotateAnimation: false,
                                                                          callback: '',
                                                                          onChapterEnter: [],
                                                                          onChapterExit: []
                                                                        },
                                                                        {
                                                                              id: 'oo-style-id',
                                                                              alignment: 'left',
                                                                              hidden: true,
                                                                              title: 'Corleto Perticara - bosco',
                                                                              image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                              description: 'Osservo Mimmo mentre rimuove uno strumento di monitoraggio del gas flaring',
                                                                              location: {
                                                                                  center: [16.074198,40.418165],
                                                                                  zoom: 15.17,
                                                                                  pitch: 45,
                                                                                  bearing: 0
                                                                              },
                                                                              mapAnimation: 'flyTo',
                                                                              rotateAnimation: false,
                                                                              callback: '',
                                                                              onChapterEnter: [],
                                                                              onChapterExit: []
                                                                            },
                                                                            {
                                                                                  id: 'pp-style-id',
                                                                                  alignment: 'left',
                                                                                  hidden: true,
                                                                                  title: 'Corleto Perticara - fattoria',
                                                                                  image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                                  description: 'Intervisto un allevatore e una allevatrice che mi raccontano di come la loro vita è cambiata con l\' avvento del petrolio',
                                                                                  location: {
                                                                                      center: [16.037655,40.394076],
                                                                                      zoom: 15.17,
                                                                                      pitch: 45,
                                                                                      bearing: 0
                                                                                  },
                                                                                  mapAnimation: 'flyTo',
                                                                                  rotateAnimation: false,
                                                                                  callback: '',
                                                                                  onChapterEnter: [],
                                                                                  onChapterExit: []
                                                                                },
                                                                                {
                                                                                      id: 'qq-style-id',
                                                                                      alignment: 'left',
                                                                                      hidden: true,
                                                                                      title: 'Pietrapertosa - dolomiti lucane',
                                                                                      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                                      description: 'Ammiro le affascinanti dolomiti lucane che quasi mi fanno dimenticare dei tanti pozzi a pochi chilometri di distanza',
                                                                                      location: {
                                                                                          center: [16.059963,40.519963],
                                                                                          zoom: 15.17,
                                                                                          pitch: 45,
                                                                                          bearing: 0
                                                                                      },
                                                                                      mapAnimation: 'flyTo',
                                                                                      rotateAnimation: false,
                                                                                      callback: '',
                                                                                      onChapterEnter: [],
                                                                                      onChapterExit: []
                                                                                    },
                                                                                    {
                                                                                          id: 'rr-style-id',
                                                                                          alignment: 'left',
                                                                                          hidden: true,
                                                                                          title: 'Villa D Agri - pozzo Eni, Contrada Vigne',
                                                                                          image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                                          description: 'Intervisto Camilla Nigro di Libera Val d\' Agri e dell Osservatorio Popolare Val d\' Agri che mi dimostra perchè \"in Basilicata di petrolio si tace...\"',
                                                                                          location: {
                                                                                              center: [15.945334,40.360306],
                                                                                              zoom: 15.17,
                                                                                              pitch: 45,
                                                                                              bearing: 0
                                                                                          },
                                                                                          mapAnimation: 'flyTo',
                                                                                          rotateAnimation: false,
                                                                                          callback: '',
                                                                                          onChapterEnter: [],
                                                                                          onChapterExit: []
                                                                                        },
                                                                                        {
                                                                                              id: 'ss-style-id',
                                                                                              alignment: 'left',
                                                                                              hidden: true,
                                                                                              title: 'Potenza - tribunale',
                                                                                              image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                                              description: 'Seguiamo la prima udienza del processo per disastro ambientale contro Eni, scorporato dal piu ampio processo Petrolgate deciso in primo grado a marzo 2021 ; incontriamo le istanze civiche che manifestano fuori dal tribunale',
                                                                                              location: {
                                                                                                  center: [15.805873,40.633602],
                                                                                                  zoom: 15.17,
                                                                                                  pitch: 45,
                                                                                                  bearing: 0
                                                                                              },
                                                                                              mapAnimation: 'flyTo',
                                                                                              rotateAnimation: false,
                                                                                              callback: '',
                                                                                              onChapterEnter: [],
                                                                                              onChapterExit: []
                                                                                            },
                                                                                            {
                                                                                                  id: 'tt-style-id',
                                                                                                  alignment: 'left',
                                                                                                  hidden: true,
                                                                                                  title: 'Potenza - università',
                                                                                                  image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                                                  description: 'Incontro Luca Manes che mi racconta del lavoro della ONG Recommon a tutela delle comunità che fronteggiano multinazionali',
                                                                                                  location: {
                                                                                                      center: [15.807072,40.633382],
                                                                                                      zoom: 15.17,
                                                                                                      pitch: 45,
                                                                                                      bearing: 0
                                                                                                  },
                                                                                                  mapAnimation: 'flyTo',
                                                                                                  rotateAnimation: false,
                                                                                                  callback: '',
                                                                                                  onChapterEnter: [],
                                                                                                  onChapterExit: []
                                                                                                },
                                                                                                {
                                                                                                      id: 'uu-style-id',
                                                                                                      alignment: 'left',
                                                                                                      hidden: true,
                                                                                                      title: 'Potenza - ARPAB',
                                                                                                      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                                                                      description: 'Intervisto l\'Avv. Tisci, Direttore dell\'Agenzia Regionale per la Protezione dell\'Ambiente Basilicata',
                                                                                                      location: {
                                                                                                          center: [15.807072,40.633382],
                                                                                                          zoom: 15.17,
                                                                                                          pitch: 45,
                                                                                                          bearing: 0
                                                                                                      },
                                                                                                      mapAnimation: 'flyTo',
                                                                                                      rotateAnimation: false,
                                                                                                      callback: '',
                                                                                                      onChapterEnter: [],
                                                                                                      onChapterExit: []
                                                                                          }
                                                                                        ]
                                                                                 };
