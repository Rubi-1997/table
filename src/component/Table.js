import React from "react";
import { useState, useEffect } from "react";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

const Table = (props) => {
    const { tableData, tableDataConfig } = props; // use destructuring

    //use Hooks 
    //state change
    const [sorting, setSorting] = useState({ key: "city", ascending: true });
    const [currentUser, setUser] = useState(tableData);
    useEffect(() => {
        const currentUsersCopy = [...currentUser];
        // sort the Data
        const sortedUser = currentUsersCopy.sort((a, b) => {
            if (sorting.key === "person") {
                return a.person.name.localeCompare(b.person.name); // use localeCompare for sort data using -1(asscending) and 1 (decending)
            }

            return a[sorting.key].localeCompare(b[sorting.key]);
        });
        setUser(sorting.ascending ? sortedUser : sortedUser.reverse());
    }, [sorting]);

    function applySort(key, ascending) {
        setSorting({ key: key, ascending: ascending });
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr className="head-row">
                        {tableDataConfig.map((ele, index) => {
                            return (
                                <th key={index}>

                                    {/* given condition for chaning the person key into name */}

                                    {ele.columnName === "person" ? "Name" :ele.columnName === "email"?"Email Address" :ele.columnName === "joiningDate"?"Joining Date": ele.columnName}    
                                    {ele.sortVisible ? (
                                        <FontAwesomeIcon      //use fontawesome for up-down arrow symbol
                                            icon={faExchangeAlt}
                                            transform={{ rotate: 90 }}
                                            flip="horizontal"
                                            className="fontIcon"
                                            height={9.38}
                                            onClick={() => applySort(ele.columnName, !sorting.ascending)} // use onclick for event
                                        />
                                    ) : (
                                        ""
                                    )}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {/* here below use the two map function for matching the key of tableDataConfig to currentUser */}
                    {currentUser.map((elePerson, index) => {
                        return (
                            <tr key={index}>
                                {tableDataConfig.map((itemConfig, index) => {
                                    if (itemConfig.columnName === "person") {
                                        return (
                                            <td key={index} className="tadclass2">
                                                <span className="imgClass">
                                                    <img src="./profile.jpg" alt="issues"></img>
                                                    <span>{elePerson.person.name}</span>
                                                </span>
                                            </td>
                                        );
                                    } else if (itemConfig.columnName === "email") {   // use condition for add anchor tag as link
                                        return (
                                            <td className="tadclass1">
                                                <a href="#">{elePerson[itemConfig.columnName]}</a>
                                            </td>
                                        );
                                    }

                                    return (
                                        <td className="tadclass2" key={index}>
                                            {elePerson[itemConfig.columnName]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
