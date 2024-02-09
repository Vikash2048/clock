const Timer = ({hour}) => {
    
  return (
    <>
      <div className="timer" >
        <p className="time">
            {hour}
        </p>
      </div>
    </>
  );
};

export default Timer;
