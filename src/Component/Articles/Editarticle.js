import React, { useState,useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
import {Button} from '@mui/material';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import React FilePond
import { FilePond,registerPlugin } from 'react-filepond'
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { useDispatch  } from "react-redux";
import { findArticleByID,updateArticle  } from "../../features/articleSlice";
import {getCategories} from "../../features/categorieSlice";
import {getSCategorieByCAT} from "../../features/scategorieSlice";
import {useSelector} from "react-redux";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const ModifArticle =()=> {
  const dispatch = useDispatch();
  const{articles}=useSelector((state) => state.articles);
  const{article}=useSelector((state) => state.articles);
  const {categories} = useSelector((state) => state.categories);
  const {scategoriesCat} = useSelector((state) => state.scategories);
    let navigate=useNavigate();

    const {id} = useParams();
    
    const [reference, setReference] = useState("");
    const [designation, setDesignation] = useState("");
    const [categorieID, setcategorieID] = useState("");
    const [scategorieID, setscategorieID] = useState("");
    const [prixAchat, setPrixAchat] = useState("");
    const [prixVente, setPrixVente] = useState("");
    const [prixSolde, setPrixSolde] = useState("");
    const [marque, setMarque] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [caracteristiques, setCaracteristiques] = useState("");
    const [files, setFiles] = useState([])
    const [filesm, setFilesm] = useState([])
    useEffect(() => {
      dispatch(getCategories());
      dispatch(findArticleByID(id));
      
    },[dispatch])

    useEffect(() => {
      getArticleByID();
    
      dispatch(getSCategorieByCAT(article.categorieID)); 
    },[article]);
    
const getArticleByID=()=>{
 
     const art=article;
     console.log(art)
    setReference(art.reference);
    setDesignation(art.designation);
        setscategorieID(art.scategorieID)
        setcategorieID(art.categorieID);
        setPrixAchat(art.prixAchat);
        setPrixVente(art.prixVente);
        setPrixSolde(art.prixSolde);
        setMarque(art.marque);
        setQtestock(art.qtestock);
        setCaracteristiques(art.caracteristiques);
        
        setFiles("/"+ art.imageartpetitf); 
        setFilesm(art.imageartgrandf); 
}
      
      
      
        const GetListSCategories=async(idcat)=>{
          
          dispatch(getSCategorieByCAT(idcat));
           } 
             
         
       const handleSubmit = async (event) => {
        
        event.preventDefault();
        
        var ig=[];

        filesm.forEach(element => { 
         ig.push("/images/"+element.file.name);
        
        });

        const objetarticle  = {
          _id : id,
            reference: reference,
            designation :designation,
            prixAchat :prixAchat,
            prixVente :prixVente,
            prixSolde :prixSolde,
            marque :marque,
            qtestock :qtestock,
            caracteristiques:caracteristiques,
            categorieID:categorieID,
            imageartpetitf :  files?"images/"+files[0].file.name:null,
            imageartgrandf:ig,
            scategorieID :scategorieID
                         }; 

        
    
              await dispatch(updateArticle(objetarticle)).then((res)=>{   
        
               toast("Article modifié", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
               
                navigate("/art/listarticlesTable") 
          }).catch(error => {  
              toast("Erreur Article non modifié", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          });  
      }
    
     return (
      <>
     

         <form onSubmit={handleSubmit}  >
             <h2>Edit Article  </h2>
               <div>
        
        <Button style={{padding:15,margin:20,width:150}}
        color="secondary"
        startIcon={<SaveIcon  />}
        variant="contained"
        onClick={(event)=>handleSubmit(event)}
   
      
      >
        
        Update
      </Button>
      
      <Button style={{padding:15,margin:2,width:150}}
        color="primary"
        
        
        startIcon={<CancelIcon />}
        variant="contained"
        

      
      >
        { <Link to={"/art/listarticlesTable"}  style={{textDecoration: "none",color:"white"}}>
                Annuler
            </Link> 
            }
        
      </Button>
        </div>
           <FormControl > 
            <TextField 
                 variant="outlined"
                 label="Désignation"
                 style={{ marginLeft: 8,marginTop:20,width:400}}
                 value={designation}
                 onChange={e => setDesignation(e.target.value)}
                 required />
             </FormControl>            
             <FormControl > 
              <TextField 
              variant="outlined"
               label="Référence"
               value={reference}
               style={{ marginLeft: 8,marginTop:20,width:400}}
               onChange={e => setReference(e.target.value)}
               required />
             </FormControl> <br/>
   
               <FormControl >  
             <TextField 
              variant="outlined"
                 label="Prix Achat"
                 type="number"
                 style={{ marginLeft: 8,marginTop:20,width:400}}
                  value={prixAchat}
                 onChange={e => setPrixAchat(e.target.value)}
                  /> 
             </FormControl>  
           
             <FormControl >  
             <TextField 
              variant="outlined"
                 label="Prix Vente"
                 type="number"
                 style={{ marginLeft: 8,marginTop:20,width:400}}
                 value={prixVente}
                 onChange={e => setPrixVente(e.target.value)}
                  /> 
             </FormControl> <br/>
   
              <FormControl >  
             <TextField 
              variant="outlined"
                 label="Prix Solde"
                 type="number"
                 style={{ marginLeft: 8,marginTop:20,width:400}}
                 value={prixSolde}
                 onChange={e => setPrixSolde(e.target.value)}
                  /> 
             </FormControl>   
           
           <FormControl >  
                      
           <TextField 
            variant="outlined"
                 label="Quantité Stock"
                 type="number"
                 style={{ marginLeft: 8,marginTop:20,width:400}}
                 value={qtestock}
                 onChange={e => setQtestock(e.target.value)}
                  /> 
           </FormControl><br/>
           <FormControl>  
           
           <TextField 
            style={{ marginLeft: 8,marginTop:20,width:400}}
            variant="outlined"
            label="Marque"
            value={marque}
            onChange={e => setMarque(e.target.value)}
                  /> 
         </FormControl>
           <FormControl >  
           <TextField 
           style={{ marginLeft: 8,marginTop:20,width:400}}
           margin="normal"
            variant="outlined"
            multiline
            rows={2}
           label="Caractéristiques"
            type="textarea"
            value={caracteristiques}
            onChange={e => setCaracteristiques(e.target.value)}
                  /> 
           </FormControl> <br/>
            <FormControl >
             <TextField 
                   select
                   label="Categories"
                   variant="outlined"
                   value={categorieID}
                   style={{ marginLeft: 8,marginTop:20,width:800}}
                   onChange={e=>{setcategorieID(e.target.value); GetListSCategories(e.target.value)}  }
                 >
               {
               categories ?    
               categories.map(f=>
                    <MenuItem value={f._id}>{f.nomcategorie}
                    
                    </MenuItem>
                    
               )
               :null
               }
             </TextField>
             </FormControl><br/>
             <FormControl >
             <TextField 
                   select
                   label="Sous Catégorie"
                   variant="outlined"
                   value={scategorieID}
                   style={{ marginLeft: 8,marginTop:20,width:800}}
                   onChange={e => setscategorieID(e.target.value)}
                >
               {
               scategoriesCat ?    
               scategoriesCat.map(f=>
                    <MenuItem value={f._id}>{f.nomscategorie}
                    
                    </MenuItem>
                    
               )
               :<MenuItem value={scategorieID._id}>{scategorieID.nomscategorie} </MenuItem>
               }
             </TextField>
            
             </FormControl>
          </form>
             <br/>
             <h4>Upload Images</h4>
             <FormControl >   
             <div style={{width:400, height:50}}>
           <FilePond
           files={files}
           allowMultiple={false}
           onupdatefiles={setFiles}
           labelIdle='<span class="filepond--label-action">Browse One</span>'
           
         />
           </div>
          </FormControl>
          <FormControl> 
           <div style={{width:400, height:40}}>
          <FilePond
           files={filesm}
           
           allowMultiple={true}
           onupdatefiles={setFilesm}
           labelIdle='<span class="filepond--label-action">Browse Many</span>'
         />
            </div>
           </FormControl>
           
   
           
         </> 
     
    );
 
}

export default ModifArticle;