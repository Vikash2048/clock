
export const FullScreen = () => {
  const handleFullscreen = () => {
    const element = document.documentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
      console.log(document)
    } else {
      element.requestFullscreen();
      }
    }

  return (
    <div>
      <button onClick={handleFullscreen}>Fullscreen</button>
    </div>
  );
};
