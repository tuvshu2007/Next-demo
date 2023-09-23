import React, { useEffect, useState } from "react";

function AutoCompleteAddres() {
  const [source, setSource] = useState<any>();
  const [addressList, setAddressList] = useState<any>([]);

  useEffect(() => {
    const delayDebouncen = setTimeout(() => {
      getAddressList();
    }, 1000);

    return () => clearTimeout(delayDebouncen);
  }, [source]);
  const getAddressList = async () => {
    const res = await fetch("./api/search-address?q=" + source, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setAddressList(result);
  };

  return (
    <div className="mt-5">
      <div>
        <label className="text-gray-400">Where from?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300 text-black"
          onChange={(e) => setSource(e.target.value)}
          value={source}
        />
        {addressList?.suggestions?
        <div>
          {addressList?.suggestions.map((item: any, text: number) => {
            <h2>{item.full_address}</h2>;
          })}
        </div>:null}
      </div>
      <div className="mt-3">
        <label className="text-gray-400">Where to?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
    </div>
  );
}

export default AutoCompleteAddres;
