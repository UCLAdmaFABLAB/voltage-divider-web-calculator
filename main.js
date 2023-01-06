// import * as dat from 'dat.gui';

const gui = new dat.GUI();
let settings = {
  fixed: 5600,
  sensor: 7000,
  voltage: 3.3,
};
let valNode, voltsNode, sensor;

function draw() {
  const { fixed, sensor, voltage } = settings;
  // console.log(settings);
  let out = sensor/(fixed+sensor) * voltage;
  voltsNode.textContent = out.toFixed(2);
  valNode.textContent = Math.floor((out / voltage) * 1024);
  sensorNode.textContent = `${sensor.toFixed(2)} Ω`;
  requestAnimationFrame(draw);
}

document.addEventListener('DOMContentLoaded', () => {
  gui.add(settings, 'fixed', 0, 20000);
  gui.add(settings, 'sensor', 0, 50000);
  gui.add(settings, 'voltage', 0, 12);
  voltsNode = document.getElementById('volts');
  valNode = document.getElementById('val');
  sensorNode = document.getElementById('sensor');
  draw();
});
