import Api from "../Axios/Api";
const ARTICLE_API="/articles"
const token=JSON.parse(localStorage.getItem('CC_Token'));

    const fetchArticles=async()=> {
        console.log(token)
        return await Api.get(ARTICLE_API,
            
            { headers: {"Authorization" : `Bearer ${token}`} });

        }
     const fetchArticleById=async(articleId)=> {
        return await Api.get(ARTICLE_API + '/' + articleId);
        }
    const deleteArticle=async(articleId) =>{
        
        return await Api.delete(ARTICLE_API + '/' + articleId);
        }
     const addArticle=async(article)=> { 
       
        return await Api.post(ARTICLE_API,article);
    
        }    
     const editArticle=(article) =>{ 
       
        return Api.put(ARTICLE_API + '/' + article._id, article);
    
        }
        const fetchArticleByCat=async(catId)=> {
            return await Api.get(ARTICLE_API + '/affparcat/' + catId);
        
            }   
    export const ArticleService = {
        fetchArticles,
        fetchArticleById,
        deleteArticle,
        addArticle,
        editArticle,
        fetchArticleByCat
    }

