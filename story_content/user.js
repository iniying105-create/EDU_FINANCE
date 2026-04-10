function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tLxRiEV2PU":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="edu.mp3";
audio.load();
audio.play();
audio.volume=0.6;
}

