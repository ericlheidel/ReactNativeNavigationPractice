export const LEDTileExamples = [
  {
    id: 1,
    tileBrand: "Triton", //gg this will probably need to be a foreign key
    tileModel: null,
    tileCard: "Novastar", //gg this will probably need to be a foreign key
    pixelPitch: 5.9,
    widthPixel: 84,
    heightPixel: 168,
    widthMM: 500,
    heightMM: 1000,
    weightLBS: 48,
    processorType: "MX40", //gg this WILL BE a foreign key
    image: "",
  },
  {
    id: 2,
    tileBrand: "Roe", //gg this will probably need to be a foreign key
    tileModel: "V6ST",
    tileCard: "Brompton", //gg this will probably need to be a foreign key
    pixelPitch: 6.9,
    widthPixel: 144,
    heightPixel: 144,
    widthMM: 1000,
    heightMM: 1000,
    weightLBS: 72,
    processorType: "SX40", //gg this will probably need to be a foreign key
    image: "",
  },
]

export const ProcessorExamples = [
  {
    id: 1,
    processorBrand: "Novastar", //gg this will probably need to be a foreign key
    processorModel: "MX40",
    processorCard: "Novastar", //gg this will probably need to be a foreign key
    numberOfPorts: 20,
    maxResolution: "3840 x 2160",
    fiberExtender: true,
    controlTypeId: "IP", //gg this WILL BE a foreign key
    processorSourceId: "HDMI", //gg this WILL BE a foreign key
    processorRedundancyId: "Port or Processor", //gg this WILL BE a foreign key
    processorSoftwareId: "VMP", //gg this WILL BE a foreign key
    image: "",
  },
  {
    id: 2,
    processorBrand: "Brompton", //gg this will probably need to be a foreign key
    processorModel: "SX40",
    processorCard: "Brompton", //gg this will probably need to be a foreign key
    numberOfPorts: 40,
    maxResolution: "3840 x 2160",
    fiberExtender: true,
    controlTypeId: "USB", //gg this WILL BE a foreign key
    processorSourceId: "SDI", //gg this WILL BE a foreign key
    processorRedundancyId: "Port Only", //gg this WILL BE a foreign key
    processorSoftwareId: "Tessera", //gg this WILL BE a foreign key
    image: "",
  },
]
