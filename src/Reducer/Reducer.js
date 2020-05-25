// //normal function
// const initialState={
//     name:"abc",
//     wishes:['eat','code']
// }

// const reducer = (state=initialState, action) => {
//     if(action.type==='CHANGE_NAME'){
//         return {
//             ...state,
//             name:action.payload
//         }
//     }
//     console.log(action)
//     return state;
// }

// export default reducer;

const initialState = {
    data: [],
    drawer: false,
    fundName: 'The Church Fund - A1050919',
    whileUpdating: '',
    index: 0,
    keyValue: 0,
    fundsList: [
        { id: 0, name: 'The Church Fund - A1050919' },
        { id: 1, name: 'The Moonraft Fund - A1029087' },
        { id: 2, name: 'The UST Global Fund - A1026787' },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Drawer':
            return {
                ...state,
                drawer: !state.drawer
            };
        case 'Change-FundName':
            return {
                ...state,
                whileUpdating: action.updatedName
            };
        case 'Update-FundName':
            let updateFundsList = [...state.fundsList];
            updateFundsList[state.index].name = state.whileUpdating;
            return {
                ...state,
                fundsList: [...updateFundsList],
                fundName: state.whileUpdating
            };
        case 'Cancel-Change':
            return {
                ...state,
                whileUpdating: state.fundName
            };
            case 'Selection-Changed':
                return {
                    ...state,
                    fundName: state.fundsList[action.id].name,
                    index: action.id
                };
        case 'Get-ReportData':
            let getData = localStorage.getItem("DATA");
            let dataList = [];
            if (getData) {
                dataList = JSON.parse(getData);
            }
            return {
                ...state,
                data: [...dataList],
                keyValue: dataList.length
            };
        case 'Delete-ReportData':
            const updateList = [...state.data];
            const newData = updateList.filter(item => item.key !== action.key);
            localStorage.setItem("DATA", JSON.stringify(newData));

            return {
                ...state,
                data: newData
            };
        case 'Update-ReportData':

            const nwData = [...action.newData];
            localStorage.setItem("DATA", JSON.stringify(nwData));

            return {
                ...state,
                data: nwData
            };
        case 'Submit':
            let newList = [];
            let data = state.data;

            if (data.length > 0) {
                newList = data;
            }
            newList.push(action.addData);
            localStorage.setItem("DATA", JSON.stringify(newList));
            return {
                ...state,
                data: newList,
                keyValue: state.keyValue + 1
            };
        default:
            return state;
    }

};

export default reducer;