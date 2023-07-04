import Skeleton from "react-loading-skeleton";

export default function TurnOver({ revenue, setRevenue, isLoading }) {
    const handleRadio = (value) => {
      setRevenue(value);
    };

    if(isLoading) {
      return (
        <div className="flex gap-1 justify-between">
          <div className="w-full"><Skeleton className="h-10"/></div>
          <div className="w-full"><Skeleton className="h-10"/></div>
          <div className="w-full"><Skeleton className="h-10"/></div>
        </div>
      )
    }
    return (
      <div className="flex mb-4">
        <label
          className={`cursor-pointer border border-blue-gray-500 hover:border-blue-gray-700 hover:shadow-lg text-center py-2 lg:p-2 rounded-l-lg grow transition-all duration-500 ${
            revenue === "less than 10" ? "bg-black text-white" : "opacity-50"
          }`}
        >
          &lt; $10 M
          <input
            type="radio"
            name="name"
            hidden
            onChange={() => handleRadio("less than 10")}
          />
        </label>
        <label
          className={`cursor-pointer border border-blue-gray-500 hover:border-blue-gray-700 hover:shadow-lg text-center py-2 lg:p-2 grow transition-all duration-500 ${
            revenue === "10 - 100" ? "bg-black text-white" : "opacity-50"
          }`}
        >
          <input
            type="radio"
            name="name"
            hidden
            onChange={() => handleRadio("10 - 100")}
          />
          $10 M - $100 M
        </label>
        <label
          className={`cursor-pointer border border-blue-gray-500 hover:border-blue-gray-700 hover:shadow-lg text-center py-2 lg:p-2 rounded-r-lg grow transition-all duration-500 ${
            revenue === "greater than 100" ? "bg-black text-white" : "opacity-50"
          }`}
        >
          <input
            type="radio"
            name="name"
            hidden
            onChange={() => handleRadio("greater than 100")}
          />
          &gt; $100 M
        </label>
      </div>
    );
  }