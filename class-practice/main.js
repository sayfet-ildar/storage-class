import { elements, message } from './const.js';

import { Storage } from './storage.js';


const domResult = document.createElement('div');
domResult.className = 'result';
elements.input.appendChild(domResult);

function getDataFromInput() {
  const inputValue = elements.inputData.value;
  return new Storage(inputValue);
}

function buttonClickRecord(event) {
  const names = getDataFromInput();
  event.preventDefault();
  names.set();
}

function buttonClickGetData(event) {
  const names = getDataFromInput();
  event.preventDefault();
  domResult.textContent = names.get();
}

function buttonClickClearStorage(event) {
  const names = getDataFromInput();
  event.preventDefault();
  domResult.textContent = names.clear();
}

function buttonClickisEmpty(event) {
  const names = getDataFromInput();
  event.preventDefault();
  domResult.textContent = names.isEmpty() ? message.empty : message.notEmpty;
}

elements.buttonCheckEmpty.addEventListener('click', buttonClickisEmpty);
elements.buttonClear.addEventListener('click', buttonClickClearStorage);
elements.buttonRecord.addEventListener('click', buttonClickRecord);
elements.buttonGet.addEventListener('click', buttonClickGetData);