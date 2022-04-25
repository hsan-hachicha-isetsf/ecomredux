import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {CategorieService} from "../Services/Categorie-Service"

export const createCategorie = createAsyncThunk(
  "categorie/createCategorie",
  async (categorie) => {
    const res= await CategorieService.addCategorie(categorie);
    return res.data
    
  }
);
export const getCategories = createAsyncThunk(
    "categorie/getCategories",
    async () => {
      const res = await CategorieService.fetchCategories();
      return res.data;
    }
  );

  export const updateCategorie = createAsyncThunk(
    "categorie/updateCategorie",
    async (cat) => {
      const res = await CategorieService.editCategorie(cat);
      return res.data;
    }
  );
  
  export const deleteCategorie = createAsyncThunk(
    "categorie/deleteCategorie",
    async (id) => {
      await CategorieService.deleteCategorie(id);
      return  id ;
    }
  );
  export const findCategorieByID = createAsyncThunk(
    "categorie/findCategorieByID",
    async (id) => {
      const res = await CategorieService.fetchCategorieById(id);
      return res.data;
    }
  );
export const categorieSlice = createSlice({
  name: 'categorie',
  initialState:{
    categories:[],
    categorie:{},
    status:null,
  },
  reducers: {},
  
  extraReducers: (builder)=>{
    builder
    .addCase(getCategories.fulfilled, (state, action) => {
      state.status = "success";
        state.categories=action.payload;
    })
    .addCase(createCategorie.fulfilled, (state, action) => {
      state.status = "success";
      state.categories.push(action.payload);
    })
    .addCase(updateCategorie.fulfilled, (state, action) => {
      const index = state.categories.findIndex(article => article._id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    })
    .addCase(deleteCategorie.fulfilled, (state, action) => {
      
      state.categories=state.categories.filter((item)=> item._id!==action.payload)
    
    })
    .addCase(findCategorieByID.fulfilled, (state, action) => {
      return [...action.payload];
   })

  }
  
})


export default categorieSlice.reducer;
