import React, { useState } from 'react';

function Content(props) {
    if (props.page === "login") {
        return (<div><p>Hello World ghsdffdhghfklsdhgfjkghs</p></div>)
    }
    return (
        <div>
            <div>
                {
                    //streaming info/links
                }
            </div>
            <div>
                {
                    //row for above, column for below
                }
                <div>
                    {
                        //current content
                    }
                </div>
                <div>
                    {
                        //old content
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;