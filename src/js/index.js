import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import '../css/json-sorter.css';
import 'bootstrap';
import { $, methods } from './methods';

const main = () => {
  $('#sort').addEventListener('click', event => {
    try {
      const beforeObj = JSON.parse($('#input-json').value);
      const afterObj = methods.objectSort(beforeObj);
      $('#output-json').value = JSON.stringify(afterObj, null, 2);
    } catch (e) {
      console.error(e);
      $('#error-message').innerHTML = e.message;
    }
  });
  $('#erase').addEventListener('click', event => {
    $('#input-json').value = '';
    $('#output-json').value = '';
  });
};

window.addEventListener('load', main);
