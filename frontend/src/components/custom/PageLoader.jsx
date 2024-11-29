const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinning Loader */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-dashed rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
