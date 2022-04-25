import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {SCategorieService} from "../Services/Scategorie-Service"

export const createSCategorie = createAsyncThunk(
  "scategorie/createSCategorie",
  async (scategorie) => {
    const res= await SCategorieService.addSCategorie(scategorie);
    return res.data
    
  }
);
export const getSCategories = createAsyncThunk(
    "scategorie/getSCategories",
    async () => {
      const res = await SCategorieService.fetchSCategories();
      return res.data;
    }
  );
  export const getSCategorieByCAT = createAsyncThunk(
    "scategorie/getSCategoriesBCAT",
    async (idcat) => {
      const res = await SCategorieService.fetchSCategorieByCat(idcat);
      return res.data;
    }
  );

  


  export const updateSCategorie = createAsyncThunk(
    "scategorie/updateSCategorie",
    async (cat) => {
      const res = await SCategorieService.editSCategorie(cat);
      return res.data;
    }
  );
  
  export const deleteSCategorie = createAsyncThunk(
    "scategorie/deleteSCategorie",
    async (id) => {
      await SCategorieService.deleteSCategorie(id);
      return  id ;
    }
  );
  export const findSCategorieByID = createAsyncThunk(
    "scategorie/findSCategorieByID",
    async (id) => {
      const res = await SCategorieService.fetchSCategorieById(id);
      return res.data;
    }
  );
export const scategorieSlice = createSlice({
  name: 'scategorie',
  initialState:{
    scategories:[],
    scategoriesCat:[],
    scategorie:{},
    status:null,
  },
  reducers: {},
  
  extraReducers: (builder)=>{
    builder
    .addCase(getSCategories.fulfilled, (state, action) => {
      state.status = "success";
        state.scategories=action.payload;
    })
    .addCase(createSCategorie.fulfilled, (state, action) => {
      state.status = "success";
      state.scategories.push(action.payload);
    })
    .addCase(updateSCategorie.fulfilled, (state, action) => {
      const index = state.scategories.findIndex(article => article._id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    })

    .addCase(getSCategorieByCAT.fulfilled, (state, action) => {
        state.status = "success";
        state.scategoriesCat=action.payload;
        
      })
    .addCase(deleteSCategorie.fulfilled, (state, action) => {
      
      state.scategories=state.scategories.filter((item)=> item._id!==action.payload)
    
    })
    .addCase(findSCategorieByID.fulfilled, (state, action) => {
      return [...action.payload];
   })

  }
  
})


export default scategorieSlice.reducer;
