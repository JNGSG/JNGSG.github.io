// particle.min.js hosted on GitHub (https://github.com/JulianLaval/canvas-particle-network)

var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#6495ED',
 
  interactive: true,
  speed: 'medium',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
