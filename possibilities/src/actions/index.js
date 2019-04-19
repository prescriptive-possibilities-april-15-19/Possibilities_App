//import server communicator
import axios from 'axios'

//grab the dataset from the server/database
//exports for the data type names
export let PROTEIN_DATA_FETCH = 'PROTEIN_DATA_FETCH'
export let PROTEIN_DATA_SUCCESS = 'PROTEIN_DATA_SUCCESS'
export let PROTEIN_DATA_FAIL = 'PROTEIN_DATA_FAIL'

export const grabProtein = (someQueryString) => dispatch => {
  dispatch({ type: PROTEIN_DATA_FETCH })
 
  axios.get('https://prescriptive-backend.herokuapp.com/sequences', { headers: { 'sequence': someQueryString } })
  .then( res => { console.log(res.data.data)
    dispatch({ type: PROTEIN_DATA_SUCCESS, payload: res.data.data })
  })
  .catch( err => {
    dispatch({ type: PROTEIN_DATA_FAIL, payload: err})
  })  
}

//grab the dataset from the server/database
//exports for the data type names
export let SMILES_DATA_FETCH = 'SMILES_DATA_FETCH'
export let SMILES_DATA_SUCCESS = 'SMILES_DATA_SUCCESS'
export let SMILES_DATA_FAIL = 'SMILES_DATA_FAIL'

export const grabSmiles = (someQueryString) => dispatch => {
  dispatch({ type: SMILES_DATA_FETCH })

  axios.get('https://prescriptive-backend.herokuapp.com/ligands', { headers: { 'smiles': someQueryString } })
  .then( res => {
    dispatch({ type: SMILES_DATA_SUCCESS, payload: res.data.data })
  })
  .catch( err => {
    dispatch({ type: SMILES_DATA_FAIL, payload: err})
  })  
}


//search function to grab protein data for name, image, color, etc
//export protein type names
export let PROTEIN_START = 'PROTEIN_START'
export let PROTEIN_SUCCESS = 'PROTEIN_SUCCESS'
export let PROTEIN_FAIL = 'PROTEIN_FAIL'

// function proteinSearch(q) {
//   var postBody = '<orgPdbQuery><queryType>org.pdb.query.simple.ChainTypeQuery</queryType><containsProtein>Y</containsProtein><containsDna>Y</containsDna><containsRna>N</containsRna><containsHybrid>Y</containsHybrid><queryType>org.pdb.query.simple.AdvancedKeywordQuery</queryType><keywords>'+q+'</keywords></orgPdbQuery>';
//   var xmlText = encodeURIComponent(postBody);
//   fetch("https://www.rcsb.org/pdb/rest/search&sortfield=rank%20Descending", {
//       method: 'POST',
//       body: xmlText,
//       mode: 'no-cors',
//       headers: {
//         "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
//       }
//     })
//     .then(res => res.text())
//     .then(function(response){
//       var promises = [];
//       response.split("\n").forEach(e => { if (e !== "") {
//         promises.push(new Promise((resolve, reject) => {
//           fetch("https://www.rcsb.org/pdb/rest/customReport?pdbids="+e+"&customReportColumns=structureId,structureTitle,expressionHost,source&format=csv")
//             .then(res=>res.text())
//             .then(function(response){
//               var dict = {};
//               var lines = response.split("<br />");
//               var cols = [];
//               for (var i = 0; i < lines.length; i++) {
//                 if (i === 0) {
//                   var values = lines[i].split(",");
//                   for (var j in values) {
//                     cols.push(values[j]);
//                   }
//                 } else if (lines[i] != "") {
//                   var t_dict = {};
//                   var values = lines[i].split(",");
//                   for (var j in values) {
//                     if (values[j].indexOf("\"") !== -1) {
//                       t_dict[cols[j]] = values[j].slice(1, -1);
//                     } else {
//                       t_dict[cols[j]] = values[j];
//                     }
//                   }
//                   if (t_dict.structureId in dict) {
//                     dict[t_dict.structureId].push(t_dict);
//                   } else {
//                     dict[t_dict.structureId] = [t_dict];
//                   }
//                 }
//               }
//               resolve(dict);
//             });
//           }))}});
//         Promise.all(promises).then(values => {
//           var dict = {};
//           values.forEach(function(d) {
//             for (var k in d) {
//               if (k in dict) {
//                 dict[k].push(d[k][0]);
//               } else {
//                 dict[k] = [d[k]];
//               }
//             }
//           });
//           console.log(dict);
//         });
//       });
// }

//search function to grab smiles data for name, image, color, etc
//export smiles type names
export let SMILES_START = 'SMILES_START'
export let SMILES_SUCCESS = 'SMILES_SUCCESS'
export let SMILES_FAIL = 'SMILES_FAIL'

// fetch("https://www.rcsb.org/pdb/rest/customReport?pdbids=1f2r&customReportColumns=structureId,structureTitle,cellularComponent,expressionHost,source&format=csv")
//   .then(res=>res.text())
//   .then(function(response){
//     var lines = response.split("<br />");
//     var cols = [];
//     for (var i = 0; i < lines.length; i++) {
//       if (i === 0) {
//         var values = lines[i].split(",");
//         for (var j in values) {
//           cols.push(values[j]);
//         }
//       } else if (lines[i] != "") {
//         var t_dict = {};
//         var values = lines[i].split(",");
//         for (var j in values) {
//           if (values[j].indexOf("\"")===-1) {
//             t_dict[cols[j]] = values[j].slice(1, -1);
//           } else {
//             t_dict[cols[j]] = values[j];
//           }
//         }
//         if (t_dict.structureId in dict) {
//           dict[t_dict.structureId].push(t_dict);
//         } else {
//           dict[t_dict.structureId] = [t_dict];
//         }
//       }
//     }
//     console.log(dict);
//   });

//store the search information into a new data set that stores previously searched proteins and drugs
//export for the transfer type names
export let TRANSFER_START = 'TRANSFER_START'
export let TRANSFER_SUCCESS = 'TRANSFER_SUCCESS'
export let TRANSFER_FAIL = 'TRANSFER_FAIL'


export const addNewQuery = (newSearch) => dispatch => {
  dispatch({ type: TRANSFER_START })

  axios.post('', newSearch)
  .then( res => {console.log('post', res)
    dispatch({ type: TRANSFER_SUCCESS, payload: res.data })
  })
  .catch( err => {
    dispatch({ type: TRANSFER_FAIL, payload: err})
  })  
}