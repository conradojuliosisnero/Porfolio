import './status.css'

export default function Status({ status }) {
  const statusIndicator = () => {
    return status.map((state, index) => {
      return (
        <div key={index}>
          {state.done ? <span className="status__done">Done</span> : <></>}
          {state.progress ? (
            <span className="status__progress">Progress</span>
          ) : (
            <></>
          )}
        </div>
      );
    });
  };

  return <div className="status__project--card">{statusIndicator()}</div>;
}
