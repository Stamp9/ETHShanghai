const axios = require('axios').default

function getIdFromPermaLink(link) {
  const path = link.split('/')
  console.log(path)
  return path[path.length - 1]
}
export async function GetTokenIdList(account, assetName) {
  console.log(account)

  const requestUrl = 'https://testnets-api.opensea.io/api/v1/assets?owner=' +
    account +
    '&asset_contract_address=0xcce03f6c0aec66ced5bf419a1a1cfe9280d52645&order_direction=desc&offset=0&limit=20&include_orders=false'
  const response = await axios.get(requestUrl)
  const assetList = response.data.assets
  let idList = []
  assetList.map((asset) => {
    console.log(asset)
    if (asset.name === asset) {
      idList.push(getIdFromPermaLink(asset.permalink));
    }
  })
  console.log(idList)
  return idList
}