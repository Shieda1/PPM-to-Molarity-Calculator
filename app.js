// https://www.omnicalculator.com/chemistry/ppm-to-molarity#what-is-ppm-and-molarity

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const molarityRadio = document.getElementById('molarityRadio');
const ppmRadio = document.getElementById('ppmRadio');
const molarmassRadio = document.getElementById('molarmassRadio');

let molarity;
let ppm = v1;
let molarmass = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

molarityRadio.addEventListener('click', function() {
  variable1.textContent = 'ppm';
  variable2.textContent = 'Molar mass';
  ppm = v1;
  molarmass = v2;
  result.textContent = '';
});

ppmRadio.addEventListener('click', function() {
  variable1.textContent = 'Molarity';
  variable2.textContent = 'Molar mass';
  molarity = v1;
  molarmass = v2;
  result.textContent = '';
});

molarmassRadio.addEventListener('click', function() {
  variable1.textContent = 'Molarity';
  variable2.textContent = 'ppm';
  molarity = v1;
  ppm = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(molarityRadio.checked)
    result.textContent = `Molarity = ${computeMolarity().toFixed(5)}`;

  else if(ppmRadio.checked)
    result.textContent = `ppm = ${computeppm().toFixed(2)}`;

  else if(molarmassRadio.checked)
    result.textContent = `Molar mass = ${computeMolarmass().toFixed(2)}`;
})

// calculation

function computeMolarity() {
  return Number(ppm.value) / (Number(molarmass.value) * 1000);
}

function computeppm() {
  return Number(molarity.value) * (Number(molarmass.value) * 1000);
}

function computeMolarmass() {
  return Number(ppm.value) / (Number(molarity.value) * 1000);
}