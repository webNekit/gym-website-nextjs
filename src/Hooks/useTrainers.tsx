import GlobalAPI from '@/utils/GlobalAPI';
import React, { useEffect, useState } from 'react';

const useTrainers = () => {
    const [trainerList, setTrainerList] = useState([]);

    useEffect(() => {
        getTrainersList();
    },[])

    const getTrainersList = () => {
        GlobalAPI.getTeamsList().then(resp => {
            console.log(resp.data.data);
            setTrainerList(resp.data.data);
        });
    };

    return trainerList;
}

export default useTrainers;