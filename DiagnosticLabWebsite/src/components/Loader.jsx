const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/30">
      <div className="h-12 w-12 rounded-full opacity-100 border-4 border-blue-600 border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Loader;
