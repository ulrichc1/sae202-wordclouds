import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import ReactWordcloud from "react-wordcloud";
import { csvParse } from "d3-dsv";
import MOCK_DATA from "./data/1974-2022.csv";

function WordCloud({ id }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    let fileName = "";

    if (id === "0") {
        fileName = MOCK_DATA;
    } else {
        fileName = MOCK_DATA;
    }

    useEffect(() => {
        setLoading(true);

        csv(fileName)
            .then((text) => {
                const words = text.map((d) => ({
                    text: d.mots.toString(),
                    value: parseInt(d.occurrences)
                }));

                setData(words);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [fileName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ReactWordcloud words={data} />
        </div>
    );
}

export default WordCloud;
