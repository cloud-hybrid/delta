import React from "react";

import { useTable, useExpanded, useAsyncDebounce } from "react-table";

import { default as Generator } from "./Generator.js";

import { default as Columns } from "./Columns.js";

function SubRows({ row, rowProps, visibleColumns, data, loading }) {
    if ( loading ) {
        return (
            <tr>
                <td/>
                <td colSpan={ visibleColumns.length - 1 }>
                    Loading...
                </td>
            </tr>
        );
    }

    // error handling here :)

    return (
        <>
            {
                (
                    row.isExpanded
                    ? (
                            data.map((x, i) => {
                                    return (
                                        <tr
                                            { ... rowProps }
                                            key={ `${ rowProps.key }-expanded-${ i }` }
                                        >
                                            { row.cells.map((cell) => {
                                                return (
                                                    <td { ... cell.getCellProps() } >
                                                        {
                                                            cell.render(
                                                                cell.column.SubCell
                                                                    ? "SubCell"
                                                                    : "Cell", {
                                                                    value:
                                                                        cell.column.accessor &&
                                                                        cell.column.accessor(x, i),
                                                                    row: { ... row, original: x }
                                                                }
                                                            )
                                                        }
                                                    </td>
                                                );
                                            }) }
                                        </tr>
                                    );
                                })
                    ) : null
                )
            }
        </>
    );
}

const SubRowAsync = ({ row, rowProps, visibleColumns }) => {
    const [ loading, setLoading ] = React.useState(true);
    const [ data, setData ] = React.useState([]);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setData(Generator(3));
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <SubRows
            row={ row }
            rowProps={ rowProps }
            visibleColumns={ visibleColumns }
            data={ data }
            loading={ loading }
        />
    );
};

// A simple way to support a renderRowSubComponent is to make a render prop
// This is NOT part of the React Table API, it's merely a rendering
// option we are creating for ourselves in our table renderer
function Table({ columns: userColumns, data: userData, renderer }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
        state
    } = useTable(
        {
            columns: userColumns,
            data: userData
        },
        useExpanded // We can useExpanded to track the expanded state
        // for sub components too!
    );

    return (
//        <>
//      <pre>
//        <code>{ JSON.stringify({ expanded: expanded }, null, 2) }</code>
//      </pre>
            <table { ... getTableProps() } className={["cds--data-table", "cds--data-table--normal", "cds--data-table--no-border"].join(" ")}>
                <thead>
                { headerGroups.map(headerGroup => (
                    <tr { ... headerGroup.getHeaderGroupProps() }>
                        { headerGroup.headers.map(column => (
                            <th className={"cds--table-expand"} { ... column.getHeaderProps() }>{ column.render("Header") }</th>
                        )) }
                    </tr>
                )) }
                </thead>
                <tbody { ... getTableBodyProps() }>
                { rows.map((row, i) => {
                    prepareRow(row);
                    const rowProps = row.getRowProps();
                    return (
                        // Use a React.Fragment here so the table markup is still valid
                        <React.Fragment key={ rowProps.key }>
                            <tr { ... rowProps }>
                                { row.cells.map(cell => {
                                    return (
                                        <td { ... cell.getCellProps() }>{ cell.render("Cell") }</td>
                                    );
                                }) }
                            </tr>
                            {/* We could pass anything into this */ }
                            {
                                row?.isExpanded && renderer(
                                    { row, rowProps, visibleColumns }
                                )
                            }
                        </React.Fragment>
                    );
                }) }
                </tbody>
            </table>
//            <br/>
//            <div>Showing the first 20 results of { rows.length } rows</div>
//        </>
    );
};

const Component = () => {
    const columns = React.useMemo(() => Columns(), []);
    const data = React.useMemo(() => Generator(20), []);
    const renderer = React.useCallback(
        ({ row, rowProps, visibleColumns }) => {
            return (
                <SubRowAsync
                    row={ row }
                    rowProps={ rowProps }
                    visibleColumns={ visibleColumns }
                />
            );
        }, []
    );

    return (<Table columns={ columns } data={ data } renderer={ renderer }/>);
};

export default Component;