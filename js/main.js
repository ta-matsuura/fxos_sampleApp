/* global MessageFilterDB */
'use strict';
(function() {

  function showMessage(type) {
    switch (type) {
      case 'novalue':
        alert('no value set');
        break;
      case 'nodata':
        alert('nothing in datastore');
        break;
      case 'nokey':
        alert('no key set to delete');
        break;
      case 'removed':
        alert('Data removed!');
        break;
      case 'success':
        alert('Process success!');
        break;
      case 'fail':
        alert('Process failed');
        break;
    }
  }

  function saveData() {
    console.log('saveData');
    var data = document.getElementById('box1').value;
    if (!data)
      showMessage('novalue');

    var onSaveSuccess = function(e) {
      console.log(' e : ' + e);
      showMessage('success');
    };
    var onSaveFail = function() {
      console.log('saveData fail');
      showMessage('fail');
    };

    MessageFilterDB.add(data).
      then(onSaveSuccess, onSaveFail);
  }

  function getData() {
    console.log('getData');
    var data = document.getElementById('box1').value;
    if (!data)
      showMessage('novalue');

    var onGetSuccess = function(value) {
      console.log('Got : ' + value);
      showMessage('success');
    };
    var onGetFail = function() {
      console.log('getData fail');
      showMessage('fail');
    };

    MessageFilterDB.get(data).
      then(onGetSuccess, onGetFail);
  }

  function getAll() {
    console.log('getAll');

    var onGetAllSuccess = function(value) {
      Object.keys(value).forEach(function(id) {
        console.log(' we are in forEach. id : ' + id);
      });
      showMessage('success');
    };
    var onGetAllFail = function() {
      console.log('getAll fail');
      showMessage('fail');
    };

    MessageFilterDB.getAll().
      then(onGetAllSuccess, onGetAllFail);
  }

  function remove() {
    console.log('remove');
    var data = document.getElementById('box1').value;
    if (!data)
      showMessage('novalue');

    var onRemoveSuccess = function() {
      showMessage('success');
    };
    var onRemoveCancel = function() {
      showMessage('fail');
    };

    MessageFilterDB.remove(data).
      then(onRemoveSuccess, onRemoveCancel);
  }


  function removeAll() {
    console.log('removeAll');
  }

  window.onload = function() {
    document.getElementById('save').onclick = function() {
      saveData();
    };
    document.getElementById('get').onclick = function() {
      getData();
    };
    document.getElementById('getall').onclick = function() {
      getAll();
    };
    document.getElementById('remove').onclick = function() {
      remove();
    };
    document.getElementById('removeall').onclick = function() {
      removeAll();
    };
  };
}());
