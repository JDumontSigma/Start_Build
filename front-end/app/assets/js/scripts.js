'use strict';

const FontFaceObserver = require('fontfaceobserver');

new FontFaceObserver('body').load()
  .catch(function () {
    // Do nothing
  })
  .then(function () {
    document.body.classList.add('wf-loaded');
  });
