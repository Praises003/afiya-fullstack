const Topbar = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-sm px-6 py-3">
      <div />
      <div className="flex items-center space-x-4">
        <span className="font-medium">May & Baker Admin</span>
        <button className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-md">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
