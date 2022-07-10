const getState =({getStore, getActions, setStore})=>{
    return{
        store:{
            username: "",
            password: "",
            error: null,
            isAuth: false,
            currentUser: [],
            profile: null,
            personajes: [],
            planetas:[],
            naves:[],
            favoritosList:[],
            single: [] 
        },

        actions: {
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
            },
            isAuthenticated: () => {
                //console.log("verificanco usuario");
                if (sessionStorage.getItem("isAuth")) {
                  setStore({
                    isAuth: sessionStorage.getItem("isAuth"),
                    currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
                  });
                }
              },
        
              handleChange : e => {
                setStore({
                  [e.target.name]: e.target.value
                })
              },
              handleSubmit: async (e, history) =>{
                e.preventDefault();
                try {
                  const { username, password } = getStore();
                  const data = { username: username, password: password }
                  //console.log(data);
                  const resp = await fetch("http://127.0.0.1:5000/api/login", {
                    method: "POST",
                    body: JSON.stringify(data),
                      headers: {
                          'Content-Type': 'application/json'
                      } 
                  });
                  const infoUser = await resp.json();
                  if (infoUser.msg) {
                    setStore({
                      password: "",
                      error: infoUser.msg,
                    });
                  } else {
                    setStore({
                      username: "",
                      password: "",
                      error: null,
                      currentUser: infoUser,
                      isAuth: true,
                    });
                    sessionStorage.setItem('isAuth', true);
                    sessionStorage.setItem('currentUser', JSON.stringify(infoUser));
                    history.push("/profile");
                  }
                } catch (error) {
                  setStore({
                    error: error.message
                  });
                
                }
        
              },
        
              register: (datos) => { //datos 
                fetch("http://127.0.0.1:5000/api/registro", {
                  method: "POST",
                  headers: { "Content-type" : "application/json"},
                  body: JSON.stringify(datos), //datos
                })
                  .then((resp) => resp.json())
                  .then((response) => console.log(response))
                  .catch((error) => console.error(error));
              },
        
             
              getProfile: () => {
                const { currentUser} = getStore();
                const {access_token}=currentUser;
                //console.log(access_token)
                fetch("http://127.0.0.1:5000/api/profile", {
                  method: 'GET',
                  headers: {
                    'Conten-Type': 'application/json',
                    "Authorization":`Bearer ${currentUser.access_token}`
                    //'Authorization': 'Bearer' + currentUser?.access_token
                  }
                })
                  .then(resp => resp.json())
                  .then(datos =>{
                    console.log(datos) //datos
                    setStore({
                      profile:datos //datos
                    })    
                  })
                  .catch(error => console.log(error));
              },
              logout:(history)=>{
                sessionStorage.clear()
                setStore({isAuth:false, currentUser:[]})
          
                history.push("/")
          
              },
        }

    }
}
export default getState;