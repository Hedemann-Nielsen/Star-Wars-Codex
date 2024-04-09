export const Modal = ({ film, onClose }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-slate-100 p-4 rounded-md text-center" style={{ width: '50%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2 className="text-2xl font-bold p-4">{film.title}</h2>
          <p className="font-bold">Episode: <span className="font-normal">{film.episodeID}</span> </p>
          <p className="font-bold">Director: <span className="font-normal">{film.director}</span> </p>
          <p className="font-bold">Producers:</p>
          <ul>
            {film.producers.map((producer, index) => (
              <li className="ml-2 list" key={index}>
                - {producer}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={onClose} className="mt-4 bg-[#130f40] text-white px-4 py-2 rounded-md">Close</button>
        </div>
      </div>
    </div>
  );
};
