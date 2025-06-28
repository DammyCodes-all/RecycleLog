// 🗑️ Comprehensive Lagos State Smart Bin Network - 1000+ Locations

const bins = [
  {
    name: "Ikeja - Site 6",
    bin_id: "bin1",
    ward: "Ward B",
    location: [6.552788, 3.388309],
    bin_fill_percent: 85,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 5.0,
      },
      {
        waste_type: "Paper",
        weight: 1.2,
      },
      {
        waste_type: "E-waste",
        weight: 4.3,
      },
      {
        waste_type: "Mixed",
        weight: 3.4,
      },
    ],
  },
  {
    name: "Maryland - Site 2",
    bin_id: "bin2",
    ward: "Ward B",
    location: [6.567738, 3.214119],
    bin_fill_percent: 84,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 1.1,
      },
      {
        waste_type: "Organic",
        weight: 4.3,
      },
      {
        waste_type: "Paper",
        weight: 5.1,
      },
    ],
  },
  {
    name: "Alimosho - Site 2",
    bin_id: "bin3",
    ward: "Ward A",
    location: [6.568213, 3.27165],
    bin_fill_percent: 72,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 2.0,
      },
      {
        waste_type: "Paper",
        weight: 3.1,
      },
      {
        waste_type: "Mixed",
        weight: 4.9,
      },
      {
        waste_type: "E-waste",
        weight: 1.0,
      },
      {
        waste_type: "Glass",
        weight: 1.5,
      },
    ],
  },
  {
    name: "Amuwo - Site 8",
    bin_id: "bin4",
    ward: "Ward A",
    location: [6.501014, 3.363844],
    bin_fill_percent: 62,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 5.2,
      },
      {
        waste_type: "Paper",
        weight: 5.5,
      },
      {
        waste_type: "Mixed",
        weight: 5.7,
      },
      {
        waste_type: "Organic",
        weight: 2.0,
      },
      {
        waste_type: "E-waste",
        weight: 1.1,
      },
    ],
  },
  {
    name: "Agege - Site 7",
    bin_id: "bin5",
    ward: "Ward D",
    location: [6.558796, 3.22918],
    bin_fill_percent: 67,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 3.3,
      },
      {
        waste_type: "Organic",
        weight: 3.9,
      },
      {
        waste_type: "Paper",
        weight: 1.8,
      },
      {
        waste_type: "E-waste",
        weight: 1.7,
      },
    ],
  },
  {
    name: "Ajah - Site 5",
    bin_id: "bin6",
    ward: "Ward E",
    location: [6.566899, 3.382351],
    bin_fill_percent: 61,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.2,
      },
      {
        waste_type: "E-waste",
        weight: 3.8,
      },
      {
        waste_type: "Paper",
        weight: 4.3,
      },
      {
        waste_type: "Organic",
        weight: 4.4,
      },
      {
        waste_type: "Plastic",
        weight: 3.5,
      },
    ],
  },
  {
    name: "Egbeda - Site 5",
    bin_id: "bin7",
    ward: "Ward E",
    location: [6.497088, 3.375529],
    bin_fill_percent: 53,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.3,
      },
      {
        waste_type: "Paper",
        weight: 6.0,
      },
      {
        waste_type: "Glass",
        weight: 5.8,
      },
      {
        waste_type: "Organic",
        weight: 5.7,
      },
      {
        waste_type: "Mixed",
        weight: 3.7,
      },
    ],
  },
  {
    name: "Ilupeju - Site 6",
    bin_id: "bin8",
    ward: "Ward E",
    location: [6.552917, 3.270544],
    bin_fill_percent: 51,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 4.7,
      },
      {
        waste_type: "E-waste",
        weight: 5.8,
      },
      {
        waste_type: "Paper",
        weight: 2.4,
      },
    ],
  },
  {
    name: "Alimosho - Site 4",
    bin_id: "bin9",
    ward: "Ward D",
    location: [6.480892, 3.311895],
    bin_fill_percent: 79,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 1.9,
      },
      {
        waste_type: "E-waste",
        weight: 4.0,
      },
      {
        waste_type: "Plastic",
        weight: 2.8,
      },
      {
        waste_type: "Mixed",
        weight: 4.1,
      },
    ],
  },
  {
    name: "Agege - Site 7",
    bin_id: "bin10",
    ward: "Ward A",
    location: [6.457466, 3.486551],
    bin_fill_percent: 60,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 1.4,
      },
      {
        waste_type: "Plastic",
        weight: 2.4,
      },
      {
        waste_type: "Paper",
        weight: 1.0,
      },
    ],
  },
  {
    name: "Egbeda - Site 8",
    bin_id: "bin11",
    ward: "Ward A",
    location: [6.512996, 3.475557],
    bin_fill_percent: 44,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 3.8,
      },
      {
        waste_type: "E-waste",
        weight: 1.5,
      },
      {
        waste_type: "Mixed",
        weight: 3.9,
      },
      {
        waste_type: "Plastic",
        weight: 5.2,
      },
      {
        waste_type: "Paper",
        weight: 5.7,
      },
    ],
  },
  {
    name: "Ojota - Site 2",
    bin_id: "bin12",
    ward: "Ward D",
    location: [6.477827, 3.24807],
    bin_fill_percent: 79,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 3.3,
      },
      {
        waste_type: "Paper",
        weight: 2.3,
      },
      {
        waste_type: "Mixed",
        weight: 5.3,
      },
      {
        waste_type: "Glass",
        weight: 2.1,
      },
      {
        waste_type: "Plastic",
        weight: 1.6,
      },
    ],
  },
  {
    name: "Maryland - Site 7",
    bin_id: "bin13",
    ward: "Ward C",
    location: [6.542193, 3.43464],
    bin_fill_percent: 80,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 3.7,
      },
      {
        waste_type: "E-waste",
        weight: 1.1,
      },
      {
        waste_type: "Paper",
        weight: 2.4,
      },
      {
        waste_type: "Glass",
        weight: 4.4,
      },
      {
        waste_type: "Mixed",
        weight: 3.4,
      },
    ],
  },
  {
    name: "Yaba - Site 8",
    bin_id: "bin14",
    ward: "Ward A",
    location: [6.469501, 3.412986],
    bin_fill_percent: 85,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.4,
      },
      {
        waste_type: "Mixed",
        weight: 1.3,
      },
      {
        waste_type: "Paper",
        weight: 1.9,
      },
      {
        waste_type: "Organic",
        weight: 1.0,
      },
    ],
  },
  {
    name: "Agege - Site 1",
    bin_id: "bin15",
    ward: "Ward E",
    location: [6.53314, 3.325911],
    bin_fill_percent: 70,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.0,
      },
      {
        waste_type: "Plastic",
        weight: 6.0,
      },
      {
        waste_type: "Organic",
        weight: 2.7,
      },
    ],
  },
  {
    name: "Ijesha - Site 2",
    bin_id: "bin16",
    ward: "Ward C",
    location: [6.563919, 3.455129],
    bin_fill_percent: 45,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 4.1,
      },
      {
        waste_type: "Plastic",
        weight: 1.2,
      },
      {
        waste_type: "Paper",
        weight: 2.3,
      },
    ],
  },
  {
    name: "Festac - Site 9",
    bin_id: "bin17",
    ward: "Ward C",
    location: [6.512952, 3.236069],
    bin_fill_percent: 88,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.9,
      },
      {
        waste_type: "Organic",
        weight: 3.4,
      },
      {
        waste_type: "E-waste",
        weight: 4.3,
      },
      {
        waste_type: "Glass",
        weight: 1.7,
      },
      {
        waste_type: "Mixed",
        weight: 2.7,
      },
    ],
  },
  {
    name: "Ilupeju - Site 3",
    bin_id: "bin18",
    ward: "Ward B",
    location: [6.597713, 3.325895],
    bin_fill_percent: 78,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 3.3,
      },
      {
        waste_type: "Organic",
        weight: 5.9,
      },
      {
        waste_type: "Mixed",
        weight: 5.9,
      },
      {
        waste_type: "E-waste",
        weight: 3.2,
      },
    ],
  },
  {
    name: "Alimosho - Site 2",
    bin_id: "bin19",
    ward: "Ward E",
    location: [6.487656, 3.492827],
    bin_fill_percent: 97,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 3.1,
      },
      {
        waste_type: "E-waste",
        weight: 3.1,
      },
      {
        waste_type: "Organic",
        weight: 3.9,
      },
      {
        waste_type: "Mixed",
        weight: 2.6,
      },
    ],
  },
  {
    name: "Yaba - Site 9",
    bin_id: "bin20",
    ward: "Ward A",
    location: [6.550548, 3.497993],
    bin_fill_percent: 62,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 1.9,
      },
      {
        waste_type: "E-waste",
        weight: 5.7,
      },
      {
        waste_type: "Paper",
        weight: 5.7,
      },
      {
        waste_type: "Mixed",
        weight: 4.6,
      },
      {
        waste_type: "Organic",
        weight: 4.4,
      },
    ],
  },
  {
    name: "Ojota - Site 1",
    bin_id: "bin21",
    ward: "Ward D",
    location: [6.56389, 3.370666],
    bin_fill_percent: 79,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 5.4,
      },
      {
        waste_type: "Mixed",
        weight: 2.5,
      },
      {
        waste_type: "Organic",
        weight: 3.9,
      },
    ],
  },
  {
    name: "Ijesha - Site 10",
    bin_id: "bin22",
    ward: "Ward E",
    location: [6.550784, 3.379642],
    bin_fill_percent: 73,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 5.9,
      },
      {
        waste_type: "E-waste",
        weight: 4.8,
      },
      {
        waste_type: "Organic",
        weight: 2.2,
      },
    ],
  },
  {
    name: "Lekki - Site 4",
    bin_id: "bin23",
    ward: "Ward D",
    location: [6.520469, 3.368792],
    bin_fill_percent: 55,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.1,
      },
      {
        waste_type: "Mixed",
        weight: 1.3,
      },
      {
        waste_type: "E-waste",
        weight: 4.6,
      },
    ],
  },
  {
    name: "Ikeja - Site 7",
    bin_id: "bin24",
    ward: "Ward C",
    location: [6.470791, 3.394694],
    bin_fill_percent: 70,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 1.4,
      },
      {
        waste_type: "Glass",
        weight: 3.7,
      },
      {
        waste_type: "Organic",
        weight: 3.1,
      },
      {
        waste_type: "Mixed",
        weight: 2.9,
      },
      {
        waste_type: "Plastic",
        weight: 5.6,
      },
    ],
  },
  {
    name: "Oshodi - Site 2",
    bin_id: "bin25",
    ward: "Ward D",
    location: [6.486907, 3.200348],
    bin_fill_percent: 74,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 1.8,
      },
      {
        waste_type: "Plastic",
        weight: 3.0,
      },
      {
        waste_type: "Mixed",
        weight: 1.7,
      },
    ],
  },
  {
    name: "Ilupeju - Site 10",
    bin_id: "bin26",
    ward: "Ward D",
    location: [6.532756, 3.378943],
    bin_fill_percent: 87,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.4,
      },
      {
        waste_type: "Plastic",
        weight: 4.3,
      },
      {
        waste_type: "Glass",
        weight: 3.8,
      },
      {
        waste_type: "Organic",
        weight: 1.3,
      },
      {
        waste_type: "E-waste",
        weight: 3.0,
      },
    ],
  },
  {
    name: "Ojo - Site 3",
    bin_id: "bin27",
    ward: "Ward D",
    location: [6.585074, 3.431289],
    bin_fill_percent: 75,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 2.3,
      },
      {
        waste_type: "Organic",
        weight: 2.9,
      },
      {
        waste_type: "Mixed",
        weight: 2.4,
      },
    ],
  },
  {
    name: "Shomolu - Site 6",
    bin_id: "bin28",
    ward: "Ward A",
    location: [6.492377, 3.432297],
    bin_fill_percent: 90,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 4.3,
      },
      {
        waste_type: "Mixed",
        weight: 4.3,
      },
      {
        waste_type: "Paper",
        weight: 3.1,
      },
    ],
  },
  {
    name: "Alimosho - Site 6",
    bin_id: "bin29",
    ward: "Ward E",
    location: [6.521126, 3.387362],
    bin_fill_percent: 49,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 4.3,
      },
      {
        waste_type: "Plastic",
        weight: 4.2,
      },
      {
        waste_type: "Glass",
        weight: 2.0,
      },
      {
        waste_type: "E-waste",
        weight: 1.4,
      },
    ],
  },
  {
    name: "Agege - Site 10",
    bin_id: "bin30",
    ward: "Ward B",
    location: [6.466538, 3.324699],
    bin_fill_percent: 86,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 2.8,
      },
      {
        waste_type: "Paper",
        weight: 2.2,
      },
      {
        waste_type: "Organic",
        weight: 1.7,
      },
      {
        waste_type: "E-waste",
        weight: 2.2,
      },
    ],
  },
  {
    name: "Ajah - Site 1",
    bin_id: "bin31",
    ward: "Ward B",
    location: [6.514952, 3.415776],
    bin_fill_percent: 93,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 1.3,
      },
      {
        waste_type: "Glass",
        weight: 1.4,
      },
      {
        waste_type: "E-waste",
        weight: 2.5,
      },
      {
        waste_type: "Plastic",
        weight: 1.6,
      },
    ],
  },
  {
    name: "Abule Egba - Site 3",
    bin_id: "bin32",
    ward: "Ward E",
    location: [6.512714, 3.456089],
    bin_fill_percent: 90,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 2.5,
      },
      {
        waste_type: "E-waste",
        weight: 5.8,
      },
      {
        waste_type: "Plastic",
        weight: 1.5,
      },
      {
        waste_type: "Glass",
        weight: 2.9,
      },
      {
        waste_type: "Mixed",
        weight: 1.7,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 3",
    bin_id: "bin33",
    ward: "Ward B",
    location: [6.539182, 3.445043],
    bin_fill_percent: 81,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 2.1,
      },
      {
        waste_type: "Paper",
        weight: 3.5,
      },
      {
        waste_type: "Glass",
        weight: 4.2,
      },
      {
        waste_type: "Plastic",
        weight: 4.4,
      },
    ],
  },
  {
    name: "Oshodi - Site 6",
    bin_id: "bin34",
    ward: "Ward E",
    location: [6.48472, 3.337054],
    bin_fill_percent: 52,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.1,
      },
      {
        waste_type: "E-waste",
        weight: 4.9,
      },
      {
        waste_type: "Plastic",
        weight: 3.6,
      },
      {
        waste_type: "Organic",
        weight: 1.8,
      },
    ],
  },
  {
    name: "Ajah - Site 5",
    bin_id: "bin35",
    ward: "Ward D",
    location: [6.430188, 3.458726],
    bin_fill_percent: 98,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.1,
      },
      {
        waste_type: "Glass",
        weight: 3.8,
      },
      {
        waste_type: "E-waste",
        weight: 2.6,
      },
      {
        waste_type: "Organic",
        weight: 2.4,
      },
      {
        waste_type: "Plastic",
        weight: 5.8,
      },
    ],
  },
  {
    name: "Maryland - Site 5",
    bin_id: "bin36",
    ward: "Ward B",
    location: [6.588148, 3.426789],
    bin_fill_percent: 56,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 2.9,
      },
      {
        waste_type: "Glass",
        weight: 4.7,
      },
      {
        waste_type: "Paper",
        weight: 5.1,
      },
      {
        waste_type: "Plastic",
        weight: 1.7,
      },
    ],
  },
  {
    name: "Ilupeju - Site 1",
    bin_id: "bin37",
    ward: "Ward D",
    location: [6.445329, 3.319912],
    bin_fill_percent: 71,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 5.1,
      },
      {
        waste_type: "Glass",
        weight: 3.1,
      },
      {
        waste_type: "Organic",
        weight: 5.6,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 6",
    bin_id: "bin38",
    ward: "Ward A",
    location: [6.570358, 3.361657],
    bin_fill_percent: 61,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 5.9,
      },
      {
        waste_type: "Organic",
        weight: 3.2,
      },
      {
        waste_type: "Plastic",
        weight: 5.9,
      },
      {
        waste_type: "E-waste",
        weight: 1.3,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 9",
    bin_id: "bin39",
    ward: "Ward C",
    location: [6.578848, 3.400664],
    bin_fill_percent: 59,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 2.9,
      },
      {
        waste_type: "Plastic",
        weight: 3.2,
      },
      {
        waste_type: "Organic",
        weight: 5.3,
      },
      {
        waste_type: "Mixed",
        weight: 5.1,
      },
      {
        waste_type: "E-waste",
        weight: 4.3,
      },
    ],
  },
  {
    name: "Alimosho - Site 7",
    bin_id: "bin40",
    ward: "Ward A",
    location: [6.446892, 3.352581],
    bin_fill_percent: 46,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 2.3,
      },
      {
        waste_type: "Paper",
        weight: 4.7,
      },
      {
        waste_type: "Mixed",
        weight: 3.4,
      },
      {
        waste_type: "Organic",
        weight: 2.8,
      },
    ],
  },
  {
    name: "Abule Egba - Site 4",
    bin_id: "bin41",
    ward: "Ward C",
    location: [6.485864, 3.242098],
    bin_fill_percent: 76,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 5.7,
      },
      {
        waste_type: "Paper",
        weight: 3.6,
      },
      {
        waste_type: "Plastic",
        weight: 1.5,
      },
    ],
  },
  {
    name: "Oshodi - Site 9",
    bin_id: "bin42",
    ward: "Ward C",
    location: [6.442047, 3.263821],
    bin_fill_percent: 63,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.1,
      },
      {
        waste_type: "Paper",
        weight: 1.3,
      },
      {
        waste_type: "Organic",
        weight: 2.7,
      },
      {
        waste_type: "Mixed",
        weight: 4.2,
      },
    ],
  },
  {
    name: "Surulere - Site 2",
    bin_id: "bin43",
    ward: "Ward A",
    location: [6.550317, 3.479748],
    bin_fill_percent: 48,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 2.6,
      },
      {
        waste_type: "Organic",
        weight: 5.2,
      },
      {
        waste_type: "Mixed",
        weight: 1.4,
      },
      {
        waste_type: "Glass",
        weight: 3.3,
      },
      {
        waste_type: "Paper",
        weight: 3.0,
      },
    ],
  },
  {
    name: "Abule Egba - Site 1",
    bin_id: "bin44",
    ward: "Ward A",
    location: [6.478684, 3.302421],
    bin_fill_percent: 97,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 2.5,
      },
      {
        waste_type: "Mixed",
        weight: 4.9,
      },
      {
        waste_type: "Paper",
        weight: 2.0,
      },
      {
        waste_type: "Plastic",
        weight: 2.2,
      },
      {
        waste_type: "Organic",
        weight: 1.1,
      },
    ],
  },
  {
    name: "Shomolu - Site 4",
    bin_id: "bin45",
    ward: "Ward C",
    location: [6.56167, 3.429257],
    bin_fill_percent: 52,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 5.0,
      },
      {
        waste_type: "Organic",
        weight: 2.3,
      },
      {
        waste_type: "Paper",
        weight: 1.5,
      },
      {
        waste_type: "Mixed",
        weight: 3.7,
      },
      {
        waste_type: "Plastic",
        weight: 2.2,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 5",
    bin_id: "bin46",
    ward: "Ward B",
    location: [6.475785, 3.45746],
    bin_fill_percent: 86,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 2.7,
      },
      {
        waste_type: "Glass",
        weight: 5.5,
      },
      {
        waste_type: "Organic",
        weight: 4.4,
      },
      {
        waste_type: "Paper",
        weight: 1.5,
      },
    ],
  },
  {
    name: "Maryland - Site 4",
    bin_id: "bin47",
    ward: "Ward D",
    location: [6.519107, 3.333854],
    bin_fill_percent: 98,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.6,
      },
      {
        waste_type: "Plastic",
        weight: 2.9,
      },
      {
        waste_type: "Paper",
        weight: 4.4,
      },
    ],
  },
  {
    name: "Surulere - Site 4",
    bin_id: "bin48",
    ward: "Ward A",
    location: [6.528237, 3.306329],
    bin_fill_percent: 61,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 4.9,
      },
      {
        waste_type: "Paper",
        weight: 2.6,
      },
      {
        waste_type: "E-waste",
        weight: 1.5,
      },
    ],
  },
  {
    name: "Ikorodu - Site 6",
    bin_id: "bin49",
    ward: "Ward C",
    location: [6.466785, 3.421779],
    bin_fill_percent: 74,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 1.1,
      },
      {
        waste_type: "Mixed",
        weight: 2.5,
      },
      {
        waste_type: "Organic",
        weight: 2.7,
      },
      {
        waste_type: "E-waste",
        weight: 5.0,
      },
      {
        waste_type: "Plastic",
        weight: 3.9,
      },
    ],
  },
  {
    name: "Ikeja - Site 2",
    bin_id: "bin50",
    ward: "Ward D",
    location: [6.494436, 3.231486],
    bin_fill_percent: 63,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.2,
      },
      {
        waste_type: "Plastic",
        weight: 4.2,
      },
      {
        waste_type: "Mixed",
        weight: 1.0,
      },
      {
        waste_type: "Organic",
        weight: 1.1,
      },
    ],
  },
  {
    name: "Lekki - Site 3",
    bin_id: "bin51",
    ward: "Ward C",
    location: [6.430941, 3.471722],
    bin_fill_percent: 74,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 3.7,
      },
      {
        waste_type: "Mixed",
        weight: 3.3,
      },
      {
        waste_type: "Paper",
        weight: 4.5,
      },
      {
        waste_type: "Organic",
        weight: 4.8,
      },
      {
        waste_type: "E-waste",
        weight: 1.9,
      },
    ],
  },
  {
    name: "Yaba - Site 8",
    bin_id: "bin52",
    ward: "Ward D",
    location: [6.463472, 3.458636],
    bin_fill_percent: 98,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.2,
      },
      {
        waste_type: "Paper",
        weight: 4.3,
      },
      {
        waste_type: "Mixed",
        weight: 2.6,
      },
    ],
  },
  {
    name: "Surulere - Site 10",
    bin_id: "bin53",
    ward: "Ward D",
    location: [6.482869, 3.205936],
    bin_fill_percent: 88,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 1.4,
      },
      {
        waste_type: "Paper",
        weight: 2.1,
      },
      {
        waste_type: "Plastic",
        weight: 4.9,
      },
    ],
  },
  {
    name: "Abule Egba - Site 1",
    bin_id: "bin54",
    ward: "Ward E",
    location: [6.492479, 3.387413],
    bin_fill_percent: 40,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 3.6,
      },
      {
        waste_type: "Plastic",
        weight: 3.0,
      },
      {
        waste_type: "Organic",
        weight: 2.3,
      },
    ],
  },
  {
    name: "Agege - Site 6",
    bin_id: "bin55",
    ward: "Ward B",
    location: [6.497929, 3.337722],
    bin_fill_percent: 47,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 3.0,
      },
      {
        waste_type: "Glass",
        weight: 4.7,
      },
      {
        waste_type: "Organic",
        weight: 4.6,
      },
      {
        waste_type: "Mixed",
        weight: 3.0,
      },
      {
        waste_type: "E-waste",
        weight: 4.3,
      },
    ],
  },
  {
    name: "Ojota - Site 6",
    bin_id: "bin56",
    ward: "Ward D",
    location: [6.473422, 3.415119],
    bin_fill_percent: 45,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 5.6,
      },
      {
        waste_type: "Mixed",
        weight: 1.6,
      },
      {
        waste_type: "Glass",
        weight: 3.1,
      },
      {
        waste_type: "Organic",
        weight: 2.5,
      },
      {
        waste_type: "Paper",
        weight: 5.3,
      },
    ],
  },
  {
    name: "Amuwo - Site 5",
    bin_id: "bin57",
    ward: "Ward D",
    location: [6.552038, 3.230031],
    bin_fill_percent: 96,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 4.0,
      },
      {
        waste_type: "Paper",
        weight: 2.4,
      },
      {
        waste_type: "E-waste",
        weight: 3.8,
      },
      {
        waste_type: "Glass",
        weight: 2.3,
      },
      {
        waste_type: "Mixed",
        weight: 1.7,
      },
    ],
  },
  {
    name: "Abule Egba - Site 4",
    bin_id: "bin58",
    ward: "Ward C",
    location: [6.498446, 3.391383],
    bin_fill_percent: 84,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.0,
      },
      {
        waste_type: "E-waste",
        weight: 4.6,
      },
      {
        waste_type: "Mixed",
        weight: 3.4,
      },
      {
        waste_type: "Paper",
        weight: 4.5,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 1",
    bin_id: "bin59",
    ward: "Ward A",
    location: [6.552091, 3.277929],
    bin_fill_percent: 60,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.5,
      },
      {
        waste_type: "Glass",
        weight: 3.6,
      },
      {
        waste_type: "Paper",
        weight: 2.3,
      },
      {
        waste_type: "Organic",
        weight: 5.3,
      },
      {
        waste_type: "Plastic",
        weight: 4.7,
      },
    ],
  },
  {
    name: "Ikeja - Site 2",
    bin_id: "bin60",
    ward: "Ward C",
    location: [6.43061, 3.364973],
    bin_fill_percent: 88,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 1.6,
      },
      {
        waste_type: "Paper",
        weight: 2.4,
      },
      {
        waste_type: "E-waste",
        weight: 5.3,
      },
      {
        waste_type: "Plastic",
        weight: 5.2,
      },
    ],
  },
  {
    name: "Ijesha - Site 5",
    bin_id: "bin61",
    ward: "Ward D",
    location: [6.535098, 3.231799],
    bin_fill_percent: 77,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 4.6,
      },
      {
        waste_type: "Glass",
        weight: 5.4,
      },
      {
        waste_type: "E-waste",
        weight: 4.9,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 5",
    bin_id: "bin62",
    ward: "Ward B",
    location: [6.578588, 3.297083],
    bin_fill_percent: 56,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 4.4,
      },
      {
        waste_type: "Glass",
        weight: 5.6,
      },
      {
        waste_type: "Mixed",
        weight: 3.4,
      },
    ],
  },
  {
    name: "Egbeda - Site 1",
    bin_id: "bin63",
    ward: "Ward C",
    location: [6.521234, 3.35853],
    bin_fill_percent: 69,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.4,
      },
      {
        waste_type: "Mixed",
        weight: 4.2,
      },
      {
        waste_type: "E-waste",
        weight: 4.6,
      },
    ],
  },
  {
    name: "Festac - Site 8",
    bin_id: "bin64",
    ward: "Ward D",
    location: [6.577904, 3.40922],
    bin_fill_percent: 73,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.5,
      },
      {
        waste_type: "Plastic",
        weight: 1.1,
      },
      {
        waste_type: "Paper",
        weight: 2.1,
      },
      {
        waste_type: "Mixed",
        weight: 2.8,
      },
    ],
  },
  {
    name: "Egbeda - Site 8",
    bin_id: "bin65",
    ward: "Ward C",
    location: [6.553318, 3.269148],
    bin_fill_percent: 81,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 4.2,
      },
      {
        waste_type: "Plastic",
        weight: 2.0,
      },
      {
        waste_type: "Mixed",
        weight: 4.4,
      },
      {
        waste_type: "E-waste",
        weight: 1.9,
      },
    ],
  },
  {
    name: "Surulere - Site 4",
    bin_id: "bin66",
    ward: "Ward E",
    location: [6.566765, 3.491615],
    bin_fill_percent: 68,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.7,
      },
      {
        waste_type: "Glass",
        weight: 4.5,
      },
      {
        waste_type: "Plastic",
        weight: 2.3,
      },
    ],
  },
  {
    name: "Ilupeju - Site 3",
    bin_id: "bin67",
    ward: "Ward A",
    location: [6.5292, 3.202419],
    bin_fill_percent: 74,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 3.5,
      },
      {
        waste_type: "E-waste",
        weight: 3.5,
      },
      {
        waste_type: "Paper",
        weight: 2.6,
      },
      {
        waste_type: "Plastic",
        weight: 1.0,
      },
      {
        waste_type: "Mixed",
        weight: 4.6,
      },
    ],
  },
  {
    name: "Abule Egba - Site 10",
    bin_id: "bin68",
    ward: "Ward B",
    location: [6.596237, 3.468484],
    bin_fill_percent: 92,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 3.1,
      },
      {
        waste_type: "Mixed",
        weight: 2.7,
      },
      {
        waste_type: "E-waste",
        weight: 5.7,
      },
      {
        waste_type: "Glass",
        weight: 3.3,
      },
      {
        waste_type: "Plastic",
        weight: 3.9,
      },
    ],
  },
  {
    name: "Amuwo - Site 2",
    bin_id: "bin69",
    ward: "Ward B",
    location: [6.590282, 3.274742],
    bin_fill_percent: 90,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 3.9,
      },
      {
        waste_type: "Organic",
        weight: 1.2,
      },
      {
        waste_type: "E-waste",
        weight: 3.8,
      },
      {
        waste_type: "Glass",
        weight: 1.4,
      },
    ],
  },
  {
    name: "Ikeja - Site 6",
    bin_id: "bin70",
    ward: "Ward A",
    location: [6.594927, 3.229003],
    bin_fill_percent: 73,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 1.1,
      },
      {
        waste_type: "Plastic",
        weight: 2.7,
      },
      {
        waste_type: "Organic",
        weight: 1.4,
      },
      {
        waste_type: "E-waste",
        weight: 5.9,
      },
    ],
  },
  {
    name: "Festac - Site 1",
    bin_id: "bin71",
    ward: "Ward D",
    location: [6.591721, 3.413566],
    bin_fill_percent: 56,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 3.4,
      },
      {
        waste_type: "Paper",
        weight: 1.2,
      },
      {
        waste_type: "Glass",
        weight: 2.1,
      },
      {
        waste_type: "E-waste",
        weight: 5.8,
      },
    ],
  },
  {
    name: "Abule Egba - Site 8",
    bin_id: "bin72",
    ward: "Ward A",
    location: [6.457459, 3.279766],
    bin_fill_percent: 51,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.1,
      },
      {
        waste_type: "Organic",
        weight: 5.2,
      },
      {
        waste_type: "Glass",
        weight: 4.7,
      },
      {
        waste_type: "Paper",
        weight: 5.0,
      },
    ],
  },
  {
    name: "Alimosho - Site 7",
    bin_id: "bin73",
    ward: "Ward C",
    location: [6.576948, 3.435473],
    bin_fill_percent: 41,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 1.3,
      },
      {
        waste_type: "Mixed",
        weight: 1.1,
      },
      {
        waste_type: "Glass",
        weight: 3.7,
      },
      {
        waste_type: "Paper",
        weight: 2.1,
      },
    ],
  },
  {
    name: "Shomolu - Site 4",
    bin_id: "bin74",
    ward: "Ward E",
    location: [6.557433, 3.362838],
    bin_fill_percent: 83,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.1,
      },
      {
        waste_type: "Plastic",
        weight: 3.1,
      },
      {
        waste_type: "Mixed",
        weight: 5.3,
      },
      {
        waste_type: "Paper",
        weight: 3.5,
      },
    ],
  },
  {
    name: "Egbeda - Site 5",
    bin_id: "bin75",
    ward: "Ward C",
    location: [6.580731, 3.304654],
    bin_fill_percent: 92,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 2.0,
      },
      {
        waste_type: "Mixed",
        weight: 5.3,
      },
      {
        waste_type: "Paper",
        weight: 4.2,
      },
      {
        waste_type: "E-waste",
        weight: 2.8,
      },
      {
        waste_type: "Plastic",
        weight: 2.4,
      },
    ],
  },
  {
    name: "Agege - Site 10",
    bin_id: "bin76",
    ward: "Ward D",
    location: [6.536792, 3.466187],
    bin_fill_percent: 70,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 1.6,
      },
      {
        waste_type: "Glass",
        weight: 2.5,
      },
      {
        waste_type: "Plastic",
        weight: 3.2,
      },
    ],
  },
  {
    name: "Yaba - Site 2",
    bin_id: "bin77",
    ward: "Ward E",
    location: [6.478152, 3.37827],
    bin_fill_percent: 82,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 5.6,
      },
      {
        waste_type: "Glass",
        weight: 5.1,
      },
      {
        waste_type: "Plastic",
        weight: 1.9,
      },
      {
        waste_type: "E-waste",
        weight: 4.7,
      },
      {
        waste_type: "Mixed",
        weight: 2.5,
      },
    ],
  },
  {
    name: "Surulere - Site 8",
    bin_id: "bin78",
    ward: "Ward A",
    location: [6.583727, 3.487461],
    bin_fill_percent: 96,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.1,
      },
      {
        waste_type: "E-waste",
        weight: 5.0,
      },
      {
        waste_type: "Paper",
        weight: 5.2,
      },
      {
        waste_type: "Organic",
        weight: 1.4,
      },
      {
        waste_type: "Glass",
        weight: 1.2,
      },
    ],
  },
  {
    name: "Ilupeju - Site 6",
    bin_id: "bin79",
    ward: "Ward C",
    location: [6.540352, 3.259697],
    bin_fill_percent: 97,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 4.4,
      },
      {
        waste_type: "E-waste",
        weight: 4.7,
      },
      {
        waste_type: "Paper",
        weight: 5.1,
      },
      {
        waste_type: "Mixed",
        weight: 3.0,
      },
      {
        waste_type: "Organic",
        weight: 5.4,
      },
    ],
  },
  {
    name: "Ilupeju - Site 7",
    bin_id: "bin80",
    ward: "Ward D",
    location: [6.575286, 3.405434],
    bin_fill_percent: 73,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 2.8,
      },
      {
        waste_type: "E-waste",
        weight: 5.6,
      },
      {
        waste_type: "Glass",
        weight: 2.0,
      },
      {
        waste_type: "Plastic",
        weight: 4.2,
      },
    ],
  },
  {
    name: "Ojota - Site 10",
    bin_id: "bin81",
    ward: "Ward B",
    location: [6.495253, 3.463345],
    bin_fill_percent: 65,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 1.3,
      },
      {
        waste_type: "Organic",
        weight: 4.6,
      },
      {
        waste_type: "Plastic",
        weight: 4.7,
      },
      {
        waste_type: "Paper",
        weight: 4.1,
      },
    ],
  },
  {
    name: "Egbeda - Site 6",
    bin_id: "bin82",
    ward: "Ward E",
    location: [6.545282, 3.277866],
    bin_fill_percent: 86,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 4.0,
      },
      {
        waste_type: "Glass",
        weight: 2.5,
      },
      {
        waste_type: "E-waste",
        weight: 5.8,
      },
      {
        waste_type: "Paper",
        weight: 6.0,
      },
    ],
  },
  {
    name: "Alimosho - Site 8",
    bin_id: "bin83",
    ward: "Ward D",
    location: [6.454958, 3.243464],
    bin_fill_percent: 46,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 2.5,
      },
      {
        waste_type: "Mixed",
        weight: 4.0,
      },
      {
        waste_type: "Glass",
        weight: 2.0,
      },
      {
        waste_type: "Organic",
        weight: 1.5,
      },
      {
        waste_type: "Paper",
        weight: 4.9,
      },
    ],
  },
  {
    name: "Ojota - Site 1",
    bin_id: "bin84",
    ward: "Ward C",
    location: [6.572771, 3.242115],
    bin_fill_percent: 79,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.8,
      },
      {
        waste_type: "Paper",
        weight: 4.2,
      },
      {
        waste_type: "Glass",
        weight: 1.2,
      },
    ],
  },
  {
    name: "Oshodi - Site 2",
    bin_id: "bin85",
    ward: "Ward C",
    location: [6.573893, 3.21701],
    bin_fill_percent: 56,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 3.7,
      },
      {
        waste_type: "Paper",
        weight: 4.2,
      },
      {
        waste_type: "E-waste",
        weight: 1.1,
      },
    ],
  },
  {
    name: "Ajah - Site 6",
    bin_id: "bin86",
    ward: "Ward B",
    location: [6.493475, 3.345104],
    bin_fill_percent: 92,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 5.9,
      },
      {
        waste_type: "Organic",
        weight: 2.8,
      },
      {
        waste_type: "Glass",
        weight: 5.5,
      },
    ],
  },
  {
    name: "Egbeda - Site 6",
    bin_id: "bin87",
    ward: "Ward D",
    location: [6.563131, 3.202844],
    bin_fill_percent: 51,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 2.8,
      },
      {
        waste_type: "Mixed",
        weight: 4.3,
      },
      {
        waste_type: "Organic",
        weight: 4.4,
      },
    ],
  },
  {
    name: "Oshodi - Site 6",
    bin_id: "bin88",
    ward: "Ward B",
    location: [6.587895, 3.255866],
    bin_fill_percent: 53,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 1.1,
      },
      {
        waste_type: "Mixed",
        weight: 4.4,
      },
      {
        waste_type: "Organic",
        weight: 2.9,
      },
    ],
  },
  {
    name: "Ojo - Site 5",
    bin_id: "bin89",
    ward: "Ward C",
    location: [6.492087, 3.4266],
    bin_fill_percent: 53,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 5.1,
      },
      {
        waste_type: "Glass",
        weight: 5.9,
      },
      {
        waste_type: "Paper",
        weight: 3.8,
      },
      {
        waste_type: "E-waste",
        weight: 2.4,
      },
      {
        waste_type: "Mixed",
        weight: 3.3,
      },
    ],
  },
  {
    name: "Alimosho - Site 1",
    bin_id: "bin90",
    ward: "Ward B",
    location: [6.457855, 3.246474],
    bin_fill_percent: 53,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 4.3,
      },
      {
        waste_type: "E-waste",
        weight: 1.3,
      },
      {
        waste_type: "Glass",
        weight: 2.6,
      },
      {
        waste_type: "Paper",
        weight: 1.9,
      },
    ],
  },
  {
    name: "Egbeda - Site 3",
    bin_id: "bin91",
    ward: "Ward A",
    location: [6.527573, 3.475388],
    bin_fill_percent: 48,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 3.3,
      },
      {
        waste_type: "Paper",
        weight: 1.0,
      },
      {
        waste_type: "Mixed",
        weight: 2.5,
      },
    ],
  },
  {
    name: "Surulere - Site 2",
    bin_id: "bin92",
    ward: "Ward D",
    location: [6.558121, 3.217872],
    bin_fill_percent: 87,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 1.7,
      },
      {
        waste_type: "Mixed",
        weight: 2.9,
      },
      {
        waste_type: "Plastic",
        weight: 2.1,
      },
      {
        waste_type: "Organic",
        weight: 4.8,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 9",
    bin_id: "bin93",
    ward: "Ward D",
    location: [6.572463, 3.236675],
    bin_fill_percent: 44,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 2.6,
      },
      {
        waste_type: "Plastic",
        weight: 2.2,
      },
      {
        waste_type: "Mixed",
        weight: 3.2,
      },
      {
        waste_type: "Organic",
        weight: 5.7,
      },
    ],
  },
  {
    name: "Ajah - Site 6",
    bin_id: "bin94",
    ward: "Ward B",
    location: [6.48723, 3.463785],
    bin_fill_percent: 98,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 3.6,
      },
      {
        waste_type: "Plastic",
        weight: 1.2,
      },
      {
        waste_type: "Paper",
        weight: 5.6,
      },
    ],
  },
  {
    name: "Festac - Site 6",
    bin_id: "bin95",
    ward: "Ward A",
    location: [6.566036, 3.462053],
    bin_fill_percent: 99,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 4.4,
      },
      {
        waste_type: "Plastic",
        weight: 5.7,
      },
      {
        waste_type: "E-waste",
        weight: 4.6,
      },
    ],
  },
  {
    name: "Ojota - Site 10",
    bin_id: "bin96",
    ward: "Ward E",
    location: [6.530892, 3.408133],
    bin_fill_percent: 81,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 5.2,
      },
      {
        waste_type: "Paper",
        weight: 2.0,
      },
      {
        waste_type: "Glass",
        weight: 2.7,
      },
      {
        waste_type: "Plastic",
        weight: 4.5,
      },
    ],
  },
  {
    name: "Lekki - Site 7",
    bin_id: "bin97",
    ward: "Ward C",
    location: [6.482727, 3.219923],
    bin_fill_percent: 97,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.7,
      },
      {
        waste_type: "Paper",
        weight: 5.7,
      },
      {
        waste_type: "E-waste",
        weight: 4.7,
      },
      {
        waste_type: "Organic",
        weight: 2.8,
      },
      {
        waste_type: "Plastic",
        weight: 5.7,
      },
    ],
  },
  {
    name: "Amuwo - Site 5",
    bin_id: "bin98",
    ward: "Ward B",
    location: [6.474119, 3.410991],
    bin_fill_percent: 48,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 1.9,
      },
      {
        waste_type: "Organic",
        weight: 1.8,
      },
      {
        waste_type: "Plastic",
        weight: 3.5,
      },
    ],
  },
  {
    name: "Shomolu - Site 2",
    bin_id: "bin99",
    ward: "Ward E",
    location: [6.550679, 3.451771],
    bin_fill_percent: 85,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 6.0,
      },
      {
        waste_type: "E-waste",
        weight: 2.6,
      },
      {
        waste_type: "Mixed",
        weight: 4.1,
      },
    ],
  },
  {
    name: "Egbeda - Site 5",
    bin_id: "bin100",
    ward: "Ward D",
    location: [6.492746, 3.335567],
    bin_fill_percent: 51,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 2.9,
      },
      {
        waste_type: "E-waste",
        weight: 3.2,
      },
      {
        waste_type: "Organic",
        weight: 4.6,
      },
    ],
  },
  {
    name: "Lekki - Site 9",
    bin_id: "bin101",
    ward: "Ward C",
    location: [6.54191, 3.225153],
    bin_fill_percent: 75,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 3.3,
      },
      {
        waste_type: "Plastic",
        weight: 2.3,
      },
      {
        waste_type: "Paper",
        weight: 3.0,
      },
    ],
  },
  {
    name: "Ojota - Site 4",
    bin_id: "bin102",
    ward: "Ward D",
    location: [6.522156, 3.228712],
    bin_fill_percent: 88,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 2.9,
      },
      {
        waste_type: "Mixed",
        weight: 5.1,
      },
      {
        waste_type: "E-waste",
        weight: 3.8,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 10",
    bin_id: "bin103",
    ward: "Ward D",
    location: [6.454752, 3.43273],
    bin_fill_percent: 86,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 2.2,
      },
      {
        waste_type: "E-waste",
        weight: 3.5,
      },
      {
        waste_type: "Organic",
        weight: 4.1,
      },
    ],
  },
  {
    name: "Shomolu - Site 3",
    bin_id: "bin104",
    ward: "Ward A",
    location: [6.585956, 3.327736],
    bin_fill_percent: 72,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.6,
      },
      {
        waste_type: "E-waste",
        weight: 5.6,
      },
      {
        waste_type: "Organic",
        weight: 1.4,
      },
      {
        waste_type: "Glass",
        weight: 1.0,
      },
      {
        waste_type: "Mixed",
        weight: 2.8,
      },
    ],
  },
  {
    name: "Festac - Site 8",
    bin_id: "bin105",
    ward: "Ward E",
    location: [6.574935, 3.481916],
    bin_fill_percent: 88,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 1.8,
      },
      {
        waste_type: "E-waste",
        weight: 5.0,
      },
      {
        waste_type: "Paper",
        weight: 4.4,
      },
      {
        waste_type: "Mixed",
        weight: 4.9,
      },
    ],
  },
  {
    name: "Ojo - Site 5",
    bin_id: "bin106",
    ward: "Ward A",
    location: [6.475196, 3.350542],
    bin_fill_percent: 99,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 4.7,
      },
      {
        waste_type: "Glass",
        weight: 1.2,
      },
      {
        waste_type: "E-waste",
        weight: 5.9,
      },
    ],
  },
  {
    name: "Ikeja - Site 5",
    bin_id: "bin107",
    ward: "Ward C",
    location: [6.549859, 3.343214],
    bin_fill_percent: 97,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.5,
      },
      {
        waste_type: "E-waste",
        weight: 4.1,
      },
      {
        waste_type: "Organic",
        weight: 4.5,
      },
      {
        waste_type: "Mixed",
        weight: 5.2,
      },
    ],
  },
  {
    name: "Oshodi - Site 4",
    bin_id: "bin108",
    ward: "Ward A",
    location: [6.508773, 3.254726],
    bin_fill_percent: 72,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 2.1,
      },
      {
        waste_type: "Mixed",
        weight: 4.7,
      },
      {
        waste_type: "Organic",
        weight: 3.1,
      },
      {
        waste_type: "Glass",
        weight: 4.5,
      },
    ],
  },
  {
    name: "Ikeja - Site 4",
    bin_id: "bin109",
    ward: "Ward A",
    location: [6.464377, 3.284626],
    bin_fill_percent: 89,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 3.5,
      },
      {
        waste_type: "Paper",
        weight: 2.2,
      },
      {
        waste_type: "Organic",
        weight: 1.8,
      },
    ],
  },
  {
    name: "Ajah - Site 3",
    bin_id: "bin110",
    ward: "Ward E",
    location: [6.478803, 3.291693],
    bin_fill_percent: 67,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 3.3,
      },
      {
        waste_type: "E-waste",
        weight: 2.2,
      },
      {
        waste_type: "Organic",
        weight: 3.1,
      },
      {
        waste_type: "Plastic",
        weight: 2.1,
      },
    ],
  },
  {
    name: "Surulere - Site 6",
    bin_id: "bin111",
    ward: "Ward B",
    location: [6.583919, 3.281402],
    bin_fill_percent: 71,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 3.8,
      },
      {
        waste_type: "E-waste",
        weight: 4.1,
      },
      {
        waste_type: "Organic",
        weight: 5.5,
      },
      {
        waste_type: "Mixed",
        weight: 4.3,
      },
    ],
  },
  {
    name: "Alimosho - Site 9",
    bin_id: "bin112",
    ward: "Ward D",
    location: [6.588398, 3.497467],
    bin_fill_percent: 73,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 1.8,
      },
      {
        waste_type: "Mixed",
        weight: 5.0,
      },
      {
        waste_type: "Glass",
        weight: 2.8,
      },
      {
        waste_type: "Plastic",
        weight: 5.2,
      },
      {
        waste_type: "E-waste",
        weight: 5.9,
      },
    ],
  },
  {
    name: "Ijesha - Site 6",
    bin_id: "bin113",
    ward: "Ward C",
    location: [6.460202, 3.377869],
    bin_fill_percent: 90,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 4.0,
      },
      {
        waste_type: "E-waste",
        weight: 3.2,
      },
      {
        waste_type: "Glass",
        weight: 5.1,
      },
    ],
  },
  {
    name: "Festac - Site 5",
    bin_id: "bin114",
    ward: "Ward B",
    location: [6.52523, 3.442597],
    bin_fill_percent: 85,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 3.5,
      },
      {
        waste_type: "Mixed",
        weight: 5.9,
      },
      {
        waste_type: "Glass",
        weight: 2.7,
      },
      {
        waste_type: "Paper",
        weight: 3.3,
      },
    ],
  },
  {
    name: "Lekki - Site 10",
    bin_id: "bin115",
    ward: "Ward D",
    location: [6.57524, 3.445195],
    bin_fill_percent: 75,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 2.5,
      },
      {
        waste_type: "Mixed",
        weight: 3.6,
      },
      {
        waste_type: "Organic",
        weight: 1.0,
      },
      {
        waste_type: "E-waste",
        weight: 2.3,
      },
      {
        waste_type: "Glass",
        weight: 4.9,
      },
    ],
  },
  {
    name: "Shomolu - Site 9",
    bin_id: "bin116",
    ward: "Ward A",
    location: [6.575822, 3.415553],
    bin_fill_percent: 66,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 1.9,
      },
      {
        waste_type: "Organic",
        weight: 5.3,
      },
      {
        waste_type: "Plastic",
        weight: 3.5,
      },
    ],
  },
  {
    name: "Amuwo - Site 10",
    bin_id: "bin117",
    ward: "Ward C",
    location: [6.470595, 3.336928],
    bin_fill_percent: 93,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 2.3,
      },
      {
        waste_type: "Glass",
        weight: 1.1,
      },
      {
        waste_type: "Paper",
        weight: 1.9,
      },
      {
        waste_type: "Organic",
        weight: 3.9,
      },
      {
        waste_type: "Mixed",
        weight: 2.3,
      },
    ],
  },
  {
    name: "Maryland - Site 9",
    bin_id: "bin118",
    ward: "Ward B",
    location: [6.532889, 3.357729],
    bin_fill_percent: 64,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 4.2,
      },
      {
        waste_type: "Mixed",
        weight: 3.7,
      },
      {
        waste_type: "E-waste",
        weight: 1.5,
      },
      {
        waste_type: "Paper",
        weight: 1.4,
      },
      {
        waste_type: "Plastic",
        weight: 5.1,
      },
    ],
  },
  {
    name: "Ilupeju - Site 1",
    bin_id: "bin119",
    ward: "Ward E",
    location: [6.49619, 3.480113],
    bin_fill_percent: 75,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 2.1,
      },
      {
        waste_type: "E-waste",
        weight: 4.2,
      },
      {
        waste_type: "Plastic",
        weight: 4.0,
      },
      {
        waste_type: "Glass",
        weight: 5.7,
      },
      {
        waste_type: "Mixed",
        weight: 4.1,
      },
    ],
  },
  {
    name: "Agege - Site 10",
    bin_id: "bin120",
    ward: "Ward C",
    location: [6.501292, 3.469566],
    bin_fill_percent: 90,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 1.9,
      },
      {
        waste_type: "Glass",
        weight: 1.9,
      },
      {
        waste_type: "Organic",
        weight: 4.1,
      },
      {
        waste_type: "Paper",
        weight: 3.3,
      },
      {
        waste_type: "E-waste",
        weight: 1.8,
      },
    ],
  },
  {
    name: "Alimosho - Site 9",
    bin_id: "bin121",
    ward: "Ward A",
    location: [6.572423, 3.210716],
    bin_fill_percent: 87,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 4.3,
      },
      {
        waste_type: "Glass",
        weight: 5.3,
      },
      {
        waste_type: "E-waste",
        weight: 3.1,
      },
      {
        waste_type: "Mixed",
        weight: 5.3,
      },
    ],
  },
  {
    name: "Abule Egba - Site 7",
    bin_id: "bin122",
    ward: "Ward A",
    location: [6.479548, 3.282621],
    bin_fill_percent: 91,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 1.1,
      },
      {
        waste_type: "Mixed",
        weight: 4.0,
      },
      {
        waste_type: "Plastic",
        weight: 1.6,
      },
      {
        waste_type: "Organic",
        weight: 1.6,
      },
    ],
  },
  {
    name: "Ikorodu - Site 6",
    bin_id: "bin123",
    ward: "Ward D",
    location: [6.536886, 3.212166],
    bin_fill_percent: 49,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 1.2,
      },
      {
        waste_type: "Mixed",
        weight: 1.7,
      },
      {
        waste_type: "E-waste",
        weight: 4.2,
      },
      {
        waste_type: "Glass",
        weight: 4.2,
      },
      {
        waste_type: "Paper",
        weight: 4.4,
      },
    ],
  },
  {
    name: "Ojo - Site 2",
    bin_id: "bin124",
    ward: "Ward C",
    location: [6.497933, 3.256319],
    bin_fill_percent: 43,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 2.2,
      },
      {
        waste_type: "Glass",
        weight: 2.1,
      },
      {
        waste_type: "Organic",
        weight: 4.1,
      },
      {
        waste_type: "Plastic",
        weight: 5.7,
      },
    ],
  },
  {
    name: "Shomolu - Site 1",
    bin_id: "bin125",
    ward: "Ward D",
    location: [6.454566, 3.383015],
    bin_fill_percent: 99,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 1.5,
      },
      {
        waste_type: "Organic",
        weight: 4.8,
      },
      {
        waste_type: "Plastic",
        weight: 2.1,
      },
      {
        waste_type: "Glass",
        weight: 4.2,
      },
    ],
  },
  {
    name: "Lekki - Site 3",
    bin_id: "bin126",
    ward: "Ward C",
    location: [6.574665, 3.463429],
    bin_fill_percent: 66,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 5.3,
      },
      {
        waste_type: "Mixed",
        weight: 4.3,
      },
      {
        waste_type: "Organic",
        weight: 3.7,
      },
    ],
  },
  {
    name: "Abule Egba - Site 3",
    bin_id: "bin127",
    ward: "Ward D",
    location: [6.478105, 3.489912],
    bin_fill_percent: 98,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 1.8,
      },
      {
        waste_type: "Glass",
        weight: 3.1,
      },
      {
        waste_type: "Plastic",
        weight: 3.1,
      },
    ],
  },
  {
    name: "Maryland - Site 9",
    bin_id: "bin128",
    ward: "Ward D",
    location: [6.516061, 3.376453],
    bin_fill_percent: 85,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 2.8,
      },
      {
        waste_type: "Mixed",
        weight: 5.9,
      },
      {
        waste_type: "Glass",
        weight: 4.6,
      },
      {
        waste_type: "Paper",
        weight: 2.4,
      },
    ],
  },
  {
    name: "Ilupeju - Site 7",
    bin_id: "bin129",
    ward: "Ward B",
    location: [6.588822, 3.422532],
    bin_fill_percent: 64,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 2.1,
      },
      {
        waste_type: "Paper",
        weight: 1.5,
      },
      {
        waste_type: "Plastic",
        weight: 3.7,
      },
      {
        waste_type: "E-waste",
        weight: 3.7,
      },
    ],
  },
  {
    name: "Ilupeju - Site 2",
    bin_id: "bin130",
    ward: "Ward A",
    location: [6.495059, 3.242812],
    bin_fill_percent: 67,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 5.9,
      },
      {
        waste_type: "Mixed",
        weight: 4.0,
      },
      {
        waste_type: "Paper",
        weight: 5.9,
      },
      {
        waste_type: "E-waste",
        weight: 5.0,
      },
    ],
  },
  {
    name: "Ilupeju - Site 2",
    bin_id: "bin131",
    ward: "Ward B",
    location: [6.549416, 3.458642],
    bin_fill_percent: 51,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 1.6,
      },
      {
        waste_type: "Organic",
        weight: 2.8,
      },
      {
        waste_type: "Mixed",
        weight: 4.6,
      },
    ],
  },
  {
    name: "Surulere - Site 3",
    bin_id: "bin132",
    ward: "Ward D",
    location: [6.432715, 3.293603],
    bin_fill_percent: 40,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 1.1,
      },
      {
        waste_type: "Paper",
        weight: 2.5,
      },
      {
        waste_type: "Organic",
        weight: 3.7,
      },
    ],
  },
  {
    name: "Ojo - Site 10",
    bin_id: "bin133",
    ward: "Ward D",
    location: [6.533701, 3.341056],
    bin_fill_percent: 49,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.8,
      },
      {
        waste_type: "Mixed",
        weight: 2.1,
      },
      {
        waste_type: "Plastic",
        weight: 1.5,
      },
      {
        waste_type: "Organic",
        weight: 4.2,
      },
    ],
  },
  {
    name: "Surulere - Site 7",
    bin_id: "bin134",
    ward: "Ward A",
    location: [6.509928, 3.39019],
    bin_fill_percent: 64,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 4.7,
      },
      {
        waste_type: "Organic",
        weight: 4.5,
      },
      {
        waste_type: "Mixed",
        weight: 5.9,
      },
      {
        waste_type: "Glass",
        weight: 3.9,
      },
    ],
  },
  {
    name: "Ikeja - Site 8",
    bin_id: "bin135",
    ward: "Ward D",
    location: [6.562035, 3.418665],
    bin_fill_percent: 43,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 2.9,
      },
      {
        waste_type: "Paper",
        weight: 5.1,
      },
      {
        waste_type: "Mixed",
        weight: 3.0,
      },
      {
        waste_type: "Glass",
        weight: 1.5,
      },
      {
        waste_type: "Organic",
        weight: 3.7,
      },
    ],
  },
  {
    name: "Ijesha - Site 2",
    bin_id: "bin136",
    ward: "Ward E",
    location: [6.536891, 3.27675],
    bin_fill_percent: 64,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 4.1,
      },
      {
        waste_type: "Glass",
        weight: 4.1,
      },
      {
        waste_type: "E-waste",
        weight: 2.6,
      },
      {
        waste_type: "Organic",
        weight: 1.7,
      },
    ],
  },
  {
    name: "Alimosho - Site 1",
    bin_id: "bin137",
    ward: "Ward D",
    location: [6.527134, 3.407683],
    bin_fill_percent: 75,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.7,
      },
      {
        waste_type: "Mixed",
        weight: 3.7,
      },
      {
        waste_type: "Plastic",
        weight: 3.3,
      },
      {
        waste_type: "Paper",
        weight: 3.8,
      },
    ],
  },
  {
    name: "Ijesha - Site 9",
    bin_id: "bin138",
    ward: "Ward E",
    location: [6.47054, 3.248253],
    bin_fill_percent: 45,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 4.2,
      },
      {
        waste_type: "E-waste",
        weight: 2.6,
      },
      {
        waste_type: "Organic",
        weight: 2.7,
      },
      {
        waste_type: "Glass",
        weight: 4.9,
      },
    ],
  },
  {
    name: "Oshodi - Site 9",
    bin_id: "bin139",
    ward: "Ward E",
    location: [6.517338, 3.290993],
    bin_fill_percent: 75,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.0,
      },
      {
        waste_type: "Organic",
        weight: 6.0,
      },
      {
        waste_type: "Paper",
        weight: 2.7,
      },
      {
        waste_type: "E-waste",
        weight: 5.6,
      },
    ],
  },
  {
    name: "Egbeda - Site 10",
    bin_id: "bin140",
    ward: "Ward A",
    location: [6.475088, 3.303698],
    bin_fill_percent: 49,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 4.9,
      },
      {
        waste_type: "Plastic",
        weight: 3.9,
      },
      {
        waste_type: "Glass",
        weight: 5.7,
      },
      {
        waste_type: "E-waste",
        weight: 5.4,
      },
      {
        waste_type: "Paper",
        weight: 5.2,
      },
    ],
  },
  {
    name: "Egbeda - Site 2",
    bin_id: "bin141",
    ward: "Ward D",
    location: [6.475707, 3.4299],
    bin_fill_percent: 40,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 5.5,
      },
      {
        waste_type: "Organic",
        weight: 4.3,
      },
      {
        waste_type: "Paper",
        weight: 2.2,
      },
      {
        waste_type: "E-waste",
        weight: 1.9,
      },
    ],
  },
  {
    name: "Abule Egba - Site 9",
    bin_id: "bin142",
    ward: "Ward B",
    location: [6.549091, 3.417078],
    bin_fill_percent: 69,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 4.5,
      },
      {
        waste_type: "Plastic",
        weight: 2.1,
      },
      {
        waste_type: "Organic",
        weight: 3.1,
      },
    ],
  },
  {
    name: "Iyana Ipaja - Site 6",
    bin_id: "bin143",
    ward: "Ward E",
    location: [6.539239, 3.398867],
    bin_fill_percent: 52,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.1,
      },
      {
        waste_type: "E-waste",
        weight: 5.5,
      },
      {
        waste_type: "Glass",
        weight: 5.8,
      },
      {
        waste_type: "Plastic",
        weight: 2.7,
      },
      {
        waste_type: "Organic",
        weight: 1.6,
      },
    ],
  },
  {
    name: "Ilupeju - Site 4",
    bin_id: "bin144",
    ward: "Ward A",
    location: [6.515474, 3.434124],
    bin_fill_percent: 44,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 3.2,
      },
      {
        waste_type: "Glass",
        weight: 3.3,
      },
      {
        waste_type: "Mixed",
        weight: 3.9,
      },
      {
        waste_type: "Plastic",
        weight: 3.3,
      },
      {
        waste_type: "Paper",
        weight: 4.5,
      },
    ],
  },
  {
    name: "Ajah - Site 4",
    bin_id: "bin145",
    ward: "Ward B",
    location: [6.595864, 3.333763],
    bin_fill_percent: 69,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 2.9,
      },
      {
        waste_type: "E-waste",
        weight: 1.5,
      },
      {
        waste_type: "Mixed",
        weight: 2.0,
      },
      {
        waste_type: "Paper",
        weight: 2.4,
      },
      {
        waste_type: "Organic",
        weight: 4.5,
      },
    ],
  },
  {
    name: "Shomolu - Site 1",
    bin_id: "bin146",
    ward: "Ward A",
    location: [6.508522, 3.343845],
    bin_fill_percent: 64,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 4.7,
      },
      {
        waste_type: "Glass",
        weight: 3.3,
      },
      {
        waste_type: "Paper",
        weight: 2.0,
      },
    ],
  },
  {
    name: "Alimosho - Site 9",
    bin_id: "bin147",
    ward: "Ward A",
    location: [6.486713, 3.424446],
    bin_fill_percent: 76,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 2.9,
      },
      {
        waste_type: "Plastic",
        weight: 1.7,
      },
      {
        waste_type: "Mixed",
        weight: 5.7,
      },
      {
        waste_type: "Organic",
        weight: 1.5,
      },
      {
        waste_type: "Glass",
        weight: 1.3,
      },
    ],
  },
  {
    name: "Surulere - Site 7",
    bin_id: "bin148",
    ward: "Ward C",
    location: [6.463125, 3.389927],
    bin_fill_percent: 53,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 4.9,
      },
      {
        waste_type: "Mixed",
        weight: 5.2,
      },
      {
        waste_type: "Organic",
        weight: 2.7,
      },
    ],
  },
  {
    name: "Surulere - Site 8",
    bin_id: "bin149",
    ward: "Ward B",
    location: [6.577331, 3.242315],
    bin_fill_percent: 82,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 2.2,
      },
      {
        waste_type: "Glass",
        weight: 5.2,
      },
      {
        waste_type: "Mixed",
        weight: 3.0,
      },
      {
        waste_type: "Organic",
        weight: 5.1,
      },
    ],
  },
  {
    name: "Abule Egba - Site 10",
    bin_id: "bin150",
    ward: "Ward C",
    location: [6.4458, 3.439756],
    bin_fill_percent: 53,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.5,
      },
      {
        waste_type: "Organic",
        weight: 2.4,
      },
      {
        waste_type: "Paper",
        weight: 5.5,
      },
      {
        waste_type: "E-waste",
        weight: 3.4,
      },
      {
        waste_type: "Glass",
        weight: 1.4,
      },
    ],
  },
  {
    name: "Ijesha - Site 10",
    bin_id: "bin151",
    ward: "Ward B",
    location: [6.486998, 3.391439],
    bin_fill_percent: 43,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.0,
      },
      {
        waste_type: "Organic",
        weight: 1.1,
      },
      {
        waste_type: "Plastic",
        weight: 2.0,
      },
      {
        waste_type: "Glass",
        weight: 1.3,
      },
    ],
  },
  {
    name: "Ojota - Site 10",
    bin_id: "bin152",
    ward: "Ward D",
    location: [6.442323, 3.238307],
    bin_fill_percent: 45,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 4.4,
      },
      {
        waste_type: "Paper",
        weight: 6.0,
      },
      {
        waste_type: "Glass",
        weight: 5.6,
      },
      {
        waste_type: "Mixed",
        weight: 5.3,
      },
      {
        waste_type: "Organic",
        weight: 5.2,
      },
    ],
  },
  {
    name: "Ilupeju - Site 9",
    bin_id: "bin153",
    ward: "Ward C",
    location: [6.494153, 3.244141],
    bin_fill_percent: 94,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.6,
      },
      {
        waste_type: "Plastic",
        weight: 1.5,
      },
      {
        waste_type: "Organic",
        weight: 2.2,
      },
    ],
  },
  {
    name: "Amuwo - Site 9",
    bin_id: "bin154",
    ward: "Ward D",
    location: [6.511017, 3.383248],
    bin_fill_percent: 87,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 1.7,
      },
      {
        waste_type: "Paper",
        weight: 1.6,
      },
      {
        waste_type: "Organic",
        weight: 3.3,
      },
    ],
  },
  {
    name: "Shomolu - Site 9",
    bin_id: "bin155",
    ward: "Ward A",
    location: [6.525649, 3.246359],
    bin_fill_percent: 64,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 3.5,
      },
      {
        waste_type: "E-waste",
        weight: 1.0,
      },
      {
        waste_type: "Glass",
        weight: 3.3,
      },
    ],
  },
  {
    name: "Yaba - Site 4",
    bin_id: "bin156",
    ward: "Ward B",
    location: [6.447929, 3.454361],
    bin_fill_percent: 86,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 1.5,
      },
      {
        waste_type: "Glass",
        weight: 2.0,
      },
      {
        waste_type: "Plastic",
        weight: 4.8,
      },
      {
        waste_type: "Mixed",
        weight: 2.1,
      },
    ],
  },
  {
    name: "Alimosho - Site 8",
    bin_id: "bin157",
    ward: "Ward C",
    location: [6.490759, 3.315594],
    bin_fill_percent: 58,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 5.4,
      },
      {
        waste_type: "Organic",
        weight: 2.3,
      },
      {
        waste_type: "E-waste",
        weight: 5.9,
      },
      {
        waste_type: "Glass",
        weight: 4.8,
      },
    ],
  },
  {
    name: "Agege - Site 5",
    bin_id: "bin158",
    ward: "Ward B",
    location: [6.500228, 3.397647],
    bin_fill_percent: 91,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 4.0,
      },
      {
        waste_type: "E-waste",
        weight: 2.8,
      },
      {
        waste_type: "Organic",
        weight: 3.6,
      },
    ],
  },
  {
    name: "Ojota - Site 7",
    bin_id: "bin159",
    ward: "Ward A",
    location: [6.540673, 3.473303],
    bin_fill_percent: 62,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 4.8,
      },
      {
        waste_type: "Paper",
        weight: 5.0,
      },
      {
        waste_type: "E-waste",
        weight: 2.1,
      },
    ],
  },
  {
    name: "Ojo - Site 10",
    bin_id: "bin160",
    ward: "Ward D",
    location: [6.467882, 3.325697],
    bin_fill_percent: 41,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 2.6,
      },
      {
        waste_type: "Paper",
        weight: 3.1,
      },
      {
        waste_type: "Mixed",
        weight: 4.0,
      },
      {
        waste_type: "Plastic",
        weight: 5.6,
      },
    ],
  },
  {
    name: "Egbeda - Site 9",
    bin_id: "bin161",
    ward: "Ward D",
    location: [6.430582, 3.308355],
    bin_fill_percent: 53,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 5.2,
      },
      {
        waste_type: "Mixed",
        weight: 4.4,
      },
      {
        waste_type: "Organic",
        weight: 5.1,
      },
      {
        waste_type: "Plastic",
        weight: 5.0,
      },
    ],
  },
  {
    name: "Alimosho - Site 4",
    bin_id: "bin162",
    ward: "Ward A",
    location: [6.599763, 3.221603],
    bin_fill_percent: 45,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 1.1,
      },
      {
        waste_type: "Glass",
        weight: 3.0,
      },
      {
        waste_type: "Paper",
        weight: 3.1,
      },
      {
        waste_type: "E-waste",
        weight: 3.6,
      },
      {
        waste_type: "Mixed",
        weight: 2.3,
      },
    ],
  },
  {
    name: "Ikorodu - Site 4",
    bin_id: "bin163",
    ward: "Ward E",
    location: [6.597609, 3.416905],
    bin_fill_percent: 69,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 4.6,
      },
      {
        waste_type: "Mixed",
        weight: 5.4,
      },
      {
        waste_type: "Plastic",
        weight: 1.3,
      },
      {
        waste_type: "Organic",
        weight: 3.5,
      },
      {
        waste_type: "Glass",
        weight: 5.5,
      },
    ],
  },
  {
    name: "Ajah - Site 2",
    bin_id: "bin164",
    ward: "Ward E",
    location: [6.587101, 3.25225],
    bin_fill_percent: 90,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 5.6,
      },
      {
        waste_type: "E-waste",
        weight: 5.6,
      },
      {
        waste_type: "Organic",
        weight: 3.4,
      },
      {
        waste_type: "Paper",
        weight: 3.8,
      },
    ],
  },
  {
    name: "Ojota - Site 6",
    bin_id: "bin165",
    ward: "Ward E",
    location: [6.46177, 3.463233],
    bin_fill_percent: 69,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 4.2,
      },
      {
        waste_type: "E-waste",
        weight: 3.7,
      },
      {
        waste_type: "Glass",
        weight: 4.6,
      },
    ],
  },
  {
    name: "Yaba - Site 3",
    bin_id: "bin166",
    ward: "Ward A",
    location: [6.558373, 3.463689],
    bin_fill_percent: 45,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 5.1,
      },
      {
        waste_type: "Organic",
        weight: 5.4,
      },
      {
        waste_type: "Mixed",
        weight: 3.7,
      },
    ],
  },
  {
    name: "Surulere - Site 4",
    bin_id: "bin167",
    ward: "Ward A",
    location: [6.496493, 3.287934],
    bin_fill_percent: 94,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 3.9,
      },
      {
        waste_type: "Organic",
        weight: 5.0,
      },
      {
        waste_type: "Plastic",
        weight: 1.3,
      },
      {
        waste_type: "Glass",
        weight: 1.5,
      },
      {
        waste_type: "E-waste",
        weight: 3.6,
      },
    ],
  },
  {
    name: "Ojota - Site 5",
    bin_id: "bin168",
    ward: "Ward D",
    location: [6.487144, 3.275069],
    bin_fill_percent: 70,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 3.5,
      },
      {
        waste_type: "Glass",
        weight: 4.9,
      },
      {
        waste_type: "Paper",
        weight: 4.8,
      },
    ],
  },
  {
    name: "Ojota - Site 9",
    bin_id: "bin169",
    ward: "Ward D",
    location: [6.566889, 3.366164],
    bin_fill_percent: 53,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 2.9,
      },
      {
        waste_type: "Plastic",
        weight: 3.3,
      },
      {
        waste_type: "Glass",
        weight: 5.4,
      },
    ],
  },
  {
    name: "Lekki - Site 9",
    bin_id: "bin170",
    ward: "Ward E",
    location: [6.466282, 3.416747],
    bin_fill_percent: 49,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 5.1,
      },
      {
        waste_type: "Organic",
        weight: 1.5,
      },
      {
        waste_type: "Plastic",
        weight: 4.2,
      },
      {
        waste_type: "Glass",
        weight: 2.1,
      },
    ],
  },
  {
    name: "Oshodi - Site 8",
    bin_id: "bin171",
    ward: "Ward C",
    location: [6.588028, 3.428623],
    bin_fill_percent: 71,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 2.3,
      },
      {
        waste_type: "Plastic",
        weight: 1.7,
      },
      {
        waste_type: "Glass",
        weight: 1.5,
      },
      {
        waste_type: "Paper",
        weight: 1.6,
      },
    ],
  },
  {
    name: "Festac - Site 8",
    bin_id: "bin172",
    ward: "Ward C",
    location: [6.440579, 3.356205],
    bin_fill_percent: 80,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 4.3,
      },
      {
        waste_type: "Paper",
        weight: 3.6,
      },
      {
        waste_type: "E-waste",
        weight: 2.3,
      },
    ],
  },
  {
    name: "Ijesha - Site 10",
    bin_id: "bin173",
    ward: "Ward B",
    location: [6.431675, 3.446799],
    bin_fill_percent: 93,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 2.1,
      },
      {
        waste_type: "Paper",
        weight: 1.2,
      },
      {
        waste_type: "Plastic",
        weight: 1.5,
      },
      {
        waste_type: "E-waste",
        weight: 5.6,
      },
    ],
  },
  {
    name: "Egbeda - Site 2",
    bin_id: "bin174",
    ward: "Ward C",
    location: [6.537362, 3.207428],
    bin_fill_percent: 80,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 2.2,
      },
      {
        waste_type: "Paper",
        weight: 2.4,
      },
      {
        waste_type: "Mixed",
        weight: 1.1,
      },
    ],
  },
  {
    name: "Ikeja - Site 5",
    bin_id: "bin175",
    ward: "Ward E",
    location: [6.586185, 3.246326],
    bin_fill_percent: 77,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 3.8,
      },
      {
        waste_type: "Mixed",
        weight: 2.2,
      },
      {
        waste_type: "Paper",
        weight: 4.2,
      },
      {
        waste_type: "Organic",
        weight: 1.8,
      },
    ],
  },
  {
    name: "Ikeja - Site 3",
    bin_id: "bin176",
    ward: "Ward B",
    location: [6.471915, 3.461865],
    bin_fill_percent: 48,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.9,
      },
      {
        waste_type: "Glass",
        weight: 3.0,
      },
      {
        waste_type: "Mixed",
        weight: 3.0,
      },
      {
        waste_type: "E-waste",
        weight: 5.9,
      },
    ],
  },
  {
    name: "Ojota - Site 3",
    bin_id: "bin177",
    ward: "Ward E",
    location: [6.596805, 3.472912],
    bin_fill_percent: 58,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 1.3,
      },
      {
        waste_type: "E-waste",
        weight: 2.8,
      },
      {
        waste_type: "Organic",
        weight: 3.9,
      },
    ],
  },
  {
    name: "Ilupeju - Site 10",
    bin_id: "bin178",
    ward: "Ward C",
    location: [6.541787, 3.22005],
    bin_fill_percent: 79,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 1.9,
      },
      {
        waste_type: "Mixed",
        weight: 4.3,
      },
      {
        waste_type: "E-waste",
        weight: 3.2,
      },
      {
        waste_type: "Organic",
        weight: 1.2,
      },
      {
        waste_type: "Plastic",
        weight: 2.3,
      },
    ],
  },
  {
    name: "Egbeda - Site 5",
    bin_id: "bin179",
    ward: "Ward B",
    location: [6.562458, 3.264669],
    bin_fill_percent: 76,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 3.4,
      },
      {
        waste_type: "Paper",
        weight: 1.5,
      },
      {
        waste_type: "E-waste",
        weight: 3.3,
      },
    ],
  },
  {
    name: "Abule Egba - Site 3",
    bin_id: "bin180",
    ward: "Ward C",
    location: [6.502327, 3.482368],
    bin_fill_percent: 99,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 2.6,
      },
      {
        waste_type: "Glass",
        weight: 1.6,
      },
      {
        waste_type: "E-waste",
        weight: 1.9,
      },
      {
        waste_type: "Plastic",
        weight: 5.8,
      },
      {
        waste_type: "Mixed",
        weight: 3.0,
      },
    ],
  },
  {
    name: "Ajah - Site 5",
    bin_id: "bin181",
    ward: "Ward E",
    location: [6.597813, 3.248551],
    bin_fill_percent: 77,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 1.4,
      },
      {
        waste_type: "Plastic",
        weight: 5.6,
      },
      {
        waste_type: "Organic",
        weight: 4.7,
      },
    ],
  },
  {
    name: "Ajah - Site 5",
    bin_id: "bin182",
    ward: "Ward A",
    location: [6.554748, 3.264528],
    bin_fill_percent: 42,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 3.3,
      },
      {
        waste_type: "Glass",
        weight: 1.2,
      },
      {
        waste_type: "Plastic",
        weight: 5.1,
      },
      {
        waste_type: "Organic",
        weight: 3.6,
      },
    ],
  },
  {
    name: "Oshodi - Site 5",
    bin_id: "bin183",
    ward: "Ward A",
    location: [6.509204, 3.397745],
    bin_fill_percent: 73,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 5.9,
      },
      {
        waste_type: "Plastic",
        weight: 4.3,
      },
      {
        waste_type: "Paper",
        weight: 2.0,
      },
      {
        waste_type: "Glass",
        weight: 4.8,
      },
      {
        waste_type: "Mixed",
        weight: 2.9,
      },
    ],
  },
  {
    name: "Maryland - Site 2",
    bin_id: "bin184",
    ward: "Ward D",
    location: [6.496622, 3.244047],
    bin_fill_percent: 49,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 4.1,
      },
      {
        waste_type: "Paper",
        weight: 5.2,
      },
      {
        waste_type: "Glass",
        weight: 2.9,
      },
    ],
  },
  {
    name: "Festac - Site 6",
    bin_id: "bin185",
    ward: "Ward E",
    location: [6.466062, 3.288299],
    bin_fill_percent: 49,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 2.0,
      },
      {
        waste_type: "Glass",
        weight: 1.7,
      },
      {
        waste_type: "Plastic",
        weight: 1.9,
      },
      {
        waste_type: "E-waste",
        weight: 5.9,
      },
    ],
  },
  {
    name: "Oshodi - Site 3",
    bin_id: "bin186",
    ward: "Ward B",
    location: [6.474447, 3.393462],
    bin_fill_percent: 46,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 1.8,
      },
      {
        waste_type: "Organic",
        weight: 4.7,
      },
      {
        waste_type: "Glass",
        weight: 3.9,
      },
      {
        waste_type: "E-waste",
        weight: 2.4,
      },
    ],
  },
  {
    name: "Surulere - Site 6",
    bin_id: "bin187",
    ward: "Ward B",
    location: [6.493194, 3.416244],
    bin_fill_percent: 86,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.8,
      },
      {
        waste_type: "Paper",
        weight: 4.1,
      },
      {
        waste_type: "Plastic",
        weight: 5.4,
      },
      {
        waste_type: "Glass",
        weight: 1.4,
      },
    ],
  },
  {
    name: "Ijesha - Site 7",
    bin_id: "bin188",
    ward: "Ward E",
    location: [6.57337, 3.339598],
    bin_fill_percent: 74,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 5.0,
      },
      {
        waste_type: "Plastic",
        weight: 4.7,
      },
      {
        waste_type: "E-waste",
        weight: 5.2,
      },
    ],
  },
  {
    name: "Agege - Site 5",
    bin_id: "bin189",
    ward: "Ward E",
    location: [6.477324, 3.209641],
    bin_fill_percent: 96,
    waste_breakdown: [
      {
        waste_type: "Plastic",
        weight: 1.1,
      },
      {
        waste_type: "Mixed",
        weight: 5.1,
      },
      {
        waste_type: "Paper",
        weight: 4.0,
      },
      {
        waste_type: "Glass",
        weight: 1.5,
      },
      {
        waste_type: "Organic",
        weight: 3.5,
      },
    ],
  },
  {
    name: "Ojo - Site 1",
    bin_id: "bin190",
    ward: "Ward E",
    location: [6.465672, 3.280105],
    bin_fill_percent: 41,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 2.9,
      },
      {
        waste_type: "Organic",
        weight: 3.7,
      },
      {
        waste_type: "E-waste",
        weight: 3.3,
      },
      {
        waste_type: "Mixed",
        weight: 3.2,
      },
    ],
  },
  {
    name: "Oshodi - Site 9",
    bin_id: "bin191",
    ward: "Ward C",
    location: [6.455108, 3.264693],
    bin_fill_percent: 90,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 3.3,
      },
      {
        waste_type: "Plastic",
        weight: 3.4,
      },
      {
        waste_type: "Glass",
        weight: 5.3,
      },
      {
        waste_type: "Paper",
        weight: 3.6,
      },
      {
        waste_type: "Mixed",
        weight: 2.9,
      },
    ],
  },
  {
    name: "Abule Egba - Site 2",
    bin_id: "bin192",
    ward: "Ward A",
    location: [6.463999, 3.398593],
    bin_fill_percent: 77,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 2.7,
      },
      {
        waste_type: "Paper",
        weight: 1.8,
      },
      {
        waste_type: "Mixed",
        weight: 2.8,
      },
      {
        waste_type: "Plastic",
        weight: 2.5,
      },
    ],
  },
  {
    name: "Lekki - Site 9",
    bin_id: "bin193",
    ward: "Ward A",
    location: [6.56596, 3.248008],
    bin_fill_percent: 94,
    waste_breakdown: [
      {
        waste_type: "Organic",
        weight: 5.8,
      },
      {
        waste_type: "Mixed",
        weight: 3.9,
      },
      {
        waste_type: "E-waste",
        weight: 4.3,
      },
    ],
  },
  {
    name: "Ajah - Site 5",
    bin_id: "bin194",
    ward: "Ward D",
    location: [6.483375, 3.435594],
    bin_fill_percent: 57,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.8,
      },
      {
        waste_type: "Paper",
        weight: 2.2,
      },
      {
        waste_type: "E-waste",
        weight: 2.2,
      },
      {
        waste_type: "Organic",
        weight: 4.0,
      },
    ],
  },
  {
    name: "Ilupeju - Site 5",
    bin_id: "bin195",
    ward: "Ward B",
    location: [6.497087, 3.390615],
    bin_fill_percent: 41,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.1,
      },
      {
        waste_type: "E-waste",
        weight: 4.0,
      },
      {
        waste_type: "Glass",
        weight: 5.9,
      },
      {
        waste_type: "Mixed",
        weight: 5.0,
      },
      {
        waste_type: "Organic",
        weight: 3.4,
      },
    ],
  },
  {
    name: "Alimosho - Site 3",
    bin_id: "bin196",
    ward: "Ward C",
    location: [6.517672, 3.271673],
    bin_fill_percent: 49,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 5.2,
      },
      {
        waste_type: "Organic",
        weight: 1.8,
      },
      {
        waste_type: "Glass",
        weight: 5.8,
      },
      {
        waste_type: "Paper",
        weight: 3.6,
      },
    ],
  },
  {
    name: "Agege - Site 5",
    bin_id: "bin197",
    ward: "Ward D",
    location: [6.534329, 3.266591],
    bin_fill_percent: 68,
    waste_breakdown: [
      {
        waste_type: "Paper",
        weight: 3.4,
      },
      {
        waste_type: "Mixed",
        weight: 1.5,
      },
      {
        waste_type: "Glass",
        weight: 4.8,
      },
      {
        waste_type: "E-waste",
        weight: 6.0,
      },
    ],
  },
  {
    name: "Ikorodu - Site 8",
    bin_id: "bin198",
    ward: "Ward B",
    location: [6.439287, 3.44343],
    bin_fill_percent: 91,
    waste_breakdown: [
      {
        waste_type: "E-waste",
        weight: 4.6,
      },
      {
        waste_type: "Mixed",
        weight: 2.9,
      },
      {
        waste_type: "Glass",
        weight: 5.4,
      },
      {
        waste_type: "Organic",
        weight: 5.9,
      },
      {
        waste_type: "Plastic",
        weight: 1.1,
      },
    ],
  },
  {
    name: "Oshodi - Site 8",
    bin_id: "bin199",
    ward: "Ward C",
    location: [6.586661, 3.219586],
    bin_fill_percent: 96,
    waste_breakdown: [
      {
        waste_type: "Glass",
        weight: 2.4,
      },
      {
        waste_type: "E-waste",
        weight: 5.0,
      },
      {
        waste_type: "Organic",
        weight: 4.6,
      },
    ],
  },
  {
    name: "Agege - Site 8",
    bin_id: "bin200",
    ward: "Ward A",
    location: [6.568591, 3.242283],
    bin_fill_percent: 98,
    waste_breakdown: [
      {
        waste_type: "Mixed",
        weight: 2.9,
      },
      {
        waste_type: "Glass",
        weight: 3.1,
      },
      {
        waste_type: "Paper",
        weight: 4.6,
      },
    ],
  },
];
module.exports = bins;
