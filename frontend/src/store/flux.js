const getState =({getStore, getActions, setStore})=>{
    return{
        store:{
            
            personajes: [],
            planetas:[],
            naves:[],
            favoritosList:[],
            single: [] 
        },

        actions: {
            //"https://www.swapi.tech/api/people/"
            fetchPersonajes: () => {
                fetch("https://swapi.dev/api/people", {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                })
                    .then((resp) => resp.json())
                    .then((response) => setStore({ personajes: response.results }));
            }, 

            fetchPlanetas: () => {
                fetch("https://swapi.dev/api/planets", {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                })
                    .then((resp) => resp.json())
                    .then((response) => setStore({ planetas: response.results }));
            },
            fetchNaves: () => {
                fetch("https://swapi.dev/api/vehicles", {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                })
                    .then((resp) => resp.json())
                    .then((response) => setStore({ naves: response.results }));
            },
            addFavorito: (nombre) =>{
                const store = getStore();  
                //const vari = [...store.favoritosList,nombre];
                setStore({favoritosList:[...store.favoritosList,nombre]})
                console.log(store.favoritosList)
                //setStore({favoritosList: vari});
    
            },
            eliminarFavorito:(i) =>{

                const store = getStore();
    
                const newList = store.favoritosList.filter((index)=>index !==i)
    
                setStore({favoritosList:newList});
                console.log(newList);
            },
            fetchSinglePersonaje:(url) => {
                //console.log(url)
                const actions = getActions()
                fetch(url,{
                    method: "GET",
                    headers:{"Content-type":"application/json"},
                })
                    .then((resp)=>resp.json())
                    .then((response)=>{actions.setterList(response)})
        
                const store = getStore()
                console.log(store.single)
            },

            fetchSinglePlaneta:(url) => {
                //console.log(url)
                const actions = getActions()
                fetch(url,{
                    method: "GET",
                    headers:{"Content-type":"application/json"},
                })
                    .then((resp)=>resp.json())
                    .then((response)=>{actions.setterList(response)})
        
                const store = getStore()
                console.log(store.single)
            },

            fetchSingleNave:(url) => {
                //console.log(url)
                const actions = getActions()
                fetch(url,{
                    method: "GET",
                    headers:{"Content-type":"application/json"},
                })
                    .then((resp)=>resp.json())
                    .then((response)=>{actions.setterList(response)})
        
                const store = getStore()
                console.log(store.single)
            },


            setterList:(response)=>{
                const store = getStore()
                setStore({single:response})
                console.log(store.single)
            }

        }

    }
}
export default getState;