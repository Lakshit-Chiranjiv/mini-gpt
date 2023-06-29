
const MacWindow = ({children}) => {
  return (
    <div className="w-full border border-stone-400 rounded-lg">
      <div className="border-b border-stone-400 h-12 flex justify-start">
        <div className="flex justify-center items-center gap-3 mx-4">
          <div className="bg-red-400 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
          <div className="bg-green-400 w-3 h-3 rounded-full"></div>
        </div>
      </div>

      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default MacWindow;
