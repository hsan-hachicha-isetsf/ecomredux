import Api from "../Axios/Api";
const SCATEGORIE_API="/scategories"

    const fetchSCategories=async()=> {
        return await Api.get(SCATEGORIE_API);
        }
     const fetchSCategorieById=async(scategorieId)=> {
        return await Api.get(SCATEGORIE_API + '/' + scategorieId);
        }

        const fetchSCategorieByCat=(idcat) =>{ 
       
            return Api.get(SCATEGORIE_API + '/cat/' + idcat);
        
            }

    const deleteSCategorie=async(scategorieId) =>{
        
        return await Api.delete(SCATEGORIE_API + '/' + scategorieId);
        }
     const addSCategorie=async(scategorie)=> { 
       
        return await Api.post(SCATEGORIE_API,scategorie);
    
        }    
     const editSCategorie=(scategorie) =>{ 
       
        return Api.put(SCATEGORIE_API + '/' + scategorie._id, scategorie);
    
        }
        
    export const SCategorieService = {
        fetchSCategories,
        fetchSCategorieById,
        deleteSCategorie,
        addSCategorie,
        editSCategorie,
        fetchSCategorieByCat
        
    }

