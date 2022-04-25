//npm install @mui/material @emotion/react @emotion/styled

//npm install mui-datatables
import MUIDataTable from "mui-datatables";
//npm i @mui/styles
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch  } from "react-redux";
import { getArticles,deleteArticle } from "../../features/articleSlice";
import { useEffect } from "react";
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";


const ListArticlesDatatable=()=>{
  const url=process.env.REACT_APP_ADRESSE+"public/";
  const dispatch = useDispatch();
  const {articles,isLoading} = useSelector((state) => state.articles);
   
  
    useEffect(() => {
      dispatch(getArticles());
    }, []);
     
    const delArticle= async (id) =>  { 
      await dispatch(deleteArticle(id)).then(()=>
         toast("Article Supprimé", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          }));
    


        
       }
       
    const columns = [
        {
          label: "Référence",
          name: "reference"
        },
        {
          label: "Désignation",
          name: "designation"
        },
        {
          label: "Prix Achat",
          name: "prixAchat"
        },
        {
          label: "Prix Vente",
          name: "prixVente"
        },
        
        {
          label: "Marque",
          name: "marque"
        },
        {
          label: "Quatité Stock",
          name: "qtestock"
        },
        
        {
            name:"imageartpetitf",
            label: "Image",
            options: {
            customBodyRender : (rowdata) => (
              <img
                style={{ height: 60, borderRadius: '50%' }}
                src= {`${url+rowdata}`}
                
                alt=""
              />
            )
            }
          },
          {
            name:"categorieID",
            label: "Catégorie",
            options: {
            customBodyRender : (categ) => (
            categ? categ.nomcategorie : null
            )
            }
          },
          {
            name:"scategorieID",
            label: "S/Catégorie",
            options: {
            customBodyRender : (scateg) => (
              scateg? scateg.nomscategorie :null
            )
            }
          },
          {
            name: "_id",
            label: "Actions",
            options: {
            customBodyRender: (value) => (
              <div>
                <IconButton  >
              { <Link to={"/art/editArticle/" + value}  >
                <EditIcon   color='secondary' />
            </Link> 
            }
           
            </IconButton> 
            <IconButton onClick={()=>{delArticle(value)}}>
            <DeleteIcon  sx={{ color: pink[500] }} />
              
              </IconButton>
              
            
            
              </div>
              )
            }
        
        },
        ];
  
       

return(
    <div>
      <div style={{padding:5,margin:5}}>
      <Button
        color="success"
       
        startIcon={<AddCircleIcon />}
        variant="contained"     
      >
        { <Link to={"/art/addArticle"}  style={{textDecoration:"none",color:"white"}}>
                Ajouter
            </Link> 
            }
        
      </Button>
      </div>
      {isLoading?(
        "En cours de chargement ..."
      ):(

               <ThemeProvider theme={createTheme()}> 
               <MUIDataTable
                 title="Liste des articles"
                 data={articles}
                 columns={columns}
                   />
               </ThemeProvider> 
      )
        }
         
    </div>
)
}
export default ListArticlesDatatable
