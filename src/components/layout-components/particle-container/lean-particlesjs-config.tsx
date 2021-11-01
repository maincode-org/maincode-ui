const options: any = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 1700,
      },
    },
    color: {
      value: '#FAFAFAFF',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 3,
        color: '#FAFAFAFF',
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#FAFAFAFF',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 131,
        line_linked: {
          opacity: 0.67,
        },
      },
      bubble: {
        distance: 400,
        size: 30,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default options;
