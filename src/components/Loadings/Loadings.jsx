const BoxBigLoading = () => {
  return (
    <div
      role="status"
      className="flex items-center w-full justify-center h-64 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export { BoxBigLoading };
