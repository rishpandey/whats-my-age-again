// Saves options to chrome.storage
function save_options() {
  var dob = document.getElementById('dob').value;
  var retireAge = document.getElementById('retireAge').value;

  dob = dob.split('-');

  dob = dob[1] + "-" + dob[2] + "-" + dob[0];
  
  localStorage['dob'] = dob;
  localStorage['retireAge'] = retireAge;

  var status = document.getElementById('status');

  status.textContent = 'Options saved.';
  setTimeout(function() {
    status.textContent = '';
  }, 750);


}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    document.getElementById('dob').value = localStorage['dob'];
    document.getElementById('retireAge').retireAge = localStorage['retireAge'];
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);