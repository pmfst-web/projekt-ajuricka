import { BOOKS } from '../../data/testpodaci';
import { PROMJENA_FAVORITA } from '../actions/radovi';

const pocetnoStanje = {
  radovi: BOOKS,
  filterRadovi: BOOKS,
  favoritRadovi: [],
};

const radReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_FAVORITA: {
      const odabran = state.favoritRadovi.findIndex(
        (book) => book.id === action.idKnjige
      );
      if (odabran >= 0) {
        const noviFavoriti = [...state.favoritRadovi]
        noviFavoriti.splice(odabran, 1)
        return {...state, favoritRadovi: noviFavoriti}
      } else {
        const book = state.radovi.find(book => book.id === action.idKnjige)
        return {...state, favoritRadovi: state.favoritRadovi.concat(book)}
      } 
    }
    default:
      return state;
  }
};
export default radReducer;