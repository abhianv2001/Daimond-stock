import {
  useState,
  useCallback,
  useRef,
  useMemo,
  useContext,
  useEffect
} from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-enterprise';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { apiContext } from "./context/ApiState";

function Table() {
  const { apiData, fetchData } = useContext(apiContext);
  const gridRef = useRef();

  const [columnDefs] = useState([
    {
      field: "stock_num",
      sortable: true,
      filter: true,
      width: 120,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    {
      field: "cert_url",
      headerName: "Certificate",
      sortable: true,
      filter: true,
      cellClass: 'hyperlinks',
      cellRenderer: function (params) {
        return <a href={params.data.cert_url} target="_blank">{params.value}</a>
      }
    },

    { field: "shape", sortable: true, filter: true, width: 120 },
    { field: "DiamondType", sortable: true, filter: true },
    { field: "color", sortable: true, filter: true },
    { field: "clarity", sortable: true, filter: true },
    { field: "size", sortable: true, filter: true },
    { field: "cut", sortable: true, filter: true },
    { field: "polish", sortable: true, filter: true },
    { field: "symmetry", sortable: true, filter: true },
    { field: "fluor_intensity", sortable: true, filter: true },
    { field: "measurement", sortable: true, filter: true },
    { field: "ratio", sortable: true, filter: true },
    { field: "lab", sortable: true, filter: true },
    { field: "cert_num", sortable: true, filter: true },
    {
      field: "video_url",
      sortable: true, filter: true,
      headerName: "Video",
      cellClass: 'hyperlinks',
      cellRenderer: function (params) {
        return <a href={params.data.video_url} target="_blank">{params.value}</a>
      }
    },
    { field: "depth_percent", sortable: true, filter: true },
    { field: "table_percent", sortable: true, filter: true },
    { field: "girdle_min", sortable: true, filter: true },
    { field: "girdle_percent", sortable: true, filter: true },
    { field: "girdle_condition", sortable: true, filter: true },
    { field: "culet_size", sortable: true, filter: true },
    { field: "crown_angle", sortable: true, filter: true },
    { field: "crown_height", sortable: true, filter: true },
    { field: "pavilion_depth", sortable: true, filter: true },
    { field: "pavilion_angle", sortable: true, filter: true },
    { field: "laser_inscription", sortable: true, filter: true },
    { field: "Rap_price", sortable: true, filter: true },
    { field: "discount_percent", sortable: true, filter: true },
    { field: "price_per_cara", sortable: true, filter: true },
    { field: "total_sales_price", sortable: true, filter: true },
    { field: "city", sortable: true, filter: true },

    // { field: "availability", sortable: true, filter: true },
    // { field: "fancy_color", sortable: true, filter: true },
    // { field: "fancy_color_intensity", sortable: true, filter: true },
    // { field: "cert_comment", sortable: true, filter: true },
    // { field: "country", sortable: true, filter: true },
  ]);



  const sideBar = useMemo(() => {
    return {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: {
            suppressRowGroups: true,
            suppressValues: true,
            suppressPivots: true,
            suppressPivotMode: true,
            suppressColumnFilter: true,
            suppressColumnSelectAll: true,
            suppressColumnExpandAll: true,
            suppressColumnsToolPanel:false,
          },
        },
      ],
      defaultToolPanel: 'columns',
      suppressToolPanel: false,
    };
  }, []);


  useEffect(() => {
    fetchData();
  }, [])



  const onBtnExport = useCallback(() => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();

    if (selectedNodes.length > 0) {
      const selectedData = selectedNodes.map(node => node.data);
      const selectedColumns = gridRef.current.columnApi.getAllDisplayedColumns();

      const selectedColumnFieldNames = selectedColumns.map(column => column.colDef.field);

      const filteredData = selectedData.map(rowData => {
        const filteredRow = {};
        for (const fieldName of selectedColumnFieldNames) {
          filteredRow[fieldName] = rowData[fieldName];
        }
        return filteredRow;
      });

      const selectedDataGridApi = gridRef.current.api;
      selectedDataGridApi.exportDataAsExcel({
        allColumns: false,
        onlySelected: true,
        columnKeys: selectedColumnFieldNames,
        processCellCallback: params => {
          return params.value;
        },
        fileName: 'exported-data.xlsx',
      });
    } else {
      const selectedDataGridApi = gridRef.current.api;
      selectedDataGridApi.exportDataAsExcel({
        allColumns: false,
        allDisplayedColumns: true,
        processCellCallback: params => {
          return params.value;
        },
        fileName: 'exported-data.xlsx',
      });
    }
  });

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      resizable: true,
    };
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    const filterText = document.getElementById('filter-text-box').value;
    gridRef.current.api.setQuickFilter(filterText);
  }, []);

  //HYPERLINK
  const defaultExcelExportParams = useMemo(() => {
    return {
      autoConvertFormulas: true,
      processCellCallback: (params) => {
        const field = params.column.getColDef().field;
        console.log("ddd:", field, (field === 'cert_url' || field === 'video_url') ? `=HYPERLINK("${params.value}")` : params.value)

        return (field === 'cert_url' || field === 'video_url') ? `=HYPERLINK("${params.value}")` : params.value;
      },
    };
  }, []);

  //EXELSTYLE
  const excelStyles = useMemo(() => {
    return [
      {
        id: 'hyperlinks',
        font: {
          underline: 'Single',
          color: '#358ccb',
        },
      },
    ];
  }, []);

  return (
    <div className="ag-theme-alpine w-full h-[420px] relative">
      <div className="table-top bg-[#e1e1e1] flex p-[15px] items-center">
        <div className="item title text-[20px] text-[#000] font-medium w-1/2" >
          <input
            type="text"
            id="filter-text-box"
            placeholder="Search Here..."
            onInput={onFilterTextBoxChanged}
          />
        </div>
        <button type="button" className="item w-1/2 ">
          <img src="assets/image/xlsx.png" alt="exel" className="w-[40px] h-[40px]" onClick={onBtnExport} />
        </button>

      </div>
      <AgGridReact
        rowData={apiData}
        columnDefs={columnDefs}
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowSelection={'multiple'}
        suppressRowClickSelection={true}
        sideBar={sideBar}
        defaultExcelExportParams={defaultExcelExportParams}
        excelStyles={excelStyles}
      >

      </AgGridReact>


    </div>
  );
}

export default Table;