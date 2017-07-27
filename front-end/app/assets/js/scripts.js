'use strict';

const FontFaceObserver = require('fontfaceobserver');

new FontFaceObserver('body').load()
  .catch(function () {
    // Do nothing
  })
  .then(function () {
    document.body.classList.add('wf-loaded');
  });

let test = 2,
  stringAlert = `this is a test for ${test}`;

  alert(stringAlert);