import React, { useState } from 'react'
import UrlOutput from '../../Components/URL/UrlOutput';
import UrlInput from '../../Components/URL/UrlInput';



export default function UrlShortener() {

    const [response, SetResponse] = useState(null);

    return (
        <div>
            {response ? <UrlOutput response={response}  /> : <UrlInput SetResponse={SetResponse}  />}
        </div>
    )
}
