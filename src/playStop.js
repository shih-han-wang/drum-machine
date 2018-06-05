var playPauseSwitcher = function() {
  if (drummer1.isPlaying) {
    $('#playButton').text('Pause');
  } else {
    $('#playButton').text('Play');
  }
};

$('#playButton').click(function(){
  drummer1.playTrack();
  drummer2.playTrack();
  drummer3.playTrack();
  drummer4.playTrack();
  drummer5.playTrack();
  drummer6.playTrack();
  drummer7.playTrack();
  drummer8.playTrack();
  playPauseSwitcher();
});

$('#stopButton').click(function(){
  drummer1.stopTrack();
  drummer2.stopTrack();
  drummer3.stopTrack();
  drummer4.stopTrack();
  drummer5.stopTrack();
  drummer6.stopTrack();
  drummer7.stopTrack();
  drummer8.stopTrack();
  playPauseSwitcher();
});
