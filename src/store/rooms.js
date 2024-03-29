export default {
  garden: {
    stone_sand_garden: {
      capacity: -10,
      energy: -6,
      resources: {
        credits: 750,
        salvage: 650,
        ferrite: 550,
        nano_spores: 2000,
        forma: 1
      },
      image: 'garden_small'
    },
    autumn_garden: {
      capacity: -10,
      energy: -6,
      resources: {
        credits: 750,
        salvage: 650,
        ferrite: 550,
        nano_spores: 2000,
        forma: 1
      },
      image: 'garden_small'
    },
    wooden_sand_garden: {
      capacity: -10,
      energy: -6,
      resources: {
        credits: 750,
        salvage: 650,
        ferrite: 550,
        nano_spores: 2000,
        forma: 1
      },
      image: 'garden_small'
    },
    equinox_garden: {
      capacity: -10,
      energy: -6,
      resources: {
        credits: 750,
        salvage: 650,
        ferrite: 550,
        nano_spores: 2000,
        forma: 1
      },
      image: 'garden_small'
    },
    humilitas_garden: {
      capacity: -10,
      energy: -6,
      resources: {
        credits: 750,
        salvage: 650,
        ferrite: 550,
        nano_spores: 2000,
        forma: 1
      },
      image: 'garden_small'
    },
    industria_garden: {
      capacity: -10,
      energy: -6,
      resources: {
        credits: 750,
        salvage: 650,
        ferrite: 550,
        nano_spores: 2000,
        forma: 1
      },
      image: 'garden_small'
    },
    castitas_garden: {
      capacity: -10,
      energy: -6,
      resources: {
        credits: 750,
        salvage: 650,
        ferrite: 550,
        nano_spores: 2000,
        forma: 1
      },
      image: 'garden_small'
    },
    aestas_garden: {
      capacity: -10,
      energy: -6,
      resources: {
        credits: 750,
        salvage: 650,
        ferrite: 550,
        nano_spores: 2000,
        forma: 1
      },
      image: 'garden_small'
    },

    soleto_garden: {
      capacity: -15,
      energy: -8,
      resources: {
        credits: 1000,
        salvage: 850,
        ferrite: 750,
        nano_spores: 2500,
        forma: 1
      },
      image: 'garden_large'
    },
    mosaic_garden: {
      capacity: -15,
      energy: -8,
      resources: {
        credits: 1000,
        salvage: 850,
        ferrite: 750,
        nano_spores: 2500,
        forma: 1
      },
      image: 'garden_large'
    },
    junno_water_garden: {
      capacity: -15,
      energy: -8,
      resources: {
        credits: 1000,
        salvage: 850,
        ferrite: 750,
        nano_spores: 2500,
        forma: 1
      },
      image: 'garden_large'
    },
    leto_garden: {
      capacity: -15,
      energy: -8,
      resources: {
        credits: 1000,
        salvage: 850,
        ferrite: 750,
        nano_spores: 2500,
        forma: 1
      },
      image: 'garden_large'
    },
    vosen_water_garden: {
      capacity: -15,
      energy: -8,
      resources: {
        credits: 1000,
        salvage: 850,
        ferrite: 750,
        nano_spores: 2500,
        forma: 1
      },
      image: 'garden_large'
    },
    caritas_water_garden: {
      capacity: -15,
      energy: -8,
      resources: {
        credits: 1000,
        salvage: 850,
        ferrite: 750,
        nano_spores: 2500,
        forma: 1
      },
      image: 'garden_large'
    },
    temperantia_water_garden: {
      capacity: -15,
      energy: -8,
      resources: {
        credits: 1000,
        salvage: 850,
        ferrite: 750,
        nano_spores: 2500,
        forma: 1
      },
      image: 'garden_large'
    }
  },
  lab: {
    oracle_lab: {
      capacity: -2,
      energy: -5,
      resources: {
        credits: 1000,
        salvage: 650,
        circuits: 350,
        polymer_bundle: 350,
        forma: 1
      },
      prereqs: ['bio_lab', 'chem_lab', 'energy_lab', 'tenno_lab', 'orokin_lab']
    },
    energy_lab: {
      capacity: -2,
      energy: -5,
      resources: {
        credits: 1000,
        salvage: 650,
        circuits: 350,
        polymer_bundle: 350,
        forma: 1
      }
    },
    bio_lab: {
      capacity: -2,
      energy: -5,
      resources: {
        credits: 1000,
        salvage: 650,
        circuits: 350,
        polymer_bundle: 350,
        forma: 1
      }
    },
    chem_lab: {
      capacity: -2,
      energy: -5,
      resources: {
        credits: 1000,
        salvage: 650,
        circuits: 350,
        polymer_bundle: 350,
        forma: 1
      }
    },
    tenno_lab: {
      capacity: -2,
      energy: -5,
      resources: {
        credits: 1000,
        salvage: 650,
        circuits: 350,
        polymer_bundle: 350,
        forma: 1
      }
    },
    orokin_lab: {
      capacity: -2,
      energy: -5,
      resources: {
        credits: 1000,
        ferrite: 800,
        circuits: 350,
        polymer_bundle: 350,
        forma: 1
      }
    }
  },
  halls: {
    clan_hall: {
      capacity: 100,
      energy: 5,
      resources: {}
    },
    great_hall: {
      capacity: 200,
      energy: -2,
      resources: {
        credits: 1000,
        salvage: 150,
        ferrite: 600,
        nano_spores: 300,
        forma: 1
      },
      prereqs: ['clan_hall']
    },
    greater_hall: {
      capacity: 200,
      energy: -2,
      resources: {
        credits: 1000,
        salvage: 150,
        ferrite: 600,
        nano_spores: 300,
        forma: 1
      },
      prereqs: ['clan_hall', 'great_hall']
    },
    grand_hall: {
      capacity: 200,
      energy: -2,
      resources: {
        credits: 1000,
        salvage: 150,
        ferrite: 600,
        nano_spores: 300,
        forma: 1
      },
      prereqs: ['clan_hall', 'great_hall', 'greater_hall']
    },
    grandest_hall: {
      capacity: 200,
      energy: -2,
      resources: {
        credits: 1000,
        salvage: 150,
        ferrite: 600,
        nano_spores: 300,
        forma: 1
      },
      prereqs: ['clan_hall', 'great_hall', 'greatest_hall', 'grand_hall']
    },
    inspiration_hall: {
      capacity: 100,
      energy: -1,
      max: 3,
      resources: {
        credits: 1000,
        alloy_plate: 150,
        ferrite: 600,
        rubedo: 300,
        forma: 1
      }
    }
  },
  energy: {
    reactor: {
      capacity: -5,
      energy: 25,
      resources: {
        credits: 500,
        salvage: 650,
        circuits: 350,
        alloy_plate: 150,
        forma: 1
      }
    }
  },
  connectors: {
    cross: {
      capacity: -10,
      energy: -3,
      resources: {
        credits: 500,
        salvage: 650,
        ferrite: 350,
        nano_spores: 1200,
        forma: 1
      }
    },
    t_shape: {
      capacity: -5,
      energy: -3,
      resources: {
        credits: 500,
        salvage: 650,
        ferrite: 350,
        nano_spores: 1200,
        forma: 1
      }
    },
    elbow: {
      capacity: -1,
      energy: -1,
      resources: {
        credits: 500,
        salvage: 650,
        ferrite: 350,
        nano_spores: 1200,
        forma: 1
      }
    },
    straight: {
      capacity: -1,
      energy: -1,
      resources: {
        credits: 500,
        salvage: 650,
        ferrite: 350,
        nano_spores: 1200,
        forma: 1
      }
    },
    extended: {
      capacity: -2,
      energy: -2,
      resources: {
        credits: 500,
        salvage: 650,
        ferrite: 350,
        nano_spores: 1200,
        forma: 1
      }
    },
    elevator: {
      capacity: -2,
      energy: -2,
      resources: {
        credits: 500,
        salvage: 650,
        ferrite: 350,
        nano_spores: 1200,
        forma: 1
      }
    }
  },
  barracks: {

  }
}
