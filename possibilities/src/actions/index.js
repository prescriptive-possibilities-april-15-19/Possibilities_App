//import server communicator
import axios from 'axios'

//grab the entire dataset from the server/database to make it easier to query through on the user side
//exports for the data type names
export let DATA_FETCH = 'DATA_FETCH'
export let DATA_SUCCESS = 'DATA_SUCCESS'
export let DATA_FAIL = 'DATA_FAIL'

export const grabData = () => dispatch => {
  dispatch({ type: DATA_FETCH })

  axios.get('')
  .then( res => {
    dispatch({ type: DATA_SUCCESS, payload: res.data })
  })
  .catch( err => {
    dispatch({ type: DATA_FAIL, payload: err})
  })  
}


//search function to grab protein data
//export protein type names
export let PROTEIN_START = 'PROTEIN_START'
export let PROTEIN_SUCCESS = 'PROTEIN_SUCCESS'
export let PROTEIN_FAIL = 'PROTEIN_FAIL'

function proteinSearch(q) {
  var postBody = '<orgPdbQuery><queryType>org.pdb.query.simple.ChainTypeQuery</queryType><containsProtein>Y</containsProtein><containsDna>Y</containsDna><containsRna>N</containsRna><containsHybrid>Y</containsHybrid><queryType>org.pdb.query.simple.AdvancedKeywordQuery</queryType><keywords>'+q+'</keywords></orgPdbQuery>';
  var xmlText = encodeURIComponent(postBody);
  fetch("https://www.rcsb.org/pdb/rest/search&sortfield=rank%20Descending", {
      method: 'POST',
      body: xmlText,
      mode: 'no-cors',
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    .then(res => res.text())
    .then(function(response){
      var promises = [];
      response.split("\n").forEach(e => { if (e !== "") {
        promises.push(new Promise((resolve, reject) => {
          fetch("https://www.rcsb.org/pdb/rest/customReport?pdbids="+e+"&customReportColumns=structureId,structureTitle,expressionHost,source&format=csv")
            .then(res=>res.text())
            .then(function(response){
              var dict = {};
              var lines = response.split("<br />");
              var cols = [];
              for (var i = 0; i < lines.length; i++) {
                if (i === 0) {
                  var values = lines[i].split(",");
                  for (var j in values) {
                    cols.push(values[j]);
                  }
                } else if (lines[i] != "") {
                  var t_dict = {};
                  var values = lines[i].split(",");
                  for (var j in values) {
                    if (values[j].indexOf("\"") !== -1) {
                      t_dict[cols[j]] = values[j].slice(1, -1);
                    } else {
                      t_dict[cols[j]] = values[j];
                    }
                  }
                  if (t_dict.structureId in dict) {
                    dict[t_dict.structureId].push(t_dict);
                  } else {
                    dict[t_dict.structureId] = [t_dict];
                  }
                }
              }
              resolve(dict);
            });
          }))}});
        Promise.all(promises).then(values => {
          var dict = {};
          values.forEach(function(d) {
            for (var k in d) {
              if (k in dict) {
                dict[k].push(d[k][0]);
              } else {
                dict[k] = [d[k]];
              }
            }
          });
          console.log(dict);
        });
      });
}

//search function to grab smiles data
//export smiles type names
export let SMILES_START = 'SMILES_START'
export let SMILES_SUCCESS = 'SMILES_SUCCESS'
export let SMILES_FAIL = 'SMILES_FAIL'

fetch("https://www.rcsb.org/pdb/rest/customReport?pdbids=1f2r&customReportColumns=structureId,structureTitle,cellularComponent,expressionHost,source&format=csv")
  .then(res=>res.text())
  .then(function(response){
    var lines = response.split("<br />");
    var cols = [];
    for (var i = 0; i < lines.length; i++) {
      if (i === 0) {
        var values = lines[i].split(",");
        for (var j in values) {
          cols.push(values[j]);
        }
      } else if (lines[i] != "") {
        var t_dict = {};
        var values = lines[i].split(",");
        for (var j in values) {
          if (values[j].indexOf("\"")===-1) {
            t_dict[cols[j]] = values[j].slice(1, -1);
          } else {
            t_dict[cols[j]] = values[j];
          }
        }
        if (t_dict.structureId in dict) {
          dict[t_dict.structureId].push(t_dict);
        } else {
          dict[t_dict.structureId] = [t_dict];
        }
      }
    }
    console.log(dict);
  });

//send and retrieve information for the looked up chemID
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