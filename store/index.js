
export const state = () => ({
  dark: true,
  token: '',
  snackbar: null,
  selectedCountry: null,
  accounts: [
    {
      'id': 'NTEzOTA',
      'currency': 'EUR',
      'tag': 'Account EUR',
      'accountNumber': 'BE89679210227285',
      'correspondentBank': null,
      'amount': '18346.15',
      'holderBank': {
        'bic': 'PCHQBEBBXXX',
        'clearingCodeType': '',
        'clearingCode': '981',
        'name': 'BPOST',
        'address': {
          'street': 'CENTRE MONNAIE  ',
          'postCode': '1000',
          'city': 'BRUSSELS',
          'state': null,
          'country': 'BE'
        }
      },
      'holder': {
        'name': '314b065159e8e9c',
        'type': 'corporate',
        'address': {
          'street': '89034222e8b89fe',
          'postCode': 'a5f01cb68190f3c',
          'city': 'b79b093f60e3a21',
          'state': null,
          'country': 'BE'
        }
      }
    },
    {
      'id': 'NTI3Njg',
      'currency': 'EUR',
      'tag': 'My partner EUR',
      'accountNumber': 'FR7613259029341114520020033',
      'correspondentBank': null,
      'amount': '3843584.02',
      'holderBank': {
        'bic': 'KOLBFR21XXX',
        'clearingCodeType': '',
        'clearingCode': '1325904669',
        'name': 'BANQUE KOLB SA',
        'address': {
          'street': '1-3 PLACE DU GENERAL-DE-GAULLE  ',
          'postCode': '88501',
          'city': 'MIRECOURT',
          'state': null,
          'country': 'FR'
        }
      },
      'holder': {
        'name': '314b065159e8e9c',
        'type': 'corporate',
        'address': {
          'street': 'd78c7d725b272c9',
          'postCode': '9ba3c7c9bfb8894',
          'city': '6f86d61bf67da0f',
          'state': null,
          'country': 'FR'
        }
      }
    },
    {
      'id': 'NTg2NzY',
      'currency': 'USD',
      'tag': 'My partner USD',
      'accountNumber': '802904391',
      'correspondentBank': null,
      'amount': '-7753.00',
      'holderBank': {
        'bic': 'CHASUS33XXX',
        'clearingCodeType': 'FW',
        'clearingCode': '021000021',
        'name': 'JPMORGAN CHASE BANK, N.A.',
        'address': {
          'street': '4 NEW YORK PLAZA FLOOR 15  ',
          'postCode': '10004',
          'city': 'NEW YORK,NY',
          'state': null,
          'country': 'US'
        }
      },
      'holder': {
        'name': '314b065159e8e9c',
        'type': 'corporate',
        'address': {
          'street': null,
          'postCode': null,
          'city': null,
          'state': null,
          'country': 'US'
        }
      }
    },
    {
      'id': 'NjEwMzE',
      'currency': 'GBP',
      'tag': 'Account GBP',
      'accountNumber': 'GB77BARCN03229311065838',
      'correspondentBank': null,
      'amount': '474513.50',
      'holderBank': {
        'bic': 'BARCGB22XXX',
        'clearingCodeType': 'SC',
        'clearingCode': '203253',
        'name': 'BARCLAYS BANK PLC',
        'address': {
          'street': '1 CHURCHILL PLACE  ',
          'postCode': 'EC14 5HP',
          'city': 'LONDON',
          'state': null,
          'country': 'GB'
        }
      },
      'holder': {
        'name': '314b065159e8e9c',
        'type': 'corporate',
        'address': {
          'street': 'a6c634617cc1b26',
          'postCode': 'd994e112ee687c5',
          'city': '4f8cafc6ca3a087',
          'state': null,
          'country': 'GB'
        }
      }
    },
    {
      'id': 'NjIyMzA',
      'currency': 'CHF',
      'tag': 'My provider CHF',
      'accountNumber': 'FR7630006000012110842000059',
      'correspondentBank': null,
      'amount': '100.00',
      'holderBank': {
        'bic': 'AGRIFRPPXXX',
        'clearingCodeType': '',
        'clearingCode': '3000600001',
        'name': 'CREDIT AGRICOLE SA',
        'address': {
          'street': '12 PLACE DES ETATS UNIS  ',
          'postCode': '92127',
          'city': 'MONTROUGE ',
          'state': null,
          'country': 'FR'
        }
      },
      'holder': {
        'name': '314b065159e8e9c',
        'type': 'corporate',
        'address': {
          'street': null,
          'postCode': null,
          'city': null,
          'state': null,
          'country': 'BE'
        }
      }
    }
  ],
  instruments: [{ 'instrument': 'EURCHF', 'type': 'Major' }, { 'instrument': 'EURGBP', 'type': 'Major' }, { 'instrument': 'EURUSD', 'type': 'Major' }, { 'instrument': 'USDCHF', 'type': 'Major' }, { 'instrument': 'USDEUR', 'type': 'Major' }, { 'instrument': 'USDGBP', 'type': 'Major' }]
})

export const getters = {
  getPosts: state => (id) => {
    return state.listePost.find(post => post._id === id)
  }
}

export const mutations = {
  INVERT_THEMES (state) {
    state.dark = !state.dark
  },
  SET_SNACKBAR (state, data) {
    state.snackbar = data
  },
  SET_COUNTRY (state, data) {
    if (state.selectedCountry === data) { state.selectedCountry = null } else { state.selectedCountry = data }
  }
}

export const actions = {
  switchMode (context) {
    context.commit('INVERT_THEMES')
  },
  setCountrySelected (context, data) {
    context.commit('SET_COUNTRY', data.country)
  },
  pushNotif (context, snackbar) {
    context.commit('SET_SNACKBAR', snackbar)
    /* dispatch your snackbar with this params
        message: String
        type: is-primary, is-info, is-success, is-warning, is-danger
    */
  }
}
