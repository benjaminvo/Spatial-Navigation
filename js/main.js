// When the browser is ready
$(document).ready(function() {

  $(window).on('deviceorientation', onDeviceOrientation);
});

function onDeviceOrientation(e) {
  var motion = e.originalEvent;
  var rotation = {
    alpha: motion.alpha,
    beta: motion.beta,
    gamma: motion.gamma
  };

  //var alpha = rotation.alpha;
  //var beta = rotation.beta;
  //var gamma = rotation.gamma;

  $('#alpha').html(Math.floor(rotation.alpha));
  $('#beta').html(Math.floor(rotation.beta));
  $('#gamma').html(Math.floor(rotation.gamma));
}