'use strict';

const FontFaceObserver = require('fontfaceobserver');

new FontFaceObserver('body').load()
  .catch(() => {
    // Do nothing
  })
  .then(() => {
    document.body.classList.add('wf-loaded');
	});
