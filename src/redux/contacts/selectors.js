// import {createSelector} from '@reduxjs/toolkit'
// import {selectValueFilters} from '../filters/slice'

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

// export const selectFilteredContacts  = createSelector(
//     [selectContacts, selectValueFilters],
//     (contacts, valueFilter) => {
//       return contacts.filter((contact) =>
//         contact.name.toLowerCase().includes(valueFilter.toLowerCase())
//       );
//     }
//   );