import { useEffect, useState } from "react";
import GlobalAPI from "@/utils/GlobalAPI";

const usePrices = () => {
    const [priceList, setPriceList] = useState([]);

    useEffect(() => {
        getPricesList();
    },[])

    const getPricesList = () => {
        GlobalAPI.getPrices().then(resp => {
            console.log(resp.data.data);
            setPriceList(resp.data.data);
        });
    };

    return priceList;
};

export default usePrices;